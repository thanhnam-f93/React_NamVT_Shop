import React, {
  ChangeEvent,
  useEffect,
  useState,
  useReducer,
  useRef,
} from "react";
import { CONSTANTS } from "../../utils/constant";
import ListBoxCountry from "../country/ListBoxCountry";
import { callAPICountry } from "../../service/dataCountry";
import CountryItem from "../../components/country/CountryItem";
import { AxiosError, AxiosResponse } from "axios";
import { Country } from "../../model/Country";
import Swal from "sweetalert2";
import { callAPIMovie } from "../../service/dataMovie";
import MovieItem from "./MovieItem";
import SortComponent from "./component/SortComponent";
import "./../../scss/_sort.scss";
import SearchBar from "../../pages/todo/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { loadData, loadDataBy } from "../../redux/actions/movie";
const MovieManagement = () => {
  // const [sortByYear, setSortByYear] = useState("");
  // const [sortByIDMB, setSortByIDMB] = useState("");
  // const [sortByTime, setSortByTime] = useState("");
  const [dataSearch, setDataSearch] = useState({ gotoPage: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDataBy(dataSearch));
  }, []);

  const allMovie = useSelector((state: any) => state.movie.listMovie);
  const totalPage = useSelector((state: any) => state.movie.totalPage);
  const error = useSelector((state: any) => state.movie.error);
  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Have not data..${error}`,
      });
    }
    // return () => {
    //   second;
    // };
  }, [error]);

  // console.log("allMovie: ", allMovie);
  // List country on page - default 10 record:
  const renderCountry = allMovie?.map((movie: any, index: any) => {
    return <MovieItem key={index} movie={movie} index={index} />;
  });
  const renderMovieField = (
    <tr className="text-green-600 font-bold">
      <td>Loading ...</td>
    </tr>
  );
  const [sortByName, setSortByName] = useState();

  const inputRef: any = useRef(null);

  async function next() {
    setCurrentPage(currentPage + 1);
    setDataSearch({
      ...dataSearch,
      gotoPage: currentPage,
    });
    console.log("Get current", currentPage);

    dispatch(loadDataBy(dataSearch));
  }

  // Render GUI:
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <SearchBar dataSearch={dataSearch} setDataSearch={setDataSearch} />
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-4 pe-0">
                      <div className="flex items-center h-5">
                        <p>#</p>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      <div className="inline-flex">
                        <p className="header-sort">Name</p>
                        <SortComponent
                          sortOrder={sortByName}
                          setSortOder={setSortByName}
                        />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      <p className="header-sort">Country</p>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      <div className="inline-flex">
                        <p className="header-sort">Year</p>
                        {/* <SortComponent
                          sortOrder={sortByYear}
                          setSortOder={setSortByYear}
                        /> */}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      <p className="header-sort">Rated</p>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      <div className="inline-flex">
                        <p className="header-sort">IDMB</p>
                        {/* <SortComponent
                          sortOrder={sortByIDMB}
                          setSortOder={setSortByIDMB}
                        /> */}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      <div className="inline-flex">
                        <p className="header-sort">Time</p>
                        {/* <SortComponent
                          sortOrder={sortByTime}
                          setSortOder={setSortByTime}
                        /> */}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      <p className="header-sort">Action </p>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {allMovie?.length ? renderCountry : renderMovieField}
                </tbody>
              </table>
            </div>
            <div className="py-1 px-4">
              <nav className="flex items-center space-x-2">
                <button
                  disabled={currentPage == 1}
                  type="button"
                  className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <span
                    aria-hidden="true"
                    onClick={async () => {
                      setCurrentPage(currentPage - 1);
                      setDataSearch({
                        ...dataSearch,
                        gotoPage: currentPage,
                      });
                      dispatch(loadDataBy(dataSearch));
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">Previous</span>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  value={currentPage}
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="relative flex items-center max-w-[3rem] bg-gray-50 border-0 h-11 text-center rounded-full"
                  placeholder="Input page"
                  onChange={async (e) => {
                    e.preventDefault();
                    if (
                      Number(e.target.value) > Number(totalPage) ||
                      Number(e.target.value) < 1 ||
                      isNaN(Number(e.target.value))
                    ) {
                      Swal.fire({
                        title: "input Illegal!",
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `,
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `,
                        },
                      });
                      return;
                    }
                    setCurrentPage(Number(e.target.value));
                    setDataSearch({
                      ...dataSearch,
                      gotoPage: currentPage,
                    });
                    dispatch(loadDataBy(dataSearch));
                  }}
                />
                <button
                  onClick={next}
                  disabled={currentPage == totalPage}
                  type="button"
                  className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Next</span>
                  <span aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                      />
                    </svg>
                  </span>
                </button>
                <div className="flex-row font-extrabold pl-12 text-orange-500">
                  <p>{`Record: ${(currentPage - 1) * 10 + 1} to ${
                    currentPage * 10
                  } off ${totalPage} Page `}</p>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieManagement;

// const reducer = (
//   state: { currentPage: number },
//   action: { type: string }
// ) => {
//   switch (action.type) {
//     case "next":
//       return { currentPage: state.currentPage + 1 };
//     case "prev":
//       return { currentPage: state.currentPage - 1 };
//     case "goto":
//       return { currentPage: state.currentPage };
//     default:
//       return initialState;
//   }
// };
// const [state, dispatch] = useReducer(reducer, initialState);
// function handleChange(event: ChangeEvent<HTMLInputElement>): void {
//   // event.preventDefault();
//   let input = event.target.value;
//   setSearchInput(input);
// }
// get all data when start page - No search, default page = 1
// useEffect(() => {
//   callAPI(CONSTANTS.EMPTY, CONSTANTS.ALL);
// }, []);
// upate data when input data search or next page
// useEffect(() => {
//   callAPI(searchBy, searchInput);
// }, [state.currentPage]);
// Action call API flow condition setting on form search
// const getDataConutryOptional = (
//   searchBy: string = CONSTANTS.EMPTY,
//   searchInput: string = CONSTANTS.EMPTY
// ) => {
//   switch (searchBy) {
//     case CONSTANTS.NAME:
//       return callAPICountry.getByName(searchInput);
//     case CONSTANTS.CODE:
//       return callAPICountry.getByCode(searchInput);
//     case CONSTANTS.FULL_NAME:
//       return callAPICountry.getByFullname(searchInput);
//     case CONSTANTS.REGION:
//       return callAPICountry.getByRegion(searchInput);
//     case CONSTANTS.SUBREGION:
//       return callAPICountry.getBySubregion(searchInput);
//     case CONSTANTS.LANGUAGE:
//       return callAPICountry.getByLanguage(searchInput);
//     default:
//       return callAPIMovie.get_all();
//   }
// };
// call API throught axios
// const callAPI = (searchBy: string, searchInput: string) => {
//   if (searchBy != CONSTANTS.ALL && searchInput == CONSTANTS.EMPTY) {
//     Swal.fire({
//       title: "Mission?",
//       text: `You choossed category \n
//        Please Input data or Search All`,
//       icon: "question",
//     });

//     inputRef.current?.focus();
//     inputRef.current.style.backgroundColor = "pink";
//     return;
//   }

// getDataConutryOptional(searchBy, searchInput)
//   .then((response) => {
//     if (
//       [CONSTANTS.STATUS.CREATE, CONSTANTS.STATUS.OK].includes(
//         response.status
//       )
//     ) {
//       let allDataCountry = response.data.map((object: any) => {
//         return {
//           poster: object.poster,
//           title: object.title,
//           country: object.country,
//           year: object.year,
//           rated: object.rated,
//           imdbRating: object.imdbRating,
//           runtime: object.runtime,
//         };
//       });
//       console.log(allDataCountry);

//       let oldOffset =
//         (Number(state.currentPage) - 1) * CONSTANTS.RECORD_ON_PAGE;
//       let newOffset = state.currentPage * CONSTANTS.RECORD_ON_PAGE;

//       let dataDisplay = allDataCountry.slice(oldOffset, newOffset);
//       let totalRecord = response.headers["x-total-count"];
//       setTotalPage(Math.ceil(totalRecord / 10));
//       setDataCountry(dataDisplay);
//     } else if (CONSTANTS.STATUS.NOT_FOUND == response.status) {
//       throw new Error("Have not data..");
//     }
//   })
//   .catch((err) => {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: `Have not data..${err}`,
//     });
//   });
// };
//Action Search

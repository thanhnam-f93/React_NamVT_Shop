import React, { ChangeEvent, useEffect, useState, useReducer } from "react";
import { CONSTANTS } from "../../utils/constant";
import ListBoxCountry from "./ListBoxCountry";
import { callAPICountry } from "../../service/dataCountry";
import CountryItem from "../../components/country/CountryItem";
import { AxiosError, AxiosResponse } from "axios";
import { Country } from "../../model/Country";
import Swal from "sweetalert2";

const ListCountry = () => {
  const [searchBy, setSearchBy] = useState(CONSTANTS.ALL);
  const [searchInput, setSearchInput] = useState("");
  const [dataCountry, setDataCountry] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const initialState = { currentPage: 1 };
  const reducer = (state: { currentPage: number }, action: { type: any }) => {
    switch (action.type) {
      case "next":
        return { currentPage: state.currentPage + 1 };
      case "prev":
        return { currentPage: state.currentPage - 1 };
      case "goto":
        return { currentPage: state.currentPage };
      default:
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    // event.preventDefault();
    let input = event.target.value;
    setSearchInput(input);
  }
  // get all data when start page - No search, default page = 1
  useEffect(() => {
    callAPI(CONSTANTS.EMPTY, CONSTANTS.ALL);
  }, []);
  // upate data when input data search or next page
  useEffect(() => {
    callAPI(searchBy, searchInput);
  }, [state.currentPage]);
  // Action call API flow condition setting on form search
  const getDataConutryOptional = (
    searchBy: string = CONSTANTS.EMPTY,
    searchInput: string = CONSTANTS.EMPTY
  ) => {
    switch (searchBy) {
      case CONSTANTS.NAME:
        return callAPICountry.getByName(searchInput);
      case CONSTANTS.CODE:
        return callAPICountry.getByCode(searchInput);
      case CONSTANTS.FULL_NAME:
        return callAPICountry.getByFullname(searchInput);
      case CONSTANTS.REGION:
        return callAPICountry.getByRegion(searchInput);
      case CONSTANTS.SUBREGION:
        return callAPICountry.getBySubregion(searchInput);
      case CONSTANTS.LANGUAGE:
        return callAPICountry.getByLanguage(searchInput);
      default:
        return callAPICountry.get_all();
    }
  };
  // call API throught axios
  const callAPI = (searchBy: string, searchInput: string) => {
    if (searchBy != CONSTANTS.ALL && searchInput == CONSTANTS.EMPTY) {
      Swal.fire({
        title: "Mission?",
        text: `You choossed category \n
         Please Input data or Search All`,
        icon: "question",
      });
      return;
    }
    getDataConutryOptional(searchBy, searchInput)
      .then((response) => {
        if (
          [CONSTANTS.STATUS.CREATE, CONSTANTS.STATUS.OK].includes(
            response.status
          )
        ) {
          let allDataCountry = response.data.map((object: any) => {
            return {
              flags: object.flags.png,
              name: object.name.official,
              code: object.cca2,
              region: object.region,
              subregion: object.subregion,
              languages: object.languages,
              population: object.population,
            };
          });
          let oldOffset =
            (Number(state.currentPage) - 1) * CONSTANTS.RECORD_ON_PAGE;
          let newOffset = state.currentPage * CONSTANTS.RECORD_ON_PAGE;

          let dataDisplay = allDataCountry
            .slice(oldOffset, newOffset)
            .map((item: any) => {
              return { ...item, languages: Object.values(item.languages)[0] };
            });
          setTotalPage(Math.ceil(allDataCountry.length / 10));
          setDataCountry(dataDisplay);
        } else if (CONSTANTS.STATUS.NOT_FOUND == response.status) {
          throw new Error("Have not data..");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Have not data..`,
        });
      });
  };
  //Action Search
  const searchCountry = () => {
    state.currentPage = 1;
    callAPI(searchBy, searchInput);
  };
  // List country on page - default 10 record:
  const renderCountry = dataCountry.map((item: Country, index: number) => {
    return (
      <CountryItem
        key={index}
        index={index}
        flags={item.flags}
        name={item.name}
        code={item.code}
        region={item.region}
        subregion={item.subregion}
        languages={item.languages}
        population={item.population}
      />
    );
  });
  // Render GUI:
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <div className="py-3 px-4 inline-flex">
              <div className="relative max-w-xs ">
                <label className="sr-only">Search</label>
                <input
                  type="text"
                  name="hs-table-with-pagination-search"
                  id="hs-table-with-pagination-search"
                  className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Search items"
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
              <div className="pl-2">
                <ListBoxCountry setSearchBy={setSearchBy} />
              </div>
              <div className="pl-2">
                <button
                  onClick={searchCountry}
                  type="button"
                  className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-4 pe-0">
                      <div className="flex items-center h-5">
                        {/* <input
                          id="hs-table-pagination-checkbox-all"
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                        <label
                          htmlFor="hs-table-pagination-checkbox-all"
                          className="sr-only"
                        ></label> */}
                        <p>#</p>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Flag
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Region
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Subregion
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Language
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Pupulation
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {dataCountry.length ? (
                    renderCountry
                  ) : (
                    <tr className="text-center">
                      <td>No Country</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="py-1 px-4">
              <nav className="flex items-center space-x-1">
                <button
                  disabled={state.currentPage == 1}
                  type="button"
                  className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <span
                    aria-hidden="true"
                    onClick={() => {
                      dispatch({ type: "prev" });
                    }}
                  >
                    « Previous
                  </span>
                  <span className="sr-only">Previous</span>
                </button>
                {/* <button
                  type="button"
                  className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                  aria-current="page">
                  Example
                </button>*/}
                <input
                  type="text"
                  id="quantity-input"
                  value={state.currentPage}
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="relative flex items-center max-w-[3rem] bg-gray-50 border-0 h-11 text-center"
                  placeholder="Input page"
                  onChange={(e) => {
                    e.preventDefault();
                    if (
                      Number(e.target.value) > Number(totalPage) ||
                      isNaN(Number(e.target.value))
                    ) {
                      Swal.fire({
                        title: "input over total page or illegal!",
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
                    state.currentPage = Number(e.target.value);
                    dispatch({ type: "goto" });
                  }}
                />
                <button
                  disabled={state.currentPage == totalPage}
                  type="button"
                  className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Next</span>
                  <span
                    onClick={() => {
                      dispatch({ type: "next" });
                    }}
                    aria-hidden="true"
                  >
                    Next »
                  </span>
                </button>
                <div className="py-1 px-4 text-red-600 end-0 font-semibold">
                  <span>&nbsp; Record: &nbsp;</span>&nbsp;
                  {(state.currentPage - 1) * 10 + 1} &nbsp;<span>to </span>
                  &nbsp; {state.currentPage * 10}
                  &nbsp;
                  <span>&nbsp;off</span> {totalPage} Page
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCountry;

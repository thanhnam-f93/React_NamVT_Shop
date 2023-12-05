// import React from "react";

// const Pagination = () => {
//   return (
//     <>
//       <div className="py-1 px-4">
//         <nav className="flex items-center space-x-1">
//           <button
//             disabled={state.currentPage == 1}
//             type="button"
//             className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//           >
//             <span
//               aria-hidden="true"
//               onClick={() => {
//                 dispatch({ type: "prev" });
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
//                 />
//               </svg>
//             </span>
//             <span className="sr-only">Previous</span>
//           </button>
//           {/* <button
//                   type="button"
//                   className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
//                   aria-current="page">
//                   Example
//                 </button>*/}
//           <input
//             type="text"
//             id="quantity-input"
//             value={state.currentPage}
//             data-input-counter
//             aria-describedby="helper-text-explanation"
//             className="relative flex items-center max-w-[3rem] bg-gray-50 border-0 h-11 text-center rounded-full"
//             placeholder="Input page"
//             onChange={(e) => {
//               e.preventDefault();
//               if (
//                 Number(e.target.value) > Number(totalPage) ||
//                 isNaN(Number(e.target.value))
//               ) {
//                 Swal.fire({
//                   title: "input over total page or illegal!",
//                   showClass: {
//                     popup: `
//                             animate__animated
//                             animate__fadeInUp
//                             animate__faster
//                           `,
//                   },
//                   hideClass: {
//                     popup: `
//                             animate__animated
//                             animate__fadeOutDown
//                             animate__faster
//                           `,
//                   },
//                 });
//                 return;
//               }
//               state.currentPage = Number(e.target.value);
//               dispatch({ type: "goto" });
//             }}
//           />
//           <button
//             disabled={state.currentPage == totalPage}
//             type="button"
//             className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//           >
//             <span className="sr-only">Next</span>
//             <span
//               onClick={() => {
//                 dispatch({ type: "next" });
//               }}
//               aria-hidden="true"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
//                 />
//               </svg>
//             </span>
//           </button>
//           <div className="py-1 px-4 text-red-600 end-0 font-semibold ">
//             <span>&nbsp; Record: &nbsp;</span>&nbsp;
//             {(state.currentPage - 1) * 10 + 1} &nbsp;<span>to </span>
//             &nbsp; {state.currentPage * 10}
//             &nbsp;
//             <span>&nbsp;off</span> {totalPage} Page
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Pagination;

"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchComponent = () => {
  const [userInput, setUserInput] = useState("");
  const router = useRouter();

  const searchBook = (e) => {
    e.preventDefault();
    router.push(`bookCategories?search=${decodeURIComponent(userInput)}`);
  };
  return (
    <div className="w-full max-w-3xl mx-auto mb-6 mt-10">
      <form onSubmit={searchBook}>
        <input
          type="text"
          placeholder="Search anything you want to"
          className="w-full p-4 rounded-full border border-gray-500 shadow-sm text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(event) => setUserInput(event.target.value)}
        />
      </form>
    </div>
  );
};

const searchCartonComponent=()=>{
  const [userInput , setUserInput] = useState("");
  console.log("cartoon serch :",userInput);
  
  
  const searchCartoon = (e)=>{
    e.preventDefault();
    router.push(`https://nextjs-homework005.vercel.app/api/cartoon?search=${userInput}`);
    return(
      <div>
          <form onSubmit={searchBook}>
            <input
              type="text"
              placeholder="Search anything you want to"
              className="w-full p-4 rounded-full border border-gray-500 shadow-sm text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(event) => setUserInput(event.target.value)}
            />
        </form>
      </div>
    )
  }
}
export default SearchComponent;





// "use client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// const SearchComponent = () => {
//   const [userInput, setUserInput] = useState("");
//   const router = useRouter();

//   const searchBook = (e) => {
//     e.preventDefault();
//     router.push(`bookCategories?search=${encodeURIComponent(userInput)}`);
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto mb-6 mt-10">
//       <form onSubmit={searchBook}>
//         <input
//           type="text"
//           placeholder="Search anything you want to"
//           className="w-full p-4 rounded-full border border-gray-500 shadow-sm text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           onChange={(event) => setUserInput(event.target.value)}
//           value={userInput}
//         />
//       </form>
//     </div>
//   );
// };

// const SearchCartoonComponent = () => {
//   const [userInput, setUserInput] = useState("");
//   const router = useRouter();

//   const searchCartoon = (e) => {
//     e.preventDefault();
//     router.push(`https://nextjs-homework005.vercel.app/api/cartoon?search=${encodeURIComponent(userInput)}`);
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto mb-6 mt-10">
//       <form onSubmit={searchCartoon}>
//         <input
//           type="text"
//           placeholder="Search for a cartoon"
//           className="w-full p-4 rounded-full border border-gray-500 shadow-sm text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           onChange={(event) => setUserInput(event.target.value)}
//           value={userInput}
//         />
//       </form>
//     </div>
//   );
// };

// export { SearchComponent, SearchCartoonComponent };

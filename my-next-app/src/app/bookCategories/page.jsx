import FilterComponent from "@/component/FilterComponent";
import NavBarComponent from "@/component/NavBarComponent";
import SearchComponent from "@/component/SearchComponent";
import {
  getAllBook,
  getAllBookByfilter,
  getBookBycategory,
  searchBookByTitle,
} from "@/service/book.service";
import Link from "next/link";
import React from "react";

const bookCategories = async ({ searchParams }) => {
  const categoryID = searchParams?.query;
  const categoryTitle = searchParams?.search;

  console.log("category ID ",categoryID);
  console.log("category title ",categoryTitle);
  

  const filterbook = await getBookBycategory(categoryID);
  const searchBookTitle = await searchBookByTitle(categoryTitle);
  
  const searchFilterBook = categoryTitle === undefined ? filterbook : searchBookTitle

  const books = await getAllBook();
  const getBookByFilter = await getAllBookByfilter();
  return (
    <main className="flex  bg-gray-100 ">
      <div>
        <NavBarComponent />
      </div>
      <div className=" overflow-auto h-screen">
        <div className="ml-15">
          <div className="ml-15">
            <SearchComponent />
          </div>
          <div className="ml-150">
            <FilterComponent getBookByFilter={getBookByFilter} />
          </div>

          <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 shadow-md h-full flex  overflow-auto  ">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <button className="px-4 py-2 bg-blue-50 text-green-900 font-semibold rounded-2xl">
                AllBook
              </button>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6  mt-20  ">
              {!getBookByFilter
                ? books.payload.map((book, index) => {
                    return (
                      <div key={index} className="relative">
                        <div className="relative bg-gray-100 rounded-4xl p-8 pt-2 w-110 h-65 mt-20 ">
                          <div className="absolute -top-26 ml-20 mt-10 transform -translate-x-1/2 z-10">
                            <img
                              className="rounded-3xl w-40 h-56 object-cover shadow-lg"
                              src={book.image}
                              alt="How Do You Live?"
                            />
                          </div>
                          <h3 className="text-blue-800 font-bold w-150 ml-50 ">
                            {book.book_cate_name}
                          </h3>
                          <p className="text-sm text-blue-700 text-left w-40 ml-50 line-clamp-8">
                            {book.description}
                          </p>
                          <div className="flex justify-start ">
                            <Link
                              href={`/read-full-article/${book.id}?type=book&name=book+categories&title=${book.book_title}`} // ${book.id} we get id from url
                              className="mt-8 px-3 py-2 bg-blue-200 text-blue-800  rounded-full font-semibold"
                            >
                              READ FULL ARTICLE
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : searchFilterBook.payload.map((filterbook, index) => {
                    return (
                      <div key={index} className="relative">
                        <div className="relative bg-gray-100 rounded-4xl p-8 pt-2 w-110 h-65 mt-20 ">
                          <div className="absolute -top-26 ml-20 mt-10 transform -translate-x-1/2 z-10">
                            <img
                              className="rounded-3xl w-40 h-56 object-cover shadow-lg"
                              src={filterbook.image}
                              alt="How Do You Live?"
                            />
                          </div>
                          <h3 className="text-blue-800 font-bold w-150 ml-50 ">
                            {filterbook.book_cate_name}
                          </h3>
                          <p className="text-sm text-blue-700 text-left w-40 ml-50 line-clamp-8">
                            {filterbook.description}
                          </p>
                          <div className="flex justify-start ">
                            <Link
                              href={`/read-full-article/${filterbook.id}?type=book&name=book+categories&title=${filterbook.book_title}`} // ${book.id} we get id from url
                              className="mt-8 px-3 py-2 bg-blue-200 text-blue-800  rounded-full font-semibold"
                            >
                              READ FULL ARTICLE
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default bookCategories;

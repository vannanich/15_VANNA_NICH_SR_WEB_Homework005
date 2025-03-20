import { getBookByID, getCartoonById } from "@/service/book.service";
import Link from "next/link";
import React from "react";
import ViewArticleDetail from "../ViewArticleDetail";

const bookDetailById = async ({ params, searchParams }) => {
  console.log("search params:", searchParams);
  const bookID = params.id; // .id because it use in dynamic rount so take id in dynamic rount
  // const book = await getBookByID(bookID);//create new variable that await from service name that we create than put variable from first line related on param
  // console.log("book :",book);
  //  console.log("hhhh:",bookID);//
  if (searchParams.type == "cartoon") {
    const cartonbyId = await getCartoonById(bookID);
    console.log("catrton by id : ",cartonbyId);
    return (
      <main>
        <ViewArticleDetail detailsValue={cartonbyId} />
      </main>
    );
  } else {
    const book = await getBookByID(bookID);
    return (
      <main>
        <ViewArticleDetail detailsValue={book} />
      </main>
    );
  }
};
export default bookDetailById;

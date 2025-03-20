export const getAllBook = async ()=>{
    try{

        const book = await fetch("https://nextjs-homework005.vercel.app/api/book")
        const data = await book.json();
    return data;

    }catch(error){
        console.log(error);
    }

};
export const getBookByID = async(id)=>{
  try{
    const bookID = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`)
    const data = await bookID.json();
    return data;
  }catch(error){
    console.log(error);
  }
}

export const getCartoonById = async (cartoonid) => {
  console.log("cartoon id : ",cartoonid);
  
  try {
    const cartId = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon/${cartoonid}`);
      const data = await cartId.json();
      return data;
  }catch (error) {
      console.log(error);
    }
  
};

export const getAllCartoon = async ()=>{
    try{
        
        const carton = await fetch("https://nextjs-homework005.vercel.app/api/cartoon")
        const data = await carton.json();
        return data;

    }catch(error){
        console.log(error);
    }
};


export const getAllBookByfilter = async()=>{
  try{
    const filterBook = await fetch("https://nextjs-homework005.vercel.app/api/book_category")
    const data = await filterBook.json();
    return data;
  }catch(error){
    console.log(error);
  }
};

export const getAllCartoonByfilter = async(cartoonFilter)=>{
  try{
    const filterCarton = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre/search?genre=${cartoonFilter}`)
    const data = await filterCarton.json();
    return data;
  }catch(error){
    console.log(error)
  }
}
export const CartoonByfilterAlllllll = async (AllCartoonFilter)=>{
 try{
    const selectCarton = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre=${AllCartoonFilter}`)
    const data = await selectCarton.json();
    return data;

 } catch(error){
  console.log(error)
 }
}


























export const getBookBycategory = async(cate_id)=>{
  try{
    const bookByFilter = await fetch(`https://nextjs-homework005.vercel.app/api/book?query=${cate_id}`)
    const data = await bookByFilter.json();
    return data;

  }catch(error){
    console.log(error);
    

  }
};
export const getCartoonByCategory = async (cate_cartoon_id)=>{
  try{
    const cartoonByFilter = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre${cate_cartoon_id}`)
    const data = await cartoonByFilter.json();
    return data;
  }catch(error){
    console.log(error);
    
  }
}
export const searchBookByTitle = async(searchBookTitle)=>{
  console.log(searchBookByTitle);
  
  try{
    const searchBook = await fetch(`https://nextjs-homework005.vercel.app/api/book?search=${searchBookTitle}`)
    const data = await searchBook.json();    
    return data;

  }catch (error){
    console.log(error);
  }
}

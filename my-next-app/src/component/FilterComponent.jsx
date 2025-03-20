"use client"
import { getAllBookByfilter } from '@/service/book.service';
import { Search } from 'lucide-react';
import React from 'react'
import { useRouter } from 'next/navigation';

const FilterComponent =  ({getBookByFilter}) => {
  const router= useRouter()
  const handleFilter = (e)=>{
    router.push(`bookCategories?query=${e.target.value}`)
  }
  return (
    <main>
       <div className='flex '>
       <div className="max-w-sm mx-auto">
        <select onChange={handleFilter} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>  Select a Category </option>
          {getBookByFilter.payload.map((book,index ) => (
            <option  key={index} value={book.id}>{book.book_cate_name  }</option>
          ))} 
        </select>
       </div>
       </div>
      
    </main>
  )
}

export default FilterComponent
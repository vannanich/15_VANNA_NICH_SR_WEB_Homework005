import CartoonId from '@/component/CartoonId'
import FilterComponent from '@/component/FilterComponent'
import NavBarComponent from '@/component/NavBarComponent'
import SearchComponent from '@/component/SearchComponent'
import { CartoonByfilterAll, CartoonByfilterAlllllll, getAllCartoon } from '@/service/book.service'
import { Eye, Link } from 'lucide-react'
import React from 'react'

const oldSchoolCarton =async () => {
  const cartoons = await getAllCartoon();
  const allCartoon = await CartoonByfilterAlllllll();
  return (
       <main className='flex  bg-gray-100 '>
          <div>
            <NavBarComponent/>
          </div>
          <div className=' overflow-auto h-screen'>
            <div className="ml-15">
              <div>
              <SearchComponent/>
              </div>
              <div className='ml-200'>
               <FilterComponent getBookByFilter={cartoons}/>
              </div>
                <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 shadow-md h-full flex   ">
                  {/* <link href={"oldSchoolCarton"}> */}
                    <div className="border-b border-gray-200 pb-4 mb-6">
                      <button className="px-6 py-2 bg-blue-50 text-green-900 font-semibold rounded-2xl">
                        Cartoons
                      </button>
                    </div>
                  {/* </link>  */}
                    <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6  mt-20  ">
                       
                    {cartoons.payload?.map((cartoon)=>( 
                        <div key={cartoon?.id}  className="relative  rounded-4xl p-8 pt-2 w-110 h-65 mt-20 ">
                           <CartoonId cartoon={cartoon}/>
                        </div>
                     ))}  
                 </div>
              </div>
          </div>   
        </div>
    </main>
  )
}

export default oldSchoolCarton


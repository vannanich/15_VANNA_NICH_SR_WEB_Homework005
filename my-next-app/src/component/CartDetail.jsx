import React from 'react'

const CartDetail = async ({seachParams}) => {
 
  
  
  return (
    <main className="flex bg-gray-100 h-160 ">
    <div className="ml-15">
    <nav className="flex items-center space-x-2 text-gray-600 ml-30">
       <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
          <span className="text-xl"></span>
          <span className='text-blue-950'>Home</span>
        </a>
        <span className="text-gray-400">›</span>
        <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
          <span className="text-xl"></span>
          <span className='text-blue-950'>Book Categories</span>
        </a>
        <span className="text-gray-400">›</span>
        <span className="flex items-center space-x-1 text-red-600 font-semibold">
          <span className="text-xl"></span>
          {/* <span>{cardData?.ct_title}</span> */}
        </span>
      </nav>
      <div className="w-full max-w-5xl mx-auto bg-white ml-30 mt-45 rounded-3xl p-6 shadow-md h-100 absolute">
       <div className='mt-26 '>
        {/* <h1 className='font-bold text-blue-950 '>{cardData?.image}</h1><br />
          <p className='text-green-900'>{cardData?.ct_creator}</p><br />
          <p className='text-blue-950 '>{cardData?.ct_description}</p> */}
           <h1 className='font-bold text-blue-950 '>Tom & Jerry</h1>
          <p className='text-green-900 mt-5'>by William Hanna and Joseph Barbera</p>
          <p className='text-blue-950 mt-4'>1200000 times | 1940</p>
          <p className='text-blue-700 mt-4'>Tom & Jerry is a beloved animated series that centers around the ongoing rivalry between Tom, a cat, and Jerry, a mouse. The show is primarily known for its slapstick comedy, with Tom constantly attempting (and failing) to catch Jerry, leading to a variety of humorous, chaotic situations. The series debuted in 1940 by MGM (Metro-Goldwyn-Mayer) and quickly became a hallmark of animation with its expressive characters and exaggerated physical humor. Despite the simple premise, Tom & Jerry has become an enduring cultural phenomenon, winning several Academy Awards for animated shorts and creating a lasting legacy in animation history.</p>
       </div>
      </div>
            <div className="ml-20 mt-10 relative group">

              <img
                className="rounded-3xl w-50 h-70 ml-200 mt-20 "
                src="https://s3-alpha-sig.figma.com/img/65a1/7fc0/0c5a744cd7491aa1555996062a2e9f16?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hb9tx4C2PrUqZCAkl-zxHUI5g2SKf7f6EWq-Y3GQnDjH2h2khBxSi00YxHQggSEZUaYL5DnkyZuEVxO4RLtKmTrl9v3tYfrW4r5mUDwt4ymVp0TStjoXCc4i0xkW2YJvimF02GnwCg0PjqV7xpcCk8T0uDFPl4YpPtQndpKxGintdpXnOjp2YIYlQDx7m2HNpHlc4CfGICTlcLS5k5XK0E-RPnHPTjcHl7FpDNGHF8XUdbzph0FR4T6D8LzWiJTK6uTO3Q3nPJqrAH4Noq3c40a~cHpzb40py0-5tODiE0xsLoa9mpnq0uCUJaL~uqh3koddEdUb28abaZuzDq4s2A__"
                // src={card?.image}
              />
            </div>
      </div>
  
  </main>
)
}
export default CartDetail

// export default CartDetail;


// import React from 'react'
// import CartoonId from './CartoonId'

// const CartDetail = () => {
//   return (

//     <main>
//         <CartoonId/>
//     </main>














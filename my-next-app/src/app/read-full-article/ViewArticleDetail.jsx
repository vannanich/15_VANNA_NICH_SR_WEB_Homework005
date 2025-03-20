import Link from 'next/link'
import React from 'react'

const ViewArticleDetail = ({detailsValue}) => {
    console.log("caarton",detailsValue)
  return (
    <main className="flex bg-gray-100 h-200 ">
    <div className="ml-15">
    <nav className="flex items-center space-x-2 text-gray-600 ml-30">
       <div href="#" className="flex items-center space-x-1 hover:text-blue-600">
          <Link href={"/"}><span className='text-blue-950'>Home</span></Link>
        </div>
        <span className="text-gray-400">›</span>
        <div href="#" className="flex items-center space-x-1 hover:text-blue-600">
          <Link href={"/bookCategories"}><span className='text-blue-950'>{detailsValue.payload.book_title||detailsValue?.payload.ct_title}</span></Link>
        </div>
        <span className="text-gray-400">›</span>
        <span className="flex items-center space-x-1 text-red-600 font-semibold">
          <span className="text-xl"></span>
          <span>{detailsValue.payload.book_title || detailsValue.payload.ct_title}</span>
        </span>
      </nav>
      <div className="w-full max-w-5xl mx-auto bg-white ml-30 mt-45 rounded-3xl p-6 shadow-md h-100 absolute">
       <div className='mt-26 '>
        <h1 className='font-bold text-blue-950 '>{detailsValue?.payload.book_title || detailsValue?.payload.ct_title}</h1><br />
          <p className='text-green-900'>{detailsValue?.payload.book_author || detailsValue?.payload.ct_creator}</p>
          <p className='text-blue-950 line-clamp-5 '>{detailsValue?.payload.description || detailsValue.payload.ct_description} </p>
       </div>
      </div>
            <div className="ml-20 mt-10 relative group">
              <img
                className="rounded-3xl w-50 h-70 ml-200 mt-20 "
                // src="https://s3-alpha-sig.figma.com/img/65a1/7fc0/0c5a744cd7491aa1555996062a2e9f16?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hb9tx4C2PrUqZCAkl-zxHUI5g2SKf7f6EWq-Y3GQnDjH2h2khBxSi00YxHQggSEZUaYL5DnkyZuEVxO4RLtKmTrl9v3tYfrW4r5mUDwt4ymVp0TStjoXCc4i0xkW2YJvimF02GnwCg0PjqV7xpcCk8T0uDFPl4YpPtQndpKxGintdpXnOjp2YIYlQDx7m2HNpHlc4CfGICTlcLS5k5XK0E-RPnHPTjcHl7FpDNGHF8XUdbzph0FR4T6D8LzWiJTK6uTO3Q3nPJqrAH4Noq3c40a~cHpzb40py0-5tODiE0xsLoa9mpnq0uCUJaL~uqh3koddEdUb28abaZuzDq4s2A__"
                src={detailsValue?.payload.image}
              />
            </div>
          </div>
  </main>
  )
}

export default ViewArticleDetail
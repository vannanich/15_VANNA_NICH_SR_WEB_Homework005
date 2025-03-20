import Link from 'next/link'
import React from 'react'

const CartoonId = ({cartoon}) => {
  return (
        <div  className="relative  rounded-4xl p-8 pt-2 w-110 h-65 mt-20 ">
        <div className="absolute -top-56 ml-20 mt-30 transform -translate-x-1/2 z-10">
                {/* <Link href={`/oldSchoolCarton/Carton-detail/${cartoon?.id }`}> */}
                <Link href={`/read-full-article/${cartoon?.id}?type=cartoon&name=cartoon+categories&title=${cartoon?.ct_title}`}>
                <img 
                className="rounded-3xl w-50 h-66 object-cover shadow-lg"
                src={cartoon?.image}
                  // src="https://s3-alpha-sig.figma.com/img/53b7/da50/f304cb33a6800220ad4dc667b09edb1c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UnI-o082Y0Zgm6eSKTdcYYHqZkLBSe8pUH1k8hh147PDwaYYiglGlvm5g8-ZeYhYXRH-bZfR9yoz4HuLWJ0oZYd7nkEsysovgdblpM6HV2v5MH8lHyI9v~0dBA8f4vM83CG8bS0MWKXbAn6unIedWU8jtslmeOp-0eoiW3CNZ34yziW9KaJ84~SkxmWFx1vtQHF-kxClD-nurKR6KHJPcHL-VNZOneJ8cpJ7N13pwr9nZa2cBslQ2ibv7Mbp7px8m3M~K-lN9D7iS-hYW-DYSOFhRt-gJQ3sIrOv21dHA0aRR85vnpdipq2pbKj6kC3YAuI5K4i5mHEaiera5JbjOw__"
                  alt="How Do You Live?"
                 />
                </Link>
        <div>
        <h1 className='text-black'>{cartoon.ct_title}</h1>
        <p className='text-green-900 font-bold'> {cartoon.view_count} |{cartoon.published_year} {cartoon.published_year}</p>


        </div>
        </div>
        </div>
  )
}

export default CartoonId;

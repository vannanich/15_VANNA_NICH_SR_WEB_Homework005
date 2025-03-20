import Link from 'next/link';
import NavBarComponent from "@/component/navBarComponent";
import { Book } from "lucide-react";

export default function Page() {
  return (
        <main className="flex bg-gray-100">
          <div>
            <NavBarComponent />
          </div>
          <div className="ml-15">
            <div className="w-full max-w-3xl mx-auto mb-6 mt-10">
              <input
                type="text"
                placeholder="Search anything you want to"
                className="w-full p-4 rounded-full border border-gray-500 shadow-sm text-gray-600 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl p-6 shadow-md h-140">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <div className="flex">
                  <button className="px-4 py-2 bg-blue-50 text-green-900 font-semibold rounded-2xl">
                    Homepage
                  </button>
                  
                  {/* <div className="ml-150 ">
                    <SelectComponent/>
                  </div> */}

                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
                <div className="ml-20 relative group">
                 <Link href={"/bookCategories"}>
                  <img
                      className="rounded-3xl w-full"
                      src="https://s3-alpha-sig.figma.com/img/c73c/a81c/dd317b2dcd79328efc4e3095489f2244?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r7t-Y5h1pPzQ6~trCDXoo92yuv5-rsGnsVKvTEwBjqTTWgiz3IqxD28GsmM5K6hzPZcWnXrojgFAXjHXvQHYgTBkVBA28kl0HzWX5DmcBGFSapwqkvyIPQc1AWlVTSY~AFqReHgoMOpm2yqiBkO-M6OtP-MJFL3B1xZwRNHUkU~Na2mLvNieMpt-3RBbS-KBvgUu7NV1uChT8bHDufXg0l8SUtS3f7IIwUesxq7rDLWh-l0PuvLyxIReg-lGEC5gLqTPo9c08X1Aa14yDHIQDxtBrpCKHgQfk68bvcbiuYMZHNHnT6t6AcdkoJlaJZQDV5ReMqZQ9ASGedc88b2LdQ__"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
                    <span className="absolute top-2 left-2 bg-gray-100 text-green-400 text-xs px-2 py-1 rounded-full">
                      Book
                    </span>
                    <div className
                    ="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold w-20">View All Available Books</span>
                    </div>
                </Link>
                </div>
                <div className="ml-20 relative group flex" >
                  <Link href={"/oldSchoolCarton"}>
                    <img
                        className="rounded-3xl w-full"
                        src="https://s3-alpha-sig.figma.com/img/65a1/7fc0/0c5a744cd7491aa1555996062a2e9f16?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hb9tx4C2PrUqZCAkl-zxHUI5g2SKf7f6EWq-Y3GQnDjH2h2khBxSi00YxHQggSEZUaYL5DnkyZuEVxO4RLtKmTrl9v3tYfrW4r5mUDwt4ymVp0TStjoXCc4i0xkW2YJvimF02GnwCg0PjqV7xpcCk8T0uDFPl4YpPtQndpKxGintdpXnOjp2YIYlQDx7m2HNpHlc4CfGICTlcLS5k5XK0E-RPnHPTjcHl7FpDNGHF8XUdbzph0FR4T6D8LzWiJTK6uTO3Q3nPJqrAH4Noq3c40a~cHpzb40py0-5tODiE0xsLoa9mpnq0uCUJaL~uqh3koddEdUb28abaZuzDq4s2A__"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
                      <span className="absolute top-2 left-2 bg-gray-100 text-green-400 text-xs px-2 py-1 rounded-full">
                        Cartoon
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-semibold w-20">View All Available Cartoon</span>
                      </div>
                  </Link>

                </div>
              </div>
              
            </div>
          </div>
          
        </main>

  );
}

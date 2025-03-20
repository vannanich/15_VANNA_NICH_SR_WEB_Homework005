import React from 'react';
import Link from "next/link";
import { AirplayIcon, BookAIcon, Camera, Cpu, Home, Music, PenBox, SproutIcon, Tv2, Tv2Icon } from 'lucide-react';

const NavBarComponent = () => {
  return (
    <div className="flex min-h-screen overflow-auto h-screen ">
      <aside className="w-64 bg-white p-6 shadow-lg rounded-2xl ">
      <div className="flex flex-col items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/d1f4/4ca0/b0a6c2cc4e45d57bbc5a308b42616fa6?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bgp-WJMsbfgJB4McdLQ8Zn~qjEPcplm8GHxYMyRZxD42xqpByz551iyM4E8na7baFo1HWI~z2ps5~imTa-fXQg5zSW4ArpP6r8u1qOzAHq9G~xCs55U8IRAbXoCibnESKpvz1z1ZcdquEWqcSA5K~NUTNKxh-mXTIKvfW5Q55kfEw4g716jzPMnI5ofK935Jh6TCP2rINv~U5CAdyQWsYzLkLtd3E~WWjEb74F8ekMyEs6-r5HRYdcE3L~Es9s8YouCcZvYJnBVU2iFrMMe3-BXdpNytVqhyJyn41fJQP-7Ya4CsrXNgIClaln3~eHOZ0qgdAmCEJupIcUM5JH42ng__"
            alt="Avatar"
            width={100}
            height={100}
            className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-lg"
          />
          <h2 className="text-lg font-semibold mt-2 text-black">Black Monster</h2>
          <p className="text-sm text-blue-500">blackmonster@gmail.com</p>
        </div>
        <nav className="mt-6">
          <ul className="space-y-3 text-gray-900">
       
            <li className="flex items-center space-x-2 hover:bg-blue-50 rounded-2xl py-2 cursor-pointer"> <Home/> <Link href={"/"}> Home</Link></li>
            <li className="flex items-center space-x-2 hover:bg-blue-50 rounded-2xl py-2 cursor-pointer"> <BookAIcon/> <Link href={"/bookCategories"}>Book Categories</Link></li>
            <li className="flex items-center space-x-2 hover:bg-blue-50 rounded-2xl py-2 cursor-pointer"> <Tv2Icon/> <Link href={"/oldSchoolCarton"}>Old-School Cartoons</Link></li>
            <li className="flex items-center space-x-2 hover:bg-blue-50 rounded-2xl py-2 cursor-pointer"> <Tv2/> <span>Movies & TV Shows</span></li>
            <li className="flex items-center space-x-2 hover:bg-blue-50 rounded-2xl py-2 cursor-pointer"> <Music/> <span>Music</span></li>
            <li className="flex items-center space-x-2 hover:bg-blue-50 rounded-2xl py-2 cursor-pointer"> <Camera/>  <span>Photography</span></li>
            <li className="flex items-center space-x-2 hover:bg-blue-50 rounded-2xl py-2 cursor-pointer">  <span>Sports & Fitness</span></li>
            <li className="flex items-center space-x-2 hover:bg-blue-50 rounded-2xl py-2 cursor-pointer">  <span>Technology & Gadgets</span></li>
            <li className="flex items-center space-x-2 hover:bg-blue-50 rounded-2xl py-2 cursor-pointer"> <AirplayIcon/> <span>Travel & Exploration</span></li>
            <li className="flex items-center space-x-2 hover:bg-blue-50 rounded-2xl py-2 cursor-pointer"> <PenBox/> <span>Writing & Journaling</span></li>
          </ul>
        </nav>
        <div className="mt-6">
          <button className="w-full bg-gray-400 p-2 rounded-lg hover:bg-gray-500 flex items-center justify-center space-x-2">
             <span>Settings</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default NavBarComponent;

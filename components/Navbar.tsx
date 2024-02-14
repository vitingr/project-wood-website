"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import {
  IoMenuOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { FaCoins, FaShoppingCart  } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  return (
    <header className="w-full bg-[#ebe2d9] flex justify-center items-center p-6 h-[75px] shadow-neutral-100 shadow-md">
      <nav className="max-w-[1250px] flex justify-between items-center w-full">
        <h1 className="w-full sm:text-center text-2xl font-bold uppercase cursor-default tracking-widest">
          Logo
        </h1>
        <ul className="list-none hidden sm:flex gap-4 items-center justify-center w-full">
          <Link
            className=" text-[#4d3417] text-sm cursor-pointer rounded-full px-4 py-1 transition-all duration-500 hover:bg-[#dacfc3]"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className=" text-[#4d3417] text-sm cursor-pointer rounded-full px-4 py-1 transition-all duration-500 hover:bg-[#dacfc3]"
            href={"/produtos"}
          >
            Produtos
          </Link>
          <Link
            className=" text-[#4d3417] text-sm cursor-pointer rounded-full px-4 py-1 transition-all duration-500 hover:bg-[#dacfc3]"
            href={"/orcamento"}
          >
            Orçamento
          </Link>
          <Link
            className=" text-[#4d3417] text-sm cursor-pointer rounded-full px-4 py-1 transition-all duration-500 hover:bg-[#dacfc3]"
            href={"/informacoes"}
          >
            Informações
          </Link>
          <Link
            className=" text-[#4d3417] text-sm cursor-pointer rounded-full px-4 py-1 transition-all duration-500 hover:bg-[#dacfc3]"
            href={"/contatos"}
          >
            Contato
          </Link>
        </ul>
        <div className="sm:flex w-full items-center justify-center gap-6 hidden">
          <Link href={"/"}>
            <FaWhatsapp className="brown-icon" size={20} />
          </Link>
          <Link href={"/"}>
            <FaFacebook className="brown-icon" size={20} />
          </Link>
          <Link href={"/"}>
            <FaInstagram className="brown-icon" size={20} />
          </Link>
        </div>
        <div className="sm:hidden w-full items-center justify-end gap-6 flex">
          <IoMenuOutline
            size={35}
            className="brown-icon cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {showMenu && (
              <div className='z-20 fixed right-0 bg-[#fff] shadow-md h-[575px] w-[350px] border border-[#f7f7f7] translate-y-2 transition-all rounded-lg sm:mt-[800px] mt-[600px] lg:left-[64%]'>
                <div className='p-10'>
                  <h1 className='text-3xl font-bold text-center'>Olá, Bem-vindo!</h1>
                </div>
                <div className='w-full flex gap-4 p-6 bg-[#f7f7f7] items-center'>
                  <img src="https://cdn-icons-png.flaticon.com/512/3275/3275760.png" className='w-[50px] h-[50px] selection:bg-transparent' alt="Cellphone Image" />
                  <div>
                    <h4 className='text-sm font-bold'>Versão mobile do site</h4>
                    <p className='text-sm text-[#717171]'>Acompanhe o desenvolvimento do nosso website! vai ser uma grande experiência</p>
                    <h2 className='mt-6 text-[#ca8036] font-bold text-sm'>Bora lá</h2>
                  </div>
                </div>
                <div className='p-8 gap-6 w-full flex flex-col'>
                  <Link href={"/"} className='flex w-full justify-between items-center gap-6 cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
                    <IoHomeOutline size={25} className="gray-icon" />
                    <h3 className='text-[#717171] w-full text-sm'>Início</h3>
                  </Link>
                  <Link href={"/produtos"} className='flex w-full justify-between items-center gap-6 cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
                    <FaShoppingCart size={25} className="gray-icon" />
                    <h3 className='text-[#717171] w-full text-sm'>Produtos</h3>
                  </Link>
                  <Link href={"/orcamento"} className='flex w-full justify-between items-center gap-6 cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
                    <FaCoins size={25} className="gray-icon" />
                    <h3 className='text-[#717171] w-full text-sm'>Orçamento</h3>
                  </Link>
                  <Link href={"/informacoes"} className='flex w-full justify-between items-center gap-6 cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
                    <IoIosInformationCircleOutline size={25} className="gray-icon" />
                    <h3 className='text-[#717171] w-full text-sm'>Informações</h3>
                  </Link>
                  <Link href={"/contatos"} className='flex w-full justify-between items-center gap-6 cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
                    <IoPersonCircleOutline size={25} className="gray-icon" />
                    <h3 className='text-[#717171] w-full text-sm'>Contatos</h3>
                  </Link>
                </div>
              </div>
            )}
      </nav>
    </header>
  );
};

export default Navbar;

"use client";

import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center sm:p-[4%] p-6 max-w-[1375px]">
      <h1 className="text-center w-full text-2xl font-bold sm:mt-0 mt-10">
        Entre em contato!
      </h1>
      <span className="w-full text-center">
        Tire suas dúvidas com nessa equipe
      </span>

      <div className="w-full flex justify-between gap-6 md:flex-nowrap flex-wrap items-center mt-16">
        <div className="px-4 py-3 flex items-center border border-[#ebe2d9] rounded-lg w-full gap-3 justify-center bg-[#ebe2d9] shadow-md shadow-neutral-100 cursor-pointer">
          <FaWhatsapp className="brown-icon" size={18} />
          <span className="text-sm text-[#4d3417]">Whatsapp: +55 (19) 99233-3218</span>
        </div>
        <div className="px-4 py-3 flex items-center border border-[#ebe2d9] rounded-lg w-full gap-3 justify-center bg-[#ebe2d9] shadow-md shadow-neutral-100 cursor-pointer">
          <FaInstagram className="brown-icon" size={18} />
          <span className="text-sm text-[#4d3417]">Instagram: @testestestes</span>
        </div>
        <div className="px-4 py-3 flex items-center border border-[#ebe2d9] rounded-lg w-full gap-3 justify-center bg-[#ebe2d9] shadow-md shadow-neutral-100 cursor-pointer">
          <FaFacebook className="brown-icon" size={18} />
          <span className="text-sm text-[#4d3417]">Facebook: Página Testes</span>
        </div>
      </div>

      <div className="flex justify-between w-full gap-10 items-center mt-16 md:flex-nowrap flex-wrap">
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            console.log("teste");
          }}
          className="sm:p-10 w-full rounded-lg flex flex-col"
        >
          <label htmlFor="name" className="text-sm mt-6">
            Seu Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-[#ffffff8c] outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] px-2 mt-1"
            autoComplete="off"
            placeholder="Seu nome completo"
            spellCheck={false}
            required
          />

          <label htmlFor="email" className="text-sm mt-6">
            Seu Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1"
            autoComplete="off"
            placeholder="Coloque aqui o seu endereço de email"
            spellCheck={false}
            required
          />

          <label htmlFor="name" className="text-sm mt-6">
            Telefone
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1"
            autoComplete="off"
            placeholder="Informe seu telefone de contato"
            spellCheck={false}
            required
          />

          <label htmlFor="mensagem" className="text-sm mt-6">
            Sua Mensagem
          </label>
          <textarea
            name="mensagem"
            id="mensagem"
            cols={30}
            rows={7}
            className="outline-none text-[#717171] py-2 rounded-lg border-2 border-slate-200 text-sm bg-[#ffffff8c] px-2 resize-none mt-1"
            autoComplete="off"
            placeholder="Disponha aqui a sua dúvida para nossa equipe te ajudar"
            spellCheck={false}
          ></textarea>
        </form>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21666893.733031757!2d-49.30062393924682!3d-20.365090550109098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1707846524583!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          className="w-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default page;

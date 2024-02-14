import { PRODUCTS } from "@/constants/products";
import Image from "next/image";
import React from "react";

type ProductProps = {
  name: string;
  description: string;
  type: string;
  image: string;
  price: string;
};

const page = () => {
  return (
    <div className="w-full flex flex-col items-center sm:p-[4%] p-6 max-w-[1375px]">
      <section className="bg-[#ebe2d9] rounded-2xl w-full p-10 flex justify-between flex-wrap md:flex-nowrap gap-6">
        <div className="max-w-[750px] w-full">
          <h1 className="font-bold text-2xl">
            Madeira de qualidade? <br />
            Deixa com a gente!
          </h1>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error
            dolores quia quibusdam laudantium mollitia doloremque, optio fuga?
            Asperiores quos hic nulla sint debitis voluptates assumenda
            aspernatur dicta modi repudiandae.
          </p>
          <div className="flex gap-4 items-center w-full mt-10">
            <div className="rounded-full px-4 py-2 text-white bg-[#d4904c] w-[165px] text-center cursor-pointer text-sm">
              Ver mais
            </div>
            <div className="rounded-full px-4 py-2 text-[#ca8036] bg-[#fcdcbc] w-[165px] text-center cursor-pointer text-sm">
              Mais Informações
            </div>
          </div>
        </div>
        <div className="w-[1000px] flex items-center justify-center">
          <Image
            src={"/assets/products-main.svg"}
            alt="Main Products Image"
            width={750}
            height={750}
            className="selection:bg-transparent"
          />
        </div>
      </section>

      <section className="w-full mt-[5em] text-2xl font-bold">
        <h1 className="text-center text-3xl">Nossos Principais Produtos</h1>
        <p className="text-center font-normal text-[#717171] text-sm mt-1 mb-24">Veja quais são nossos produtos mais vendidos no momento</p>

        <div className="md:flex gap-6 justify-between items-center w-full my-12 hidden">
          <div className="w-full text-center bg-[#df9469] rounded-full px-4 cursor-pointer py-2 text-white text-xs transition-all duration-300 hover:bg-[#c77f55]">Pallets</div>
          <div className="w-full text-center bg-[#df9469] rounded-full px-4 cursor-pointer py-2 text-white text-xs transition-all duration-300 hover:bg-[#c77f55]">Cama Box</div>
          <div className="w-full text-center bg-[#df9469] rounded-full px-4 cursor-pointer py-2 text-white text-xs transition-all duration-300 hover:bg-[#c77f55]">Camas</div>
          <div className="w-full text-center bg-[#df9469] rounded-full px-4 cursor-pointer py-2 text-white text-xs transition-all duration-300 hover:bg-[#c77f55]">Caixas</div>
          <div className="w-full text-center bg-[#df9469] rounded-full px-4 cursor-pointer py-2 text-white text-xs transition-all duration-300 hover:bg-[#c77f55]">Engradados</div>
          <div className="w-full text-center bg-[#df9469] rounded-full px-4 cursor-pointer py-2 text-white text-xs transition-all duration-300 hover:bg-[#c77f55]">Embalagens</div>
        </div>

        <div className="mt-20 flex w-full justify-center flex-wrap gap-1">
          {PRODUCTS.map((product: ProductProps, index: number) => (
            <div
              className="w-[275px] sm:p-6 p-2 bg-transparent flex flex-col items-center transition-all duration-300 cursor-pointer hover:bg-[#ececec] rounded-md"
              key={index}
            >
              <h1 className="w-full text-base font-semibold">{product.name}</h1>
              <p className="w-full text-[#717171] text-xs font-normal">{product.description}</p>
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="mt-6 selection:bg-transparent"
              />
              <div className="flex justify-between w-full mt-10">
                <span className="w-full text-sm text-[#717171] font-normal">{product.type}</span>
                <span className="flex w-full justify-end text-sm text-[#ca8036]">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;

import SwiperCards from "@/components/SwiperCards";
import { mainCards } from "@/constants/boxes";
import Image from "next/image";

import { MdAutorenew } from "react-icons/md";
import { RiLeafFill } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";

type CardsProps = {
  title: string;
  description: string;
  image: string;
};

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <section
        className="border-[#675345] border-t-2 w-full h-[850px] bg-center bg-cover bg-no-repeat sepia-[0.5]"
        style={{ backgroundImage: `url(/assets/bg-4.jpg)` }}
      />

      <section className="max-w-[1650px] w-full sm:p-[5%] p-6 flex flex-col items-center my-12 sm:my-0">
        <h1 className="text-2xl w-full font-bold text-center">
          Nossos Produtos em Alta
        </h1>
        <p className="pb-6 border-b border-neutral-400 text-center">
          Confira abaixo alguns produtos mais vendidos no momento
        </p>
        <div className="mt-20 flex gap-12 items-center w-full">
          <SwiperCards content={mainCards} />
        </div>
      </section>

      <h1 className="mt-[1.5em] mb-20 w-full text-center font-[500] text-5xl cursor-default p-6">
        Eai,
        <span className="ml-2 mr-2 font-[500] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#4d3417] to-[#df9469]">
          Que tal fazer
        </span>
        experimentar <br />
        <span className="ml-2 mr-2 font-[500] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#4d3417] to-[#df9469]">
          nossos
        </span>
        produtos? 
      </h1>

      <section className="max-w-[1650px] w-full sm:p-[5%] p-6 flex flex-col items-center">
        <h1 className="text-2xl w-full font-bold text-center">
          Nossos Princípios
        </h1>
        <p className="pb-6 border-b border-neutral-400 text-center">
          Nossa empresa preza muito pelos valores!
        </p>
        <div className="flex gap-12 justify-center items-center flex-wrap mt-20">
          <div className="max-w-[400px] w-full flex flex-col items-center bg-white p-10 shadow-md shadow-neutral-200 rounded-xl">
            <div className="bg-[#ffc18238] p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center">
              <MdAutorenew size={25} className="colored-icon" />
            </div>
            <div className="w-full mt-8">
              <h1 className="text-base font-semibold text-center">Qualidade</h1>
              <p className="mt-4 text-sm text-[#717171] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                repudiandae animi sapiente quasi reprehenderit, a aut quas!
                Voluptate animi tempora deleniti, facilis adipisci, repellendus
                perspiciatis corrupti, quia neque repellat unde.
              </p>
            </div>
          </div>
          <div className="max-w-[400px] w-full flex flex-col items-center bg-white p-10 shadow-md shadow-neutral-200 rounded-xl">
            <div className="bg-[#ffc18238] p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center">
              <RiLeafFill size={25} className="colored-icon" />
            </div>
            <div className="w-full mt-8">
              <h1 className="text-base font-semibold text-center">
                Sustentabilidade
              </h1>
              <p className="mt-4 text-sm text-[#717171] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                repudiandae animi sapiente quasi reprehenderit, a aut quas!
                Voluptate animi tempora deleniti, facilis adipisci, repellendus
                perspiciatis corrupti, quia neque repellat unde.
              </p>
            </div>
          </div>
          <div className="max-w-[400px] w-full flex flex-col items-center bg-white p-10 shadow-md shadow-neutral-200 rounded-xl">
            <div className="bg-[#ffc18238] p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center">
              <SlEnergy size={25} className="colored-icon" />
            </div>
            <div className="w-full mt-8">
              <h1 className="text-base font-semibold text-center">Inovação</h1>
              <p className="mt-4 text-sm text-[#717171] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                repudiandae animi sapiente quasi reprehenderit, a aut quas!
                Voluptate animi tempora deleniti, facilis adipisci, repellendus
                perspiciatis corrupti, quia neque repellat unde.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full h-[600px] bg-center flex justify-center items-center bg-cover bg-no-repeat grayscale-[0.5] p-6"
        style={{ backgroundImage: `url(/assets/bg-2.jpg)` }}
      >
        <div className="w-[500px] bg-[#5e5e5e7a] rounded-lg p-6 backdrop-blur-xl">
          <h1 className="text-2xl font-bold text-center text-white">
            Sustentabilidade
          </h1>
          <h2 className="text-center mt-1 text-white">
            Florestas renováveis, 100% ecológica
          </h2>
          <p className="mt-6 text-sm text-justify text-white font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto enim
            tempore repellendus tempora hic commodi eligendi repellat ad facere
            impedit. Eveniet at optio delectus iste nostrum laudantium odio
            distinctio dicta?
          </p>
        </div>
      </section>

      <section className="max-w-[1650px] mt-12 mb-20 w-full sm:p-[5%] p-6 flex flex-col items-center">
        <div className="w-full flex justify-center md:justify-between gap-10 items-center md:flex-nowrap flex-wrap">
          <div className="w-full flex flex-col">
            <span className="text-[#ca865e] w-full text-sm font-semibold">Novidades</span>
            <div className="border-t border-[#ca865e] w-[20px] my-2" />
            <h1 className="text-4xl font-bold w-full mt-2">Faça parte da Empresa</h1>
            <h2 className="w-full mt-2 text-lg">Best solution for your business</h2>
            <p className="w-full mt-6 text-[#717171] text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quasi dignissimos eaque non, at, natus deleniti itaque repellat mollitia praesentium aliquid asperiores ut dolorum ipsum porro tempore sequi excepturi amet?</p>
            <div className="bg-[#ca865e] text-white rounded-full mt-10 w-[250px] px-4 py-2 cursor-pointer text-center">
              Quero fazer parte
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src={"/assets/person.svg"}
              alt="Section Image"
              width={350}
              height={350}
              className="selection:bg-transparent"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

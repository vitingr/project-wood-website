import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center sm:p-[4%] p-6 max-w-[1375px]">
      <section className="w-full flex justify-between sm:flex-nowrap flex-wrap items-center max-w-[1025px]">
        <div className="w-full flex flex-col items-center">
          <h1 className="w-full text-3xl font-semibold">Quem nós somos?</h1>
          <h3 className="w-full">Conheça a nossa empresa!</h3>
          <p className="w-full mt-6 text-sm text-[#717171]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nam, aliquam magnam voluptate iusto pariatur omnis qui beatae
            consequatur minus, quod molestiae eveniet eum vel quaerat ab autem
            reprehenderit nostrum.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={"/assets/people.svg"}
            alt="Section Image"
            width={350}
            height={350}
            className="selection:bg-transparent"
          />
        </div>
      </section>

      <section className="mt-[12em] w-full flex justify-between sm:flex-nowrap flex-wrap items-center max-w-[1000px]">
        <div className="flex gap-24 w-full justify-between">
          <div className="w-full">
            <h1 className="text-2xl font-light text-[#ca8036]">Cultura</h1>
            <div className="border-t border-[#ca8036] w-[20px] my-6" />
            <p className="text-[#717171] font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              repudiandae similique quasi ea suscipit eveniet soluta odio
              dolorum, vitae, quod beatae commodi hic. Natus exercitationem
              reiciendis impedit maxime animi quod.
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-light text-[#ca8036]">Workplace</h1>
            <div className="border-t border-[#ca8036] w-[20px] my-6" />
            <p className="text-[#717171] font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              repudiandae similique quasi ea suscipit eveniet soluta odio
              dolorum, vitae, quod beatae commodi hic. Natus exercitationem
              reiciendis impedit maxime animi quod.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[12em] w-full flex justify-between sm:flex-nowrap flex-wrap items-center max-w-[1025px]">
        <div className="w-full flex justify-center">
          <Image
            src={"/assets/ambiente.svg"}
            alt="Section Image"
            width={350}
            height={350}
            className="selection:bg-transparent"
          />
        </div>
        <div className="w-full flex flex-col">
          <h1 className="w-full text-3xl font-semibold">Ambiente da Empresa</h1>
          <h3 className="w-full">Conheça como é o nosso ambiente!</h3>
          <p className="w-full mt-6 text-sm text-[#717171]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nam, aliquam magnam voluptate iusto pariatur omnis qui beatae
            consequatur minus, quod molestiae eveniet eum vel quaerat ab autem
            reprehenderit nostrum.
          </p>
        </div>
      </section>

      <section className="mt-[12em] w-full flex justify-between sm:flex-nowrap flex-wrap items-center max-w-[1025px]">
        <div className="w-full flex flex-col items-center">
          <h1 className="w-full text-3xl font-semibold">Como trabalhamos</h1>
          <h3 className="w-full">Conheça um pouco sobre nosso trabalho!</h3>
          <p className="w-full mt-6 text-sm text-[#717171]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nam, aliquam magnam voluptate iusto pariatur omnis qui beatae
            consequatur minus, quod molestiae eveniet eum vel quaerat ab autem
            reprehenderit nostrum.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={"/assets/work.svg"}
            alt="Section Image"
            width={350}
            height={350}
            className="selection:bg-transparent"
          />
        </div>
      </section>
    </div>
  );
};

export default page;

import { footerLinks } from "@/constants/footer";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bg-[#d3cdc6] w-full">
      <div className="border-[#675345] border-t-2 min-h-[400px] flex w-full pt-16 flex-col sm:flex-row">
        <div className="w-full xs:mb-12 flex flex-col items-center xs:justify-center">
          <h1 className="font-extrabold text- w-full flex justify-center ">
            BADUMTS - Lorem ipsum dolor sit amet
          </h1>
          <p className="mt-2 text-sm">Projeto de Website</p>
          <p className="text-sm">Feito por Vitor Gabriel Silva</p>
        </div>
        <div className="w-full flex gap-6 flex-wrap sm:flex-nowrap mt-16 sm:mt-0">
          {footerLinks.map((link: any, index: number) => (
            <div
              key={index}
              className="w-full flex flex-col gap-6 text-base min-w-[170px] justify-center items-center sm:justify-normal sm:items-start"
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((link: any, index: number) => (
                <Link key={index} href={link.url} className="text-sm">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

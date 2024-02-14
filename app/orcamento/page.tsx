"use client";

import { CIDADES_BRASIL } from "@/constants/json-cidades";
import { cellphoneMask } from "@/utils/cellphone";
import { cpfMask } from "@/utils/cpf";
import { isValidCPF } from "@/utils/cpf-validator";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");

  const [cellphone, setCellphone] = useState<string>("")
  const [cpf, setCpf] = useState<string>("");

  const [cidadesList, setCidadesList] = useState<any>([]);

  const buscaCidadesPorEstado = (estado: string) => {
    var estadoSelecionado: any = CIDADES_BRASIL.estados.find(
      (sigla) => sigla.sigla === estado
    );
    var cidades = estadoSelecionado.cidades;
    return cidades;
  };

  const verifyCPF = async (cpf: string) => {
    const valid: boolean | any = await isValidCPF(cpf);
    if (valid) {
      console.log("cpf valido")
    }

    const formatedCPF: string = await cpfMask(cpf);
    setCpf(formatedCPF);
  };

  const verifyCellphone = async (value: string) => {
    const formatedCellphone: string = await cellphoneMask(value);
    setCellphone(formatedCellphone);
  };

  const handleChangeEstado = (e: any) => {
    const estado = e.target.value;
    setState(estado); 
    const cidadesDoEstado = buscaCidadesPorEstado(estado);
    setCidadesList(cidadesDoEstado);
  };

  return (
    <div className="w-full flex flex-col items-center sm:p-[4%] p-6 max-w-[1375px]">
      <h1 className="text-3xl font-bold sm:my-0 my-10">Orçamento</h1>

      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          alert("Orçamento realizado*")
        }}
        className="sm:p-10 p-2 w-full rounded-lg flex flex-col"
      >
        <div className="w-full flex gap-6 justify-between sm:flex-nowrap flex-wrap">
          <div className="w-full">
            <label htmlFor="cpf" className="text-sm mt-6">
              CPF <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="text"
              name="cpf"
              id="cpf"
              minLength={11}
              maxLength={14}
              className="bg-[#ffffff8c] outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Informe seu CPF"
              spellCheck={false}
              value={cpf}
              onChange={(e) => verifyCPF(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="empresa" className="text-sm mt-6">
              Empresa <span className="text-[#ca8036]">*</span>
            </label>
            <input
            maxLength={40}
              type="text"
              name="empresa"
              id="empresa"
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Coloque aqui o nome da empresa"
              spellCheck={false}
              required
            />
          </div>
        </div>

        <div className="w-full flex gap-6 justify-between mt-8 sm:flex-nowrap flex-wrap">
          <div className="w-full">
            <label htmlFor="email" className="text-sm mt-6">
              Endereço <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              maxLength={40}
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Informe seu endereço"
              spellCheck={false}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="sm:w-[350px] w-full">
            <label htmlFor="cidade" className="text-sm mt-6">
              Cidade <span className="text-[#ca8036]">*</span>
            </label>
            <select
              name="cidade"
              id="cidade"
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              onChange={(e) => setCity(e.target.value)}
              spellCheck={false}
              required
            >
              <option value="">Selecione um estado primeiro</option>
              {cidadesList.map((cidade: any) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:w-[350px] w-full">
            <label htmlFor="estado" className="text-sm mt-6">
              Estado <span className="text-[#ca8036]">*</span>
            </label>
            <select
              name="estado"
              id="estado"
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              onChange={handleChangeEstado}
              spellCheck={false}
              required
            >
              <option value="">Selecione um estado</option>
              {CIDADES_BRASIL.estados.map((estado: any) => (
                <option key={estado.sigla} value={estado.sigla}>
                  {estado.nome}
                </option>
              ))}
            </select>
          </div>
        </div>

        <label htmlFor="name" className="text-sm mt-8 flex-wrap sm:flex-nowrap">
          Seu nome completo <span className="text-[#ca8036]">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          maxLength={60}
          className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1"
          autoComplete="off"
          placeholder="Informe seu nome completo"
          spellCheck={false}
          required
        />

        <div className="w-full flex gap-6 justify-between mt-8 flex-wrap sm:flex-nowrap">
          <div className="w-full">
            <label htmlFor="cargo" className="text-sm mt-6">
              Cargo <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="text"
              name="cargo"
              id="cargo"
              maxLength={40}
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Seu cargo na empresa"
              spellCheck={false}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-sm mt-6">
              E-Mail <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              maxLength={50}
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Insira seu email"
              spellCheck={false}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="telefone" className="text-sm mt-6">
              Telefone <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              maxLength={15}
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Informe seu telefone"
              onChange={(e) => verifyCellphone(e.target.value)}
              value={cellphone}
              spellCheck={false}
              required
            />
          </div>
        </div>

        <div className="flex gap-10 items-center justify-center w-full my-12 sm:flex-nowrap flex-wrap">
          <div className="flex flex-col items-center p-2">
            <Image
              src={"/assets/pallet.png"}
              alt="Option Image"
              width={150}
              height={150}
            />
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                id="type"
                className="h-4 w-4 mt-2"
              />
              <span className="text-sm mt-2">Produto 1</span>
            </div>
          </div>
          <div className="flex flex-col items-center p-2">
            <Image
              src={"/assets/pallet.png"}
              alt="Option Image"
              width={150}
              height={150}
            />
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                id="type"
                className="h-4 w-4 mt-2"
              />
              <span className="text-sm mt-2">Produto 2</span>
            </div>
          </div>
          <div className="flex flex-col items-center p-2">
            <Image
              src={"/assets/pallet.png"}
              alt="Option Image"
              width={150}
              height={150}
            />
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                id="type"
                className="h-4 w-4 mt-2"
              />
              <span className="text-sm mt-2">Produto 3</span>
            </div>
          </div>
          <div className="flex flex-col items-center p-2">
            <Image
              src={"/assets/pallet.png"}
              alt="Option Image"
              width={150}
              height={150}
            />
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                id="type"
                className="h-4 w-4 mt-2"
              />
              <span className="text-sm mt-2">Produto 4</span>
            </div>
          </div>
          <div className="flex flex-col items-center p-2">
            <Image
              src={"/assets/pallet.png"}
              alt="Option Image"
              width={150}
              height={150}
            />
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                id="type"
                className="h-4 w-4 mt-2"
              />
              <span className="text-sm mt-2">Produto 5</span>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-6 justify-between mt-8 sm:flex-nowrap flex-wrap">
          <div className="w-full">
            <label htmlFor="quantidade" className="text-sm mt-6">
              Quantidade <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="number"
              name="quantidade"
              id="quantidade"
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Informe a quantidade desejada"
              spellCheck={false}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="comprimento" className="text-sm mt-6">
              Comprimento (mm) <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="number"
              name="comprimento"
              id="comprimento"
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Informe o comprimento desejado"
              spellCheck={false}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="largura" className="text-sm mt-6">
              Largura (mm) <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="number"
              name="largura"
              id="largura"
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Informe a largura desejada"
              spellCheck={false}
              required
            />
          </div>
        </div>

        <div className="w-full flex gap-6 justify-between mt-8 sm:flex-nowrap flex-wrap">
          <div className="w-full">
            <label htmlFor="altura" className="text-sm mt-6">
              Altura (mm) <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="number"
              name="altura"
              id="altura"
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Informe a altura desejada"
              spellCheck={false}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="espacamento" className="text-sm mt-6">
              Espaçamento (mm) <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="number"
              name="espacamento"
              id="espacamento"
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Informe o espaçamento desejado"
              spellCheck={false}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="peso" className="text-sm mt-6">
              Peso do Produto (kg) <span className="text-[#ca8036]">*</span>
            </label>
            <input
              type="number"
              name="peso"
              id="peso"
              className="outline-none text-[#717171] py-2 border-b-2 border-slate-200 text-sm transition-all duration-300 focus:border-[#ca8036] bg-[#ffffff8c] px-2 mt-1 w-full"
              autoComplete="off"
              placeholder="Informe o peso desejado"
              spellCheck={false}
              required
            />
          </div>
        </div>

        <div className="w-full flex gap-6 justify-between mt-8 sm:flex-nowrap flex-wrap">
          <div className="w-full">
            <label htmlFor="material" className="text-sm mt-6 mb-6">
              Material
            </label>
            <div className="flex gap-2 items-center my-2">
              <input
                type="radio"
                name="material"
                id="material"
                className="cursor-pointer"
              />
              <span className="text-sm text-[#717171]">Pinus</span>
            </div>
            <div className="flex gap-2 items-center my-2">
              <input
                type="radio"
                name="material"
                id="material"
                className="cursor-pointer"
              />
              <span className="text-sm text-[#717171]">Eucalipto</span>
            </div>
            <div className="flex gap-2 items-center my-2">
              <input
                type="radio"
                name="material"
                id="material"
                className="cursor-pointer"
              />
              <span className="text-sm text-[#717171]">Compensado</span>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="acabamento" className="text-sm mt-6 mb-6">
              Acabamento
            </label>
            <div className="flex gap-2 items-center my-2">
              <input
                type="radio"
                name="acabamento"
                id="acabamento"
                className="cursor-pointer"
              />
              <span className="text-sm text-[#717171]">Madeira aparelhada</span>
            </div>
            <div className="flex gap-2 items-center my-2">
              <input
                type="radio"
                name="acabamento"
                id="acabamento"
                className="cursor-pointer"
              />
              <span className="text-sm text-[#717171]">Madeira bruta</span>
            </div>
            <div className="flex gap-2 items-center my-2">
              <input
                type="radio"
                name="acabamento"
                id="acabamento"
                className="cursor-pointer"
              />
              <span className="text-sm text-[#717171]">Cantos cortados</span>
            </div>
            <div className="flex gap-2 items-center my-2">
              <input
                type="radio"
                name="acabamento"
                id="acabamento"
                className="cursor-pointer"
              />
              <span className="text-sm text-[#717171]">Chanfro</span>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="fumigacao" className="text-sm mt-6 mb-6">
              Tratamento HT
            </label>
            <div className="flex gap-2 items-center my-2">
              <input
                type="radio"
                name="fumigacao"
                id="fumigacao"
                className="cursor-pointer"
              />
              <span className="text-sm text-[#717171]">Sim</span>
            </div>
            <div className="flex gap-2 items-center my-2">
              <input
                type="radio"
                name="fumigacao"
                id="fumigacao"
                className="cursor-pointer"
              />
              <span className="text-sm text-[#717171]">Não</span>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="projeto" className="text-sm mt-6 mb-6">
              Meu projeto em PDF
            </label>
            <div className="p-6 w-full border-dashed border border-neutral-400 mt-2">
              <input
                type="file"
                name="pdf"
                id="pdf"
                className="text-sm cursor-pointer"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-20 bg-[#ca8036] rounded-xl px-4 py-2 text-white text-center cursor-pointer transition-all duration-300 hover:bg-[#bd7833]"
        >
          Calcular meu Orçamento
        </button>
      </form>
    </div>
  );
};

export default page;

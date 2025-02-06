import { Instagram, Location, Whatsapp } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black/90  items-center bg-bg-image flex-col bg-cover overflow-auto pt-24">
      <Image
        src={"/logo_c.svg"}
        alt="Logo do C"
        height={150}
        width={150}
        className="w-[35%]"
      />
      <p className="flex text-white-main font-varien mt-4 text-xl">
        Cold Suplementos
      </p>
      <div className="flex flex-row gap-x-3 mt-2">
        <a
          href="https://wa.me/5588992449842"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp size="32" color="#ADEA28" variant="Bulk" />
        </a>
        <a
          href="https://www.instagram.com/coldsuplementos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size="32" color="#ADEA28" variant="Bulk" />
        </a>
        <a
          href="https://www.google.com/maps/place/R.+Afonso+Ribeiro,+618+-+Centro,+Miss%C3%A3o+Velha+-+CE,+63200-000/@-7.2494051,-39.142423,15z/data=!4m6!3m5!1s0x7a164daf440ec8d:0xd556360927ea6d4d!8m2!3d-7.2494051!4d-39.142423!16s%2Fg%2F11w2cmqr81?hl=pt-br&entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Location size="32" color="#ADEA28" variant="Bulk" />
        </a>
      </div>
      <div className="flex w-full flex-col items-center mt-7">
        <p className="flex text-white-main font-jura text-center w-full justify-center text-sm">
          Cadastre-se em nosso sistema de pontos!
        </p>
        <a
          href="https://www.v2.donuz.co/ColdSuplementos"
          className="flex w-full items-center justify-center"
        >
          <Image
            src={"/images/banner-email.jpg"}
            alt="Logo do C"
            height={1200}
            width={500}
            className="w-3/4 rounded-md flex shadow-black/30 shadow-lg mt-2"
          />
        </a>
      </div>
      <div className="flex flex-col mt-4 items-center justify-center max-w-full">
        <p className="flex text-white-main font-jura text-center w-full justify-center text-sm ">
          Confira nossas postagens
        </p>
        <div className="flex flex-row gap-x-3 justify-start w-full overflow-x-auto px-12 hide-scrollbar">
          <Image
            src={"/images/pre-treino.png"}
            alt="Logo do C"
            height={1350}
            width={1075}
            className="max-w-[35%] rounded-md flex shadow-black/30 shadow-lg mt-2 "
          />
          <Image
            src={"/images/pre-treino.png"}
            alt="Logo do C"
            height={1350}
            width={1075}
            className="max-w-[35%] rounded-md flex shadow-black/30 shadow-lg mt-2 "
          />
          <Image
            src={"/images/pre-treino.png"}
            alt="Logo do C"
            height={1350}
            width={1075}
            className="max-w-[35%] rounded-md flex shadow-black/30 shadow-lg mt-2 "
          />
          <Image
            src={"/images/pre-treino.png"}
            alt="Logo do C"
            height={1350}
            width={1075}
            className="max-w-[35%] rounded-md flex shadow-black/30 shadow-lg mt-2 "
          />
        </div>
      </div>

      <div className="overflow-hidden relative top-16">
        <div className="flex animate-marquee">
          <div className="flex gap-x-4">
            <Image
              src="/images/carrossel/Produtos_01.jpg"
              alt="Imagem 1"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_02.jpg"
              alt="Imagem 2"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_03.jpg"
              alt="Imagem 3"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_04.jpg"
              alt="Imagem 4"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_05.jpg"
              alt="Imagem 4"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_06.jpg"
              alt="Imagem 4"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_07.jpg"
              alt="Imagem 4"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_10.jpg"
              alt="Imagem 4"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_01.jpg"
              alt="Imagem 1"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_02.jpg"
              alt="Imagem 2"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_03.jpg"
              alt="Imagem 3"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_04.jpg"
              alt="Imagem 4"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_05.jpg"
              alt="Imagem 4"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_06.jpg"
              alt="Imagem 4"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_07.jpg"
              alt="Imagem 4"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
            <Image
              src="/images/carrossel/Produtos_10.jpg"
              alt="Imagem 4"
              height={50}
              width={50}
              className="rounded-md shadow-black/30 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

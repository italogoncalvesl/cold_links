import { Instagram, Location, Whatsapp } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black/90 justify-center items-center bg-bg-image flex-col bg-cover overflow-auto">
      <Image src={"/logo_c.svg"} alt="Logo do C" height={160} width={160} />
      <p className="flex text-white-main font-varien mt-4 text-xl">
        Cold Suplementos
      </p>
      <div className="flex flex-row gap-x-3 mt-2">
        <Whatsapp size="32" color="#ADEA28" variant="Bulk" />
        <Instagram size="32" color="#ADEA28" variant="Bulk" />
        <Location size="32" color="#ADEA28" variant="Bulk" />
      </div>
      <div className="flex w-full flex-col items-center mt-7">
        <p className="flex text-white-main font-jura text-center w-full justify-center text-sm">
          Cadastre-se em nosso sistema de pontos!
        </p>
        <Image
          src={"/images/banner-email.jpg"}
          alt="Logo do C"
          height={1200}
          width={500}
          className="w-3/4 rounded-md flex shadow-black/30 shadow-lg mt-2"
        />
      </div>
      <div className="flex flex-col mt-4 items-center justify-center max-w-full mt-7">
        <p className="flex text-white-main font-jura text-center w-full justify-center text-sm ">
          Confira nossas postagens
        </p>
        <div className="flex flex-row gap-x-3 justify-start w-full overflow-x-auto px-12 hide-scrollbar">
          <Image
            src={"/images/pre-treino.png"}
            alt="Logo do C"
            height={1350}
            width={1075}
            className="max-w-[40%] rounded-md flex shadow-black/30 shadow-lg mt-2 "
          />
          <Image
            src={"/images/pre-treino.png"}
            alt="Logo do C"
            height={1350}
            width={1075}
            className="max-w-[40%] rounded-md flex shadow-black/30 shadow-lg mt-2 "
          />
          <Image
            src={"/images/pre-treino.png"}
            alt="Logo do C"
            height={1350}
            width={1075}
            className="max-w-[40%] rounded-md flex shadow-black/30 shadow-lg mt-2 "
          />
          <Image
            src={"/images/pre-treino.png"}
            alt="Logo do C"
            height={1350}
            width={1075}
            className="max-w-[40%] rounded-md flex shadow-black/30 shadow-lg mt-2 "
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

"use client";

import {
  Coin1,
  Crown1,
  EmptyWallet,
  Instagram,
  Location,
  Whatsapp,
} from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen bg-black/90 items-center bg-bg-image flex-col bg-cover overflow-auto pt-12 lg:pt-8">
      <Image
        src={"/logo_c.svg"}
        alt="Logo do C"
        height={150}
        width={150}
        className="w-[35%] md:w-[25%] lg:w-[12%] xl:w-[10%]"
        priority
      />
      <p className="flex text-white-main font-varien mt-4 text-xl">
        Cold Suplementos
      </p>
      <div className="block 2xl:hidden">
        <div className="flex flex-row gap-x-3 mt-2">
          <a
            href="https://wa.me/5588992329487"
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
      </div>
      <div className="hidden 2xl:block">
        <div className="flex flex-row gap-x-3 mt-2">
          <a
            href="https://wa.me/5588992329487"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsapp size="42" color="#ADEA28" variant="Bulk" />
          </a>
          <a
            href="https://www.instagram.com/coldsuplementos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size="42" color="#ADEA28" variant="Bulk" />
          </a>
          <a
            href="https://www.google.com/maps/place/R.+Afonso+Ribeiro,+618+-+Centro,+Miss%C3%A3o+Velha+-+CE,+63200-000/@-7.2494051,-39.142423,15z/data=!4m6!3m5!1s0x7a164daf440ec8d:0xd556360927ea6d4d!8m2!3d-7.2494051!4d-39.142423!16s%2Fg%2F11w2cmqr81?hl=pt-br&entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Location size="42" color="#ADEA28" variant="Bulk" />
          </a>
        </div>
      </div>
      <div className="flex flex-col px-10 w-full md:w-[80%] lg:w-[50%] 2xl:w-[35%] mt-8 gap-y-6">
        <div className=" border-verde border-2 flex w-full rounded-lg py-3 bg-verde/5 items-center px-6">
          <Whatsapp size="42" color="#ADEA28" variant="Bold" />
          <div className="flex flex-col ml-6">
            <p className="font-varien text-lg">WhatsApp</p>
            <div>
              <p className="font-jura text-sm">
                Atendimento personalizado para te ajudar com seus objetivos
              </p>
            </div>
          </div>
        </div>
        <div className=" border-verde border-2 flex w-full rounded-lg py-3 bg-verde/5 items-center px-6">
          <Crown1 size="42" color="#ADEA28" variant="Bold" />
          <div className="flex flex-col ml-6">
            <p className="font-varien text-lg">Grupo vip</p>
            <div>
              <p className="font-jura text-sm">
                Entre no Grupo VIP da Cold para receber condiçõe exclusivas!
              </p>
            </div>
          </div>
        </div>
        <div className=" border-verde border-2 flex w-full rounded-lg py-3 bg-verde/5 items-center px-6">
          <Coin1 size="42" color="#ADEA28" variant="Bold" />
          <div className="flex flex-col ml-6">
            <p className="font-varien text-lg">Promoções</p>
            <div>
              <p className="font-jura text-sm">
                Clique para receber as promoções ativas hoje!
              </p>
            </div>
          </div>
        </div>
        <div className=" border-verde border-2 flex w-full rounded-lg py-3 bg-verde/5 items-center px-6">
          <EmptyWallet size="42" color="#ADEA28" variant="Bold" />
          <div className="flex flex-col ml-6">
            <p className="font-varien text-lg">Cold Points</p>
            <div>
              <p className="font-jura text-sm">
                Receba premiações em suas compras, clique para se cadastrar!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/logo_horizontal.svg"}
        height={80}
        width={200}
        alt="Logo da Cold"
        className="flex w-[40%] mt-4 md:w-[25%] lg:w-[12%]"
      />
    </div>
  );
}

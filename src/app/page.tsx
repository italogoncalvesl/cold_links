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

const links = [
  {
    href: "https://wa.me/5588992329487",
    icon: Whatsapp,
  },
  {
    href: "https://www.instagram.com/coldsuplementos/",
    icon: Instagram,
  },
  {
    href: "https://maps.app.goo.gl/DeovNtaDQho5KQi78",
    icon: Location,
  },
];

const items = [
  {
    icon: Whatsapp,
    title: "WhatsApp",
    href: "https://wa.me/5588992329487",
    text: "Atendimento personalizado para te ajudar com seus objetivos",
  },
  {
    icon: Crown1,
    title: "Grupo vip",
    href: "https://chat.whatsapp.com/E8YRh5eM34UF7unEyAvjLx",
    text: "Entre no Grupo VIP da Cold para receber condiçõe exclusivas!",
  },
  {
    icon: Coin1,
    title: "Promoções",
    href: "https://wa.me/5588992329487",
    text: "Clique para receber nossas promoções ativas e as exclusivas!",
  },
  {
    icon: EmptyWallet,
    title: "Cold Points",
    href: "https://www.v2.donuz.co/ColdSuplementos/login",
    text: "Receba premiações em suas compras, clique para se cadastrar!",
  },
];

export default function Home() {
  return (
    <div className="flex h-screen bg-black/90 items-center bg-bg-image flex-col bg-cover overflow-auto justify-between py-10 lg:py-5">
      <div className="flex flex-col items-center">
        <Image
          src={"/logo_c.svg"}
          alt="Logo do C"
          height={150}
          width={150}
          className="w-[30%] md:w-[25%] lg:w-[10%] xl:w-[10%]"
          priority
        />
        <p className="flex text-white-main font-varien text-xl mt-1 md:mt-4 md:text-2xl lg:text-xl 2xl:text-2xl">
          Cold Suplementos
        </p>
        <div className="flex flex-row gap-x-3 md:mt-2 lg:mt-1">
          {links.map(({ href, icon: Icon }, idx) => (
            <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
              <Icon
                size="42"
                color="#ADEA28"
                variant="Bulk"
                className="w-8 md:w-12 lg:w-8"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col px-10 w-full md:w-[80%] lg:w-[50%] 2xl:w-[30%] gap-y-6 my-4">
        <div className="w-full flex flex-col gap-y-5">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                href={item.href}
                key={index}
                className="border-verde border-2 flex w-full rounded-lg py-3 bg-verde/5 items-center px-6"
              >
                <Icon
                  size="42"
                  color="#ADEA28"
                  variant="Bold"
                  className="w-20"
                />
                <div className="flex flex-col ml-6">
                  <p className="font-varien text-lg">{item.title}</p>
                  <p className="font-jura text-sm">{item.text}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Image
        src={"/logo_horizontal.svg"}
        height={80}
        width={200}
        alt="Logo da Cold"
        className="flex w-[40%] md:w-[25%] lg:w-[9%] 2xl:w-[10%]"
      />
    </div>
  );
}

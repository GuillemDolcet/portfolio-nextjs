'use client'

import Image from "next/image";
import TypedText from "@/components/ui/Typed";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import { IconCircleArrowDown, IconArrowNarrowDown } from '@tabler/icons-react';

export default function Home() {
    const translations = useTranslations('Home');

    return (
        <main
            className="font-main bg-primary grid grid-rows-[20px_1fr_20px] justify-items-center items-center min-h-screen p-8 sm:p-20">
            <section
                className="flex lg:flex-row flex-col justify-between sm:gap-[32px] gap-[16px] row-start-2 items-center xl:w-9/12 w-11/12">
                <div
                    className="flex flex-col sm:gap-[32px] gap-[16px] lg:order-none order-1 lg:basis-[70%] lg:justify-normal lg:items-baseline items-center">
                    <h1 className="sm:text-5xl text-3xl font-light uppercase">{translations('hello')}</h1>
                    <h2 className="lg:text-8xl sm:text-7xl text-5xl font-semibold uppercase">
                        <TypedText
                            words={[translations('fullstack'), translations('software'), translations('engineer')]}
                        />
                    </h2>
                    <p className="sm:text-2xl text-center">{translations('established')}</p>
                    <div className="flex flex-col sm:flex-row gap-[16px] items-center">
                        <Button
                            type="button"
                            className="cursor-pointer text-white bg-[#212529] hover:bg-[#424649]/90 duration-300 font-semibold shadow-lg px-10 py-3.5 text-center inline-flex items-center">
                            {translations('look')}
                        </Button>
                        <Button
                            type="button"
                            className="text-1xl text-neutral-800 cursor-pointer font-semibold px-10 py-3.5 text-center inline-flex items-center underline hover:no-underline">
                            {translations('contact_me')} <IconCircleArrowDown className="ms-2" stroke={2}/>
                        </Button>
                    </div>
                </div>
                <div className="lg:basis-[30%] flex justify-center items-center">
                    <div className="bg-white rounded-full shadow-lg p-3">
                        <Image
                            className="rounded-full"
                            src="/images/main-image.png"
                            alt="Guillem Dolcet main photo"
                            width={275}
                            height={275}
                            priority
                        />
                    </div>
                </div>
            </section>
            <a href="#about" className="absolute z-30 bottom-5 left-1/2 ml-4 w-8 h-8 leading-[32px] text-[20px] text-center">
                <IconArrowNarrowDown className="relative animate-fadeInDown" stroke={2} />
            </a>
        </main>
    );
}

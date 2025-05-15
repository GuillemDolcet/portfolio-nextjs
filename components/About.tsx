'use client'

import {useTranslations} from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import {useMemo} from "react";
import Link from "next/link";

export default function About() {
    const translations = useTranslations('About');

    const birthDate = new Date('2001-09-18');
    const age = useMemo(() => {
        const today = new Date();
        let years = today.getFullYear() - birthDate.getFullYear();
        const hasHadBirthdayThisYear =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (!hasHadBirthdayThisYear) {
            years--;
        }

        return years;
    }, []);

    const experienceStart = new Date('2020-06-01');
    const yearsExperience = useMemo(() => {
        const today = new Date();

        return today.getFullYear() - experienceStart.getFullYear();
    }, []);

    return (
        <main
            className="font-main flex flex-col justify-center justify-items-center items-center p-8 sm:p-20 gap-[16px]">
            <SectionHeader>{translations('header')}</SectionHeader>
            <SectionTitle>{translations('title')}</SectionTitle>
            <section
                id="about"
                className="flex flex-col justify-between sm:gap-[32px] gap-[16px] row-start-2 items-center xl:w-9/12 w-11/12 mt-6">
                <div className="flex lg:flex-row flex-col justify-center items-center gap-[16px]">
                    <div className="lg:basis-[75%]">
                        <h2 className="text-3xl text-center lg:text-start">{translations('hello')} <span className="font-bold border-b-3 border-b-(--primary-color)">Guillem Dolcet</span></h2>
                        <p className="text-2xl mt-5 text-justify">{translations('text')}</p>
                    </div>
                    <div className="lg:basis-[25%] flex flex-col justify-center items-center">
                        <h2 className="font-semibold text-9xl">{yearsExperience}</h2>
                        <p className="font-medium text-xl text-center">{translations('years_of')} <span className="font-bold">{translations('experience')}</span></p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 w-full">
                    <div className="text-left lg:justify-self-start">
                        <p className="font-semibold color-secondary text-lg">{translations('email')}</p>
                        <p className="font-semibold text-xl underline">
                            <Link href="mailto:g.dolcet.jove@gmail.com">g.dolcet.jove@gmail.com</Link>
                        </p>
                    </div>
                    <div className="text-left md:text-right md:justify-self-end">
                        <p className="font-medium color-secondary text-lg">{translations('phone')}</p>
                        <p className="font-semibold text-xl">+34 634 490 171</p>
                    </div>
                    <div className="text-left md:justify-self-start">
                        <p className="font-semibold color-secondary text-lg">{translations('age')}</p>
                        <p className="font-semibold text-xl">{age} {translations('years')}</p>
                    </div>
                    <div className="text-left md:text-right md:justify-self-end">
                        <p className="font-semibold color-secondary text-lg">{translations('location')}</p>
                        <p className="font-semibold text-xl">Barcelona, Cataluña, España</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

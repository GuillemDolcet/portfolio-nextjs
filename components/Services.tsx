'use client'

import {useTranslations} from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

export default function Services() {
    const translations = useTranslations('Services');

    return (
        <section
            id="services"
            className="font-main flex flex-col justify-center justify-items-center items-center p-8 sm:p-20 gap-[16px] bg-gray-100 text-center">
            <SectionHeader>{translations('header')}</SectionHeader>
            <SectionTitle>{translations('title')}</SectionTitle>
            <div className="flex lg:flex-row flex-col justify-center items-center xl:w-7/12 lg:w-full w-1/2 gap-[32px] mt-14 text-2xl">
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="images/services/applications.svg"
                        alt={translations('applications')}
                        width={50}
                        height={50}
                        />
                    <span className="font-semibold mt-8">{translations('applications')}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="images/services/maintenance.svg"
                        alt={translations('maintenance')}
                        width={50}
                        height={50}
                    />
                    <span className="font-semibold mt-8">{translations('maintenance')}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="images/services/api.svg"
                        alt={translations('api')}
                        width={50}
                        height={50}
                    />
                    <span className="font-semibold mt-8">{translations('api')}</span>
                </div>
            </div>
        </section>
    );
}

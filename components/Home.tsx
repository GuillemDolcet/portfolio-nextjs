'use client'

import Image from "next/image";
import TypedText from "@/components/ui/Typed";
import {useTranslations} from "next-intl"
import Button from "@/components/ui/Button";

export default function Home() {
    const translations = useTranslations('Home');

    return (
        <div
            className="font-main bg-primary grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className="flex xl:flex-row flex-col justify-between gap-[32px] row-start-2 items-center justify-items-center w-9/12">
                <div className="flex flex-col gap-[32px] xl:order-none order-1 xl:basis-[70%]">
                    <div className="text-5xl font-normal uppercase">{ translations('hello') }</div>
                    <div className="text-8xl font-bold uppercase">
                        <TypedText words={[translations('fullstack'), translations('software'), translations('engineer')]} />
                    </div>
                    <div className="text-2xl">{ translations('established') }</div>
                    <div className="flex flex-col xl:flex-row gap-[32px]">
                        <div>
                            <Button
                                type="button"
                                className="cursor-pointer text-white bg-[#212529] hover:bg-[#424649]/90 font-semibold shadow-lg px-10 py-3.5 text-center inline-flex items-center me-2 mb-2">
                                { translations('look') }
                            </Button>
                        </div>
                        <div>adeu</div>
                    </div>
                </div>
                <div className="xl:basis-[30%] flex justify-center items-center">
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
            </div>
        </div>
    );
}

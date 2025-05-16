'use client'

import {useTranslations} from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import Experience from "@/components/ui/Experiencie";
import Skill from "@/components/ui/Skill";

export default function Cv() {
    const translations = useTranslations('Cv');

    return (
        <section
            id="cv"
            className="font-main flex flex-col justify-center justify-items-center items-center p-8 sm:p-20 gap-[16px] text-center">
            <SectionHeader>{translations('header')}</SectionHeader>
            <SectionTitle>{translations('title')}</SectionTitle>
            <div className="flex lg:flex-row flex-col gap-[32px] mt-8 justify-between xl:w-9/12 w-11/12 text-left">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-semibold mb-5">{translations('my_education')}</h2>
                    <div className="flex flex-col border-l-2 border-l-(--primary-color) ps-3 gap-[8px]">
                        <Experience
                            title={translations('title_second_education')}
                            place={"Institut Almatà"}
                            period={"2019 - 2021"}
                            description={translations('desc_second_education')}
                            skills={
                                [
                                    {
                                        name: 'PHP',
                                        imagePath: '/images/skills/php.svg'
                                    },
                                    {
                                        name: 'SQL',
                                        imagePath: '/images/skills/sql.svg'
                                    },
                                    {
                                        name: 'Java',
                                        imagePath: '/images/skills/java.svg'
                                    },
                                    {
                                        name: 'Javascript',
                                        imagePath: '/images/skills/js.svg'
                                    },
                                    {
                                        name: 'HTML',
                                        imagePath: '/images/skills/html.svg'
                                    },
                                    {
                                        name: 'CSS',
                                        imagePath: '/images/skills/css.svg'
                                    },
                                    {
                                        name: 'Wordpress',
                                        imagePath: '/images/skills/wordpress.svg'
                                    }
                                ]
                            }
                        />
                        <Experience
                            title={translations('title_first_education')}
                            place={"Institut Almatà"}
                            period={"2017 - 2019"}
                            description={translations('desc_first_education')}
                            skills={
                                [
                                    {
                                        name: 'HTML',
                                        imagePath: '/images/skills/html.svg'
                                    },
                                    {
                                        name: 'CSS',
                                        imagePath: '/images/skills/css.svg'
                                    },
                                    {
                                        name: 'Wordpress',
                                        imagePath: '/images/skills/wordpress.svg'
                                    }
                                ]
                            }
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-3xl font-semibold mb-5">{translations('my_experience')}</h2>
                    <div className="flex flex-col border-l-2 border-l-(--primary-color) ps-3 gap-[16px]">
                        <Experience
                            title={translations('title_third_experience')}
                            place={"TÜV Rheinland"}
                            period={`2024 - ${translations('currently')}`}
                            description={translations('desc_third_experience')}
                            skills={
                                [
                                    {
                                        name: 'Laravel',
                                        imagePath: '/images/skills/laravel.svg'
                                    },
                                    {
                                        name: 'PHP',
                                        imagePath: '/images/skills/php.svg'
                                    },
                                    {
                                        name: 'API',
                                        imagePath: '/images/skills/api.svg'
                                    },
                                    {
                                        name: 'JavaScript',
                                        imagePath: '/images/skills/js.svg'
                                    },
                                    {
                                        name: 'SQL',
                                        imagePath: '/images/skills/sql.svg'
                                    },
                                    {
                                        name: 'React',
                                        imagePath: '/images/skills/react.svg'
                                    },
                                    {
                                        name: 'Nextjs',
                                        imagePath: '/images/skills/nextjs.svg'
                                    },
                                    {
                                        name: 'Docker',
                                        imagePath: '/images/skills/docker.svg'
                                    },
                                    {
                                        name: 'Git',
                                        imagePath: '/images/skills/git.svg'
                                    },
                                    {
                                        name: 'Tailwind',
                                        imagePath: '/images/skills/tailwind.svg'
                                    },
                                    {
                                        name: 'CI/CD',
                                        imagePath: '/images/skills/ci_cd.svg'
                                    },
                                    {
                                        name: 'Java',
                                        imagePath: '/images/skills/java.svg'
                                    }
                                ]
                            }
                        />
                        <Experience
                            title={translations('title_second_experience')}
                            place={"INSON S.A."}
                            period={"2023 - 2024"}
                            description={translations('desc_second_experience')}
                            skills={
                                [
                                    {
                                        name: 'Laravel',
                                        imagePath: '/images/skills/laravel.svg'
                                    },
                                    {
                                        name: 'PHP',
                                        imagePath: '/images/skills/php.svg'
                                    },
                                    {
                                        name: 'API',
                                        imagePath: '/images/skills/api.svg'
                                    },
                                    {
                                        name: 'JavaScript',
                                        imagePath: '/images/skills/js.svg'
                                    },
                                    {
                                        name: 'SQL',
                                        imagePath: '/images/skills/sql.svg'
                                    },
                                    {
                                        name: 'React',
                                        imagePath: '/images/skills/react.svg'
                                    },
                                    {
                                        name: 'Nextjs',
                                        imagePath: '/images/skills/nextjs.svg'
                                    },
                                    {
                                        name: 'Docker',
                                        imagePath: '/images/skills/docker.svg'
                                    },
                                    {
                                        name: 'Git',
                                        imagePath: '/images/skills/git.svg'
                                    },
                                    {
                                        name: 'Tailwind',
                                        imagePath: '/images/skills/tailwind.svg'
                                    },
                                    {
                                        name: 'CI/CD',
                                        imagePath: '/images/skills/ci_cd.svg'
                                    },
                                    {
                                        name: 'Vue',
                                        imagePath: '/images/skills/vue.svg'
                                    }
                                ]
                            }
                        />
                        <Experience
                            title={translations('title_first_experience')}
                            place={"CompsaOnline S.L."}
                            period={"2020 - 2023"}
                            description={translations('desc_first_experience')}
                            skills={
                                [
                                    {
                                        name: 'Laravel',
                                        imagePath: '/images/skills/laravel.svg'
                                    },
                                    {
                                        name: 'PHP',
                                        imagePath: '/images/skills/php.svg'
                                    },
                                    {
                                        name: 'API',
                                        imagePath: '/images/skills/api.svg'
                                    },
                                    {
                                        name: 'JavaScript',
                                        imagePath: '/images/skills/js.svg'
                                    },
                                    {
                                        name: 'SQL',
                                        imagePath: '/images/skills/sql.svg'
                                    },
                                    {
                                        name: 'Docker',
                                        imagePath: '/images/skills/docker.svg'
                                    },
                                    {
                                        name: 'Git',
                                        imagePath: '/images/skills/git.svg'
                                    },
                                    {
                                        name: 'CI/CD',
                                        imagePath: '/images/skills/ci_cd.svg'
                                    },
                                    {
                                        name: 'Wordpress',
                                        imagePath: '/images/skills/wordpress.svg'
                                    }
                                ]
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[32px] mt-8 justify-between xl:w-9/12 w-11/12 text-left">
                <h2 className="text-3xl font-semibold mb-2">{translations('my_skills')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] w-full">
                    <Skill name={"Laravel"} imagePath={"/images/skills/laravel.svg"} percentage={95} />
                    <Skill name={"PHP"} imagePath={"/images/skills/php.svg"} percentage={95} />
                    <Skill name={"API"} imagePath={"/images/skills/api.svg"} percentage={85} />
                    <Skill name={"Javascript"} imagePath={"/images/skills/js.svg"} percentage={85} />
                    <Skill name={"SQL"} imagePath={"/images/skills/sql.svg"} percentage={85} />
                    <Skill name={"Docker"} imagePath={"/images/skills/docker.svg"} percentage={80} />
                    <Skill name={"Git"} imagePath={"/images/skills/git.svg"} percentage={80} />
                    <Skill name={"React"} imagePath={"/images/skills/react.svg"} percentage={75} />
                    <Skill name={"Nextjs"} imagePath={"/images/skills/nextjs.svg"} percentage={75} />
                    <Skill name={"CI/CD"} imagePath={"/images/skills/ci_cd.svg"} percentage={60} />
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";

type ExperienceProps = {
    title: string;
    period: string;
    place: string;
    description: string;
    skills: {
        name: string;
        imagePath: string;
    }[];
};

const Experience = ({ title, period, place, description, skills }: ExperienceProps) => {
    return (
        <div className="flex flex-col gap-2 border-b-1 border-gray-200 pb-3">
            <h3 className="text-xl font-medium">{title}</h3>
            <span>{place} / {period}</span>
            <p className="text-secondary text-gray-500">{description}</p> {/* Usa tu clase o define esta en tu CSS */}
            <div className="flex flex-wrap gap-[16px] p-3">
                {skills.map((skill) => (
                    <Image
                        key={skill.name}
                        src={skill.imagePath}
                        title={skill.name}
                        alt={skill.name}
                        width={32}
                        height={32}
                    />
                ))}
            </div>
        </div>
    );
};

export default Experience;

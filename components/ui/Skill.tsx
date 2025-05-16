import Image from "next/image";
import React from "react";

type SkillProps = {
    name: string;
    imagePath: string;
    percentage: number;
};

export const Skill: React.FC<SkillProps> = ({ name, imagePath, percentage }) => {
    return (
        <div className="flex items-center space-x-4 w-full">
            <Image
                src={imagePath}
                alt={`${name}`}
                width={32}
                height={32}
            />
            <div className="flex-1">
                <div className="flex justify-between mb-1">
                    <span className="text-md font-medium text-black">{name}</span>
                    <span className="text-md font-medium text-black">{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-(--primary-color) h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Skill
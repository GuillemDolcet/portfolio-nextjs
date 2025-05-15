import { ReactNode } from "react";

type SectionTitleProps = {
    children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
    return (
        <div className="font-semibold text-4xl">
            {children}
        </div>
    );
};

export default SectionTitle;
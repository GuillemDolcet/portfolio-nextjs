import { ReactNode } from "react";

type SectionHeaderProps = {
    children: ReactNode;
};

const SectionHeader = ({ children }: SectionHeaderProps) => {
    return (
        <p className="bg-primary ps-2 pe-2 w-auto">
            {children}
        </p>
    );
};

export default SectionHeader;
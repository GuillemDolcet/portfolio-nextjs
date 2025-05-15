import React from 'react';
import { ReactTyped } from "react-typed";

type TypedTextProps = {
    words: string[];
};

const TypedText: React.FC<TypedTextProps> = ({ words }) => {
    return (
        <ReactTyped
            strings={words}
            typeSpeed={40}
            backSpeed={50}
            loop
        />
    );
};

export default TypedText;

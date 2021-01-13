import React from "react";

type TitleProps = {
    text: string;
};
const Title : React.FC<TitleProps> = ({text}) => {

    return (
        <h1 id="title">{text}</h1>
    );
}

export default Title;
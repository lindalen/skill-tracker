import React, {useState} from "react";

const SkillSection : React.FC = () => {
    const [time, setTime] = useState(0);

    return (
        <div>
            {time}
        </div>
    );
}

export default SkillSection;
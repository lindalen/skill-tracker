import React, {useEffect, useState} from 'react'

interface TimerProps {
    time:Date;
    startTime:Date;
}

export const Timer: React.FC<TimerProps> = ({time, startTime}) => {
        const [currentDiff, setCurrentDiff] = useState<number>(getDateDiffInSeconds());

        function getDateDiffInSeconds() {
            let diff = (time.getTime() - startTime.getTime()) / 1000;
            return diff;
        }

        function updateTimeDifference() {
            setCurrentDiff(getDateDiffInSeconds());
        }

        useEffect(updateTimeDifference, [time]);

        return (
            <div>
                Time spent: {new Date(currentDiff * 1000).toISOString().substr(11, 8)} 
            </div>
        );
}
import React, {useEffect, useState} from 'react'

interface TimerProps {
    time:Date;
    startTime:Date;
    msToReachGoal: number;
}

export const Timer: React.FC<TimerProps> = ({time, startTime, msToReachGoal}) => {
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
                {
                // from: https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
                new Date(currentDiff * 1000).toISOString().substr(11, 8)
                } 
                / 
                {
                    new Date(msToReachGoal).toISOString().substr(11, 8)
                }
            </div>
        );
}
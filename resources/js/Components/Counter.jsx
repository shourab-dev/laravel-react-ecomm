import React from "react";
import CountUp from "react-countup";
const Counter = ({
    counter = { num: 500, title: "Testing...", suffix: "+" },
}) => {
    return (
        <div className="text-white bg-white/10 sm:max-w-[312px] text-center py-[40px]">
            <h3 className="font-popins font-normal text-5xl text-primary">
                <span>
                    <CountUp
                    duration={1.5}
                        end={counter.num}
                        suffix={counter.suffix}
                        enableScrollSpy={true}
                    />
                </span>
            </h3>
            <h4 className="font-lg">{counter.title}</h4>
        </div>
    );
};

export default Counter;

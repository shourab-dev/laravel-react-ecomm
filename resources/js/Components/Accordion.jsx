import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
const Accordion = ({ data = [] }) => {
    const [accordion, setAccordion] = useState(data[0]);

    const activeSingleAccordion = (item) => {
        
        if(item.id === accordion.id){
            setAccordion([]);
            return false;
        }
        setAccordion(item);
    };

    return (
        <div className="container mb-20">
            <div className="accordionWrapper hidden lg:block">
                <div className="accordionTitles bg-gray-100 border flex overflow-x-auto">
                    {data.map((item, index) => (
                        <div
                            key={item.id}
                            className={`title py-3 px-4 bg-white cursor-pointer border-r  ${
                                item.id == accordion.id &&
                                item.title == accordion.title &&
                                "border-b-2 border-b-primary"
                            } `}
                            onClick={(e) => setAccordion(item)}
                        >
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                    {/* <div className="title py-3 px-4 bg-white cursor-pointer border-r ">
                            <h3>Brand</h3>
                        </div> */}
                </div>
                <div className="accordionContent border border-t-0">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={`content p-4 hidden ${
                                item.id == accordion.id &&
                                item.title == accordion.title &&
                                "!block"
                            }`}
                        >
                            {item.element ?? null}
                        </div>
                    ))}
                </div>
            </div>

            <div className="smallAccordionWrapper lg:hidden">
                {data.map((item, index) => (
                    <div className="wrapper my-2" key={item.id}>
                        <div
                            onClick={(e) => activeSingleAccordion(item)}
                            className={`title border p-3 flex justify-between items-center cursor-pointer ${
                                item.id == accordion.id &&
                                item.title == accordion.title &&
                                "bg-primary text-white"
                            }`}
                        >
                            <h4 className="text-xl">{item.title}</h4>
                            <MdKeyboardArrowUp
                                className={`text-xl transition-all duration-300 rotate-${
                                    item.id == accordion.id &&
                                    item.title == accordion.title
                                        ? "[0deg]"
                                        : "[180deg]"
                                }`}
                            />
                        </div>
                        <div
                            className={`content border border-t-0 transition-all duration-500 text-justify  overflow-hidden ${
                                item.id == accordion.id &&
                                item.title == accordion.title
                                    ? "p-3 opacity-100  h-auto"
                                    : "p-0 opacity-0  h-0"
                            }`}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Ea similique assumenda, ducimus laborum
                            aliquid optio! Hic mollitia odio eos nostrum?
                            Inventore labore, enim, amet similique laborum
                            doloremque provident dignissimos aperiam perferendis
                            commodi necessitatibus quaerat maxime? Possimus,
                            non. Corrupti molestias cupiditate, architecto,
                            asperiores quod eos dignissimos nemo necessitatibus
                            deleniti nihil optio.
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;

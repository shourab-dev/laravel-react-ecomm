import React from "react";
import { Transition } from "@headlessui/react";
import { IoCloseOutline } from "react-icons/io5";
const OffCanvas = ({
    children,
    position = "start",
    show,
    title = "OffCanvas",
    width = 400,
    onClose,
}) => {
    const closeSidebar = (e) => {
        if (
            e.target.dataset.name == "sidebarCloseBtn" ||
            e.target.dataset.name == "sidebar"
        ) {
            onClose();
        }
    };

    return (
        <Transition
            show={show}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className={`fixed h-screen z-50`}
        >
            <div
                data-name="sidebar"
                className={`fixed h-screen bg-gray-800/45 w-full flex justify-${position} z-50 top-0 `}
                onClick={(e) => closeSidebar(e)}
            >
                <Transition
                    show={show}
                    enter="transition ease duration-800"
                    enterFrom={`${
                        position == "start" ? "-" : ""
                    }translate-x-full`}
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-500"
                    leaveFrom="translate-x-0"
                    leaveTo={`${
                        position == "start" ? "-" : ""
                    }translate-x-full`}
                    className={`w-[90%]  h-full bg-white`}
                    style={{ maxWidth: `${width}px` }}
                >
                    <div>
                        <div className="canvasHeader border-b py-2 px-4 flex justify-between items-center">
                            <h4 className="font-bold text-xl">{title}</h4>
                            <button
                                data-name="sidebarCloseBtn"
                                className=" cursor-pointer bg-red-500 text-white w-[40px] h-[40px] text-xl grid place-items-center"
                            >
                                <IoCloseOutline data-name="sidebarCloseBtn" />
                            </button>
                        </div>
                        <div
                            className="p-3 overflow-y-auto"
                            style={{ height: `calc(100vh - 58px)` }}
                        >
                            {children}
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    );
};

export default OffCanvas;

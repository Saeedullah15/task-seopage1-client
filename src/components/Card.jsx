import { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { ImAttachment } from "react-icons/im";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaBuffer } from "react-icons/fa6";
import { LuClipboardCheck } from "react-icons/lu";
import pp1 from "../assets/pp1.png";
import pp2 from "../assets/pp2.png";
import pp3 from "../assets/pp3.png";
import pp4 from "../assets/pp4.png";

const Card = () => {
    const [modal, setModal] = useState(false);
    const [fileCount, setFileCount] = useState(0);

    useEffect(() => {
        fetchFileCount();
    }, []);

    const fetchFileCount = async () => {
        try {
            const response = await axios.get("https://task-seopage1-server.vercel.app/file-count");
            setFileCount(response.data.count);
        } catch (error) {
            console.error("Error fetching file count:", error);
        }
    };

    return (
        <div className="w-80 space-y-3 p-2 shadow rounded-md bg-white mr-1">
            {/* first row */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <img className="w-7 h-7 rounded-full" src={pp1} alt="" />
                    <h3 className="font-semibold text-sm">Alex Sandro</h3>
                </div>
                <div className="flex items-center gap-1">
                    <img className="w-7 h-7 rounded-full" src={pp2} alt="" />
                    <h3 className="font-semibold text-sm">Robert John</h3>
                </div>
            </div>

            {/* second row */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <FaBuffer />
                    <p className="text-xs">Plan and Execute Deployment Strategy...</p>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-md">
                    <LuClipboardCheck />
                    <p className="text-xs font-semibold">1/2</p>
                </div>
            </div>

            {/* third row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img className="w-7 h-7 rounded-full" src={pp3} alt="" />
                    <img className="w-7 h-7 rounded-full" src={pp4} alt="" />
                    <p className="w-8 h-8 rounded-full bg-gray-100 p-1 font-semibold text-sm">12+</p>
                    <div className="flex items-center space-x-1">
                        <IoChatbubblesOutline /> <span className="font-semibold text-sm">15</span>
                    </div>
                </div>

                <div className="flex items-center space-x-1">
                    <button onClick={() => setModal(true)}><ImAttachment /></button>
                    <span className="font-semibold">{fileCount}</span>
                </div>

                <div className="flex items-center space-x-1">
                    <FaRegCalendarDays /> <span className="font-semibold text-sm">11-8-2024</span>
                </div>
            </div>

            {/* modal */}
            {
                modal && <Modal setModal={setModal} fetchFileCount={fetchFileCount}></Modal>
            }
        </div>
    );
};

export default Card;
import { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";

const Card = () => {
    const [modal, setModal] = useState(false);
    const [fileCount, setFileCount] = useState(0);

    useEffect(() => {
        fetchFileCount();
    }, []);

    const fetchFileCount = async () => {
        try {
            const response = await axios.get("http://localhost:5000/file-count");
            setFileCount(response.data.count);
        } catch (error) {
            console.error("Error fetching file count:", error);
        }
    };

    return (
        <div className="w-80 space-y-2 p-2 shadow rounded-md bg-white">
            {/* first row */}
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full" src="/src/assets/pp1.png" alt="" />
                    <h3 className="font-semibold">Client name</h3>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full" src="/src/assets/pp1.png" alt="" />
                    <h3 className="font-semibold">Client name</h3>
                </div>
            </div>

            {/* second row */}
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            {/* third row */}
            <div className="flex items-center">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full" src="/src/assets/pp1.png" alt="" />
                    <img className="w-10 h-10 rounded-full" src="/src/assets/pp1.png" alt="" />
                </div>

                <button onClick={() => setModal(true)} className="btn btn-xs btn-primary">attach</button>

                <p>Total: </p> {fileCount}
            </div>

            {/* modal */}
            {
                modal && <Modal setModal={setModal} fetchFileCount={fetchFileCount}></Modal>
            }
        </div>
    );
};

export default Card;
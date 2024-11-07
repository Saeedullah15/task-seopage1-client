import { useState } from "react";
import Modal from "./Modal";

const Card = () => {
    const [modal, setModal] = useState(false);

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
            </div>

            {/* modal */}
            {
                modal && <Modal setModal={setModal}></Modal>
            }
        </div>
    );
};

export default Card;
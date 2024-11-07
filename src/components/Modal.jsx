import { useState } from "react";

const Modal = ({ setModal }) => {

    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }

    console.log(files);

    return (
        <div className="absolute bg-gray-200 w-auto h-auto z-10 space-y-4 p-2">
            <h2 className="text-center text-xl font-semibold">Upload</h2>
            <input type="file" multiple onChange={handleFileChange} name="" id="" />
            <ul className="space-y-2">
                {files.map((file, index) => (
                    <li key={index} className="">
                        <strong>{file.name}</strong>
                        {/* (Extension: {file.name.split(".").pop()}) */}
                    </li>
                ))}
            </ul>
            <p className="text-center">
                <button onClick={() => setModal(false)} className="btn btn-warning btn-xs">close</button>
            </p>
        </div>
    );
};

export default Modal;
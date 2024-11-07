import axios from "axios";
import { useState } from "react";

const Modal = ({ setModal, fetchFileCount }) => {

    const [files, setFiles] = useState([]);

    const handleUpload = async () => {
        const formData = new FormData();

        files.forEach((file) => {
            formData.append("files", file);
        });

        try {
            const response = await axios.post("http://localhost:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log(response.data);

            // Clear file input after upload
            setFiles([]);

            // Refresh file count
            fetchFileCount();
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }

    console.log(files);

    return (
        <div className="absolute bg-gray-200 w-auto h-auto z-10 space-y-4 p-2">
            <h2 className="text-center text-xl font-semibold">Upload</h2>
            <input type="file" multiple onChange={handleFileChange} name="" id="" />

            {/* display files */}
            <ul className="space-y-2">
                {files.map((file, index) => (
                    <li key={index} className="">
                        <strong>{file.name}</strong>
                    </li>
                ))}
            </ul>

            {/* Upload button */}
            <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Upload</button>

            <p className="text-center">
                <button onClick={() => setModal(false)} className="btn btn-warning btn-xs">close</button>
            </p>
        </div>
    );
};

export default Modal;
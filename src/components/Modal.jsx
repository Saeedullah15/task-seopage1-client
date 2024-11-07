import axios from "axios";
import { useState } from "react";
import { MdClose } from "react-icons/md";

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
        <div className="absolute text-center bg-gray-200 w-auto h-auto z-10 space-y-4 p-2">
            <h2 className="font-semibold underline">Upload Attachments</h2>
            {/* <input type="file" multiple onChange={handleFileChange} name="" id="" /> */}
            <input type="file" multiple onChange={handleFileChange} className="file-input file-input-bordered file-input-sm w-full max-w-xs" />

            {/* display files */}
            <ul className="space-y-2">
                {files.map((file, index) => (
                    <li key={index} className="">
                        <strong>{file.name}</strong>
                    </li>
                ))}
            </ul>

            {/* Upload button */}
            <button onClick={handleUpload} className="text-white btn btn-primary btn-sm">Upload</button>

            <p className="text-center">
                <button onClick={() => setModal(false)} className="btn btn-warning btn-sm"><MdClose className="font-bold text-xl" />Close</button>
            </p>
        </div>
    );
};

export default Modal;
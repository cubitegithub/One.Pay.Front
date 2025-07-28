import React, { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";

// Definir las credenciales de Azure Blob Storage (deberías obtenerlas dinámicamente en una aplicación real)
const sasToken = "sp=racwl&st=2025-02-19T22:09:12Z&se=2100-02-20T06:09:12Z&spr=https&sv=2022-11-02&sr=c&sig=bkg5hjDcKRbyrDuCPa4I%2BhYniuHjfwQ9dr0PG7YZ2yQ%3D";
const containerName = "firmaelectronicafile";
const storageAccountName = "onebytefiles";
const blobServiceClient = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net?${sasToken}`
);

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);

    // Maneja el archivo seleccionado
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Subir el archivo a Azure Blob Storage
    const uploadFileToBlob = async () => {
        if (!file) {
            alert("Por favor, selecciona un archivo para subir.");
            return;
        }

        setIsUploading(true);

        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blobName = file.name;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        try {
            // Cargar el archivo con el progreso de la subida
            const uploadBlobResponse = await blockBlobClient.uploadBrowserData(file, {
                onProgress: (ev) => {
                    setUploadPercentage(Math.round((ev.loadedBytes / file.size) * 100));
                },
            });

            console.log("Subida exitosa:", uploadBlobResponse);
            alert("Archivo subido con éxito.");
        } catch (error) {
            console.error("Error al subir el archivo:", error);
            alert("Hubo un error al subir el archivo.");
        }

        setIsUploading(false);
    };

    return (
        <div>
            <h2>Subir archivo a Azure Blob Storage</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadFileToBlob} disabled={isUploading}>
                {isUploading ? `Subiendo... ${uploadPercentage}%` : "Subir archivo"}
            </button>
            {isUploading && <progress value={uploadPercentage} max={100} />}
            <img src="https://onebytefiles.blob.core.windows.net/firmaelectronicafile/03.jpg"/>
        </div>
    );
};

export default UploadFile;

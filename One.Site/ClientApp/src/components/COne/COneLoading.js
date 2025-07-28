import React, { useState, useEffect } from 'react';
import './COneLoading.css';

const COneLoading = ({ isShow, msg }) => {
    const [statusShow, setStatusShow] = useState("");
    const [msgText, setMsgText] = useState("");

    // Actualizar el estado basado en las props
    useEffect(() => {
        if (isShow) {
            setStatusShow("show");
        } else {
            setStatusShow("");
        }
        setMsgText(msg || "Procesando..");
    }, [isShow, msg]);

    return (
        <>
            <div className={`overlay ${statusShow}`}></div>
            <div className={`spanner ${statusShow}`}>
                <div className="loader"></div>
                <p>{msgText}</p>
            </div>
        </>
    );
};

export default COneLoading;

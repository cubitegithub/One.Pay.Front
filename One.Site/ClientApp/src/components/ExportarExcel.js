import React from 'react'
import { CButton } from '@coreui/react-pro'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


const ExportarExcel = ({ jsonRequest }) => {

    /* Ejemplo: https://medium.com/@deivisonisidoro_94304/export-an-excel-file-using-vite-material-ui-and-xlsx-64c171af8d7c */
    const exportToExcel = () => {
        const header = jsonRequest.header;
        const columns = jsonRequest.columns;
        const array = jsonRequest.array;
        const dataWithHeaders = array.map((row) => {
            const obj = {};
            columns
                .filter((column) => column.headerName)
                .forEach((column) => {
                    if (column.headerName) obj[column.headerName] = row[column.field];
                });
            return obj;
        });

        const worksheet = XLSX.utils.json_to_sheet(dataWithHeaders ,{ origin: 'A1' });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        // Buffer to store the generated Excel file
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

        saveAs(blob, "data.xlsx");
    };

    return (
        <>
            <CButton onClick={() => exportToExcel()}>Exportar Excel</CButton>
        </>
    );
};

export default ExportarExcel;
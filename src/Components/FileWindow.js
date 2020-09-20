import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import pdfFile from '../resources/Tyler_Winstead_Resume_Redacted.pdf';

const FileWindow = () => {

    const [pdf, setPdf] = useState(pdfFile)
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    console.log(pdfFile)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="file-window">
            <Document
                file={pdf}
                renderMode="svg"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber}
                    renderAnnotationLayer={false}
                    renderInteractiveForms={false}
                    renderTextLayer={false}
                />
            </Document>
        </div>
    );
}

export default FileWindow;
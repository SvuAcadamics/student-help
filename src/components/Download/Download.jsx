import React from 'react'

const Download = () => {

    function handleDownloadClick()  {
        // Replace 'YOUR_GOOGLE_DRIVE_PDF_LINK' with the actual link to your PDF file
        const pdfUrl = 'https://drive.google.com/drive/u/3/folders/1DyV2CQoGVdjLohW9Or8_75bw6toFWUbT?hl=en_GB';
    
        // Trigger the download
        window.open(pdfUrl, '_blank');
      };

  return (
    <div>
        <button onClick={handleDownloadClick}>Download PDF</button>
    </div>
  )
}

export default Download
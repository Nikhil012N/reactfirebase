import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";


const Image2pdf = () => {
  const inputItem = useRef();
  const inputImage = useRef();
  const myUrl = useRef();
  const [baseUrl, newBaseUrl] = useState(null);
  const baseConvert = () => {
    const file = inputItem.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newBaseUrl(reader?.result);
        console.log(reader.result);
      };
    }
    else
    {
      alert("No image is uploaded yet");
    }
  };

  const pdfConvert = () =>
   {
    const src = inputImage?.current;
    console.log("bANKAI", src);
    html2pdf().from(src).save();
  };

  const linkpdfconvert =async () =>
   {
      const url = await myUrl?.current?.value;
     const data= await fetch(url)
      const blob = await data?.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob); 
        reader.onloadend = () => {
          const base64data = reader.result;  
          newBaseUrl(base64data); 
          resolve(base64data);
        }
      });
    
    // newBaseUrl(url);
    // console.log(myUrl.current.value);
  };
  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <input
          type="File"
          accept="image/*"
          ref={inputItem}
        />
        <Button onClick={baseConvert} variant="contained">
          Convert to base 64
        </Button>
        &nbsp;&nbsp;
        <Button onClick={pdfConvert} variant="contained">
          Pdf Convert
        </Button>
        <br />
        <input type="url" ref={myUrl} />
        <Button
          onClick={linkpdfconvert}
        >Link to pdf convert</Button>
       </div>

      <div>
      <br />
        <br />
        {baseUrl && (
          <img
            src={baseUrl}
            alt="i don't know what is this"
            height={300}
            width={300}
            ref={inputImage}
            crossOrigin="anonymous"
          />
        )}
<br/><br/>
<br/>
        {baseUrl&&(<>base64 string :<br/><br/><br/>
        {baseUrl}</>)}
      </div>
    </>
  );
};

export default Image2pdf;

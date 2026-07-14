import React,{useEffect, useRef} from "react";

import qrcode from "qrcode-generator";

const QRc = ({data})=>{
    const qrRef = useRef(null)

    useEffect(()=>{
        if(qrRef.current && data){
            const qr = qrcode(0,'L');
            qr.addData(data);
            qr.make();

            const svgString = qr.createSvgTag({ scalable: true });
            const parser = new DOMParser();
            const svgDocument = parser.parseFromString(svgString, 'image/svg+xml');
            const svgElement = svgDocument.firstChild;
            qrRef.current.innerHTML = ''
            qrRef.current.appendChild(svgElement);
        }
    },[data])

    return <div ref={qrRef}/>
};

export default QRc
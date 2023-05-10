import { useEffect, useRef } from 'react';
import './Borad.css'
const Borad =()=>{
    // for document.getElementById("canvas"); ==> useRef
    const canvasRef = useRef(null);

    useEffect(()=>{
        //const canvas = document.getElementById("canvas");s
        const canvas = canvasRef.current
        // const ctx = canvas.getContext("2d");
        const ctx = canvas?.getContext('2D')
        if (ctx) {
            ctx.fillStyle = 'green';
            ctx.fillRect(10, 10, 150, 100);
        }
    },[])

    return <canvas id="canvas" ref={canvasRef} height="500px" width="800px"/>
}
export default Borad;
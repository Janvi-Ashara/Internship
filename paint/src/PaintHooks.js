import { useEffect, useRef, useState } from "react";
const usePaintHooks = () => {
  const canvasRef = useRef(null);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const [eraser, setEraser] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000000");
  const [thickness, setThickness] = useState(25);

  const ctx = useRef(canvasRef?.current?.getContext("2d"));
  const drawingProgress = useRef(false);

  const draw = (event) => {
    if (!drawingProgress.current || !ctx.current) return;

    if (!ctx || !ctx?.current) {
      return;
    }
    ctx.current.beginPath();
    ctx.current.moveTo(lastX.current, lastY.current);
    ctx.current.lineTo(event.offsetX, event.offsetY);
    ctx.current.stroke();

    [lastX.current, lastY.current] = [event.offsetX, event.offsetY];
  };

  const handleMouseDown = (e) => {
    console.log(ctx, canvasRef);

    drawingProgress.current = true;
    [lastX.current, lastY.current] = [e.offsetX,  e.offsetY];
  };
  const stopDrawing = (e) => {
    console.log(ctx, canvasRef);

    drawingProgress.current = false;
  };

  const handleColor = (e) => {
    setCurrentColor(e.currentTarget.value);
  };
  const handleEraser = () => {
    setEraser(true);
  };
  const handleBrush = () => {
    setEraser(false);
  };
  const handleThickness = (e) => {
    setThickness(e.currentTarget.value);
  };

  const init = () => {
    ctx.current = canvasRef?.current?.getContext("2d");
    if (canvasRef && canvasRef.current && ctx && ctx.current) {
      canvasRef.current.addEventListener("mousemove", draw);
      canvasRef.current.addEventListener("mouseup", stopDrawing);
      canvasRef.current.addEventListener("mousedown", handleMouseDown);
      canvasRef.current.addEventListener("mouseout", stopDrawing);

      canvasRef.current.width = window.innerWidth - 196;
      canvasRef.current.height = window.innerHeight;

      ctx.current.lineJoin = "round";
      ctx.current.lineCap = "round";
    }
  };

  useEffect(() => {
    if (ctx.current) {
      console.log(eraser);

      if (eraser) {
        ctx.current.globalCompositeOperation = 'destination-out';
      } else {
        ctx.current.globalCompositeOperation = 'source-over';
      }
      ctx.current.strokeStyle = currentColor;
      ctx.current.lineWidth = thickness;
    }
  }, [currentColor, thickness, eraser]);

  return [
    { canvasRef, eraser, thickness },
    { init, handleColor, handleEraser, handleBrush, handleThickness },
  ];
 };



export default usePaintHooks;

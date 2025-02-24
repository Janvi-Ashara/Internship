import './App.css';
import Sidetoolbar from './components/Sidetoolbar';
import CanvasPreview from './components/CanvasPreview';
import usePaintHooks from './PaintHooks';


function App() {
  const [{canvasRef, ...states} ,  {init,...handleFn}] = usePaintHooks()
  return (
    <div className="flex h-screen">
      <Sidetoolbar {...handleFn} {...states} />
      <CanvasPreview canvasRef={canvasRef} init={init} />
     
    </div>
  );
}

export default App;

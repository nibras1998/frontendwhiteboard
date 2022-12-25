
import { fabric } from "fabric";
import {useEffect,useState} from 'react'
import './App.css';

function App() {
  useEffect(()=>{
    const canvas = new fabric.Canvas('canvas');
    canvas.freeDrawingBrush.color="red"
    canvas.isDrawingMode = true
  },[])
  const clicked=()=>{
    let eraser = new fabric.PatternBrush("canvas");
    eraser.add(new fabric.Circle(
      { radius: 30, 
        fill: 'white', 
        top: 100, 
        left: 100 }));
    eraser.freeDrawingBrush.color="white"
    eraser.freeDrawingBrush.width = "6"
    
  }
  const eraseAll=()=>{
    const all = new fabric.Canvas('canvas');
    all.remove()
  }
  
const Rectangle=()=>{
const canvas = new fabric.Canvas('canvas');
var rect = new fabric.Rect();
rect.set({ width: 100, 
  height: 200, 
  fill: 'white', 
  });
}


  
  return (
    <div className="App">
      <div className='container'>
      <canvas id="canvas"/>
      </div>
      <div id="btn">
        <button onClick={clicked} id="erase">Erase</button>
        <button onClick={eraseAll} id="eraseall">Erase All</button>
      </div>
     
    </div>
  );
}

export default App;

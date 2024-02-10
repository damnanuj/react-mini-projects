



import React , {useState} from "react";


function App() {
  const [color, setColor] = useState("black");
  return (
    <div className="backGround" style={{backgroundColor : color}}>
        <div className="colorBar">
              <div onClick={()=> setColor("red")} className="color" style={{backgroundColor : "red"}}>Red</div>
              <div onClick={()=> setColor("green")} className="color" style={{backgroundColor : "green"}}>Green</div>
              <div onClick={()=> setColor("blue")} className="color" style={{backgroundColor : "blue"}}>Blue</div>
              <div onClick={()=> setColor("purple")} className="color" style={{backgroundColor : "purple"}}>purple</div>
              <div onClick={()=> setColor("gray")} className="color" style={{backgroundColor : "gray"}}>gray</div>
              <div onClick={()=> setColor("orange")} className="color" style={{backgroundColor : "orange"}}>orange</div>
              <div onClick={()=> setColor("pink")} className="color" style={{backgroundColor : "pink"}}>pink</div>
              <div onClick={()=> setColor("black")} className="color" style={{backgroundColor : "black"}}>black</div>
              <div onClick={()=> setColor("tomato")} className="color" style={{backgroundColor : "tomato"}}>tomato</div>
              <div onClick={()=> setColor("cyan")} className="color" style={{backgroundColor : "cyan"}}>cyan</div>
              <div onClick={()=> setColor("olive")} className="color" style={{backgroundColor : "olive"}}>olive</div>
        </div>
    </div>

    
  );
}

export default App;

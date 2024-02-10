



import { Header } from "./Header";
import {Rightbar} from "./Rightbar"
import {Leftbar} from "./Leftbar"
import "./style.css"

function App() {
  return (
    <div className="root-container">
        <Header/>
        <div className='body' >
          <Leftbar/>
          <Rightbar/>
        </div>
    </div>
  );
}

export default App;

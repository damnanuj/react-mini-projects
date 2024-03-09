
import './App.scss';
import { ImagesList } from './components/ImagesList';
import { SearchBox } from './components/SearchBox';
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';

import{images} from "./Data"


function App() {
  return (
    <div className="container">
        <SearchBox/>
        <ImagesList images={images.results}/>
    </div>
  );
}

export default App;

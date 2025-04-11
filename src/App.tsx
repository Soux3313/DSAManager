import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Constructor from "./constructor";

document.title = "DSA-Manager";
function App() {

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/dsamanager" element={<Constructor/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;

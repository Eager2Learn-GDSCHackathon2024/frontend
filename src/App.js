import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main/Main.js'
import WelcomePage from './pages/WelcomePage/WelcomePage.js';
import UserInformation from './pages/UserInformation/UserInformation.js';
import HTMLViewer from './utils/HTMLViewer/HTMLViewer.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path='/view'element={<HTMLViewer/>}/>
          <Route path='/user-information' element={<UserInformation/>}/>
          <Route path="/course" className="background" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

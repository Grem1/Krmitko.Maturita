import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./components/Home.js";
import { DosageCats } from './components/DosageCats';
import { DosageDogs } from './components/DosageDogs';
import { Route, Routes } from 'react-router-dom';
import { ManControl } from './components/ManControl';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dosageDogs" element={<DosageDogs />} />
        <Route path="/dosageCats" element={<DosageCats />} />
        <Route path="/manualControls" element={<ManControl />} />
      </Routes>
    </>
  );


}

export default App;

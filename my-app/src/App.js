import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Home";
import { DosageCats } from './DosageCats';
import { DosageDogs } from './DosageDogs';
import { Route, Routes } from 'react-router-dom';
import { ManControl } from './ManControl';

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

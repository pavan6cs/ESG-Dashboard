
import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import PortfolioOverview from './pages/PortfolioOverview';
import Report from './pages/Report'
import Simulation from './pages/Simulation';

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
     <Routes>
     <Route path="/" element={< PortfolioOverview />}/>
     <Route path="/portfolio" element={< PortfolioOverview />}/>
     <Route path="/report" element={< Report />}/>
     <Route path="/simulation" element={< Simulation />}/>
     </Routes>
     </Sidebar>
    </BrowserRouter>
  );
}

export default App;

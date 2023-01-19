import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TablePage from './pages/TablePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/datatable' element={<TablePage />} />
    </Routes>
  );
}
export default App;

import './index.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Landing />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route path="browse" element={<Home />} />
        <Route path="watchlist" element={<Watchlist />} />
      </Route>

    </Routes>
  );
}
export default App
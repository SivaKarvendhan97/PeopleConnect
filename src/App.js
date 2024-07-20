import logo from './logo.svg';
import './App.css';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';

function App() {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomeComponent />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent/>
    </>
  );
}

export default App;

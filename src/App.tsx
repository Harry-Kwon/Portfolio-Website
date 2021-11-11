import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Container, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import './App.css';
import HomePage from 'HomePage/HomePage';
import ContactPage from 'ContactPage';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>

  );
}

export default App;

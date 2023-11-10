import './App.css';
import AvgItemLevelCalcPage from './components';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='App'>
        <header className='App-header'>
          <p></p>
          <AvgItemLevelCalcPage />
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          ></a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

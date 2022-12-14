import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyled from '../../assets/styles/global';
import defaultThem from '../../assets/styles/themes/default';
import { Container } from './styles';

import { Header } from '../Header';
import { Routes } from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultThem}>
        <GlobalStyled />

        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

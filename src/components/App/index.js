import { ThemeProvider } from 'styled-components';

import GlobalStyled from '../../assets/styles/global';
import defaultThem from '../../assets/styles/themes/default';
import { Container } from './styles';

import { Header } from '../Header';

function App() {
  return (
    <ThemeProvider theme={defaultThem}>
      <GlobalStyled />

      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;

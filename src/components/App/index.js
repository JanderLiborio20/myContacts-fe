import { ThemeProvider } from 'styled-components';

import GlobalStyled from '../../assets/styles/global';
import defaultThem from '../../assets/styles/themes/default';
import { Container } from './styles';

import { Header } from '../Header';
import { ContactsList } from '../ContactsList';

function App() {
  return (
    <ThemeProvider theme={defaultThem}>
      <GlobalStyled />

      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;

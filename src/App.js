import { ThemeProvider } from 'styled-components';

import GlobalStyled from './assets/styles/global';
import defaultThem from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultThem}>
      <GlobalStyled />
      <h1> My Contacts</h1>
    </ThemeProvider>
  );
}

export default App;

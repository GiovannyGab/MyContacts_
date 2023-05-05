import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './style';
import Header from '../Header';
import ContactsList from '../../ContactsList';
import Routes from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
          <ContactsList />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

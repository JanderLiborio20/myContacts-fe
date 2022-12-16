import {
  Container,
  Header,
  ListContainer,
  Card,
  InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Loader } from '../../components/Loader';

export function Home() {
  return (
    <Container>
      <Loader />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <a href="/new">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Jander Liborio</strong>
              <small>Instagram</small>
            </div>
            <span>jandernunes14@gmail.com</span>
            <span>(92) 99156-9974</span>
          </div>

          <div className="actions">
            <a href="/edit/123">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}

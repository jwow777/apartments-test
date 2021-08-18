import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Card from '../Card/Card';
import './Content.css';

function Content() {
  const { store } = useContext(AppContext);
  return (
    <main className="content">
      <ul className="content__list">
        {
          store.apartments.map((item) =>
            <Card data={item} key={item.id} />
          )
        }
      </ul>
    </main>
  );
}

export default Content;

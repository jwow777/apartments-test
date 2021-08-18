import { useEffect, useReducer } from 'react';
import { AppContext } from '../../contexts/AppContext';
import reducer, { initialState } from '../../store/reducer.';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import './App.css';

import apartments from '../../utils/entities.json';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() =>
    setTimeout(() =>
      dispatch({ type: 'ADD_APARTMENTS_LIST', payload: apartments }),
      1000
    ), []
  );

  return (
    <AppContext.Provider value={{
      store,
      dispatch
    }}
    >
      <Header />
      <Content />
      <Footer />
    </AppContext.Provider>
  );
}

export default App;

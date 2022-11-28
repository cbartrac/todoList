import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import { v1 as uuidv1 } from 'uuid';

import { SearchForm } from './SearchForm';
import { CardsList } from './CardsList';
import { Loading } from './styles'

const addRamdomIDs = (list) => {
  return list.map(entity => {
    return { ...entity, id: uuidv1() }
  });
}

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(function (response) {
        const peopleList = addRamdomIDs(response?.data?.results);
        dispatch({ type: "PEOPLE-UPDATE", payload: peopleList })
        dispatch({ type: "PEOPLE-COPY", payload: peopleList })
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    loading ?
      <Loading>Cargando...</Loading>
    :
      <>
        <SearchForm setName={setName} name={name} />
        <CardsList name={name} />
      </>
  );
}

export default App;

import './App.scss';
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form";
import { Footer } from './Components/Footer/Footer';
import { Heading } from './Components/Heading/Heding';
import { useEffect, useState } from 'react';
import * as api from './Api';

type api_data = {
  id: number;
  name?: string;
  title?: string
}

type api_login = {
  email: string;
  password: string
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Для авторизации
  const [currentUser, setCurrentUser] = useState({}); // Для авторизации
  const [professions, setProfession] = useState<api_data[]>([]); // Профессии
  const [city, setCity] = useState<api_data[]>([]); // Города
  const [citizenships, setCitizenship] = useState<api_data[]>([]); // гражданство
  const [langData, setLangData] = useState<api_data[]>([]); // Иностранные языки

  useEffect(() => {
    api.getLanguages().then((langData) => {
      setLangData(langData);
    }).catch((err) => {
      console.log(err)
    })
  }, [])


  function getProfession() {
    api.getProfessions().then((profession) => {
      setProfession(profession);
    }).catch((err) => {
      console.log(err)
    })
  }

  function getCity() {
    api.getCity().then((city) => {
      setCity(city);
    }).catch((err) => {
      console.log(err)
    })
  }

  function getCitizenship() {
    api.getCitizenship().then((citizenship) => {
      setCitizenship(citizenship);
    }).catch((err) => {
      console.log(err)
    })
  }

  function handleLogin({ email, password }: api_login) {
    return api.login(email, password).then((data) => {
      if (data.token) {
        setLoggedIn(true);
        // navigate('/', { replace: true });
      };
    }).catch((err) => {
      console.log(err)
    })
  }



  return (
    <>
      <Header />
      <main>

        {/* <button style={{
            position: 'fixed',
            width: '300px',
            height: '300px',
            top: '50%',
            right: '50%',        
        }}onClick={openModal}>button</button> */}

        <Heading />
        <Form
          langData={langData}
          getProfession={getProfession}
          getCity={getCity}
          getCitizenship={getCitizenship}
          citizenships={citizenships}
          city={city}
          professions={professions} />
      </main>
      <Footer />
    </>
  )
}

export default App

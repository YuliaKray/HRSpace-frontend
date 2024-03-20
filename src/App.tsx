import './App.scss';
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form";
import { Footer } from './Components/Footer/Footer';
import { Heading } from './Components/Heading/Heding';
import { useEffect, useState } from 'react';
import * as api from './Api';
import { FormModal } from './Components/FormModal/FormModal';

function App() {
  const [profession, setProfession] = useState<number[]>([]); // Профессии
  const [city, setCity] = useState<number[]>([]); // Города
  const [citizenship, setCitizenship] = useState<number[]>([]); // гражданство
  const [langData, setLangData] = useState<number[]>([]); // Иностранные языки

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

  function getCitizenship() {
    api.getCitizenship().then((citizenship) => {
      setCitizenship(citizenship);
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
          getProfession={getProfession} />
      </main>
      <Footer />
    </>
  )
}

export default App

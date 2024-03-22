import './App.scss';
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form";
import { Footer } from './Components/Footer/Footer';
import { Heading } from './Components/Heading/Heding';
import { Login } from './Components/Login/Login';
import { useEffect, useState } from 'react';
import * as api from './Api';
import { Route, Routes, useNavigate } from 'react-router-dom';

type FormData = {
  name: string;
  profession: number;
  location: number;
  lowestSalary: number;
  highestSalary: number;
  numberOfEmployees: number;
  startDate: Array<number>;
  recruitersQty: number;
  employmentType: number;
  workingSchedule: Array<string>;
  workingType: string;
  agreementType: string[];
  benefits: string[];
  other: string;
  education: string[];
  // core_skills: string;
  language_skills: number[];
  language_level: string[];
  driving_skills: string[];
  has_medical_sertificate: boolean;
  citizenship: number;
  requirements_description: string;
  // rating: string;
  experience: string[];
  // completed_orders: string;
  // recruiters_experience: string;
  // respond_speed: string;
  // fulfillment_speed: string;
  recruiter_responsibilities: string[];
  description: string;
  candidate_resume_form: Array<string>;
  stop_list: string;
  numberOfPayment: number;
  paymentFormat: string;
};

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
  const navigate = useNavigate();


  useEffect(() => {
    if (loggedIn) {
    api.getLanguages().then((langData) => {
      setLangData(langData);
    }).catch((err) => {
      console.log(err)
    })
  }
  }, [loggedIn])


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
      if (data.auth_token) {
        setLoggedIn(true);
        navigate('/aplications/create/', { replace: true });
      };
    }).catch((err) => {
      console.log(err)
    })
  }

  function submitForm(formData: FormData) {
    api.saveForm(formData)
    .catch((err) => {
      console.log(err);
    })
  }



  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main>
        <Routes>
          <Route path='/auth/login/' element={<Login handleLogin={handleLogin}/>}
            // loggedIn={loggedIn}
            // component={Login} 
            />

          {/* <button style={{
            position: 'fixed',
            width: '300px',
            height: '300px',
            top: '50%',
            right: '50%',        
         }}onClick={openModal}>button</button> */}
          <Route path='/aplications/create/' element={
            <>
              <Heading />
              <Form
                langData={langData}
                getProfession={getProfession}
                getCity={getCity}
                getCitizenship={getCitizenship}
                citizenships={citizenships}
                city={city}
                professions={professions}
                createForm={submitForm} />
            </>}
            // loggedIn={loggedIn}
          />
            <Route path="*" element={<Login handleLogin={handleLogin}/>} />

        </Routes>
      </main>
      {window.location.pathname === "/aplications/create/" && <Footer />}
    </>
  )
}

export default App

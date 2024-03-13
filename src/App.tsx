import './App.scss';
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form";
import { Footer } from './Components/Footer/Footer';
import { Heading } from './Components/Heading/Heding';


function App() {
  return (
    <>
      <Header />
      <main>
        <Heading/>
        <Form />
      </main>
      <Footer />
    </>
  )
}

export default App

import './App.scss';
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form";
import { Footer } from './Components/Footer/Footer';
import { Heading } from './Components/Heading/Heding';
import { useState } from 'react';
import { Modal } from './Components/Modal/Modal';
import { SubmitModal } from './Components/SubmitModal/SubmitModal';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  function openModal() {
    setIsModalOpen(true);
}
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
          <Header />
      <main>
        {/* <Modal modalOpen={isModalOpen} closeModal={closeModal}>
          <SubmitModal />
        </Modal> */}
      {/* <button style={{
            position: 'fixed',
            width: '300px',
            height: '300px',
            top: '50%',
            right: '50%',        
        }}onClick={openModal}>button</button> */}

        <Heading/>
        <Form />
      </main>
      <Footer />
    </>
  )
}

export default App

import { Container, Content } from "./styles";
import robo from '../../assets/robo.png'
import Modal from 'react-modal'
import { useState } from "react";
Modal.setAppElement('#root')



export function Header(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    //definir false para modalIsOpen
    return(
        
        <Container>
            <Content>
            <img src={robo} alt="robo" />
            <button type="button" onClick={() => setModalIsOpen(true)}>Novo Parâmetro</button>

            <Modal isOpen={modalIsOpen}   
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
            <h2>Cadastrar parâmetro</h2>
            
            <button onClick={() => setModalIsOpen(false)}
            className="react-modal-close"
            >X</button>
            
            <input placeholder="Nome" />
            <input placeholder="Script" />
            <input placeholder="Runtime" />
            <input placeholder="Valor" />
            
            <button type="submit">
            Cadastrar
            </button> 
            </Modal>
            </Content>
        </Container>

    )
}
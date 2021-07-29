import React from 'react';
import styled from 'styled-components'
import Mensagem from './Components/Mensagem';
import BalaoMensagemUsuario from './Components/BalaoMensagemUsuario';
import BalaoMensagem from './Components/BalaoMensagem';

const Wrapper = styled.div`
max-width: 600px;
height: 100vh;
border: 1px 
solid black;
flex: 1;
display: flex;
flex-direction: column;
background-color: aliceblue;

`

const ChatBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  background-color: white;
`

const DisplayMensagens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: black;
  height: 95%;
  padding: 20px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

export default class App extends React.Component {
  state = {
    mensagens: []
  }

  listaMensagem = () =>
    this.state.mensagens.map((mensagem, index) => {
      if (mensagem.usuario.toLowerCase() === "eu") {
        return (<BalaoMensagemUsuario key={index} mensagem={mensagem.mensagem}  />)
      } else {
        return (<BalaoMensagem key={index} mensagem={mensagem.mensagem} usuario={mensagem.usuario}/>)
      }
    })

  updateMensagem = (newMessages) => {
    this.setState({ mensagens: newMessages })
  }
  
  
   updateBalaoMensagem = (messageBubble) => {
    this.setState({ mensagens: messageBubble })
  }


  render() {
    return (

      <Wrapper>

        <ChatBox>
          <DisplayMensagens updateState={this.updateBalaoMensagem}>
            {this.listaMensagem()}
          </DisplayMensagens>
          <Mensagem array={this.state.mensagens} updateState={this.updateMensagem} />
        </ChatBox>

      </Wrapper>

    )
  }
}
import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'


const InputBox = styled.div`
    display: flex;
    margin-bottom: 0;
    height: 4%;
    margin-top:auto;
    padding:5px ;
    align-items: center;
    justify-content: start;
`
const Botao = styled.button`
width: 20%;
margin: 40 4% 0 auto
`
const InputMsg = styled.input`
width: 60%;
`

const InputUser = styled.input`
    width: 15%;
    margin: 0 auto 0 3%;
`
class Mensagem extends React.Component {

    state = {
        mensagens: this.props.array,
        inputUsuario: '',
        inputMensagem: '',
    }


    onChangeUsuario = (event) => {
        this.setState({ inputUsuario: event.target.value })
    }

    onChangeMensagem = (event) => {
        this.setState({ inputMensagem: event.target.value })
    }

    enviaMensagem = () => {
        const novoArray = this.state.mensagens
        if (this.state.inputUsuario != '' && this.state.inputMensagem != '') {
            novoArray.push(
                { usuario: this.state.inputUsuario, mensagem: this.state.inputMensagem }
            )
            this.setState({
                mensagens: novoArray,
                inputMensagem: ''
            })
            
            this.props.updateState(this.state.mensagens)
        }
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.enviaMensagem()
        }
    }

    

    render() {
        return (
            <InputBox tabIndex='0'>
                <InputUser placeholder='Usuário' value={this.state.inputUsuario} onChange={this.onChangeUsuario} />
                <InputMsg placeholder='Escreva sua Mensagem' value={this.state.inputMensagem} onChange={this.onChangeMensagem} onKeyDown={this.handleKeyPress}/>
                <Botao onClick={this.enviaMensagem} >Enviar</Botao>
            </InputBox>
        )
    }
}


export default Mensagem
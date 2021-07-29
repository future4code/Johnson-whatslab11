import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'


const Balao = styled.div`
 padding: 0.9em 0.8em;
 border-radius: 0.5em;
 font-weight: 450;
 line-height: 1.3;
 box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
 max-width: 60%;
 min-width: 8%;
 margin-bottom: 1em;
 word-wrap: break-word;
`

const ContainerNome = styled.div`
 color: darkgreen;
 font-weight: bold  ;
 font-size: 0.9em;
 font-weight: 600;
 margin-bottom: 0.2em;
`

const ApagaMensagem = styled.button`
`

class BalaoMensagem extends React.Component{

    render(){
        return(
            <Balao onClick={this.apagarMensagem}><ContainerNome>{this.props.usuario}</ContainerNome>{this.props.mensagem} </Balao>

        )
    }
    

}

export default BalaoMensagem
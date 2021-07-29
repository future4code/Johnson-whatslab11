import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components'

const BalaoMensagem = styled.div`
 padding: 0.9em 0.8em;
 border-radius: 0.5em;
 font-weight: 450;
 line-height: 0.8;
 box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
 max-width: 60%;
 min-width: 8%;
 margin-bottom: 1em;
 word-wrap: break-word;
 background-color: greenyellow;
 align-self: flex-end;
`
class BalaoMensagemUsuario extends React.Component{

    render(){
        return(
            <BalaoMensagem>{this.props.mensagem}</BalaoMensagem>
        )
    }
    

}

export default BalaoMensagemUsuario
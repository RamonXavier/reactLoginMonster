import React, {Component} from "react";
import { Input } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'
import { Checkbox, Form, Button, Message } from 'semantic-ui-react';

const inputDefaultColor = {
    color:"green"
}

// const inputErrortColor = {
//     color:"red"
// }

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            login:"",
            senha:"",
            loginError:false,
            senhaError:false,
            messageErrorLogin: true,
        };
    }

    verificaLogin = () =>{
        const{login, senha } = this.state;
        if(login == ""){
            this.setState({loginError:true}) 
        }else{
            this.setState({loginError:false})            
        }

        if(senha == ""){
            this.setState({senhaError:true})
        }else{
            this.setState({senhaError:false})
        }
    }

    render () {
        return (
        <div>
        <Form inverted onSubmit={this.verificaLogin}>
            <center><label>{this.props.label}</label></center>
            <Form.Input error={this.state.loginError} style={inputDefaultColor} type="text" icon='users'  value={this.state.login} iconPosition='left' onChange={e => this.setState({login: e.target.value})}  placeholder='Usuário' />
            <Form.Input error={this.state.senhaError} style={inputDefaultColor} type="password" icon='lock'  value={this.state.senha} iconPosition='left' onChange={e => this.setState({senha: e.target.value})} placeholder='Senha' />
            <Form.Checkbox label='Salvar Senha' style={inputDefaultColor} />
            <Button fluid type="submit" inverted color='green' >{this.props.label2}</Button>
        </Form>
        <Message 
                hidden={!this.state.loginError || !this.state.senhaError}
                error
                header='Erro'
                content='Verificque seu usuário e senha.'
            />
        </div>
        )
    }
}

export default Card;

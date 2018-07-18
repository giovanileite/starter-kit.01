import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const CRIAR = gql`
    mutation criar($nome: String!, $status: Boolean!) {
        criar(nome: $nome, status: $status) {
            nome
            status
        }
    }
`;

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            status: false,
            mensagem: ""
        }
    }
    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value 
        });
    };
    criar = () => {
        this.props
            .criar({
                variables: {
                    nome: this.state.nome,
                    status: this.state.status
                }
            })
            .then(() => {
                this.state.nome = "";
                this.state.status = false;
                this.state.mensagem = "";
            })
            .catch(error => {
                const mensagemErro = "O campo precisa ter um NOME";
                if (error) {
                    this.setState({
                        mensagem: <div className="mensagemErros">{mensagemErro}</div>
                    });
                }
            });
        
    };
    render() {
        return (
            <div>
                <button onClick={this.criar}>Criar</button>
                <input 
                    name="nome"
                    onChange={this.onChange}
                    value={this.state.nome}
                    type="text" 
                    placeholder="nome"/>
                <label>
                    Inativar:
                    <input
                        name="status" 
                        onChange={this.onChange}
                        checked={this.state.status}
                        type="checkbox"/>
                </label>
                <div>
                    { this.state.mensagem }
                </div>
            </div>
        )
    }
};
export default graphql(CRIAR, {
    name: "criar",
    options: {
        refetchQueries: ["getTeste"]
    }
})(Formulario);

import React from  'react';
import gql from 'graphql-tag';
import { withApollo, graphql } from 'react-apollo';

import Formulario from './Formulario';
import Listar from './Listar';

const App = ({ loading, teste }) => {
    if(loading) return null;
    deletar = () => {
        console.log("deletar !");
    }
    return (
        <div>
            <h1>Starter-kit.01</h1>
            <Formulario />
            <Listar teste={teste}/>
        </div>
    )
}


const TESTE_DATA = gql`
    query getTeste {
        teste {
            nome
            _id
            status
        }
    }
`;

export default graphql(TESTE_DATA, {
    props: ({ data }) => ({ ...data })
})(withApollo(App));

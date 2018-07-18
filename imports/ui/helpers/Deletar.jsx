import React from  'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Deletar = (props) => {
    deletarData = () => {
        props
        .deletarData({
            variables: {
                id: props.idData
            }
        })
        .then(() => {
            alert("You deleted" + props.idData);
        })
        .catch(error => {
            console.log(error);
        });
    }
    return (
        <div>
            <button onClick={ this.deletarData }>X</button>
        </div>
    )
}

const DELETAR_DATA = gql`
    mutation deletarData($id: String!) {
        deletarData(_id: $id) {
            _id
        }
    }
`;
export default graphql(DELETAR_DATA, {
    name: "deletarData",
    options: {
        refetchQueries: ["getTeste"]
    }
})(Deletar);

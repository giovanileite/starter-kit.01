import React from 'react';
import Deletar from '../../helpers/Deletar';

const Listar = (props) => {
    return (
        <div>
            <ul>
                { props.teste.map(testes => (
                    <li key={ testes._id }>
                        <a>{ testes.nome }</a>
                        <a> - { String(testes.status) }</a>
                        <Deletar idData={testes._id}/>
                    </li>
                )) }
            </ul>
        </div>
    )
};  
export default Listar;
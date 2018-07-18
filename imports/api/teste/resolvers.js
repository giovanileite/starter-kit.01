import Teste from './teste';

export default {
    Query: {
        teste(root, args, context) {
            return Teste.find();
        }
    },
    Mutation: {
        criar(obj, { nome, status }, context) {
            if (nome) {
                const criarId = Teste.insert({
                    nome,
                    status
                });
                return Teste.findOne(criarId);
            } else {
                throw new Error();
            }
            
        },
        deletarData(obj, { _id }, context) {
            const deletarId = Teste.findOne(_id);
            return Teste.remove(deletarId);
        }
    }
};
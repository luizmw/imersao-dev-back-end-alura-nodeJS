import { MongoClient } from "mongodb";

export default async function conectarAoBanco(strConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(strConexao);
        console.log('Conectando ao cluster do database...');
        await mongoClient.connect();
        console.log('Conectado ao Atlas MongoDB com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco', erro);
        process.exit();
    }
}

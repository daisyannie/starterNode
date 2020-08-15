const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        // Próxima linha depois de um await só executa depois que a do await terminar

        // Retorna os os itens tudo junto
        //const products = await Product.find();

        // Body é pro corpo da requisição
        // Params é pros ID's que são definidos na rota
        // Query são os parâmetros get
        const { page = 1 } = req.query;

        // Retorna com paginação
        //const products = await Product.paginate({}, { page: 1, limit: 10 });
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){
        const product = await Product.create(req.body);
        
        return res.json(product);
    },

    async update(req, res){

        // Esse new:true indica que eu quero que ele retorne o objeto desse produto atualizado pra dentro do product
        // Se não passar o new ele retorna o produto antes de atualizar as informações.
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { 
            new: true
        });

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}
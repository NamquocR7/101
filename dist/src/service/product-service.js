"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const datasource_1 = require("../datasource");
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.findAll = async (req, res) => {
            let products = await this.productRepository.query(`select * from products JOIN category  on products.idCategory = category.idC`);
            return products;
        };
        this.saveProduct = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let product = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.save(product);
                res.redirect(301, '/products');
            }
        };
        this.findOneById = async (req, res) => {
            let id = +req.params.id;
            return await this.productRepository.findOneBy({ id: id });
        };
        this.editProduct = async (req, res) => {
            let id = +req.params.id;
            let files = req.files;
            if (files != null) {
                let product = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.update({ id: id }, product);
                res.redirect(301, '/products');
            }
        };
        this.deleteProduct = async (req, res) => {
            let id = +req.params.id;
            let product = await this.productRepository.findOneBy({ id: id });
            if (product) {
                await this.productRepository.delete({ id: id });
                res.redirect(301, '/products');
            }
        };
        this.searchProduct = async (name) => {
            return this.productRepository.query(`select * from products where name like '%${name}%'`);
        };
        datasource_1.AppDataSource.initialize().then(connection => {
            console.log("Connect success");
            this.productRepository = connection.getRepository(product_1.Product);
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map
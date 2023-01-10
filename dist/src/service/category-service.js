"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const datasource_1 = require("../datasource");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.findAllC = async (req, res) => {
            let category = await this.categoryRepository.find();
            return category;
        };
        datasource_1.AppDataSource.initialize().then(connection => {
            console.log("Connect success");
            this.categoryRepository = connection.getRepository(category_1.Category);
        });
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=category-service.js.map
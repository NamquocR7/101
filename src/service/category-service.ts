import {AppDataSource} from "../datasource";
import {Category} from "../model/category";
import {Request, Response} from "express";

export class CategoryService {
    private categoryRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log("Connect success")
            this.categoryRepository = connection.getRepository(Category);
        });

    }

    findAllC = async (req: Request, res: Response) => {
        let category = await this.categoryRepository.find();
        return category;
    }
}
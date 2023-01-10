import {ProductService} from "../service/product-service";
import {Request,Response} from "express";
import {CategoryService} from "../service/category-service";


export class ProductController {
    private productService: ProductService
    private categoryService: CategoryService

    constructor() {
        this.productService = new ProductService();
        this.categoryService= new CategoryService();
    }

    getAll = async (req: Request, res: Response) => {
        let products = await this.productService.findAll(req, res);
        res.render('product/list', {
            listProduct: products
        })
    }

    showFormCreate = async (req:Request , res:Response) => {
        let category = await this.categoryService.findAllC ( req , res )
        res.render('product/create',{listCategory : category});

    }
    createP = async (req:Request, res:Response)=>{
      await  this.productService.saveProduct(req, res );
    }
    showFormEdit = async (req: Request, res: Response) => {
        let id = +req.params.id
        if (!isNaN(id)) {
            let product = await this.productService.findOneById(req, res);
            let category= await this.categoryService.findAllC(req, res);
            res.render('product/edit', {
                product: product,
                listCategory:category
            });
        }
    }

    editP = async (req: Request, res: Response) => {
        await this.productService.editProduct(req, res);
    }
    deleteP = async (req: Request, res: Response) => {
        await this.productService.deleteProduct(req, res);
    }
    showFormDelete = async (req: Request, res: Response) => {
        let id = +req.params.id;
        if((id)) {
            let product = await this.productService.findOneById(req,res);
            res.render('product/delete', {
                product: product
            })
        }
    }

    searchP = async (req: Request, res: Response) => {
        console.log(req.body.name)
        let products = await this.productService.searchProduct(req.body.name);
        res.render('product/search', {
            listProduct: products
        })
    }

}
export default new ProductController();
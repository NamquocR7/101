import {Router} from "express";
import productController from "../controller/product-controller";
export const routerProduct = Router();
routerProduct.get('/products',productController.getAll);
routerProduct.get('/create',productController.showFormCreate);
routerProduct.post('/create',productController.createP);
routerProduct.get('/edit/:id',productController.showFormEdit);
routerProduct.post('/edit/:id',productController.editP);
routerProduct.get('/delete/:id',productController.showFormDelete);
routerProduct.post('/delete/:id',productController.deleteP);

routerProduct.post('/products',productController.searchP);








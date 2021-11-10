import { Request, Response } from 'express';
import {Product} from '../models/Product';

export const home = (req: Request, res: Response)=>{
    let age: number = 90;
    let showOld: boolean = false;
    
    if(age > 50){
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

      // pegar os produtos do banco de dados
      // organizar as informações desses produtos
      // envia para o template engine
      //res.render integra o código html
    res.render('pages/home', {
      name: 'Joao',
      lastName: 'Augusto',
      showOld,
      products: list,
      expensives: expensiveList,
      frasesDoDia: []
      
    });
  }
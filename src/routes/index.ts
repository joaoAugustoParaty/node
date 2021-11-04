import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
  let age: number = 15;
  let showOld: boolean = false;
  
  if(age > 50){
      showOld = true;
  }
    // pegar os produtos do banco de dados
    // organizar as informações desses produtos
    // envia para o template engine
    //res.render integra o código html
  res.render('pages/home', {
    name: 'Joao',
    lastName: 'Augusto',
    age: 90,
    showOld,
    products: [
      {title: 'Produto X', price: 10},
      {title: 'Produto Y', price: 15},
      {title: 'Produto W', price: 20}
    ],
    frasesDoDia: [
      'Alguma coisa muito legal',
      'Outra frase qualquer'

    ]
    
  });
});

router.get('/contato', (req: Request, res: Response)=>{
    res.render ('pages/contato');
  });

  router.get('/sobre', (req: Request, res: Response)=>{
    res.render ('pages/sobre');
  });


  export default router;

import validator from 'validator';

let name: string = 'joao';

if(validator.isLowercase(name)){
    console.log(`A string ${name} é toda minúscula.`)
} else{
    console.log(`A string ${name} NÃO É toda minúscula.`)
}





//Esse arquivo é um ponto de entrada da aplicação

import chalk from 'chalk';
import {pegaArquivo} from './index.js'; 
import { validaURLs } from './http-validacao.js';

const caminho = process.argv; //método JS, retorna array que o usuario está digitando no terminal
 async function processaTexto(caminhoDearquivo){
    const resultado =  await pegaArquivo(caminhoDearquivo[2]); // Vamos receber de fora esse parametro
    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('links validados'), await validaURLs(resultado))
    }else {
        console.log(chalk.yellow('lista de links'), resultado)
    }
}

processaTexto(caminho);
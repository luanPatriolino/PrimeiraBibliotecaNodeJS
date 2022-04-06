//import chalk from 'chalk'; //chamar sempre a Lib na primeira linha de cod
import * as fs from 'fs'

//import readFile from 'fs';

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null ){
        arrayResultados.push({ [temp[1]] : temp[2] })
    }
   
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}


function trataErro(erro){
    throw new Error(erro.code, 'Não há arquivo no caminho');
}

async function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
         return(extraiLinks(texto))
    } catch(erro){
        trataErro(erro);
    }
}

/*function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, enconding)
    .then((texto) => console.log(texto))
    .catch((erro) => trataErro(erro) )
}/*

/*function pegaArquivo(caminhoDoArquivo){
    const enconding = 'utf-8';
    fs.readFile(caminhoDoArquivo, enconding, (erro, texto) =>{
        if(erro){
            trataErro(erro) //se acontecer algum erro a fucção vai automaticamente jogar dados p/ fora
        }
        console.log(chalk.green(texto))
    })
}*/ // forma sincrona


//pegaArquivo('./texto1.md');

export {pegaArquivo};
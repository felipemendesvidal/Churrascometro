// pegamos os campos
let inputadultos = document.getElementById('adultos');
let inputcriancas = document.getElementById('criancas');
let inputduracao = document.getElementById('duracao');

// pegamos resultado
let resultado = document.getElementById('resultado');


// calcuular
function calcular(){
    console.log("calculando...");
    
    // quantidade de adultos
    let adultos = inputadultos.value;
    // quantidade de crianças
    let criancas = inputcriancas.value;
    // duração
    let duracao = inputduracao.value;

    


    // quantidade de carne
    let qdttotalcarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let qdttotalcervejas = cervejaPP(duracao) * adultos ;
    let qdttotalbebidas = bebidadPP(duracao) * adultos + (bebidadPP(duracao) /2 * criancas) ;



    // colocar no resultado 
    resultado.innerHTML = `<p>${qdttotalcarne}g de carne</p>`;
    resultado.innerHTML += `<p>${qdttotalcervejas}ml de cerveja</p>`;
    resultado.innerHTML += `<p>${qdttotalbebidas}ml de bebida</p>`;

}

function carnePP (duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
    
}

function cervejaPP (duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
    
}

function bebidadPP (duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
    
}


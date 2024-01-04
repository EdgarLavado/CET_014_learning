    let ids = [];
    let nomes = [];
    let descricaos = [];
    let precos = [];

function registarProdutos(){

        ids[ids.length] = document.getElementById('id').value;
        nomes[nomes.length] = document.getElementById('nome').value;
        descricaos[descricaos.length] = document.getElementById('descricao').value;
        precos[precos.length] = document.getElementById('preco').value;

        let txt="";

        for(let i = 0; i < ids.length; i++){
            txt += '<tr>';
            txt += '<td>'+nomes[i]+'</td>';          
            txt += '<td>'+precos[i]+'</td>';
            txt += '<td>'+precos[i]*1.23+'</td>';
            txt += '</tr>';

    
        }

        document.getElementById('listaProdutos').innerHTML = txt;


}


let marcas = [];
let modelos = [];
let matriculas = [];
let consumos = [];
let kms = [];


function registarVeiculos(){
   
    marcas[marcas.length] = document.getElementById('marca').value;
    modelos[modelos.length] = document.getElementById('modelo').value;
    matriculas[matriculas.length] = document.getElementById('matricula').value;
    consumos[consumos.length] = document.getElementById('consumo').value;
    kms[kms.length] = document.getElementById('km').value;
    

    let txt="";
    let total = 0;
    let totalC = 0;

    for(let i = 0; i < matriculas.length; i++){
        txt += '<tr>';
        txt += '<td>'+marcas[i]+'</td>';
        txt += '<td>'+modelos[i]+'</td>';
        txt += '<td>'+matriculas[i]+'</td>';
        txt += '<td>'+consumos[i]+'</td>';
        txt += '<td>'+kms[i]+'</td>';
        txt += '</tr>';

        total += Number(kms[i]);
        totalC += Number(consumos[i]);
    }

    document.getElementById('listaVeiculos').innerHTML = txt;
    document.getElementById('resTotalKms').innerHTML= "total de kms: "+total+" km.<br> consumo: "+totalC/total+" km/l.";

}

    /*
    estou a usar datalist o mais correto seria un select, a diferença entre as tags é que a datalist é uma sugestão(o utilizador pode inserir o que quiser)
    o select obriga o utilizador a escolher uma das opcões
    */
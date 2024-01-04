let nomes = [];
let vitorias = [];
let derrotas = [];
let ids = [];
let contar = 0;


function regEquipa(){

    if(contar < 5){
        nomes[nomes.length] = document.getElementById('nome').value;
        vitorias[vitorias.length] = document.getElementById('numVitorias').value;
        derrotas[derrotas.length] = document.getElementById('numDerrotas').value;
        ids[ids.length] = document.getElementById('classificacao').value;

            document.getElementById('nome').value="";  
            document.getElementById('numVitorias').value="";
            document.getElementById('numDerrotas').value="";  
            document.getElementById('classificacao').value=""; 

            console.log(nomes);

        sucesso("Equipa registado com sucesso!");

        getLista();

        contar++;
 
    }else{
        sucesso("Já registou 5 Equipas!")
    }
}

function editEquipas(posicao){

    document.getElementById('nome').value = nomes[posicao];
    document.getElementById('numVitorias').value = vitorias[posicao];
    document.getElementById('numDerrotas').value = derrotas[posicao];
    document.getElementById('classificacao').value = derrotas[posicao];
    
    document.getElementById('btnEdit').setAttribute('onclick', 'guardaEditEquipas('+posicao+')')

}

function guardaEditEquipas(posicao){

    vitorias[posicao] = document.getElementById('numVitorias').value;
    derrotas[posicao] = document.getElementById('numDerrotas').value;
    ids[posicao] = document.getElementById('classificacao').value;

        sucesso("Equipa Editada com sucesso!");
        getLista();

}

function getLista(){
    let msg = "";

    for(let i = 0; i < nomes.length; i++){
        msg+="<tr>";
        msg+="<td>"+nomes[i]+"</td>";
        msg+="<td>"+vitorias[i]+"</td>";
        msg+="<td>"+derrotas[i]+"</td>";
        msg+="<td>"+ids[nome[i]]+"</td>";
        msg+="<td><button type='button' onclick='editEquipas("+i+")'>Editar</button></td>";
        msg+="</tr>";
    }

    document.getElementById('listaEquipas').innerHTML = msg;
}


function mostraClassificacao(){
    let msg = "";

    for(let i = 0; i < nomes.length; i++){
        msg+="<tr>";
        msg+="<td>"+nomes[i]+"</td>";
        msg+="<td>"+((vitorias[i]/(Number(vitorias[i]) + Number(derrotas[i]))*100)+"</td>";
        msg+="<td>"+derrotas[i]+"</td>";
        msg+="<td><button type='button' onclick='editEquipas("+i+")'>Editar</button></td>";
        msg+="</tr>";
    }

    document.getElementById('classificacao').innerHTML = msg;

}


function sucesso(msg){

    alert(msg);
}
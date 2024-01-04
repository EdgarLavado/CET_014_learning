let listaEquipas = [];
let vitorias = [];
let derrotas = [];
let contar = 0;

function registaEquipas(){

    if(contar < 5){
        listaEquipas[listaEquipas.lenght] = document.getElementById('nomeEquipa').value;
        vitorias[vitorias.lenght] = 0;
        derrotas[derrotas.lenght] = 0;

        alert("registo efetuado com sucesso!");

        console.log(listaEquipas);
        contar++;
        getListaEquipas();

    }else{
        alert("Erro! Já atingiu o limite de Equipas");
    }

}

function getListaEquipas(){
    let msg = "<option value='-1'>escolha uma opção</option>";

    for(let i = 0; i < listaEquipas.length; i++){
        msg += "<option value='"+i+"'>"+listaEquipas[i]+"</option>";
    }

    document.getElementById('listaEquipas').innerHTML = msg;

}

function getDados(posicao){
    //let posicao = document.getElementById('listaEquipas').value;
    document.getElementById('vit').value = vitorias[posicao];
    document.getElementById('der').value = derrotas[posicao];

    document.getElementById('btnEdit').setAttribute('onclick', 'guardaRegistos('+posicao+')');

}

function guardaRegistos(posicao){

    vitorias[posicao] = document.getElementById('vit').value;
    derrotas[posicao] = document.getElementById('der').value;

    alert("Registos Adicionados!");

}

function getClassificacao(){

    let msg = "<thead>";
    msg +="<tr>";
    msg +="<th>Nome Equipas</th>";
    msg +="<th>Vitorias</th>";
    msg +="<th>Derrotas</th>";
    msg +="<th>% Vitorias</th>";
    msg +="</tr>";
    msg +="</thead>";
    msg +="<tbody";

    for(let i=0; i < listaEquipas.lenght; i++){
        msg +="<tr>";
        msg +="<th>"+listaEquipas[i]+"</th>";
        msg +="<th>"+vitorias[i]+"</th>";
        msg +="<th>"+derrotas[i]+"</th>";
        let soma = Number(vitorias[i])+Number(derrotas[i]);
        msg +="<th>"+(vitorias[i]/soma*100)+"</th>";
        msg +="</tr>";

    }

    msg+= "</body>";
    document.getElementById('tabelaClassificacao').innerHTML = msg;

}
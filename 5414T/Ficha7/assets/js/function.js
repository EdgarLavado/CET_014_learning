let listaAlunos = [];
let workshops = ["HTML","Java","C#","Php"];
let contar = 0;

function registaAluno(){

    if(contar < 15){
       // listaEquipas[listaEquipas.length] = [$('#nomeEquipa').val(),0,0];
        if($('#listaWorkshop').val() == -1){
            alert("Escolha uma opção")

        }else if($('#idadeAluno').val() < 16){
            alert("Têm de ter mais de 16 anos para participar!!!")
        
        }else{
            listaAlunos.push(
                [$('#nifAluno').val(),
                $('#nomeAluno').val(),
                $('#moradaAluno').val(),
                $('#idadeAluno').val(),
                $('#telAluno').val(),
                $('#listaWorkshop').val()]);

            alert("registo efetuado com sucesso!");

            console.log(listaAlunos);
            contar++;
            //getListaAlunos();
            }    
    }else{
        alert("Erro! Já atingiu o limite de Equipas");
    }
    

}

/*function validaIdade(idade){
    let idade = $('#idadeAluno').val();

    if (idade < 16){

        alert("Têm de ter mais de 16 anos para participar!!!")
    }
}

/*function validaIdade(idade){
    let res = true;

    if (idade < 16){
        res = false;
        alert("Têm de ter mais de 16 anos para participar!!!")
    }
    return res;
}


*/
function getParticipantes(){

    let msg = "<thead>";
    msg += "<tr>";
    msg += "<th>Nif:</th>";
    msg += "<th>Nome:</th>";
    msg += "<th>Morada:</th>";
    msg += "<th>Idade:</th>";
    msg += "<th>Telefone:</th>";
    msg += "<th>Workshop:</th>";
    msg += "</tr>";
    msg += "</thead>";
    msg += "<tbody>";

    for(let i=0; i < listaAlunos.length; i++){
        msg += "<tr>";
        msg += "<td>"+listaAlunos[i][0]+"</td>";
        msg += "<td>"+listaAlunos[i][1]+"</td>";
        msg += "<td>"+listaAlunos[i][2]+"</td>";
        msg += "<td>"+listaAlunos[i][3]+"</td>";
        msg += "<td>"+listaAlunos[i][4]+"</td>";
        msg += "<td>"+workshops[listaAlunos[i][5]]+"</td>";
        msg += "</tr>";

    }

    msg+="</tbody>";
    $('#tabelaParticipantes').html(msg);

}

function getParticipantesByWorkshop(posicao){

    if(posicao === -1){

        alert("Escolha uma opção!");
    }else{

        let msg = "<thead>";
        msg += "<tr>";
        msg += "<th>Nif:</th>";
        msg += "<th>Nome:</th>";
        msg += "<th>Morada:</th>";
        msg += "<th>Idade:</th>";
        msg += "<th>Telefone:</th>";
        msg += "<th>Workshop:</th>";
        msg += "</tr>";
        msg += "</thead>";
        msg += "<tbody>";

        for(let i=0; i < listaAlunos.length; i++){

            if(posicao === listaAlunos[i][5]){
                msg += "<tr>";
                msg += "<td>"+listaAlunos[i][0]+"</td>";
                msg += "<td>"+listaAlunos[i][1]+"</td>";
                msg += "<td>"+listaAlunos[i][2]+"</td>";
                msg += "<td>"+listaAlunos[i][3]+"</td>";
                msg += "<td>"+listaAlunos[i][4]+"</td>";
                msg += "<td>"+workshops[listaAlunos[i][5]]+"</td>";
                msg += "</tr>";
            }
        }

    msg+="</tbody>";
    $('#tabelaByWorkshop').html(msg);

    }

}


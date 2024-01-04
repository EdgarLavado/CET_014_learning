let listaEventos = [];
let tipoMusica = ["Pop","Rock","Clássica","Metal"];
let listaBandas = [];
let alinhamento = [];
let listaEspectadores = [];

/*
function getTipoMusica(){

    let txt = "<option value='-1'>Escolha uma opção</option>";

    for(let i=0; i < tipoMusica.length; i++){
        txt += "<option value='"+i+"'>"+tipoMusica[i]+"</option>";

        console.log(tipoMusica)
    }

    $('#listaTipoMusica').html(txt);
    $('#listaTipoMusica1').html(txt);
}

getTipoMusica();
*/
getDados(tipoMusica,'listaTipoMusica');
getDados(tipoMusica,'listaTipoMusica1');


function registarEvento(){

    listaEventos.push([
    $('#refEvento').val(),
    $('#localEvento').val(),
    $('#latitudeEvento').val(),
    $('#longitudeEvento').val(),
    $('#horarioInicoEvento').val(),
    $('#horarioFimEvento').val(),
    $('#listaTipoMusica').val()
    ]);
    
            console.log(listaEventos);
            getDados(listaEventos, 'listaEvento');
            getDados(listaEventos, 'listaEvento1');
            getDados(listaEventos, 'listaEvento2');
    alert("Registo efetuado com sucesso!");
}

function registarBanda(){

    if(!valida($('#codigoBanda').val(),listaBandas,0)){
        alert("Banda já Registada Anteriormente!");
    }else{
            listaBandas.push([
                $('#codigoBanda').val(),
                $('#nomeBanda').val(),
                $('#listaTipoMusica').val()
                ]);

            console.log(listaBandas);
            getDados(listaBandas, 'listaBanda');

    alert("Registo efetuado com sucesso!");
}

function valida(codigo,arr,posicao){

    let resposta = true;
    
    for(let i=0; i<arr.length; i++){
    
        if(codigo == arr[i][posicao]){
                resposta = false;
                break;
            }
        }
        return resposta;
    }
}

function getDados(arr, id){
    let msg = "<option value='-1'>Escolha uma opção</option>";

    for(let i=0; i<arr.length; i++){

        msg += "<option value='"+i+"'>"+arr[i][0]+"</option>";
    }

    $('#'+id+'').html(msg);
}

function registarAlinhamento(){

    if(!validaAlinhamento($('#listaBanda').val())){
        alert("Essa banda não pode estar associada a esse evento!");
    }else{
    alinhamento.push([
    $('#listaBanda').val(),
    $('#listaEvento').val()
    ]);

            console.log(alinhamento);

    alert("Registo efetuado com sucesso!");
}

function validaAlinhamento(ref){

    let tipo;

    for(let i=0; i<listaBandas.length; i++){
    
        if(ref == listaBandas[i][0]){
                tipo = listaBandas[i][2];
                
                break;
            }
        }
        return tipo;
    }

    let resposta = true;
    
    for(let i=0; i<listaEventos.length; i++){
    
        if(tipo == listaEventos[i][6]){
                resposta = false;
                break;
            }
        
        return resposta;
    
    }


}

function registarEspectador(){

    listaEspectadores.push([
    $('#listaEvento1').val(),
    $('#nifEspectador').val(),
    $('#nomeEspectador').val(),
    $('#telemovelEspectador').val(),
    $('#emailEspectador').val()
    ]);
        
            console.log(listaEspectadores);
        
    alert("Registo efetuado com sucesso!");
}


function listarBandasEvento(codigo){

    let msg = "";

    for(let i=0; i < alinhamento.length; i++){

        if (codigo == alinhamento[i][1]){
                msg += "<tr>";
                msg += "<td>"+orcamentos[i][0]+"</td>";
                msg += "<td>"+clientes[orcamentos[i][1]][0]+"</td>";
                msg += "<td>"+produtos[orcamentos[i][2]][0]+"</td>";
                msg += "<td><button type='button' onclick='infoProduto("+orcamentos[i][2]+")'>info</button></td>";
                msg += "</tr>";

        }
    }

    $('#tabelaOrcamentos').html(msg);
}
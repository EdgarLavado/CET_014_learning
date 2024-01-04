let listaEventos = [];
let tipoMusica = ["Pop","Rock","Clássica","Metal"];
let listaBandas = [];
let alinhamento = [];
let listaEspectadores = [];
let num = 1;

function getTipoMusica(){

    let txt = "<option value='-1'>Escolha uma opção</option>";

    for(let i=0; i < tipoMusica.length; i++){
        txt += "<option value='"+i+"'>"+tipoMusica[i]+"</option>";
    }

    $('#listaTipoMusica').html(txt);
    $('#listaTipoMusicaFilter').html(txt);
}

getTipoMusica();

function registarEvento(){

    if(valida($('#refEvento').val(),listaEventos,0)){

        listaEventos.push([
            $('#refEvento').val(),
            $('#nomeEvento').val(),
            $('#localEvento').val(),
            $('#latitudeEvento').val(),
            $('#longitudeEvento').val(),
            $('#horarioInicoEvento').val(),
            $('#horarioFimEvento').val(),
            $('#listaTipoMusica').val()
        ]);
    
            console.log(listaEventos);
            getDados(listaEventos, 'listaEvento');
            getDados(listaEventos, 'listaEventoFilter');
            getDados(listaEventos, 'listaEventoSelecter');
            getDados(listaEventos, 'listaEventoEditor');

        alert("Registo efetuado com sucesso!");
    }else{
        alert("Evento já Registado Anteriormente!");
    }


}
function getDados(arr, id){
    let msg = "<option value='-1'>Escolha uma opção</option>";

    for(let i=0; i<arr.length; i++){

        msg += "<option value='"+i+"'>"+arr[i][1]+"</option>";
    }

    $('#'+id+'').html(msg);
}


function valida(valor, arr, posicao){

    let resposta = true;

    for(let i=0; i<arr.length; i++){

        if(valor == arr[i][posicao]){
            resposta = false;
            break;
        }
    }

    return resposta;
}

function registarBanda(){

    if(valida($('#codigoBanda').val(),listaBandas,0)){

        listaBandas.push([
            $('#codigoBanda').val(),
            $('#nomeBanda').val(),
            $('#listaTipoMusicaFilter').val()
        ]);

            console.log(listaBandas);
            getDados(listaBandas, 'listaBanda');

    alert("Registo efetuado com sucesso!");
}else{
    alert("Banda já Registada Anteriormente!");
}

}

function filtrarEventos(posicao){

    let msg = "";

    for(let i=0; i < listaBandas.length; i++){

        if(posicao == listaBandas[i][2]){
            msg += "<tr>";
            msg += "<td>"+listaBandas[i][0]+"</td>";
            msg += "<td>"+listaBandas[i][1]+"</td>";
            msg += "<td>"+tipoMusica[posicao]+"</td>";
            msg += "<td><input type='checkbox' id='prod"+i+"'></td>";
            msg += "</tr>";
        }
        
    }

    $('#tabelaBandas').html(msg);
}

function validarCheck(){

    let tempBandas = [];

    for(let i = 0; i <listaBandas.length; i++){

        if($('#prod'+i+'').is(':checked')){
            tempBandas.push(i);
        }

    }

    alinhamento.push([
        $('#num').val(),
        $('#listaEventos').val(),
        tempBandas
    ]);

    console.log(alinhamento);
    getNum();
}

function getNum(){

    $('#num').val(num);
    num++;
}

getNum();

function registarEspectador(){

    if(valida($('#nifEspectador').val())){

        listaEspectadores.push([
            $('#listaEventoSelecter').val(),
            $('#nifEspectador').val(),
            $('#nomeEspectador').val(),
            $('#telemovelEspectador').val(),
            $('#emailEspectador').val()
        ]);
        
            console.log(listaEspectadores);
        
    alert("Registo efetuado com sucesso!");
    }else{
        alert("Banda já Registada Anteriormente!");
    }
}

function filtrarEspectadores(posicao){

    let msg = "";

    for(let i=0; i < listaEspectadores.length; i++){

        if(posicao == listaEspectadores[i][0]){
            msg += "<tr>";
            msg += "<td>"+listaEspectadores[i][1]+"</td>";
            msg += "<td>"+listaEspectadores[i][2]+"</td>";
            msg += "<td><button type='button' onclick='getDadosEspectador("+i+")'>Editar</button></td>";
            msg += "</tr>";
        }
        
    }

    $('#tabelaEspectadores').html(msg);
}

function getDadosEspectador(posicao){

    $('#nifEspectadorEdit').val(listaEspectadores[posicao][1]);
    $('#nomeEspectadorEdit').val(listaEspectadores[posicao][2]);
    $('#telemovelEspectadorEdit').val(listaEspectadores[posicao][3]);
    $('#emailEspectadorEdit').val(listaEspectadores[posicao][4]);

    $('#btnEditCliente').attr('onclick','guardarEdicaoEspectador('+posicao+')')
}

function guardarEdicaoCliente(posicao){

    listaEspectadores[posicao][1] = $('#nifEspectadorEdit').val();
    listaEspectadores[posicao][2] = $('#nomeEspectadorEdit').val();
    listaEspectadores[posicao][3] = $('#telemovelEspectadorEdit').val();
    listaEspectadores[posicao][4] = $('#emailEspectadorEdit').val();

    alert("Edição Concluida com sucesso!");

    //getDados(clientes,'listaClientes');
    //getDados(clientes,'listaClientes1');
    //getDados(clientes,'listaClientes2');

    //getOrcamentos();
}
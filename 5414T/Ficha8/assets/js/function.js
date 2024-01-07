let clientes = [];
let produtos = [];
let orcamentos = [];

//function to register a cliente after validating if hes nif wasnt register before
function registarCliente(){

    if(!validaNif($('#nifCliente').val())){
        alert("Cliente já registado!!!");
    }else{
        clientes.push([
            $('#nifCliente').val(),
            $('#nomeCliente').val(),
            $('#emailCliente').val(),
            $('#moradaCliente').val()
        ]);
    
        console.log(clientes);
        getClientes();
        alert("Registo efetuado com sucesso!");
    }
}

//nif valitadion
function validaNif(nif){

    let resNif = true;

    for(let i = 0; i <clientes.length; i++){

        if(clientes[i][0] == nif){
            resNif = false;
            break;
        }
    }    

    return resNif;
}

//function to get the data of the client in that position
function getDadosCliente(posicao){
    //let posicao = document.getElementById('listaEquipas').value;
    $('#nifCliente').val(clientes[posicao][0]);
    $('#nomeCliente').val(clientes[posicao][1]);
    $('#emailCliente').val(clientes[posicao][2]);
    $('#moradaCliente').val(clientes[posicao][3]);

    $('#btnEdit').attr('onclick', 'guardaRegistosClientes('+posicao+')')
}

//function to save the changes to the data of the client in that position
function guardaRegistosClientes(posicao){
    
    clientes[posicao][0] = $('#nifCliente').val();
    clientes[posicao][1] = $('#nomeCliente').val();
    clientes[posicao][2] = $('#emailCliente').val();
    clientes[posicao][3] = $('#moradaCliente').val();

    alert("Registos Adicionados!");

}

//function to register a produto after validating of the product wasnt registed before
function registarProduto(){

    if(!validaRef($('#refProduto').val())){
        alert("Produto já registado!!!");
    }else{
        produtos.push([
            $('#refProduto').val(),
            $('#nomeProduto').val(),
            $('#precoSemIva').val()
        ]);
    
        console.log(produtos);
        getProdutos();
    
        alert("Registo efetuado com sucesso!");
    }

}

//product reference validation
function validaRef(ref){

    let resRef = true;

    for(let i = 0; i <produtos.length; i++){

        if(produtos[i][0] == ref){
            resRef = false;
        }
    }    

    return resRef;
}

//function to list the registed clients in the select tags
function getClientes(){

    let txt = "<option value='-1'>Escolha um Cliente</option>";

    for(let i=0; i < clientes.length; i++){
        txt += "<option value='"+i+"'>"+clientes[i][0]+"</option>";
    }

    $('#cliente').html(txt);
    $('#clienteFilter').html(txt);
}

getClientes();

//function to list the registed procucts in the select tags
function getProdutos(){

    let txt = "<option value='-1'>Escolha uma opção</option>";

    for(let i=0; i < produtos.length; i++){
        txt += "<option value='"+i+"'>"+produtos[i][1]+"</option>";
    }

    $('#produto').html(txt);
    $('#produtoFilter').html(txt);
}

getProdutos();

//function to get the data of the product in that posicion
function getProduto(posicao){
    //let posicao = document.getElementById('listaEquipas').value;
    $('#refProduto').val(clientes[posicao][0]);
    $('#nomeProduto').val(clientes[posicao][1]);
    $('#precoSemIva').val(clientes[posicao][2]);

    $('#btnEdit').attr('onclick', 'guardaRegistosProdutos('+posicao+')')
}

//function to save the data changed of the product in that posicion
function guardaRegistosProdutos(posicao){
    
    produtos[posicao][0] = $('#refProduto').val();
    produtos[posicao][1] = $('#nomeProduto').val();
    produtos[posicao][2] = $('#precoSemIva').val();

    alert("Registos Adicionados!");

}

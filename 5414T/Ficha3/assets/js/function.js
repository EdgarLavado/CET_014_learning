function area(){

    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let resultado = n1*n2;

    document.getElementById('res').innerHTML = "A área do rectângulo é: "+resultado;

    //console.log(resultado);
}
function media(){

    let n1b = document.getElementById('n1b').value;
    let n2b = document.getElementById('n2b').value;
    let n3b = document.getElementById('n3b').value;
    let n4b = document.getElementById('n4b').value;
    let n5b = document.getElementById('n5b').value;

    let resultado1 = ((Number(n1b) + Number(n2b) + Number(n3b) + Number(n4b) + Number(n5b)) / 5);

    document.getElementById('res1').innerHTML = "A média do Aluno é: "+resultado1;

    //console.log(resultado);
}
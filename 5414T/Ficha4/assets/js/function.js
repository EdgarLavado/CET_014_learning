//function to find the average of three marks of a student and return their final mark
function calcMedia(){
    let nome = document.getElementById('nome').value;

    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;

    let media = (Number(nota1) + Number(nota2) + Number(nota3))/3;

    let txt = "";

    if(media >= 9.5){
        txt = "Média Positiva - Aprovado";
    }else{
        txt = "Média Negativa - Reprovado";
    }

    document.getElementById('resNome').innerHTML = "Nome do Aluno: "+nome;
    document.getElementById('resMedia').innerHTML = "Média das Notas: "+media+" valores | "+txt;
}

//function to find the average velocity of a given car and classify it
function calcVelocidadeMedia(){
    let distancia = document.getElementById('distancia').value;
    let tempo = document.getElementById('tempo').value;


    let velocidade = Number(distancia) / Number(tempo);

    let txt = "";

    if(velocidade <= 90){
        txt = "Velocidade Correcta";
    }else if (velocidade > 90 && velocidade <= 120){
        txt = "Velocidade Excessiva";
    }else{
        txt = "Velocidade Muito Excessiva"
    }

    document.getElementById('resVelocidadeMedia').innerHTML = "A Velocidade Média foi: "+velocidade+" km/h | "+txt;
}

var matriculas = new Array();
var marcas = new Array();
var kmpercorridosA = new Array();
let totalPer = 0;
var outputHTML ="";

//function to register a vehicle
function registarVeiculos(){
    let matricula = document.getElementById('matricula').value;
    let marca = document.getElementById('marca').value;
    let kmpercorridos = document.getElementById('kmpercorridos').value;

    if (!(typeof matricula === 'undefined') && matricula!=null && matricula.trim()!='') {  
        matriculas.push(matricula);
    }

    if (!(typeof marca === 'undefined') && marca!=null && marca.trim()!='') {  
        marcas.push(marca);
    }

    if (!(typeof kmpercorridos === 'undefined') && kmpercorridos!=null && kmpercorridos.trim()!='') {  

      kmpercorridosA.push(kmpercorridos);
    }
  
    alert("Carro registado.")

    for (var i = 0; i < matriculas.length; i++) {
        matriculas[i];
        marcas[i];
        kmpercorridosA[i];
      
      document.getElementById('resListar').innerHTML = "O veículo de matricula: "+matricula+" da marca : "+marca+" tem: "+kmpercorridos+"km percorridos";
      
      } 
}

//function to list all registed vehicles and the total of km they ran
function listarVeiculos(){

  outputHTML += "<table>";
    
   for (var i = 0; i < matriculas.length; i++) {
    outputHTML += "<tr>";

    outputHTML += "<td>" + " Matricula: "+matriculas[i]+" Marca: "+marcas[i]+" Kilometragem: "+kmpercorridosA[i]+"</td>";

        /*matriculas[i];
        marcas[i];
        kmpercorridosA[i];
        */
    outputHTML += "</tr>";
     
      //document.getElementById('resListar').innerHTML = "O veículo de matricula: "+matriculas[i]+" da marca : "+marcas[i]+" tem: "+kmpercorridosA[i]+"km percorridos";
      } 
      outputHTML += "</table>";

      document.getElementById('output_div').innerHTML = outputHTML;

  for (var i = 0; i < kmpercorridosA.length; i++) {
     
    totalPer = Number(totalPer) + Number(kmpercorridosA[i]); 
  }
  
  document.getElementById('resTotalKm').innerHTML = " Total de Km percorridos pelos veículos: "+totalPer+" km. ";
}

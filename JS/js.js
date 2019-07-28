
// var tabela = document.createElement("table");
// document.getElementById("result").appendChild(newTable);
// var tabela = document.createElement("table");
// var cabecalho = document.createElement("thead");
// var corpo = document.createElement("tbody");

// tabela.appendChild(cabecalho);
// tabela.appendChild(corpo);
// document.getElementById("result").appendChild(table);

//document.getElementById("tabela").appendChild(createTable)() 
/*function resultados(dados){
var dados = new Array();
for (var i = 0; i < 30; i++) {
    dados[i] = ['<tr>', i + 1, RandomF, "Maria", "Pera",'</tr>'];
    //var tr = document.createElement("tr");
    for (var j = 0; j < 30; j++) {
    dados[j] = ['<tr>',j + 1, RandomF, "João", "Maçã",'</tr>'];
        //var tr = document.createElement("tr");
    }
}}
//table.appendChild(thead);
//table.appendChild(tbody);
return dados;
*/

function RandomF(frutas) {
    return parseInt(Math.random()*5)
}

console.log(RandomF);


// n = parseInt(Math.random() * 6);
// tabela = '<table border=1>';
// tabela += '<tr>';
// tabela += '<td>Numero Sorteado: </td>';
// tabela += '<td>' + n + '</td>';
// tabela += '</tr>';
// tabela += '</table><br><br>';
// document.write(tabela);
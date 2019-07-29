const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end(NotaAluno);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});


function NotaAluno() {
	var fruta1, fruta2, fruta3;
	var sacolacheia = false;
	var limit = 5;
	var melhoraluno;
	var qntMaca, qntPera;
	var sacola = new Array(fruta1, fruta2, fruta3);
	/*
		var lista = [];
		var Aluno01 = { nome: "Joao", fruta: maca, nota: Nota1 };
		lista.push( Aluno01 );

		var listsRetorno;
		
		for (var i = 1; i <= 30; i++) {
		consolge.log(lista[i]);
		var qtdepera = lista[i].qtdPera;

var novo = {  };
listsRetorno.push({})
		}
	*/
	var listaRetorno = [];
	for (var i = 1; i <= 30; i++) {
		var qtdepera = parseInt(Math.random() * limit);
		var qtdemaca = parseInt(Math.random() * limit);
		var maca = new Array(qtdemaca, "Macã");
		var pera = new Array(qtdepera, "Pera");

		if (pera + maca <= 5) {
			var Nota1 = parseInt(Math.random() * 11);
			var Nota2 = parseInt(Math.random() * 11);

			var Aluno0 = { nome: "Joao", fruta: maca, nota: Nota1 }; //objeto
			var Aluno1 = { nome: "Maria", fruta: pera, nota: Nota2 };

			if (Nota1 > Nota2) {
				melhoraluno = Aluno0;
			}
			else {
				melhoraluno = Aluno1;

			}
			for (var j = 0; j < 3; j++) {
				if (melhoraluno==Aluno0 && melhoraluno[1] > 0) 
				{
					sacola[j] = "Maçã";
					qntMaca++;
				}
				else {
					sacola[j] = "--";
				}
			}
			var tabelaCompeticao = new Array("Dia: " + i, " Total Peras: " + pera, " Total Macas: " + maca, " Melhor Aluno: " + melhoraluno[0] + " " + sacola[0] + " " + sacola[2] + " " + sacola[2]); 
			var objRetorno = { Dia: i+1, TotalPera: pera, TotalMacas: maca, MelhorAluno: };

			
			
			qntMaca += qntMaca;
			qntPera += qntPera;
		}
		else {
			i--;
		}
		console.log(tabelaCompeticao);
	}
}


$(document).ready(function(){ //java requeriimento
	var lista = NotaAluno();

	var htmlTable = "<table>";
	htmlTable = "<th>";
	
	for(var i =0; i< lista.length; i++){
		htmlTable += "<tr>";
		
		htmlTable += "<td>" + lista[i].Dia + "</td>";
		
		htmlTable += "</tr>";
	}
	
	$(document).append(htmlTable);
})





/*function TesteFrutas(maca,pera){
if(maca<0 && sacola==0){
	for (var j = 0; j <= 2; j++) {
		if (maca != 0) {
			sacola[j] = "Macã";
			maca--;
			qntMaca++;
		} else {
			if (pera > 0 && pera <= 3) {
				sacola[j] = "Pera";
				pera--;
			qntPera++;
			}
		}
}
}*/

/*enquanto a sacola não for vazia inserir a fruta do aluno da maior nota na posição 0;
senão tiver frutas sufucuiente do aluno da melhor nota colocar a fruto do outro aulo na sacola na posição 0;*/


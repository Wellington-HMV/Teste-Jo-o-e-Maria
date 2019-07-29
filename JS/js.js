var maiorNota;
var nota1, nota2, qtdepera, qtdemaca, maca, pera;

var aluno1 = { nome: "Joao", qtfruta: maca, nomeFruta: "Maçã", nota: nota1 }; //objeto
var aluno2 = { nome: "Maria", qtfruta: pera, nomeFruta: "Pera", nota: nota2 };
var bolsaProfessora = [];

function MaiorNota(nota1, nota2) {
    if (nota1 > nota2) {
        maiorNota = aluno1.nome;
    } else {
        maiorNota = aluno2.nome;
    }
    return maiorNota;
};

/*function QuantidadeFrutas() {
    do {
        qtdepera = parseInt(Math.random() * 6);
        qtdemaca = parseInt(Math.random() * 6);
        if (qtdemaca + qtdepera <= 5) {
            maca = qtdemaca;
            pera = qtdepera;
        }
    } while (!qtdemaca + qtdepera <= 5);

    return maca, pera;
}*/
function QuantidadeProfessora(maca, pera, melhor_aluno) {
    if (melhor_aluno == aluno1.nome) {
        for (var i = 0; i < 3; i++) {
            if (maca > 0) {
                bolsaProfessora.push(aluno1.nomeFruta);
                maca--;
            } else if (pera > 0) {
                bolsaProfessora.push(aluno2.nomeFruta);
                pera--;
            } else {
                bolsaProfessora.push("--");
            }
        }
    }
    if (melhor_aluno == aluno2.nome) {
        for (var i = 0; i < 3; i++) {
            if (pera > 0) {
                bolsaProfessora.push(aluno2.nomeFruta);
                pera--;
            } else if (maca > 0) {
                bolsaProfessora.push(aluno1.nomeFruta);
                maca--;
            } else {
                bolsaProfessora.push ("--");
            }
        }
    }
    return bolsaProfessora;
};
var list = [];

for (var i = 1; i <= 30; i++) {
    nota1 = parseInt(Math.random() * 11);
    nota2 = parseInt(Math.random() * 11);

    do {                                        //testando a quantidade de frutas levadas
        qtdepera = parseInt(Math.random() * 6);
        qtdemaca = parseInt(Math.random() * 6);
        if (qtdemaca + qtdepera <= 5) {
            maca = qtdemaca;
            pera = qtdepera;
        }
    } while (qtdemaca + qtdepera < 5);

    aluno1.qtfruta = maca;
    aluno2.qtfruta = pera;

    var melhor_aluno = MaiorNota(nota1,nota2);

    bolsaProfessora = QuantidadeProfessora(maca,pera, melhor_aluno);

    /*var dados = [];

    dados[0] = "dia\n"+i;
    dados[1] = aluno1.qtfruta+"\nMaças";
    dados[2] = aluno2.qtfruta+"\nPeras";
    dados[3] = "\nmelhor aluno:"+melhor_aluno;
    dados[4] = "Fruta1" + bolsaProfessora[0];
    dados[5] = "Fruta2" + bolsaProfessora[1];*/

    var objreturn={Dia: i, Macas: aluno1.qtfruta,Peras:aluno2.qtfruta,Maluno:melhor_aluno,
        Fruta1: bolsaProfessora[0],Fruta2:bolsaProfessora[1],Fruta3:bolsaProfessora[2]};

    list.push(objreturn);

    //list.push(i+QuantidadeFrutas(qtdemaca)+QuantidadeFrutas(qtdepera)+MaiorNota()+bolsaProfessora[0]+bolsaProfessora[1]+bolsaProfessora[2]);
};
//document.write(list);

/*$(document).ready(function () { //java requerimento
    var lista = MaiorNota();*/

var htmlTable = "<table>";
htmlTable += "<tr>";
htmlTable = "<th>tes</th>";
htmlTable += "</tr>";

for (var i = 0; i < list.length; i++) {
    htmlTable += "<tr>";

    //htmlTable += "<td>" + list[i] + "</td>";
    //htmlTable += "<td>" + "teste" + "</td>";

    htmlTable += "</tr>";
}
htmlTable += "</table>";
document.write(htmlTable);
    /*

$(document).append(htmlTable);
});*/

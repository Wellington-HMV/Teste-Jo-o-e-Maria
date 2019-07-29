var nota1, nota2, qtdepera = 0, qtdemaca = 0, maca = 0, pera = 0, melhor_aluno, maiorNota;
var macaMes = 0, peraMes = 0;

var list = [];
var bolsaProfessora = [];

var aluno1 = { nome: "Joao", qtfruta: maca, nomeFruta: "Maçã", nota: nota1 }; //objeto
var aluno2 = { nome: "Maria", qtfruta: pera, nomeFruta: "Pera", nota: nota2 };
var objreturn = {};

function MaiorNota(nota1, nota2) {
    if (nota1 > nota2) {
        maiorNota = aluno1.nome;
    } else {
        maiorNota = aluno2.nome;
    }
    return maiorNota;
};
function QuantidadeProfessora(maca, pera, melhor_aluno) {
    if (melhor_aluno == aluno1.nome) {
        for (var i = 0; i < 3; i++) {
            if (maca > 0) {
                bolsaProfessora[i] = aluno1.nomeFruta;
                maca--;
                macaMes++;
            } else if (pera > 0) {
                bolsaProfessora[i] = aluno2.nomeFruta;
                pera--;
                peraMes++;
            } else {
                bolsaProfessora[i] = "--";
            }
        }
    }
    if (melhor_aluno == aluno2.nome) {
        for (var i = 0; i < 3; i++) {
            if (pera > 0) {
                bolsaProfessora[i] = aluno2.nomeFruta;
                pera--;
                peraMes++;
            } else if (maca > 0) {
                bolsaProfessora[i] = aluno1.nomeFruta;
                maca--;
                macaMes++;
            } else {
                bolsaProfessora[i] = "--";
            }
        }
    }
    return bolsaProfessora;
};
for (var i = 1; i <= 30; i++) {
    nota1 = parseInt(Math.random() * 11);
    nota2 = parseInt(Math.random() * 11);

    do {                                        //testando a quantidade de frutas levadas
        qtdepera = parseInt(Math.random() * 6);
        qtdemaca = parseInt(Math.random() * 6);
        if (qtdemaca + qtdepera > 1 && qtdemaca + qtdepera <= 5) {
            maca = qtdemaca;
            pera = qtdepera;
        }
    } while (qtdemaca + qtdepera <= 5);

    aluno1.qtfruta = maca;
    aluno2.qtfruta = pera;

    melhor_aluno = MaiorNota(nota1, nota2);

    bolsaProfessora = QuantidadeProfessora(maca, pera, melhor_aluno);

    objreturn = {
        Dia: i, Macas: aluno1.qtfruta, Peras: aluno2.qtfruta, Maluno: melhor_aluno,
        Fruta1: bolsaProfessora[0], Fruta2: bolsaProfessora[1], Fruta3: bolsaProfessora[2]
    };

    list.push(objreturn);
};
var htmlTable = "<table>";
htmlTable += "<tr>";
htmlTable += "<th>Dia</th>" + "<th>Peras</th>" + "<th>Maçãs</th>" + "<th>Melhor Aluno</th>" + "<th>Fruta 1</th>" + "<th>Fruta 2</th>" + "<th>Fruta 3</th>";
htmlTable += "</tr>";
for (var i = 0; i < list.length; i++) {
    htmlTable += "<tr>";
    htmlTable += "<td>" + list[i].Dia + "</td>";
    htmlTable += "<td>" + list[i].Peras + "</td>";
    htmlTable += "<td>" + list[i].Macas + "</td>";
    htmlTable += "<td>" + list[i].Maluno + "</td>";
    htmlTable += "<td>" + list[i].Fruta1 + "</td>";
    htmlTable += "<td>" + list[i].Fruta2 + "</td>";
    htmlTable += "<td>" + list[i].Fruta3 + "</td>";
    htmlTable += "</tr>";
};
htmlTable += "</table>" + "<br>Este mês a professora levou " + macaMes + " maçãs e " + peraMes + " peras.</br>";
document.write(htmlTable);
//agradeço a oportunidade aguardo resposta "Wellington"
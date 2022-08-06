var slCursos = document.getElementById("slCursos");
var btConfirmar = document.getElementById("btConfirmar");

function carregarCursos() {
    
    var cursos = slCursos.value;
    var corpoTabela = document.querySelector(".corpoTabela");
    
    corpoTabela.textContent = "";

    for (var i = 0; i < vetAlunos.length; i++) {

        var mediaAluno = 0;
        var percentualFaltas = 0;

        if (vetCursos[i].indexOf(cursos) != -1) {
            
            var tr = document.createElement("tr");
            var tdNomeCurso = document.createElement("td");
            var tdNomeAluno = document.createElement("td");

            tdNomeCurso.textContent = vetCursos[i];
            tdNomeAluno.textContent = vetAlunos[i];

            mediaAluno = (vetProva1[i] * 20 + vetProva2[i] * 40 + vetParticipacao[i] * 40) / 100;

            percentualFaltas = (vetFalta[i] / 50) * 100;

            if (mediaAluno > 60 && percentualFaltas < 25) {
                
                tr.appendChild(tdNomeCurso);
                tr.appendChild(tdNomeAluno);
            }

            corpoTabela.appendChild(tr);
        }
    }
}
btConfirmar.addEventListener("click", carregarCursos);
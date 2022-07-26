var inNome = document.getElementById("inNome");
var inCurso = document.getElementById("inCurso");

window.onload = tabelaComFiltro;

function tabelaComFiltro() {
    
    var cursoFiltrado = inCurso.value;
    var nomeAluno = inNome.value;

    var corpoTabela = document.querySelector(".corpoTabela");

    corpoTabela.innerText = "";

    for (var i = 0; i < vetAlunos.length; i++) {
        if (vetCursos[i].toLocaleLowerCase().indexOf(cursoFiltrado.toLocaleLowerCase()) != -1 && vetAlunos[i].toLocaleLowerCase().indexOf(nomeAluno.toLocaleLowerCase()) != -1) {
            var mediaAluno = 0;
            var percentualFaltas = 0;

            var tr = document.createElement("tr");
            var tdNomeAluno = document.createElement("td");
            var tdNomeCurso = document.createElement("td");
            var tdNota1 = document.createElement("td");
            var tdNota2 = document.createElement("td");
            var tdParticipacao = document.createElement("td");
            var tdFalta = document.createElement("td");
            var tdMedia = document.createElement("td");
            var tdPercentualFaltas = document.createElement("td");
            var tdAprovacao = document.createElement("td");

            tdNomeAluno.textContent = vetAlunos[i];
            tdNomeCurso.textContent = vetCursos[i];
            tdNota1.textContent = vetProva1[i];
            tdNota2.textContent = vetProva2[i];
            tdParticipacao.textContent = vetParticipacao[i];
            tdFalta.textContent = vetFalta[i] + "h";

            mediaAluno = (vetProva1[i] * 20 + vetProva2[i] * 40 + vetParticipacao[i] * 40) / 100;
            tdMedia.textContent = mediaAluno;

            percentualFaltas = (vetFalta[i] / 50) * 100;
            tdPercentualFaltas.textContent = percentualFaltas.toFixed(1) + "%";

            tdAprovacao.textContent = "Aprovado!";

            
                if (percentualFaltas > 25) {
                    tdAprovacao.textContent = "Reprovado!";
                } else if (mediaAluno < 60) {
                    tdAprovacao.textContent = "Reprovado por nota!";
                }

            tr.appendChild(tdNomeAluno);
            tr.appendChild(tdNomeCurso);
            tr.appendChild(tdNota1);
            tr.appendChild(tdNota2);
            tr.appendChild(tdParticipacao);
            tr.appendChild(tdFalta);
            tr.appendChild(tdMedia);
            tr.appendChild(tdPercentualFaltas);
            tr.appendChild(tdAprovacao);

            corpoTabela.appendChild(tr);
        }
    }
}

inNome.addEventListener("keyup", tabelaComFiltro);
inCurso.addEventListener("keyup", tabelaComFiltro);
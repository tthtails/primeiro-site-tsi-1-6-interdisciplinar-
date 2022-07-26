var slCursos = document.getElementById("slCursos");

function carregarCursos() {
    var cursos = slCursos.value;
    var corpoTabela = document.querySelector(".corpoTabela");
    corpoTabela.textContent = "";
    for (var i = 0; i < vetCursos.length; i++) {
        if (vetCursos[i].indexOf(cursos) != -1) {
            var tr = document.createElement("tr");
            var tdNomeCurso = document.createElement("td");
            var tdNomeAluno = document.createElement("td");

            tdNomeCurso.textContent = vetCursos[i];
            tdNomeAluno.textContent = vetAlunos[i];

            tr.appendChild(tdNomeCurso)
            tr.appendChild(tdNomeAluno)

            corpoTabela.appendChild(tr)
        }
    }
}
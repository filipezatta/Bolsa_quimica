
const element = document.getElementById("main-content")
const startPage = document.getElementById("start-wrapper")
const tabela = document.getElementById("mainQuimica")


function changePage(materia){
    if(materia = "btnQuimica"){
        startPage.style.display = "none"
        tabela.style.display = "grid"
    }
}



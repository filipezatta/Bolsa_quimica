
const element = document.getElementById("main-content")
const startPage = document.getElementById("start-wrapper")
const mainQuimica = document.getElementById("mainQuimica")
const mainFisica = document.getElementById("mainFisica")
const mainBiologia = document.getElementById("mainBiologia")
const btnMaterias = document.querySelectorAll(".btnMateria")



function changePage(materia){
    if(materia == "btnQuimica"){

        startPage.style.display = "none"
        mainQuimica.style.display = "grid"
    }
    else if(materia == "btnBiologia"){
        startPage.style.display = "none"
    }
    else if(materia == "btnFisica"){
        startPage.style.display = "none"
        mainFisica.style.display = "grid"

    }
    else{
        return
    }
}

btnMaterias.forEach((btn)=>{
    btn.addEventListener("click", ()=>{

        changePage(btn.id)

    }) 
}
)




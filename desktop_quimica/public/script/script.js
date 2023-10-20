
const element = document.getElementById("main-content")
const startPage = document.getElementById("start-wrapper")
const mainQuimica = document.getElementById("mainQuimica")
const btnMaterias = document.querySelectorAll(".btnMateria")



function changePage(materia){
    if(materia == "btnQuimica"){

        startPage.style.display = "none"
        mainQuimica.style.display = "grid"
    }
    else if(materia == "btnBiologia"){
        startPage.style.display = "none"
    }
    else if(materia == "btnFísica"){
        startPage.style.display = "none"
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




const elementCube = document.getElementById("element-cube")
const elementos = document.querySelectorAll(".element")
const tabela = document.getElementById("tabela")
const quadroleto = document.querySelector("#quadroleto")
const elementDetails = document.getElementById("element-details")
const mainQuimica = document.getElementById("mainQuimica")
const voltar_tabela = document.querySelector("#voltar_tabela")
const quadro_negro = document.querySelector("#quadro_negro")
//elementsJSON = require('./elements.json')
import elementsJSON from './elementos.json' assert{type: "json"};


elementos.forEach(function(elem) {

    elem.addEventListener("click", function() {


        quadroleto.classList.toggle('go-left');

        setTimeout(() => {
            quadroleto.style.display = "none"

            mainQuimica.style.gridTemplateColumns = "10% 70%";

            quadro_negro.style.display = "block"
            voltar_tabela.style.display = "block"
            alterarElementoDetalhe(elem.title);
          }, 0.3 * 1000);
        return
    });
});

voltar_tabela.addEventListener("click", function(){
    quadroleto.classList.replace('go-left', 'go-right')
    alterarElementoDetalhe(false)

    quadroleto.style.display = "block"
    mainQuimica.style.gridTemplateColumns = "1fr";
    voltar_tabela.style.display = "none"
    quadro_negro.style.display = "none"
    return
})

function alterarElementoDetalhe(element) {
    elementDetails.style.display = "block"
    
    let currentElement = elementsJSON[element]

    if(!element){
        elementDetails.style.display = "none"
        elementDetails.innerHTML = ""
        
        return
    }
    elementDetails.innerHTML = 
    `               
    <div id="element-cube">
        <div class="cube-container">
            <div class="cube">
                <div class="face top"></div>
                <div class="face bottom"></div>
                <div class="face left"></div>
                <div class="face right"></div>
                <div class="face front"></div>
                <div class="face back"></div>
                <div class="cube2">
                    <div style="background: rgba(75, 75, 75, 0.75);" class="face top">${currentElement["abbreviation"]}</div>
                    <div style="background: rgba(75, 75, 75, 0.75);" class="face bottom">${currentElement["abbreviation"]}</div>
                    <div style="background: rgba(75, 75, 75, 0.75);" class="face left">${currentElement["abbreviation"]}</div>
                    <div style="background: rgba(75, 75, 75, 0.75);" class="face right">${currentElement["abbreviation"]}</div>
                    <div style="background: rgba(75, 75, 75, 0.75);" class="face front">${currentElement["abbreviation"]}</div>
                    <div style="background: rgba(75, 75, 75, 0.75);" class="face back">${currentElement["abbreviation"]}</div>
                </div>
            </div>
        </div>
        <hr>
        <h1>${currentElement["name"]}, ${currentElement["abbreviation"]} </h1>
        <p>${currentElement["randomFact"]}</p>
        <P>[...]</P>
    </div>

    <button>ver detalhes</button>
    <button>ver aplicações</button>
    <button>ver experimentos</button>
    <img src="../images/Fe/hemace.png" width="100px">
    <img src="../images/Fe/beam.png" width="100px">
    `
    //<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sint pariatur asperiores natus ipsam labore, est, eum totam enim ab temporibus veniam odit minus quo. Velit animi provident itaque aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod voluptatibus libero dolorum. Illo quisquam aperiam vel repudiandae, quas qui illum inventore eaque beatae culpa odit, sequi voluptatem itaque! Inventore, modi.</p>
    
}
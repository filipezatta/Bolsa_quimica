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

            mainQuimica.style.gridTemplateColumns = "10% 5% 65%";
            quadro_negro.style.gridColumn = "3/3" 
            quadro_negro.style.display = "grid"
            voltar_tabela.style.display = "block"
            alterarElementoDetalhe(elem.title);
          }, 0.3 * 1000);
        return
    });
});

voltar_tabela.addEventListener("click", function(){
    quadroleto.classList.replace('go-left', 'go-right')
    alterarElementoDetalhe(false)

    quadroleto.style.display = "grid"
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
    const detalhesElementos = 
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
                    <div style="background: rgba(75, 75, 75, 0.75); background-image: url(../images/Fe/Ferro.png);" class="face top"></div>
                    <div style="background: rgba(75, 75, 75, 0.75); background-image: url(../images/Fe/Ferro.png);" class="face bottom"></div>
                    <div style="background: rgba(75, 75, 75, 0.75); background-image: url(../images/Fe/Ferro.png);" class="face left"></div>
                    <div style="background: rgba(75, 75, 75, 0.75); background-image: url(../images/Fe/Ferro.png);" class="face right"></div>
                    <div style="background: rgba(75, 75, 75, 0.75); background-image: url(../images/Fe/Ferro.png);" class="face front"></div>
                    <div style="background: rgba(75, 75, 75, 0.75); background-image: url(../images/Fe/Ferro.png);" class="face back"></div>
                </div>
            </div>
        </div>
        <hr>
        <h1>${currentElement["name"]}, ${currentElement["abbreviation"]} </h1>
        <p>${currentElement["randomFact"]}</p>
        
    </div>

    <div id="arquivo">
        <div id="arquivo-tecnico">
            <br>
            <br>
            <br>
            <span id="span-arquivo-tecnico">Ficha técnica</span>

        </div>
        <div id="arquivo-aplicacoes">
            <br>
            <br>
            <br>
            <span id="span-arquivo-aplicacoes">Aplicações</span>

        </div>
        <div id="arquivo-experimentos">
            <br>
            <br>
            <br>
            <span id="span-arquivo-experimentos">Experimentos</span>

        </div>
    </div>

    `
    elementDetails.innerHTML = detalhesElementos.valueOf()


    // Query selector for each div and span
    const arquivoTecnicoDiv = document.querySelector("#arquivo-tecnico");
    const arquivoAplicacoesDiv = document.querySelector("#arquivo-aplicacoes");
    const arquivoExperimentosDiv = document.querySelector("#arquivo-experimentos");
    // Event listeners
    arquivoTecnicoDiv.addEventListener("click", function() {
        elementDetails.style.display = "grid";
        elementDetails.style.gridTemplateColumns = "1fr 1fr";
        
        console.log(detalhesElementos)
        if(elementDetails.innerHTML == detalhesElementos){
            console.log(detalhesElementos)
            elementDetails.innerHTML = detalhesElementos
        }
        elementDetails.innerHTML = detalhesElementos;
        elementDetails.innerHTML += `
        <ul>
            <li><h1>Propriedades químicas</h1></li>
            <li><p>Eletronegatividade: 1.83</p></li>
            <li><p>Estados de oxidação: -4, -2, -1, 0, +1, +2, +3, +4, +5, +6, +7</p></li>
            <li><h1>Propriedades físicas</h1></li>
            <li><p>Ponto de fusão: 1535°C</p></li>
            <li><p>Densidade: 7,87 g/cm³</p></li>
            <li><p>Cor: Prateada, mas vermelha quando oxidado</p></li>
            <li><p>Estado nas CNTP: sólido</p></li>
        </ul>
        `;
    });
    arquivoAplicacoesDiv.addEventListener("click", function() {

        elementDetails.style.display = "grid"
        
        elementDetails.style.gridTemplateColumns = "1fr 1fr"
        if(elementDetails.innerHTML != detalhesElementos){
            elementDetails.innerHTML = detalhesElementos
        }
        elementDetails.innerHTML += `
        <ul>
            <li><h1>Principais aplicações:</h1></li>
            <li><p>contrução civil</p></li>
            <li><img src="../images/Fe/beam.png" style="max-width: 200px"></li>
            <li><p>Hemáceas/hemoglobina</p></li>
            <li><img src="../images/Fe/hemace.png" style="max-width: 200px"></li>

        </ul>
        `
    });

    arquivoExperimentosDiv.addEventListener("click", function() {

        elementDetails.style.display = "grid"
        
        elementDetails.style.gridTemplateColumns = "1fr 1fr"
        if(elementDetails.innerHTML != detalhesElementos){
            elementDetails.innerHTML = detalhesElementos
        }
        elementDetails.innerHTML += `
        <ul>
            <li><h1>Experimentos:</h1></li>
            <li><h2>Oxidação da palha de aço</h2></li>
            <button style="color: black">próximo</button>
            <button style="color: black">anterior</button>
            <li><h3>materiais: </h3></li>
            <li><p>água sanitária</p></li>
            <li><p>palha de aço</p></li>
            <li><p>um bastão de vidro</p></li>
            <li><p>um recipiente de vidro</p></li>
            <li><h3>Instruções:</p></li>
            <li><p>preencha o recipiente com água sanitária, numa quantidade suficiente para permitir a submerção da quantidade desejada de palha de aço</p></li>
            <li><p>adicione a palha de aço ao recipiente e com o auxílio do bastão de vidro, tente submergir a palha de aço</p></li>
            <li><p>aguarde a oxidação do ferro, que deverá mudar o tom de coloração da solução para um vermelho-alaranjado</p></li>
            <li><img src="../images/Fe/tea-and-water-pretest.png" style="max-width: 400px"></li>

        </ul>
        `
    });

        //<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sint pariatur asperiores natus ipsam labore, est, eum totam enim ab temporibus veniam odit minus quo. Velit animi provident itaque aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod voluptatibus libero dolorum. Illo quisquam aperiam vel repudiandae, quas qui illum inventore eaque beatae culpa odit, sequi voluptatem itaque! Inventore, modi.</p>
        
    }
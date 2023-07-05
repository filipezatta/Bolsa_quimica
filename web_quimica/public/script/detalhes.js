const elementCube = document.getElementById("element-details")

elementsJSON = require('./elements.json')
import elementsJSON from './elementos.json' assert{type: "json"};

function openWindow(element) {

    alert(element)
    let currentElement = elementsJSON[element]

    elementCube.innerHTML = 
    ```
        <div class="cube-container">
        <div class="cube">
        <div class="face top"></div>
        <div class="face bottom"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="cube2">
            <div class="face top">${currentElement["abbreviation"]}</div>
            <div class="face bottom">${currentElement["abbreviation"]}</div>
            <div class="face left">${currentElement["abbreviation"]}</div>
            <div class="face right">${currentElement["abbreviation"]}</div>
            <div class="face front">${currentElement["abbreviation"]}</div>
            <div class="face back">${currentElement["abbreviation"]}</div>
        </div>
        </div>
    </div>
    <hr>
    <h1>${currentElement["name"]}, ${currentElement["abbreviation"]} </h1>
    <p>${currentElement["name"]}</p>
    <P>[...]</P>
    <button>ver detalhes</button>
    <button>ver aplicações</button>
    <button>ver experimentos</button>
    ```
}
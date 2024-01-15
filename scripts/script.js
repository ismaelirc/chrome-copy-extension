import createComponent from "./lib/CreateComponent.js";
import LoadCopiesGateway from "./gateways/LoadCopiesGateway.js";
import SaveCopiesGateway from "./gateways/SaveCopiesGateway.js";

document.getElementById("buttonSave").addEventListener('click', addCopy);

const textsLoaded = loadTextsFromLocalStorage();

if(textsLoaded){
    
    textsLoaded.forEach(txt => {
        createElemenst(txt);
    });

}


function addCopy(){
    const text = document.getElementById("textTosave").value;

    if(text){
        const currentDate = new Date();
        // Get the timestamp (milliseconds since the Unix epoch)
        const timestamp = currentDate.getTime();

        const objCopy = {id: timestamp, text:text};
    
        createElemenst(objCopy);
        
        const itens = loadTextsFromLocalStorage();
        itens.push(objCopy);

        saveToLocalStorage(itens);
        document.getElementById("textTosave").value = '';
    }

}

function createElemenst(objCopy){
    
    const newElement = createComponent({element:'div', textContent:objCopy.text,id:objCopy.id,classes: ['container_descriptions'] });
        
    const buttonCopy = createComponent({element:'button',textContent:'Copy',classes:['button_copy','button_application'],onclick: copyText});
    newElement.appendChild(buttonCopy);

    const buttonDelete = createComponent({element:'button',textContent:'Delete',classes:['button_delete','button_application'],onclick: deleteCopy});
    newElement.appendChild(buttonDelete);

    document.getElementById('container_content').appendChild(newElement);
    
}

function saveToLocalStorage(itens){
    
    const saveCopies = new SaveCopiesGateway();
    saveCopies.saveLocalStorage(itens);

}

function loadTextsFromLocalStorage(){
    
    const loadCopies = new LoadCopiesGateway();

    return loadCopies.loadFromLocalStorage();
}

function copyText(event){
    const copyIdText = event.target.parentNode.id;
    navigator.clipboard.writeText(document.getElementById(copyIdText).firstChild.data);
    
}

function deleteCopy(event){

    const id = event.target.parentNode.id;
    document.getElementById(id).remove();
    
    if(id){
        const texts = loadTextsFromLocalStorage();
        const newTexts = [];

        texts.forEach(txt => {
            if(txt.id != id){
                newTexts.push({id: txt.id, text: txt.text});
            }

        });
        saveToLocalStorage(newTexts);
    }
}
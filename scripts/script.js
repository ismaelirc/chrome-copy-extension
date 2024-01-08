import createComponent from "./lib/CreateComponent.js";

document.getElementById("buttonSave").addEventListener('click', addCopy);

function addCopy(){
    const text = document.getElementById("textTosave").value;

    if(text){

        const objCopy = {'text':text};

        const newElement = createElements('container_descriptions',objCopy.text);
        
        const buttonCopy = createComponent('button','Copy',['button_copy','button_application'],'click',copyText);
        newElement.appendChild(buttonCopy);

        const buttonDelete = createComponent('button','Delete',['button_delete','button_application'],'click',deleteCopy);
        newElement.appendChild(buttonDelete);

        document.getElementById('container_content').appendChild(newElement);

        saveToLocalStorage(objCopy);
        document.getElementById("textTosave").value = '';
    }

}

function saveToLocalStorage(objCopy){
    console.log(objCopy);
    
}

function createElements(className,htmlText = '', type = 'div'){

    const currentDate = new Date();
    // Get the timestamp (milliseconds since the Unix epoch)
    const timestamp = currentDate.getTime();

    const element = document.createElement(type);
    element.classList.add(className);
    element.id = timestamp;
    
    if(htmlText){
        element.appendChild(document.createTextNode(htmlText));
    }

    return element;

}

function copyText(event){
    const copyIdText = event.target.parentNode.id;
    navigator.clipboard.writeText(document.getElementById(copyIdText).firstChild.data);
    
}

function deleteCopy(event){
    console.log(event.target.parentElement.id);
    
    console.log(document.getElementById(event.target.parentElement.id));

    console.log(document.getElementById(event.target.parentElement.id).remove());

}
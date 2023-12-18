document.getElementById("buttonSave").addEventListener('click', addCopy);

function addCopy(){
    const text = document.getElementById("textTosave").value;

    if(text){

        // Create a new Date object
        const currentDate = new Date();
        // Get the timestamp (milliseconds since the Unix epoch)
        const timestamp = currentDate.getTime();

        saveToLocalStorage({'id': timestamp,'text':text});
        document.getElementById("textTosave").value = '';
    }

}

function saveToLocalStorage(objCopy){
    console.log(objCopy);

    const newElement = createElements('container_descriptions');
    const elementCopy = createElements('copy_description', objCopy.text);
    newElement.id = objCopy.id;
    document.getElementById('container').appendChild(elementCopy);
    let nE = newElement.querySelector(objCopy.id);

    nE.appendChild(elementCopy);
    document.getElementById('container').appendChild(newElement);
    
}

function createElements(className,htmlText = '', type = 'div'){

    const element = document.createElement(type);
    element.classList.add(className);

    if(htmlText){
        element.appendChild(document.createTextNode(htmlText));

    }

    return element;

}
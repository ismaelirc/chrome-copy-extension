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

    const newElement = createElements('container_descriptions',objCopy.text, objCopy.id);
    
    document.getElementById('container_content').appendChild(newElement);
    
}

function createElements(className,htmlText = '',id = null, type = 'div'){

    const element = document.createElement(type);
    element.classList.add(className);
    element.id = id;
    
    if(htmlText){
        element.appendChild(document.createTextNode(htmlText));
    }

    return element;

}
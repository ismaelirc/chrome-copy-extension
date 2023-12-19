document.getElementById("buttonSave").addEventListener('click', addCopy);

function addCopy(){
    const text = document.getElementById("textTosave").value;

    if(text){

        const currentDate = new Date();
        // Get the timestamp (milliseconds since the Unix epoch)
        const timestamp = currentDate.getTime();

        const objCopy = {'id': timestamp,'text':text};

        const newElement = createElements('container_descriptions',objCopy.text, objCopy.id);
        
        newElement.addEventListener('click', copyText);

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.classList.add('button_delete');
        buttonDelete.addEventListener('click',deleteCopy);

        newElement.appendChild(buttonDelete);

        document.getElementById('container_content').appendChild(newElement);

        saveToLocalStorage(objCopy);
        document.getElementById("textTosave").value = '';
    }

}

function saveToLocalStorage(objCopy){
    console.log(objCopy);
    
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

function copyText(event){
    const copyIdText = event.target.id;
    navigator.clipboard.writeText(event.target.outerText);
}

function deleteCopy(event){
    console.log(event.target.parentElement.id);

}
import createComponent from "./lib/CreateComponent.js";

document.getElementById("buttonSave").addEventListener('click', addCopy);

function addCopy(){
    const text = document.getElementById("textTosave").value;

    if(text){
        const currentDate = new Date();
        // Get the timestamp (milliseconds since the Unix epoch)
        const timestamp = currentDate.getTime();

        const objCopy = {id: timestamp, text:text};
    
        const newElement = createComponent({element:'div', textContent:objCopy.text,id:objCopy.id,classes: ['container_descriptions'] });
        
        const buttonCopy = createComponent({element:'button',textContent:'Copy',classes:['button_copy','button_application'],onclick: copyText});
        newElement.appendChild(buttonCopy);

        const buttonDelete = createComponent({element:'button',textContent:'Delete',classes:['button_delete','button_application'],onclick: deleteCopy});
        newElement.appendChild(buttonDelete);

        document.getElementById('container_content').appendChild(newElement);
    
        saveToLocalStorage(objCopy);
        document.getElementById("textTosave").value = '';
    }

}

function saveToLocalStorage(objCopy){
    console.log(objCopy);
    
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
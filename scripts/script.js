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

}
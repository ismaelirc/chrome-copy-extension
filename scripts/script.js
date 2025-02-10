import LoadCopiesGateway from "./gateways/LoadCopiesGateway.js";
import SaveCopiesGateway from "./gateways/SaveCopiesGateway.js";
import createComponent from "./lib/CreateComponent.js";

document.getElementById("buttonSave").addEventListener("click", addCopy);

const textsLoaded = loadTextsFromLocalStorage();

if (textsLoaded) {
  textsLoaded.forEach((txt) => {
    createElemenst(txt);
  });
}

function addCopy() {
  const text = document.getElementById("textTosave").value;

  if (text) {
    const currentDate = new Date();
    // Get the timestamp (milliseconds since the Unix epoch)
    const timestamp = currentDate.getTime();

    const objCopy = {id: timestamp, text: text};

    createElemenst(objCopy);

    const itens = loadTextsFromLocalStorage();
    itens.push(objCopy);

    saveToLocalStorage(itens);
    document.getElementById("textTosave").value = "";
  }
}

function createElemenst(objCopy) {
  const textNote =
    objCopy.text.length > 50 ? objCopy.text.slice(0, 50) + "..." : objCopy.text;

  const newElement = createComponent({
    element: "div",
    textContent: textNote,
    id: objCopy.id,
    classes: ["container_descriptions"],
    elementEmbed: "span",
  });

  const buttonCopy = createComponent({
    element: "button",
    textContent: "Copy",
    classes: ["button_copy", "button_application"],
    onclick: copyText,
  });

  const buttonDelete = createComponent({
    element: "button",
    textContent: "Delete",
    classes: ["button_delete", "button_application"],
    onclick: deleteCopy,
  });

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttons");

  buttonDiv.appendChild(buttonCopy);
  buttonDiv.appendChild(buttonDelete);

  newElement.appendChild(buttonDiv);

  document.getElementById("container_content").appendChild(newElement);
}

function saveToLocalStorage(itens) {
  const saveCopies = new SaveCopiesGateway();
  saveCopies.saveLocalStorage(itens);
}

function loadTextsFromLocalStorage() {
  const loadCopies = new LoadCopiesGateway();

  return loadCopies.loadFromLocalStorage();
}

function copyText(event) {
  const copyIdText = event.target.parentNode.parentNode.id;

  const texts = loadTextsFromLocalStorage();

  texts.forEach((txt) => {
    if (txt.id == copyIdText) {
      navigator.clipboard.writeText(txt.text);
    }
  });
}

function deleteCopy(event) {
  const id = event.target.parentNode.parentNode.id;
  document.getElementById(id).remove();

  if (id) {
    const texts = loadTextsFromLocalStorage();
    const newTexts = [];

    texts.forEach((txt) => {
      if (txt.id != id) {
        newTexts.push({id: txt.id, text: txt.text});
      }
    });
    saveToLocalStorage(newTexts);
  }
}

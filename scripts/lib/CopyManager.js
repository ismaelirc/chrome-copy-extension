import loadNotesGateway from "../datagateways/LoadNotesGateway.js";
import saveNotesGateway from "../datagateways/SaveNotesGateway.js";
import elementFactory from "./ElementManager.js";

export function addCopy() {
  const text = document.getElementById("textTosave").value;

  if (text) {
    const currentDate = new Date();
    // Get the timestamp (milliseconds since the Unix epoch)
    const timestamp = currentDate.getTime();

    const objCopy = {id: timestamp, text: text};

    elementFactory(objCopy);

    const itens = loadNotesGateway();
    itens.push(objCopy);

    saveNotesGateway(itens);
    document.getElementById("textTosave").value = "";
  }
}

export function copyNote(event) {
  const copyIdText = event.target.parentNode.parentNode.id;

  const texts = loadNotesGateway();

  texts.forEach((txt) => {
    if (txt.id == copyIdText) {
      navigator.clipboard.writeText(txt.text);
    }
  });
}

export function deleteNote(event) {
  const id = event.target.parentNode.parentNode.id;
  document.getElementById(id).remove();

  if (id) {
    const texts = loadNotesGateway();
    const newTexts = [];

    texts.forEach((txt) => {
      if (txt.id != id) {
        newTexts.push({id: txt.id, text: txt.text});
      }
    });
    saveNotesGateway(newTexts);
  }
}

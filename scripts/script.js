import loadNotesGateway from "./datagateways/LoadNotesGateway.js";
import {addCopy} from "./lib/CopyManager.js";
import elementManager from "./lib/ElementManager.js";

document.getElementById("buttonSave").addEventListener("click", addCopy);

const textsLoaded = loadNotesGateway();

if (textsLoaded) {
  textsLoaded.forEach((txt) => {
    elementManager(txt);
  });
}

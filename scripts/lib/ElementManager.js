import {copyNote, deleteNote} from "./CopyManager.js";
import createComponent from "./CreateComponent.js";

export default function elementManager(objCopy) {
  const textNote =
    objCopy.text.length > 50 ? objCopy.text.slice(0, 50) + "..." : objCopy.text;

  const newElement = createComponent({
    component: "div",
    textContent: textNote,
    id: objCopy.id,
    classes: ["container_descriptions"],
    elementEmbed: "span",
  });

  const buttonCopy = createComponent({
    component: "button",
    textContent: "Copy",
    classes: ["button_copy", "button_application"],
    fnClick: (event) => {
      const id = event.target.parentNode.parentNode.id;
      if (id) {
        copyNote(id);
      }
    },
  });

  const buttonDelete = createComponent({
    component: "button",
    textContent: "Delete",
    classes: ["button_delete", "button_application"],
    fnClick: (event) => {
      const id = event.target.parentNode.parentNode.id;
      if (id) {
        document.getElementById(id).remove();
        deleteNote(id);
      }
    },
  });

  const buttonDiv = createComponent({
    component: "div",
    classes: ["buttons"],
  });

  buttonDiv.appendChild(buttonCopy);
  buttonDiv.appendChild(buttonDelete);

  newElement.appendChild(buttonDiv);

  document.getElementById("container_content").appendChild(newElement);
}

export default function createComponent(componentObj) {
  const element = document.createElement(componentObj.element);

  // Set the class attribute
  if (componentObj.classes) {
    element.classList.add(...componentObj.classes);
  }

  // Set other properties like text content, onclick, etc.
  if (componentObj.textContent) {
    if (componentObj.elementEmbed) {
      const elementEmbed = document.createElement(componentObj.elementEmbed);
      elementEmbed.textContent = componentObj.textContent;
      element.appendChild(elementEmbed);
    } else {
      element.textContent = componentObj.textContent;
    }
  }

  if (componentObj.id) {
    element.id = componentObj.id;
  }

  if (componentObj.onclick) {
    element.addEventListener("click", componentObj.onclick);
  }

  return element;
}

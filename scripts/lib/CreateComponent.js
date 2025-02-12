export default function createComponent({
  component,
  textContent,
  id,
  classes,
  elementEmbed,
  fnClick,
}) {
  const element = document.createElement(component);

  // Set the class attribute
  if (classes) {
    element.classList.add(...classes);
  }

  // Set other properties like text content, onclick, etc.
  if (textContent) {
    if (elementEmbed) {
      elementEmbed = document.createElement(elementEmbed);
      elementEmbed.textContent = textContent;
      element.appendChild(elementEmbed);
    } else {
      element.textContent = textContent;
    }
  }

  if (id) {
    element.id = id;
  }

  if (fnClick) {
    element.addEventListener("click", fnClick);
  }

  return element;
}

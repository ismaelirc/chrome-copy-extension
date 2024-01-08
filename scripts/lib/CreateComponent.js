export default function createComponent(componentType, componentText, componentClasses = [], eventListner = '' , eventListnerFunction ){
    
    let element = document.createElement(componentType);
    element.textContent = componentText;

    element.classList.add(...componentClasses);

    if(eventListner){
        element.addEventListener(eventListner,eventListnerFunction);
    }

    return element;

}
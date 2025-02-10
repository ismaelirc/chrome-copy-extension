export default class LoadCopiesGateway {
  loadFromLocalStorage() {
    const itens = JSON.parse(localStorage.getItem("texts")) || [];
    return itens;
  }
}

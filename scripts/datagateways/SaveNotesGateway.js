export default function saveCopiesGateway(itens) {
  localStorage.setItem("notes", JSON.stringify(itens));
}

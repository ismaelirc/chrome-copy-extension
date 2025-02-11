export default function loadNotesGateway() {
  const itens = JSON.parse(localStorage.getItem("notes")) || [];
  return itens;
}

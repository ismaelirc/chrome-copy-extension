export default function loadNotesGateway() {
  const items = JSON.parse(localStorage.getItem("notes")) || [];
  return items;
}

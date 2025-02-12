export default function saveNotesGateway(items) {
  localStorage.setItem("notes", JSON.stringify(items));
}

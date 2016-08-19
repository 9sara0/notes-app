var noteList = new NoteList();
noteList.store("Favourite drink: Mango juice");
noteList.store("Favourite drink: Apple juice");
noteList.store("Favourite drink: Orange juice");
var noteController = new NoteController(noteList);
noteController.insertHTML();
window.addEventListener("hashchange", showNoteForCurrentPage);
function showNoteForCurrentPage() {
  noteController.returnNote(noteController.getNoteFromURL(window.location));
};

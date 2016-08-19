it('NoteController can modify HTML on document', function(){
  var noteList = new NoteList();
  noteList.store("Favourite drink: seltzer");
  var newView = new ListView(noteList);
  var noteController = new NoteController(noteList);

  var element = document.createElement('div');
  element.id = 'app';
  noteController._getAppDiv = function () {
    return element;
  };

  noteController.insertHTML();
  isTrue(noteController._getAppDiv().innerHTML === newView.printListHTML());
});



it('Displays a single note on a click', function() {
  var noteList = new NoteList();
  noteList.store("Favourite drink: Mango juice");
  var noteController = new NoteController(noteList);
  var noteView = new NoteView(noteController.noteListView.noteList.getNoteById(9));
  element = document.createElement('div');
  element.id = 'app';

  noteController._getAppDiv = function () {
    return element;
  };
  noteController.insertHTML();

  element.getElementsByTagName("a")[0].click()


  function showNoteForCurrentPage() {
    noteController.returnNote(noteController.getNoteFromURL(window.location));
  };

  showNoteForCurrentPage();

  window.setTimeout(function(){
     var htmlOutput = noteView.printNoteHTML();
 

     console.log("expected: ", htmlOutput);
     console.log("got: ", element.innerHTML);

     isTrue(htmlOutput === element.innerHTML);
   }, 500);

})

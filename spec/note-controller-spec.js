it('NoteController can modify HTML on document', function(){
  var noteList = new NoteList();
  noteList.store("Favourite drink: seltzer");
  var newView = new ListView(noteList);
  var noteController = new NoteController(noteList);

  var element = document.createElement('div');
  element.id = 'app';
  // document.body.appendChild(element);
  noteController._getAppDiv = function () {
    return element;
  };


  noteController.insertHTML();
  console.log(element);
  console.log(noteController._getAppDiv().innerHTML);
  console.log(newView.printListHTML());
  isTrue(noteController._getAppDiv().innerHTML === newView.printListHTML());
});

it('ListView empty list is legal', function listIsEmpty() {
  var testList = new NoteList();
  var listView = new ListView(testList);
  var html = "<a "
  isTrue(listView.printListHTML() === html);
});

it('ListView shows one note', function() {
  var testList = new NoteList();
  var noteOne = "Hello";
  testList.store(noteOne);
  var listView = new ListView(testList);
  var noteLink = "<a href=\"#4\">Hello</a>";
  isTrue(listView.printListHTML() === noteLink);
});

it('ListView shows Many Notes', function() {
  var testList = new NoteList();
  var noteOne = "Hello";
  var noteTwo = "Howdy";
  testList.store(noteOne);
  testList.store(noteTwo);
  var listView = new ListView(testList);
  var html = "<a href=\"#5\">Hello</a>href=\"#6\">Howdy</a>"
  isTrue(listView.printListHTML() === html);
});

it('ListView only shows 20 chars per note', function() {
  var testList = new NoteList();
  var noteOne = "This is a string that never ends";
  testList.store(noteOne);
  var listView = new ListView(testList);
  var html = "<a href=\"#7\">This is a string tha</a>"
  isTrue(listView.printListHTML() === html);
});

(function(exports){

  function NoteController(noteList) {
    this.noteListView = new ListView(noteList);
  };


    NoteController.prototype._getAppDiv = function() {
      return document.getElementById('app');
    };


    NoteController.prototype.insertHTML = function(){
      this._getAppDiv().innerHTML = this.noteListView.printListHTML();
    };

    NoteController.prototype.getNoteFromURL = function (location) {
      return location.hash.split("#")[1];
    };

    NoteController.prototype.returnNote = function (id) {
      var noteView = new NoteView(this.noteListView.noteList.getNoteById(id));
      console.log(this.noteListView.noteList.getNoteById(id));
      this._getAppDiv().innerHTML = noteView.printNoteHTML();
    };

  exports.NoteController = NoteController;

})(this);

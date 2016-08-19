(function(exports) {
  function NoteList() {
      this.listArr = [];
    }

    NoteList.prototype.store = function (note) {
      this.listArr.push(new Note(note));
    }

    NoteList.prototype.list = function () {
      return this.listArr;
    }

    NoteList.prototype.getNoteById = function (id) {
      var noteFound;
      this.listArr.forEach(function(note){
        if (note.noteId == id) {
          noteFound =  note;
        }
      });
      return noteFound;
    };

    exports.NoteList = NoteList;

})(this);

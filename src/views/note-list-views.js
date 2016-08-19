(function(exports) {
  function ListView(noteList) {
    this.noteList = noteList;
  }

  ListView.prototype.printListHTML = function () {
    html = ""
    this.noteList.list().forEach(function(note){
      var shortNote = note.showNote().substring(0, 20);
      html += "<a href=\"#" + note.noteId +"\">" + shortNote + "</a><br>";
    });

    return html;
  };

  exports.ListView = ListView;
})(this);

(function(exports) {
  function ListView(noteList) {
    this.noteList = noteList;
  }

  ListView.prototype.printListHTML = function () {
    html = "<a "
    this.noteList.list().forEach(function(note){
      var shortNote = note.showNote().substring(0, 20);
      html += "href=\"#" + note.noteId +"\">" + shortNote + "</a>";
    });

    return html;
  };

  exports.ListView = ListView;
})(this);

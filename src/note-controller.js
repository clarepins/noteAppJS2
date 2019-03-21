(function(exports){
  function NoteController(noteList = new NoteList()){
    this._noteList = noteList
    this._setup
  }

  NoteController.prototype = {
    _setup: function() {
      var thisNoteController = this
      window.addEventListener('load', function() {
        // var note = new Note("This is great")
        var noteListView = new NoteListView(thisNoteController._noteList)
        // noteListView.list.addNote(note)
        document.getElementById("app").innerHTML = noteListView.format()
        console.log(document.getElementById("app").innerHTML)
        console.log(noteListView.format())
      });
    }
  }
exports.NoteController = NoteController
})(this);

(function(exports) {
  noteList = new NoteList()
  noteController = new NoteController(noteList)
  note = new Note('favourite drink')
  noteList.addNote(note)
  console.log(noteController._noteList._notes[0].text)
})(this);

(function(exports){
  function NoteController(noteList = new NoteList()){
    this._noteList = noteList
    this._setup
    note = new Note('favourite drink')
    noteList.addNote(note)
    console.log(this._noteList)
  }

  NoteController.prototype = {
    _setup: function() {
      var thisNoteController = this
      window.addEventListener('load', function() {
        // var note = new Note("This is great")
        var noteListView = new NoteListView(thisNoteController._noteList)
        // noteListView.list.addNote(note)
        document.getElementById("app").innerHTML = noteListView.format()
      });
    }
  }
exports.NoteController = NoteController
})(this);

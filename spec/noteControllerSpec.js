function NoteDouble() {
  this.text = 'test note'
};

it("app div has no notes on load", function() {
  var noteController = new NoteController()
  noteController._setup()
  console.log("doc app " + document.getElementById('app').child)
  assert.isEqual(document.getElementById('app').child, )
});

it("app div has note text on load", function() {
  var noteController = new NoteController(noteList = new NoteList())
  note = new Note('coffee time')
  noteList.addNote(note)
  noteController._setup()
  console.log("doc app " + document.getElementById('app'))
  console.log("doc app " + document.getElementById('app').child)
  assert.isEqual(document.getElementById('app').child, )
});

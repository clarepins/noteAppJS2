function NoteDouble() {
  this.text = 'test note'
};

it("app div has no notes on load", function() {
  var noteController = new NoteController()
  noteController._setup()
  assert.isEqual(document.getElementById('app').child, )
});

it("app div has note text on load", function() {
  var noteController = new NoteController(new NoteList())
  note = new NoteDouble
  noteController._noteList.addNote(note)
  noteController._setup()
  assert.isEqual(document.getElementById('app').innerHTML, 'test note')
});

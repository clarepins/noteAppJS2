function NoteDouble() {
  this.text = 'test note'
};

it("app div has no notes on load", function() {
  var noteController = new NoteController()
  noteController._setup()
  assert.isEqual(document.getElementById('app').child, )
});

it("app div has note text on load", function() {
  var noteList = new NoteList()
  var noteController = new NoteController(noteList)
  var note = new NoteDouble()
  noteList.addNote(note)
  noteController._setup()
  console.log(noteController._noteList._notes[0].text)


  // var noteController = new NoteController(new NoteList())
  // console.log(noteController)
  // var note = new NoteDouble()
  // console.log(note)
  // console.log(noteController._noteList)
  // console.log(noteController._noteList.addNote(note))

  // I THINK I NEED TO CHECK ON NOTE CONTROLLER WHETHER IT SHOULD PASS IN
  // THE NOTELIST


  assert.isEqual(document.getElementById('app').innerHTML, "<ul><li><div>test note</div></li></ul>")
});

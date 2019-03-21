function NoteDouble() {
  this.text = 'test note'
};

it("produces a correctly formatted output", function (){
  var note = new NoteDouble()
  var singleNoteView = new SingleNoteView(note);

  text = "<div>test note</div>"
  assert.isEqual(singleNoteView.format(), text)
});

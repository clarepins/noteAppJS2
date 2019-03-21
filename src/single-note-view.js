(function(exports) {

  function SingleNoteView(note){
    this._note = note;
  };

  SingleNoteView.prototype.format = function () {
    var text = this._note.text
    return "<div>" + text + "</div>"
  };

  exports.SingleNoteView = SingleNoteView;

})(this);

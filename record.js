var Record = function(artist, albumTitle, price){
this.artist = artist;
this.album = albumTitle;
this.price = price;
};

Record.prototype = {
  name: function() {
    return "the artist is: " + this.artist;
  },
  title: function() {
    return "the record title: " + this.album;
  },
  fullPrice: function() {
    return this.price;
  },

};






module.exports = Record;
var assert = require("assert");
var Record = require("../record");

var record;

describe("Record", function(){
  beforeEach(function(){
    record = new Record("Artist", "title", 9.90);
  });
  it("has an artist name", function(){
    assert.equal( "the artist is: Artist" , record.name() );
  });















});
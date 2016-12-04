var assert = require("assert");
var Record = require("../record");

var record1;

describe("Record", function(){
  beforeEach(function(){
    record1 = new Record("Artist", "title", 9.90);
  });
  it("has an artist name", function(){
    assert.equal( "the artist is: Artist" , record1.name() );
  });
  it("has a record title", function(){
    assert.equal( "the record title: title", record1.title() );
  });
  it("has a full price", function(){
    assert.equal( 9.90, record1.fullPrice() );
  });















});
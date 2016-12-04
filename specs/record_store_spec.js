var assert = require("assert");
var RecordStore = require("../record_store");

var Store1;

describe("Record Store", function(){
  beforeEach(function(){
    Store1 = new RecordStore("Rick's", "London", 1000);
  })
  it("has a name", function(){
    assert.equal("Rick's", Store1.name);
  });
  it("has a location", function(){
    assert.equal("London", Store1.city);
  });












});
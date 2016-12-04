var assert = require("assert");
var RecordStore = require("../record_store");
var Record = require("../record");

var Store1;
var Record1;

describe("Record Store", function(){
  beforeEach(function(){
    Store1 = new RecordStore("Rick's", "London", 1000);
    Record1 = new Record("Queen", "Greatest Hits", 24.99);
  })
  it("has a name", function(){
    assert.equal("Rick's", Store1.name);
  });
  it("has a location", function(){
    assert.equal("London", Store1.city);
  });
  it("has a total store balance", function(){
    assert.equal(1000, Store1.balance);
  });
  it("has no records in the store to start", function(){
    assert.equal(0, Store1.inventory);
  });
  it("can add records to inventory", function(){
    Store1.addRecord(Record1);
    assert.equal("Queen" , Store1.inventory[0].artist);
  });












});
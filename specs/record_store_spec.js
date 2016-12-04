var assert = require("assert");
var RecordStore = require("../record_store");
var Record = require("../record");

var Store1;
var Record1;
var Record2;

describe("Record Store", function(){
  beforeEach(function(){
    Store1 = new RecordStore("Rick's", "London", 1000);
    Record1 = new Record("Metallica", "Kill Em All", 24.99);
    Record2 = new Record("Queens of the Stone Age", "Songs for the Deaf", 9.67);
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
    assert.equal(0, Store1.inventory.length);
  });
  it("can add records to inventory", function(){
    Store1.addRecord(Record1);
    Store1.addRecord(Record2);
    assert.equal( 2, Store1.inventory.length );
  });
  it("can return a specific record by its name", function(){
    Store1.addRecord(Record1);
    Store1.addRecord(Record2);
    var returnedRecord = Store1.findRecordByName("Metallica")
    assert.equal("Metallica", returnedRecord.artist);
  });












});
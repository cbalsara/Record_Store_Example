var assert = require("assert");
var RecordStore = require("../record_store");
var Record = require("../record");

var Store1;
var Record1;
var Record2;

describe("Record Store", function(){
  beforeEach(function(){
    Store1 = new RecordStore("Rick's", "London", 1000);
    Record1 = new Record("Metallica", "Kill Em All", 10.08);
    Record2 = new Record("Queens of the Stone Age", "Songs for the Deaf", 9.50);
  })

  it("has a name", function(){
    assert.equal("Rick's", Store1.name);
  });

  it("has a location", function(){
    assert.equal("London", Store1.city);
  });

  it("has a starting balance of 1000", function(){
    assert.equal(1000, Store1.balance);
  });

  it("has no records in the store to start", function(){
    assert.equal(0, Store1.inventory.length);
  });

  it("can add records to inventory", function(){
    Store1.addRecord(Record1);
    Store1.addRecord(Record2);
    // assert.equal( 2, Store1.inventory.length );
    assert.equal(Record1, Store1.inventory[0]);
    assert.equal(Record2, Store1.inventory[1]);
  });

  it("can list full inventory", function(){
    Store1.addRecord(Record2);
    var fullList = Store1.fullInventory()
    assert.equal(Record2, fullList);
  });

  it("can return a specific record by its name", function(){
    Store1.addRecord(Record1);
    Store1.addRecord(Record2);
    var returnedRecord = Store1.findRecordByName("Metallica")
    assert.equal(Record1, returnedRecord);
  });

  it("can sell a record which increases store balance", function(){
    Store1.addRecord(Record1);
    Store1.sellRecord(Record1);
    assert.equal(1010.08, Store1.balance);
  });

  it("can return a specific record by its price", function(){
    Store1.addRecord(Record1);
    Store1.addRecord(Record2);
    var result = Store1.findRecordByPrice(10.08)
    assert.equal( 10.08, result.price );
  });

  it("can return the total value of its stock", function(){
    Store1.addRecord(Record1);
    Store1.addRecord(Record2);
    var valueOfStock = Store1.stockValue();
    assert.equal( 19.58, valueOfStock );
  });
 












});
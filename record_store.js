var Record = require("./record");

var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
};

RecordStore.prototype = { 
  addRecord: function(record){
    this.inventory.push(record);
  },
  findRecordByName: function(recordName){
    var specificRecord = this.inventory.find(function(item){
      return item.artist === recordName;
    });
    return specificRecord;
  },
  sellRecord: function(record){
    this.inventory.pop(record);
    this.balance += record.price;
  }






};












module.exports = RecordStore;
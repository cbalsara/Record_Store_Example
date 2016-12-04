// var Record = require("./record");

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
  fullInventory: function(){
    for (var type of this.inventory){
      return type;
    };
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
  },
  findRecordByPrice: function(cost){
    return this.inventory.filter(function(record){
      return record.price === cost;
    });
  },
  // use a reduce enumeration 
  // need to acutally get the record.price inside the inventory array
  stockValue: function(record){
    var totalPrice = this.findRecordByPrice(record).reduce(function(acc, item){
      return acc + item}, 0)
    return totalPrice;
    }

};












module.exports = RecordStore;
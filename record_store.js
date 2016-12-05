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

// use find enumeration
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

// try to use a different type of enumeration 
// .filter returned an array when i wanted to return a value
  findRecordByPrice: function(cost){
    return this.inventory.find(function(record){
      return record.price === cost;
    });
  },
  
  stockValue: function(){
    return this.inventory.reduce( function( acc, record ){ 
      return acc + record.price }, 0 ); 
  }
}












module.exports = RecordStore;
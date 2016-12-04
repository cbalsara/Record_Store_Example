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
  listInventory: function(){
    for (var record of inventory){
      console.log(item);
    } 
  }




};












module.exports = RecordStore;
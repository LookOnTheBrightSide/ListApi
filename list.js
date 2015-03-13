
var ListItem = function(data, tail) {
  this.tail = tail;
  this.data = data;
};

//var list = new ListItem("maw","ande");
//console.log(list);





// List implementation
var List = function() {
  this.item = null;

  // Add a data item to the front of the list
  this.add = function(elem) {
    this.item = new ListItem(elem, this.item);
  };

  // Returns true if the list is empty
  this.empty = function() {
    return this.item === null;
  };

  // Returns the data at the head of the list. If
  // the list is empty, return null. This leaves
  // the list unmodified
  this.head = function() {
    // ......
     if(!this.item.data){
      return null;
    }
  return  this.item.data;
   
    
  };

  // Remove item off the head of the list and return
  // its value. The new head of the list must be the
  // next element in the list if it exists. If the
  // list is empty, we return null
  this.pop = function() {
    // ......
    console.log(this.head());
    if(this.item.data){
           var cache = this.item.data;
               this.item = this.item.tail;
     return cache;
      
    }else{
        return null;
      }
  };

  // Return the number of elements in the list.
  this.length = function() {
    // ......
    var sum=0;
    for(var i=0;i<this.item.data.length;i++){
    return sum +=this.item.data[i];
    }
  };

  // Return the last data item in the list if it exists. If
  // not, return null
  this.last = function() {
    // ......
    if (this.item.tail.data === null) {
      return null;
    }else{
      return  this.item.tail.data;
    }
    
    //return null;
  };
};

var list = new List("maw","ande");


list.add("code");
list.add("khosi");
list.add("sundowns");
//console.log(list.item.tail);
console.log(list.head());
console.log(list.pop());
console.log(list.head());
console.log(list.length());
console.log(list.last());
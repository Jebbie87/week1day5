module.exports = {
  name: 'Jeffrey',
  age: 29,
  greet: function(){
    console.log("Hello there. My name is " + this.name)
  },
  add: addNum
};

function addNum(a, b){
  console.log(a+b)
}


//Question .1:
var obj1 = {
    name:"Person 1",
    age:5
}
var a= JSON.stringify(obj1);
var obj2 = {
    age:5,
    name:"Person 1"
}
var b = JSON.stringify(obj2);
if(a===b)
{
    console.log("same");
}
else
{
    console.log("Not same");
}

//Output:
{"name":"Person 1","age":5}
{"age":5,"name":"Person 1"}
Not same

//Question .2:

var request = new XMLHttpRequest();
console.log(request);
request.open("GET", "https://restcountries.com/v3.1/all");
console.log(request.open("GET", "https://restcountries.com/v3.1/all"));
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i of result) {
    console.log(i.flags);
  }
};


//Question .3:

var request = new XMLHttpRequest();
console.log(request);
request.open("GET", "https://restcountries.com/v3.1/all");
console.log(request.open("GET", "https://restcountries.com/v3.1/all"));
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i of result) {
    console.log(i.name.common);
    console.log(i.region);
    console.log(i.subregion);
    console.log(i.population);
  }
};

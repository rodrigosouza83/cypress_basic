const guid = new Array('793e6483-10b0-4e5b-932d-31783da3f98c', '5645f3d7-6d12-41f2-9241-329e14ca67ce', 'a3643db9-25ad-45d6-9670-1f8b0f6a6bab')


 //JSON.parse(guid)
console.log(typeof guid)
console.log(guid)
console.log(encodeURI(guid))
var randomItem = guid.encodeURI[Math.floor(Math.random()*guid.length)];
 console.log(typeof randomItem)
 console.log(randomItem)

 function convertStringToCode(randomItem){
     return encodeURI(randomItem)
 }


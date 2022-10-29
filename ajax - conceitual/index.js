const xhr  = new XMLHttpRequest();
const documento = {
     "userId": 12,
    "id": 1,
    "title": "HELLO WORLD! MY SECOND REQUEST",
    "body": "FRONT-END"
}
xhr.onreadystatechange = function() {
     if(xhr.status == 201 && xhr.readyState == 4) {
          console.log(documento);
     }
}
xhr.open("POST","https://jsonplaceholder.typicode.com/posts");
xhr.send(documento);
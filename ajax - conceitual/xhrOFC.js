(function() {
     const reqXhr = new XMLHttpRequest();
     reqXhr.responseType = 'json'
     reqXhr.onreadystatechange = function () {
          if(reqXhr.readyState == 4 && reqXhr.status == 200) {
               // console.log(JSON.parse(reqXhr.response));
               console.log(reqXhr);
          }
     }

     reqXhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
     reqXhr.send('');
})();
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitQuestion() {
    var run = document.getElementById("run");

  run.addEventListener("click", function (e) {
  
  e.preventDefault();
  
  var stdin = <HTMLInputElement>document.getElementById("stdin");
  var form = document.getElementById("form");
  var credits = document.getElementById("credits");
  var output = document.getElementById("output");
  output.innerHTML = "Loading...";
  
  console.log(stdin.value);
  
  var obj = {};
  obj["clientId"] = "9fe609c51ebd966aece4ebc64f31df";
  obj["clientSecret"] = "2a06845915a4a93839ee2427895e0974ebd5781cb8ba74fc07a32d7c7c15c3ff";
  obj["script"] = "#include <stdio.h>\r\nint main(){\r\n        int i;\r\n        scanf(\"%d\", &i);\r\n        if(i%2 == 0){\r\n                printf(\"%d is even \\n\", i);\r\n        } else {\r\n                printf(\"%d is odd \\n\", i);\r\n        }\r\n        return 0;\r\n}\r\n";
  obj["language"] = "c";
  obj["versionIndex"] = "0";
  obj["stdin"] = stdin.value;
  var jsonStr = JSON.stringify(obj);
  
  console.log(jsonStr);
  
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://api.jdoodle.com/v1/execute";
  fetch(proxyurl + url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    var outputStr = data.output;
    console.log(outputStr);
    var formattedOutput = outputStr.replace(/(?:\r\n|\r|\n)/g, '<br>');
    output.innerHTML = formattedOutput;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  
  const creditsUrl = "https://api.jdoodle.com/v1/credit-spent";
  fetch(proxyurl + creditsUrl, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonStr
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    var creditsLeft = 200 - data.used;
    console.log(credits);
    credits.innerHTML = "Runs left: " + creditsLeft;
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  
  
  
  
});
  }

}

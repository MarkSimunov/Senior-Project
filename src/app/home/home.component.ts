import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  code: string

  constructor() { }

  ngOnInit(): void {
  }

  submitQuestion() {

  let code: string = this.code;

  console.log(code);
  
  var run = document.getElementById("run");

  run.addEventListener("click", function (e) {
  
  e.preventDefault();
  
  var stdin = <HTMLInputElement>document.getElementById("stdin");
  var form = document.getElementById("form");
  var credits = document.getElementById("credits");
  var output = document.getElementById("output");
  output.innerHTML = "Loading...";
  
  console.log(stdin.value);

  console.log(document.getElementById('code').textContent);
  
  var obj = {};
  obj["clientId"] = "9fe609c51ebd966aece4ebc64f31df";
  obj["clientSecret"] = "2a06845915a4a93839ee2427895e0974ebd5781cb8ba74fc07a32d7c7c15c3ff";
  obj["script"] = code;
  obj["language"] = (<HTMLSelectElement>document.getElementById('language')).value;
  obj["versionIndex"] = "0";
  obj["stdin"] = stdin.value;
  var jsonStr = JSON.stringify(obj);

  const jsonStrChars = [...jsonStr];

  for(let i = 0; i < jsonStr.length; i++){
    if (jsonStr.charAt(i) === '\\' ) {
      jsonStrChars[i] = '';
      i++;
    }
  }

  jsonStr = jsonStrChars.join(''); 

  console.log(jsonStrChars)
  
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

  setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

}

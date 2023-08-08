var l = [];
var c = 0;
var c1 = 0;
function addd() {
  var t = document.getElementById("title").value;
  var d = document.getElementById("description").value;
  if (t.length == 0 && d.length == 0) {
    document.getElementById("blank").innerHTML =
      "*Please fill out the Title and Description Field";
  } else if (t.length == 0 && d.length != 0) {
    document.getElementById("blank").innerHTML =
      "*Please fill out the Title Field";
  } else if (t.length != 0 && d.length == 0) {
    document.getElementById("blank").innerHTML =
      "*Please fill out the Description Field";
  } else {
    document.getElementById("blank").innerHTML = "";
    l.push(t);
    c1 = "com" + c;
    document.getElementById(
      "addedtasks"
    ).innerHTML += `<div id="${c}" class="tasks" >
                <div class="titt" id="tit"> ${t}</div>
                <div class="desc" id="des"> ${d}</div>
                <div class="btn1"><button id="${c1}" style="background-color:#D45353; border:red" onClick="completed(${c})">Complete It !!</button></div>
                <div class="btn2"><button onClick="delfun(${c})">delete</button></div>
            </div>`;
    c = c + 1;
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }
}
function delfun(n) {
  document.getElementById(n).remove();
  document.getElementById(n).style.display = "none";
  document.getElementById(a).style.display = "none";
}

function completed(n) {
  console.log(n);
  // console.log();
  let back = document.getElementById("com" + n).style.backgroundColor;
  console.log(back);
  if (back == "rgb(243, 114, 114)") {
    document.getElementById("com" + n).style.backgroundColor = "#52f66d";
    document.getElementById("com" + n).style.border = "green";
    document.getElementById("com" + n).innerHTML = "Task Accomplished...!";
  } else {
    document.getElementById("com" + n).style.backgroundColor = "#f37272";
    document.getElementById("com" + n).style.border = "red";
    document.getElementById("com" + n).innerHTML = "Complete It...";
  }
}
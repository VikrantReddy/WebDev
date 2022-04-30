old = Date.now();

function f1() {
  pres = Date.now();

  document.getElementById("time").innerText = Math.floor((pres - old) / 100);

  old = pres;
  var size = 30 + Math.random() * 200;
  document.getElementById("item").style.left = Math.random() * 1500;
  document.getElementById("item").style.top = Math.random() * 600;
  document.getElementById("item").style.height = size;
  document.getElementById("item").style.width = size;
  document.getElementById("item").style.backgroundColor =
    "#" + parseInt(Math.random() * 1000000);
}

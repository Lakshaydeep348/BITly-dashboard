/**
 * !variable declaration
 */
let symbolEl = "IBM";
let headingEl = document.getElementById("coin");
let openEl = document.getElementById("open");
let closeEl = document.getElementById("close");
let highEl = document.getElementById("high");
let lowEl = document.getElementById("low");
let dayEl = document.getElementById("day");
let priceEl = document.getElementById("price");
let volumeEl = document.getElementById("volume");
let changeEl = document.getElementById("change");
let chper = document.getElementById("chper");
const selectMenu = document.querySelectorAll(".coins");
let arr = Array.prototype.slice.call(selectMenu);
let cart = document.getElementById("number");
let addBtn = document.getElementById("add");
let removeBtn = document.getElementById("remove");
let Pay = document.getElementById("total");



function symboldata(e) {
  if (e != undefined) {
    symbolEl = e;
  }
  headingEl.innerText = symbolEl;
  async function dataCall() {
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbolEl}&apikey=F6REVISJ1VIJ1TZV`);
    let data = await response.json();
    console.log(data);
    return data;
  }
  const dataEl = dataCall();
  let globalData = dataEl["Global Quote"];

  dataEl.then((dat) => {
    globalData = dat["Global Quote"];
    symbolEl.innerText = globalData["01. symbol"];
    openEl.innerText = globalData["02. open"];
    highEl.innerText = globalData["03. high"];
    lowEl.innerText = globalData["04. low"];
    priceEl.innerText = globalData["05. price"];
    volumeEl.innerText = globalData["06. volume"];
    dayEl.innerText = globalData["07. latest trading day"];
    closeEl.innerText = globalData["08. previous close"];
    changeEl.innerText = globalData["09. change"];
    chper.innerText = globalData["10. change percent"];
    let num = 0;
    addBtn.addEventListener("click", () => {
      if (num >= 0) {
        cart.innerText = ++num;
      }
    });
    removeBtn.addEventListener("click", () => {
      if (num > 0) {
        cart.innerText = --num;
      } else {
        num = 0;
      }
    });
  });
}
symboldata();

Pay.addEventListener("click",()=>{
console.log("pay now");
})
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const codeDisplay = document.querySelector("#code-str");
const ranges = {
    a: document.querySelector("#a-range"),
    b: document.querySelector("#b-range"),
    c: document.querySelector("#c-range"),
    d: document.querySelector("#d-range"),
    e: document.querySelector("#e-range"),
    f: document.querySelector("#f-range"),
    g: document.querySelector("#g-range"),
    h: document.querySelector("#h-range"),
}
const example = document.querySelector(".example");
function update(){
    let radiusA = [];
    let radiusB = [];
    checkBoxes.forEach(box => {
       if(box.checked){
           const letter = box.id[0];
           if(letter < "e"){
               radiusA.push(ranges[letter].value);
           }
           else{
               radiusB.push(ranges[letter].value);
           }
       }
    });
    const radiusAStr = radiusA.map(el=>el? el+"%": "0").join(" ");
    const radiusBStr = radiusB.map(el=>el? el+"%": "0").join(" ");
    const radiusCombined = radiusAStr + (radiusBStr? " / "+radiusBStr:"");
    example.style.setProperty("--radius", radiusCombined);
    codeDisplay.innerText = radiusCombined;

}
Object.values(ranges).forEach(range => {
   range.addEventListener("input", evt => {
       if(range.parentElement.parentElement.querySelector('input[type="checkbox"]').checked){
           const letter = evt.target.id[0];
           update();
       }
   })
});
checkBoxes.forEach(box=>{
   box.addEventListener("change", update);
});
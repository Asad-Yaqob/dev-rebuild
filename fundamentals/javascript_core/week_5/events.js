// Event Propogation: 
// Event propogation ka matlab jb kisi parent ki child elment pr event listen/active hoga to wu bubble/propogate krta howa 
// seedha parentElement/top pr jata he aise event bubbling bhi khte hain. or 1 Event Capture hota he jo ke events ko top to bottom listen 
// krta he jaise ke agr hamare pass parent element pr bhi event he or child pr he.. to Event capture ke case mai pahle parentEvent execute hoga then child event.


// Syntax 

// with third parameter false event bubbling will occure, by default the third parameter is false.
document.getElementById("elementId").addEventListener("click", () => {}, false)

// with third parameter true the event capturing will occure. 
document.getElementById("elementId").addEventListener("click", () => {}, true)

// we can stop the eventPropogation with event.stopPropagation() method. this will stop the eventBubbling behavior
document.getElementById("elementId").addEventListener("click", (event) => {
    event.stopPropagation();
});

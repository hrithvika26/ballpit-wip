console.log("in progress"); // to check whether this code is being executed;


const p5jsScript = document.createElement('script');
p5jsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js';
document.head.appendChild(p5jsScript);



// allowing the p5 script to run by recalling the file here, to then make changes to the content of the webpage;
p5jsScript.onload = () => {
  // Load the sketch file
  const sketchScript = document.createElement('script');
  sketchScript.src = chrome.runtime.getURL('sketch.js');
  document.head.appendChild(sketchScript);
};
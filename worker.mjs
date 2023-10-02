// import { buildTree, drawNumbers } from "./derived.js";
// console.log("worker.js")
if (typeof Worker !== "undefined") {
  const worker = new Worker("worker.mjs");
  
  worker.onmessage = function (event) {
    console.log(worker)
    const chunk = event.data;

    console.log("chunk", chunk);

    const processedChunk = buildTree(drawNumbers, "1st", "Big/Small");

    worker.postMessage(processedChunk);
  };
} else {
  // Web Workers are not supported in this browser
  // Handle the lack of support here
}

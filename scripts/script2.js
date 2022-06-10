"use strict";

function co(text) {
  console.log(text);
}
////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function loadFunc(src, callback) {
//   let scriptElem = document.createElement("script");
//   scriptElem.src = src;
//   scriptElem.onload =  () => callback(null);
//   scriptElem.onerror = () => callback(err);
//   document.head.append(scriptElem);
// }
// loadFunc("scripts/script3.js", () => newFunction(err));
// // setTimeout(() => newFunction(), 17);

////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let promice = new Promise(function (resolve, reject) {
  try {
    //...do somethig...
    // throw new Error("omg...");
    resolve("its ok!");
  } catch (error) {
    reject(new Error("its broken!" + error));
  }
});

promice.then(
  (res) => {
    co(`its done! res: ${res}`);
  },
  (err) => {
    co(`oh no! something goes wrong: ${err}`);
  }
);

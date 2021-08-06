/* Laver et arrey of alle 4 input labals. Looper igennem det. Uncheker. Resetter */
function mfCheckbox() {
    Array.from(document.getElementsByTagName("input"))
        .forEach(minParameter => minParameter.checked = false);
        document.getElementById("minDisplayedvalue").innerHTML = "0"; /*Reset Kalorier */
  }

/* Lægger indput sammen med dispalyed value*/
function mfAddition(mitInputnumber) {
   localStorage.clear()
    var minFinalvalue = document.getElementById("minDisplayedvalue");
    console.log(minFinalvalue)
    minDisplayedvalue.innerHTML = parseInt(minFinalvalue.innerHTML) +
    parseInt(mitInputnumber);
    //var calValue = toString(parseInt(document.getElementById("minDisplayedvalue")));
   //localStorage.setItem('calValue', (minFinalvalue + mitInputnumber))
}

 
/*window.onload = function () {
  if(localStorage.length == 0) {
    document.getElementById('minDisplayedvalue').innerHTML = "0"
  } else {
  document.getElementById('minDisplayedvalue').innerHTML = toString(localStorage.getItem('calValue'));
  }
} */

function changeName (newName ) {
  localStorage.clear()
  localStorage.setItem('nameVar', newName);
  document.getElementById('name').innerHTML = 'variable name has changed to ' +  newName
}

/* Nikol can help implement window.local storage:
https://stackoverflow.com/questions/16206322/
  how-to-get-js-variable-to-retain-value-after-page-refresh */

  /* Nikol can help implement window.local storage:
https://stackoverflow.com/questions/16206322/
  how-to-get-js-variable-to-retain-value-after-page-refresh */

  /* Nikol can help implement window.local storage:
https://stackoverflow.com/questions/16206322/
  how-to-get-js-variable-to-retain-value-after-page-refresh */
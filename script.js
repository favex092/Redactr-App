const scrambleTextArea = document.getElementById("text")

const redactTextArea = document.getElementById("words-to-scamble")
const replaceTextArea = document.getElementById("scramble-replacement")
const output = document.getElementById("output")
const submitBtn = document.getElementById("btn-submit")

function scrambler(e) {
  e.preventDefault()

  let words = scrambleTextArea.value
  let wordsToRedact = redactTextArea.value
  let replacement = replaceTextArea.value

  if (replacement == "") {
    replacement = "*"
  }

  // "This is my project"
  // "this is"
  let wordsArr = words.split(" ") // ["this","is","my","porject"]
  let wordsToRedactArr = wordsToRedact.split(" ")// ["this","is"]

  let signs = [".",","]
  
  for (let i = 0; i < wordsToRedactArr.length; i++) {
    for (let j = 0; j < wordsArr.length; j++) {
      
      if(signs.includes[])
      
      if (wordsToRedactArr[i] == wordsArr[j]) {

        wordsArr[j] = replacement.repeat(wordsArr[j].length)
      }
    }

  }

  // "this,is,my,project"
  let result = wordsArr.join()

  // "this is my project"
  let newResult = result.replaceAll(",", " ")

  output.innerText = newResult

}
submitBtn.addEventListener("click", scrambler);
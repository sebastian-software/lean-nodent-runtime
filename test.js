var babel = require("babel-core")
var fs = require("fs")

var options = {
  "plugins": [
    [ "fast-async", {
      "useRuntimeModule": "lean-nodent-runtime"
    }]
  ]
}

var result = babel.transform(`
function slow() {
  return new Promise(function outer(resolve) {
    setTimeout(function inner() {
      resolve("Works!")
    }, 300)
  })
}

async function loader() {
  var value = await slow()
  console.log(value)
}

process.nextTick(function ticker () {
  loader()
})
`.trim(), options)

const expected = fs.readFileSync("test.expected.js").toString().trim()
if (result.code === expected) {
  console.log("Success!")

  process.exit(0)
} else {
  console.error("Test failed!")
  console.log("Result:")
  console.log(result.code)
  console.log("Expected:")
  console.log(expected)

  process.exit(1)
}




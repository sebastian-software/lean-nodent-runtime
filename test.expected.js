import _default from "lean-nodent-runtime";
function slow() {
  return new Promise(function outer(resolve) {
    setTimeout(function inner() {
      resolve("Works!");
    }, 300);
  });
}

function loader() {
  return new Promise(function ($return, $error) {
    var value;
    return slow().then(function ($await_1) {
      value = $await_1;
      console.log(value);
      return $return();
    }.$asyncbind(this, $error), $error);
  }.$asyncbind(this));
}

process.nextTick(function ticker() {
  loader();
});

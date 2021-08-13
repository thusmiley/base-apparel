function Validate(input) {
  let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let alert = document.getElementById("alert");
  let error = document.getElementById("error");
  if (input.value.match(format) === "false") {
    alert.style.display = "initial";
    error.style.display = "initial";
    return false;
  } else {
    return true;
  }
}

console.log("super powers");

const flightHandlerFunction = () => {
  document.querySelector("#flight").classList.replace("disabled", "enabled")
}
const mindReaderFunction = () => {
  document.querySelector("#mindreading").classList.replace("disabled", "enabled")
}
const xRayFunction = () => {
  document.querySelector("#xray").classList.replace("disabled", "enabled")
}

document.querySelector("#activate-flight").addEventListener("click",flightHandlerFunction);
document.querySelector("#activate-mindreading").addEventListener("click",mindReaderFunction);
document.querySelector("#activate-xray").addEventListener("click",xRayFunction);


console.log("super powers");
// individial buttons functions
const flightHandlerFunction = () => {
  document.querySelector("#flight").classList.replace("disabled", "enabled")
}
const mindReaderFunction = () => {
  document.querySelector("#mindreading").classList.replace("disabled", "enabled")
}
const xRayFunction = () => {
  document.querySelector("#xray").classList.replace("disabled", "enabled")
}
// toggle on/off buttons functions
const activatorFunction = () => {
  const currentState = document.querySelectorAll(".power")
  currentState.forEach(element => {
    if (element.classList === "power", "disable") {
      element.classList.replace("disabled", "enabled")
    }
  });
}

const deactivatorFunction = () => {
  const currentState = document.querySelectorAll(".power")
  currentState.forEach(element => {
    if (element.classList === "power", "enabled") {
      element.classList.replace("enabled", "disabled")
    }
  });
}

// individual event listeners for the first 3 'activator' buttons
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);
document.querySelector("#activate-mindreading").addEventListener("click", mindReaderFunction);
document.querySelector("#activate-xray").addEventListener("click", xRayFunction);

// toggle on/off event listeneres 
document.querySelector("#activate-all").addEventListener("click", activatorFunction);
document.querySelector("#deactivate-all").addEventListener("click", deactivatorFunction);

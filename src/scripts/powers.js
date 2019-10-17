console.log("super powers");



// one function to control it all
const masterFunctionHandler = () => {
  const buttonIdentifer = event.target.id
  console.log(buttonIdentifer)
  if (buttonIdentifer === "activate-flight") {
    document.querySelector("#flight").classList.replace("disabled", "enabled");

  } else if (buttonIdentifer === "activate-mindreading") {
    document.querySelector("#mindreading").classList.replace("disabled", "enabled");

  } else if (buttonIdentifer === "activate-xray") {
    document.querySelector("#xray").classList.replace("disabled", "enabled");

  } else if (buttonIdentifer === "activate-all") {
    const currentState = document.querySelectorAll(".power")
    currentState.forEach(element => {
      if (element.classList === "power", "disable") {
        element.classList.replace("disabled", "enabled")
      }
    });

  } else if (buttonIdentifer === "deactivate-all") {
    const currentState = document.querySelectorAll(".power")
    currentState.forEach(element => {
      if (element.classList === "power", "enabled") {
        element.classList.replace("enabled", "disabled")
      }
    });
  }
}



// individial buttons functions
// const flightHandlerFunction = () => {
//   document.querySelector("#flight").classList.replace("disabled", "enabled")
// }
// const mindReaderFunction = () => {
//   document.querySelector("#mindreading").classList.replace("disabled", "enabled")
// }
// const xRayFunction = () => {
//   document.querySelector("#xray").classList.replace("disabled", "enabled")
// }


// toggle on/off buttons functions
// const activatorFunction = () => {
//   const currentState = document.querySelectorAll(".power")
//   currentState.forEach(element => {
//     if (element.classList === "power", "disable") {
//       element.classList.replace("disabled", "enabled")
//     }
//   });
// }

// const deactivatorFunction = () => {
//   const currentState = document.querySelectorAll(".power")
//   currentState.forEach(element => {
//     if (element.classList === "power", "enabled") {
//       element.classList.replace("enabled", "disabled")
//     }
//   });
// }

// individual event listeners for the first 3 'activator' buttons
// document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);
// document.querySelector("#activate-mindreading").addEventListener("click", mindReaderFunction);
// document.querySelector("#activate-xray").addEventListener("click", xRayFunction);

//changed the event listeneres to use the master function instead
document.querySelector("#activate-flight").addEventListener("click", masterFunctionHandler);
document.querySelector("#activate-mindreading").addEventListener("click", masterFunctionHandler);
document.querySelector("#activate-xray").addEventListener("click", masterFunctionHandler);

// toggle on/off event listeneres // changed the event listeneres to use the master function instead
document.querySelector("#activate-all").addEventListener("click", masterFunctionHandler);
document.querySelector("#deactivate-all").addEventListener("click", masterFunctionHandler);

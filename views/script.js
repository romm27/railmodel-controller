document.addEventListener("DOMContentLoaded", () => {

  const cab = document.getElementById("cab")
  const speed = document.getElementById("speed")
  const direction = document.getElementById("direction")
  const lights = document.getElementById("lights")
  const cabButton = document.getElementById("cabIdButton")
  const honkButton = document.getElementById("honkButton")

  function sendData() {
    const data = {
      'cab': parseInt(cab.value),
      'speed': parseInt(speed.value),
      'direction': direction.value,
      'lights': lights.checked
    }

    console.log(data)

    fetch('http://192.168.100.107:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  speed.addEventListener("input", (event) => {
    sendData()
  })

  lights.addEventListener("input", (event) => {
    sendData()
  })

  direction.addEventListener("input", (event) => {
    sendData()
  })

  cabButton.addEventListener("click", (event) => {
    sendData()
  })

  honkButton.addEventListener("mousedown", (event) => {
    console.log("down")
  })

  honkButton.addEventListener("mouseup", (event) => {
    console.log("up")
  })

});



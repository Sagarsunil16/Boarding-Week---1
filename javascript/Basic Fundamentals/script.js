let paraElements = document.querySelectorAll("p")
paraElements.forEach((p)=>p.style.color = "blue")

let button =  document.createElement("button")
button.textContent = "Remove me"

document.body.appendChild(button)

button.addEventListener("click",()=>{
    document.body.removeChild(button)
})
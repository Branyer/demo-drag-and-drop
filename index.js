// const rect = document.querySelector(".one").getBoundingClientRect()

// document.addEventListener("drag", function(event) {

// }, false);

// document.querySelector(".app").addEventListener("mousemove", (e) => {


//     // document.querySelector(".msg").textContent = `X: ${e.clientX}  Y: ${e.clientY}`

// })

// let mousedown = false;

// const evento = (e) => {
//     e.preventDefault()
//     if(mousedown) {
        
//         document.querySelector(".msg").textContent = `X: ${e.clientX - rect.x}  Y: ${e.clientY - rect.y}`
//         document.querySelector(".one").setAttribute("style", `top: ${Math.abs(e.clientY - rect.y)/3}px; z-index: 10`)
//     }

// }


// document.querySelector(".one").addEventListener("mousedown", () => {
    
//     console.log("mousedown")

//     mousedown = true;

//     document.querySelector(".container").addEventListener("mousemove", evento)

// })

// document.querySelector(".app").addEventListener("mouseup", () => {

    
//     if(mousedown) {
//         console.log("mouse up");
//         document.querySelector(".one").setAttribute("style", `top: 0px z-index:0`)
//         mousedown=false;
//         document.querySelector(".container").removeEventListener("mousemove", evento)
//     }

// })

var dragged;

/* events fired on the draggable target */


document.querySelectorAll(".draggable").forEach((el) => {

    
    el.addEventListener("drag", function(event) {
    
    }, false);

    
    el.addEventListener("dragstart", function(event) {
        // store a ref. on the dragged elem
        dragged = event.target;
        
        // make it half transparent
        console.log(dragged)
    }, false);

    /* events fired on the drop targets */
    el.addEventListener("dragover", function(event) {
      // prevent default to allow drop
      event.preventDefault();
      console.log("drag over", event.clientY)
    }, false);

    el.addEventListener("dragenter", function(event) {
      // highlight potential drop target when the draggable element enters it
      if (event.target.classList.contains("draggable") && event.target !== dragged) {
            console.log(event.target)
            event.target.setAttribute("style", "background-color: black")
      }
    
    }, false);

    el.addEventListener("dragleave", function(event) {
      // reset background of potential drop target when the draggable element leaves it
      if (event.target.classList.contains("draggable") && event.target !== dragged) {
          console.log("leave")
        event.target.setAttribute("style", "background-color: darkblue")
      }
    
    }, false);

    el.addEventListener("drop", function(event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged elem to the selected drop target
        if (event.target.classList.contains("draggable") && event.target !== dragged) {
            event.target.setAttribute("style", "background-color: darkblue")
        //   event.target.style.background = "";
        //   dragged.parentNode.removeChild( dragged );
        //   event.target.appendChild( dragged );

            console.log("change")

        }
      }, false);
      
})




document.addEventListener("dragend", function(event) {
  // reset the transparency
}, false);







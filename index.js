let dragged;

document.querySelectorAll(".draggable").forEach((el) => {


    el.addEventListener("dragstart", function(event) {
        dragged = event.target;
        dragged.classList.add("moving")
    }, false);


    el.addEventListener("dragend", function(event) {
        dragged.classList.remove("moving")
    }, false);

    el.addEventListener("dragover", function(event) {
      event.preventDefault();
    }, false);

    el.addEventListener("dragenter", function(event) {
      if (event.target.classList.contains("draggable") && event.target !== dragged) {
            event.target.setAttribute("style", "outline: 3px solid black")
      }
    }, false);

    el.addEventListener("dragleave", function(event) {
      if (event.target.classList.contains("draggable") && event.target !== dragged) {
          event.target.setAttribute("style", "outline: 0px solid black")
      }
    }, false);

    el.addEventListener("drop", function(event) {
        event.preventDefault();
        dragged.classList.remove("moving")
        if (event.target.classList.contains("draggable") && event.target !== dragged) {
          event.target.setAttribute("style", "outline: 0px solid black")

            const draggedParent = dragged.parentNode;
            const dropParent = event.target.parentNode

            draggedParent.removeChild(dragged);
            draggedParent.appendChild(event.target);

            dropParent.appendChild(dragged);
        }
      }, false);
})












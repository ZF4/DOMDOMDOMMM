window.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('button');
    btn.innerHTML = "Add square";
    let allDiv = document.createElement('div');
    document.body.appendChild(btn);
    document.body.appendChild(allDiv);
    let squareId = 1;
    document.body.style.backgroundColor = "#6d6875";



    //Creates new divs when button is clicked, also gives styling to each div(block)
    btn.addEventListener('click', function () {
        let square = document.createElement('div');
        let text = document.createTextNode(squareId);
        square.style.color = "white";
        square.appendChild(text);
        let squareText = document.createElement("h1");
        square.appendChild(squareText);
        squareText.appendChild(text);
        // squareText.style.display = "none"
        square.className = "square";
        square.id = squareId
        square.style.border = "thick solid white";
        square.style.background = "black";
        square.style.height = "100px";
        square.style.width = "100px"
        square.style.float = "left"
        square.style.flexDirection = "row";
        square.style.flexWrap = "wrap";
        allDiv.appendChild(square);
        squareId++;
        
        //Displaying squareId when mouse hovered over block
        square.addEventListener("mouseover", function () {
            squareText.style.display = "block";

        })

        //Hides squareId when mose off of block
        square.addEventListener("mouseout", function () {
            squareText.style.display = "none"

        })
        
        //Changes color of block randomly on a single click
        square.addEventListener("click", function () {
            let colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"]
            let randomNum = Math.floor(Math.random() * colors.length)
            square.style.backgroundColor = colors[randomNum]


        })

        //Checks value of square id to determine removal of another square
        square.addEventListener("dblclick", function () {
            if (square.id % 2 == 0) {
                if (square.nextElementSibling) {
                    square.nextElementSibling.remove()
                } else {
                    alert("No square to the right!")
                }
            }
            else if (square.id % 2 == 1) {
                if (square.previousElementSibling) {
                    square.previousElementSibling.remove()
                } else {
                    alert("No square to the left!")
                }
            }
        })



    })


})


















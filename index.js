var pathOfTheImage = [];


const data = [
    {
        "id": 1,
        "imageNo": 1,
        "imagePath": "bell-pepper.png"
    },
    {
        "id": 2,
        "imageNo": 2,
        "imagePath": "carrot.png"
    },
    {
        "id": 3,
        "imageNo": 3,
        "imagePath": "chili-pepper.png"
    },
    {
        "id": 4,
        "imageNo": 4,
        "imagePath": "pear.png"
    },
    {
        "id": 5,
        "imageNo": 5,
        "imagePath": "strawberry.png"
    },
    {
        "id": 6,
        "imageNo": 6,
        "imagePath": "watermelon.png"
    },
    {
        "id": 7,
        "imageNo": 1,
        "imagePath": "bell-pepper.png"
    },
    {
        "id": 8,
        "imageNo": 2,
        "imagePath": "carrot.png"
    },
    {
        "id": 9,
        "imageNo": 3,
        "imagePath": "chili-pepper.png"
    },
    {
        "id": 10,
        "imageNo": 4,
        "imagePath": "pear.png"
    },
    {
        "id": 11,
        "imageNo": 5,
        "imagePath": "strawberry.png"
    },
    {
        "id": 12,
        "imageNo": 6,
        "imagePath": "watermelon.png"
    }

]

//Get the ID from the data
function getIdFromJSON() {
    let value = [];
    for (let index = 0; index < data.length; index++) {
        value.push(data[index].id);
    }
    return value;
}

// shuffle the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//apply the image in the shuffled array
function rendorImage(array) {
    for (let index = 0; index < array.length; index++) {
        pathOfTheImage.push(data[array[index] - 1].imagePath);
    }
    return pathOfTheImage;
}


function countOfSection() {
    var section = "";
    for (let index = 0; index <= 11; index++) {
        section = section + `<div onclick="flipCard(${index}, this)" class="section flex justify-center items-center poppins-medium bg-indigo-300 hover:bg-blue-500 ease-in h-full"
                    id="count${index + 1}">
                    <div class="flipCardInner">
                        <div id="flip-card-front-${index}" class="flipper-front">
                        </div>
                        <div id="flip-card-back-${index}" class="flipper-back">
                            <img id="image-${index}" src="assets/${pathOfTheImage[index]}">
                        </div>
                    </div>
                </div>`
    }
    return section;
}

function callfunction() {
    rendorImage(shuffle(getIdFromJSON()));
    let locLeftCon = document.getElementById("leftCon");
    locLeftCon.innerHTML = countOfSection();
}
function shuffleTheItems() {
    location.reload();
}

var pointValue = 0;
var clickCount = 0;
let clickedImage = [];

function flipCard(cardID, element) {
    if (clickedImage.length === 2) return;

    let cardElement = document.getElementById("image-" + cardID);
    let imageID = cardElement.id;
    let imagePath = cardElement.src;

    let noClick = document.getElementById("noOfClicks");
    clickCount = clickCount+1
    noClick.innerText=clickCount;


    for (let index = 0; index < data.length; index++) {
        if (imagePath.split("assets/")[1] === data[index].imagePath) {
            if (clickedImage.length === 0) {
                element.classList.toggle("flipped");
                clickedImage.push({ id: element.id, image: data[index].imagePath});
                break
            } 
            else if (clickedImage.length === 1) {
                element.classList.toggle("flipped");
                clickedImage.push({ id: element.id, image: data[index].imagePath});
                

                if (clickedImage[0].image === clickedImage[1].image) {
                    let pointCount = document.getElementById("count");
                    pointValue = pointValue+1
                    pointCount.innerText=pointValue;

                    
                    if (pointValue===6) {
                        setTimeout(()=>{
                            console.log(refreshPage);
                            let refreshPage = window.confirm("You rock! play again?")
                        },500);
                    }

                    clickedImage.length = 0;
                    break
                } 
                else {

                    let firstCardID = clickedImage[0].id;
                    let secondCardID = clickedImage[1].id;

                    // Clear clickedImage before setTimeout runs
                    
                    

                    setTimeout(() => {
                    let firstCard = document.getElementById(firstCardID);
                    let secondCard = document.getElementById(secondCardID);

                        if (firstCard && secondCard) {
                        firstCard.classList.toggle("flipped");
                        secondCard.classList.toggle("flipped");
                        }
                        clickedImage.length = 0;
                    }, 1000);
                    break

                }
            }
        }
    }
}


// if (clickedImage.length===0) {
//     element.classList.toggle("flipped");
//     clickedImage.push("bell-pepper")
// }
// else if(clickedImage.length===1){
//     element.classList.toggle("flipped");
//     clickedImage.push("bell-pepper")
//     if(clickedImage[0]===clickedImage[1]){
//         clickedImage=[];
//     }
//     else{
//         console.log("Different");

//         for (let index = 0; index <= clickedImage.length; index++) {
//             clickedImage.pop()
            
//         }
//     }
// }

// var vc = document.getElementsByClassName('section');
// vc.addEventListener("click", rotateFunction);
// function rotateFunction() {
//     console.log('clicked....')
// }








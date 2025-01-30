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

let clickedImage = [];

function flipCard(cardID, element) {
    if (clickedImage.length === 2) return; // Prevent clicking more than two cards

    let cardElement = document.getElementById("image-" + cardID);
    let imageID = cardElement.id;
    console.log(imageID);

    for (let index = 0; index < data.length; index++) {
        if (imageID === `image-${index}`) {
            if (clickedImage.length === 0) {
                element.classList.toggle("flipped");
                clickedImage.push({ id: cardID, image: data[index].imageNo});
                console.log(data[index].imageNo);
            } 
            else if (clickedImage.length === 1) {
                element.classList.toggle("flipped");
                clickedImage.push({ id: cardID, image: data[index].imageNo });

                if (clickedImage[0].image === clickedImage[1].image) {
                    console.log("Match!");
                    clickedImage.length = 0; // Clear selection
                } 
                else {
                    console.log("Different!");

                    setTimeout(() => {
                        document.getElementById("count" + clickedImage[0].id).classList.remove("flipped");
                        document.getElementById("count" + clickedImage[1].id).classList.remove("flipped");
                        clickedImage.length = 0; // Reset for next attempt
                    }, 1000);
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








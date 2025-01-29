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

function getIdFromJSON() {
    let value = [];
    for (let index = 0; index < data.length; index++) {
        value.push(data[index].id);
    }
    return value;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var pathOfTheImage = [];

function rendorImage(array) {
    for (let index = 0; index < array.length; index++) {
        pathOfTheImage.push(data[array[index] - 1].imagePath);
    }
    return pathOfTheImage;
}

function countOfSection() {

    var section = "";
    for (let index = 0; index <= 11; index++) {
        section = section + `<div class="section flex justify-center items-center poppins-medium bg-indigo-300 hover:bg-blue-500 ease-in h-full"
                    id="count${index + 1}" onclick="getDivId(event)>
                    <div class="flipCardInner">
                        <div id="flip-card-front-${index}" class="flipper-front">
                        </div>
                        <div id="flip-card-back-${index}" class="flipper-back">
                            <img src="assets/${pathOfTheImage[index]}">
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

function getDivId(event) {
    console.log(event.target.id);
}



// var vc = document.getElementsByClassName('section');
// vc.addEventListener("click", rotateFunction);
// function rotateFunction() {
//     console.log('clicked....')
// }








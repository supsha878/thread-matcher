// element variables
const footerEl = document.getElementsByTagName('footer');

// form variables
const colorForm = document.getElementById("color-form");
const colorIn = document.getElementById("color-in");

colorForm.addEventListener("submit", matchColor);

function matchColor(event) {
    event.preventDefault();

    if (document.getElementById('result')) {
        document.getElementById('result').remove();
    }

    const content = document.querySelector('#color-in').value;

    const red = parseInt(content.substring(1, 3), 16);
    const green = parseInt(content.substring(3, 5), 16);
    const blue = parseInt(content.substring(5, 7), 16);

    const rgb = [red, green, blue];
    const threadDistance = [];

    for (var i = 0; i < threadList.length; i++) {

        const redDiff = Math.pow(threadList[i][0] - rgb[0], 2);
        const greenDiff = Math.pow(threadList[i][1] - rgb[1], 2);
        const blueDiff = Math.pow(threadList[i][2] - rgb[2], 2);

        const totalDist = redDiff + greenDiff + blueDiff;

        threadDistance.push(totalDist);
    }

    const threadOut = threadList[threadDistance.indexOf(Math.min.apply(Math, threadDistance))];

    const divResult = document.createElement('div');
    divResult.id = 'result';

    const threadNumber = document.createElement('h3');
    threadNumber.id = 'thread-number';
    threadNumber.textContent = threadOut[3];
    const divColor = document.createElement('div');
    divColor.id = 'color-out';
    divColor.style.backgroundColor = 'rgb(' + threadOut[0] + ', ' + threadOut[1] + ', ' + threadOut[2] + ')';
    divColor.textContent = ' ';

    divResult.append(threadNumber, divColor);
    footerEl[0].append(divResult);

}

const threadList = [
    [255, 0, 0, '333'],
    [0, 255, 0, '1111']
];
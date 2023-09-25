let remainingTime = 0;
let remainingMinutes;
let remainingSeconds;

const displayTime = document.querySelector('.timer-display');
const minutesButton = document.querySelector('.minutes');
const secondsButton = document.querySelector('.seconds');
const actionButton = document.querySelector('.action');
const clearButton = document.querySelector('.clear');
const fontChangeButton = document.querySelector('.font');
const bodyElement = document.querySelector('html body')

let runningFlag = false;

// 分ボタンを押したとき

minutesButton.addEventListener('click',() => {
    if(remainingTime >= 3540){
        remainingTime = 0
    } else {
        remainingTime += 60;
    }
    timerSet()
})

// 秒ボタンを押したとき

secondsButton.addEventListener('click',() => {
    if(remainingTime >= 3599){
        remainingTime = 0
    } else {
        remainingTime += 1;
    }
    timerSet()
})

// タイマーの表示を変更

function timerSet() {
    remainingMinutes = Math.floor(remainingTime / 60);
    remainingSeconds = (remainingTime - remainingMinutes * 60) / 1;
    displayTime.innerText = `${remainingMinutes.toString().padStart(2,'0')}:${remainingSeconds.toString().padStart(2,'0')}`;
}

// スタートボタンを押したとき

actionButton.addEventListener('click',() => {
    flagToggle();
    if(remainingTime === 0){
        flagToggle();
        finishDisplay();
    } else if(runningFlag === true){
        const countDown = setInterval(() => {
            remainingTime--;
            timerSet();
            // ０秒になったとき
            if(remainingTime === 0){
                clearInterval(countDown);
                runningFlag = false;
                actionButton.innerText = 'スタート';
                finishDisplay();
            //ストップが押されてフラグがfalseになったとき 
            }else if(runningFlag === false){
                remainingTime++;
                timerSet();
                clearInterval(countDown);
            }
        },1000);
    }
    
})

// フラグを入れ替える

function flagToggle() {
    if(runningFlag === false){
        runningFlag = true;
        actionButton.innerText = 'ストップ'
    } else if(runningFlag === true){
        runningFlag = false;
        actionButton.innerText = 'スタート';
    }
}

// タイマー終了画面

function finishDisplay() {
    const newDisplay = document.createElement('div');
    const finishSentence = document.createElement('h1');
    const finishButton = document.createElement('button')
    finishButton.innerText = 'OK';
    finishButton.classList.add('btn');
    finishButton.addEventListener('click',() => {
        bodyElement.removeChild(newDisplay);
    })
    finishSentence.innerText = "It's over.";
    newDisplay.classList.add('finish-display');
    newDisplay.appendChild(finishSentence);
    newDisplay.appendChild(finishButton);
    bodyElement.appendChild(newDisplay);
}

// clear Button

clearButton.addEventListener('click',() => {
    if(runningFlag === false){
        remainingTime = 0;
        timerSet();
    } else if(runningFlag === true){
        flagToggle();
        remainingTime = 0;
        timerSet();
    }
    
})





// フォントチェンジボタン
fontChangeButton.addEventListener('click',() => {
    let randomNum = Math.floor(Math.random() * 10);
    // console.log(randomNum);
    switch (randomNum) {
        case 0:
            displayTime.setAttribute('class','timer-display dancing')
            break;
        case 1:
            displayTime.setAttribute('class','timer-display crimson')
            break;
        case 2:
            displayTime.setAttribute('class','timer-display barriecito')
            break;
        case 3:
            displayTime.setAttribute('class','timer-display old')
            break;
        case 4:
            displayTime.setAttribute('class','timer-display pacifico')
            break;
        case 5:
            displayTime.setAttribute('class','timer-display tilt')
            break;
        case 6:
            displayTime.setAttribute('class','timer-display caveat')
            break;
        case 7:
            displayTime.setAttribute('class','timer-display zeyada')
            break;
        case 8:
            displayTime.setAttribute('class','timer-display dot')
            break;
        case 9:
            displayTime.setAttribute('class','timer-display hachi')
            break;
        default:
            break;
    }
})
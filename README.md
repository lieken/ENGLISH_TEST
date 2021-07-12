# 英文測驗官網

## 描述

> 網站是建立於2020年，為因應教師對小朋友進行英文測驗所使用。
> 其結構可分為html、css、javascript、ajax 與 googlesheet 所製作。

## 功能

### 流程

1. 小朋友填寫個人資料(學號)，並進行聽力測驗
1. 填答完畢，經由自動對答
1. 連結至 Google Sheet 表單給教師登記成績

### 特色
* 發音功能
```
var synth = window.speechSynthesis;
let sendButton = document.getElementById("speakans");
function speakans(speakid) {
  var msg = new SpeechSynthesisUtterance(speakid);
  let voices =synth.getVoices();

  for(let index = 0; index < voices.length; index++) {
    if(voices[index].name == "Google US English"){       
      msg.voice = voices[index];
      msg.rate = 0.6;
      break;
    }else{
      //如果沒有則使用預設中文語音
      msg.lang = 'en-US';
      msg.rate = 0.6;
    }
  }
  window.speechSynthesis.cancel();
  setTimeout(function speaka(){ synth.speak(msg)}, 1000);
};
```
* 倒數時間
```
function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
  
  function updateClock() {
    const t = getTimeRemaining(endtime);
    //console.log(t.total) 
    if(t.total == 0){
      alert("時間到!趕快交卷!");
    }
    //daysSpan.innerHTML = t.days;
    //hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  }
  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}
```
* 透過ajax傳送
* 檢測與自動對答
* 自動keyin Google Sheet 中 

## 連結網址
從這裡可以查看 [英文測驗官網](https://engtest2929.herokuapp.com/index.html).
![英文測驗](/assets/img/sample.png "This is a sample image.")

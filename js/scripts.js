/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */


   function testuser(){
    var i= document.getElementById('numberValue');
    var t= document.getElementById('nameValue');
    if (i.value==""||t.value=="")
    {
    alert("請輸入學號或姓名")
    return false;
    }
    else
    {
      location.replace("#test1");
    //alert(i.value)
    return true;
    }
    }

    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


var synth = window.speechSynthesis;


let sendButton = document.getElementById("speakans");
function speakans(speakid) {
  var msg = new SpeechSynthesisUtterance(speakid);
  let voices =synth.getVoices();

  for(let index = 0; index < voices.length; index++) {
    /*
    "Google US English"
    "Google 日本語"
    "Google 普通话（中国大陆）"
    "Google 粤語（香港）"
    "Google 國語（臺灣）"
    */
    //console.log(this.voices[index].name);
    
    if(voices[index].name == "Google US English"){       
      //u.lang = 'zh-TW'; //這句絕對不要用
      //要使用Google中文語音的話請不要再用u.lang指定語言
      //不然可能又會被切回系統預設的中文語音
      msg.voice = voices[index];
      msg.rate = 0.7;
      break;
    }else{
      //如果沒有則使用預設中文語音
      msg.lang = 'zh-TW';
    }
  }
  window.speechSynthesis.cancel();
  setTimeout(function speaka(){ synth.speak(msg)}, 3000);

};


let sendansButton = document.getElementById("answer");
function send(QuestionArray) {
  let name = document.querySelector('#nameValue').value;
  let number = document.querySelector('#numberValue').value;
  let Question = QuestionArray;
  //題目答案
  let ansValue1 = document.querySelector('#answerValue1').value;
  let quesValue1 = Question[3][0]

  let ansValue2 = document.querySelector('#answerValue2').value;
  let quesValue2 = Question[3][1]

  let ansValue3 = document.querySelector('#answerValue3').value;
  let quesValue3 = Question[3][2]

  let ansValue4 = document.querySelector('#answerValue4').value;
  let quesValue4 = Question[3][3]

  let ansValue5 = document.querySelector('#answerValue5').value;
  let quesValue5 = Question[3][4]
  //題目答案
  let ansValue6 = document.querySelector('#answerValue6').value;
  let quesValue6 = Question[3][5]

  let ansValue7 = document.querySelector('#answerValue7').value;
  let quesValue7 = Question[3][6]

  let ansValue8 = document.querySelector('#answerValue8').value;
  let quesValue8 = Question[3][7]

  let ansValue9 = document.querySelector('#answerValue9').value;
  let quesValue9 = Question[3][8]

  let ansValue10 = document.querySelector('#answerValue10').value;
  let quesValue10 = Question[3][9]

  var mistake = 0
  var Score = 0
  if(ansValue1 == quesValue1){
    Score = Score +10;
  }else{
    mistake = mistake +1;
  }
  if(ansValue2 == quesValue2){
    Score = Score +10;
  }else{
    mistake = mistake +1;
  }
  if(ansValue3 == quesValue3){
    Score = Score +10;
  }else{
    mistake = mistake +1;
  }
  if(ansValue4 == quesValue4){
    Score = Score +10;
  }else{
    mistake = mistake +1;
  }
  if(ansValue5 == quesValue5){
    Score = Score +10;
  }else{
    mistake = mistake +1;
  }

  if(ansValue6 == quesValue6){
    Score = Score +10;
  }else{
    mistake = mistake +1;
  }
  if(ansValue7 == quesValue7){
    Score = Score +10;
  }else{
    mistake = mistake +1;
  }
  if(ansValue8 == quesValue8){
    Score = Score +10;
  }else{
    mistake = mistake +1;
  }
  if(ansValue9 == quesValue9){
    Score = Score +10;
  }else{
    mistake = mistake +1;
  }
  if(ansValue10 == quesValue10){
    Score = Score +10;
  }else{
    mistake = mistake +1;
  }
  $.ajax({
    type:"GET",
    url: "https://script.google.com/macros/s/AKfycbzl4LU9XTQrbMlHO7PbjPhE9r0MpXlBGmUCD0Ng25If8ruVLAJP/exec",
    data: {
        "type": "1",
        "name": name,
        "number": number,
        "mistake": mistake,
        "Score": Score,
        "ansValue1": ansValue1,
        "quesValue1": quesValue1,
        "ansValue2": ansValue2,
        "quesValue2": quesValue2,
        "ansValue3": ansValue3,
        "quesValue3": quesValue3,
        "ansValue4": ansValue4,
        "quesValue4": quesValue4,
        "ansValue5": ansValue5,
        "quesValue5": quesValue5,
        "ansValue6": ansValue6,
        "quesValue6": quesValue6,
        "ansValue7": ansValue7,
        "quesValue7": quesValue7,
        "ansValue8": ansValue8,
        "quesValue8": quesValue8,
        "ansValue9": ansValue9,
        "quesValue9": quesValue9,
        "ansValue10": ansValue10,
        "quesValue10": quesValue10,
    },
    success: function(response) {
      alert("成功");
      console.log(response);
    },
    error: function(){alert("失敗！")}
  });
};

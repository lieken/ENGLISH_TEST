let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbzl4LU9XTQrbMlHO7PbjPhE9r0MpXlBGmUCD0Ng25If8ruVLAJP/exec",
    data: {
      "name": name, /* 屬性名稱需與 Google Sheet 相同 */
      "phone": phone, /* 屬性名稱需與 Google Sheet 相同 */
    },
    dataType: "JSON",
    success: function(response) {
      console.log(response);
      if(response == "成功"){
        alert("成功");
      }else{
        alert("失敗");
      }
    },
  });
};

sendButton.addEventListener('click', send);

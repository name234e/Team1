function sendamessage (evt) {
    var data = JSON.stringify({
    "First name": document.querySelector('#fname').value,
    "Last Name": document.querySelector('#lname').value,
    "Country":  document.querySelector('#country').value,
    "Subject": document.querySelector('#subject').value,
    "Email": document.querySelector('#email').value,
  });
  
  var xhr = new XMLHttpRequest();
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
      var responseText= JSON.parse(this.responseText);
      if(responseText._id) { 
          document.querySelector("#output").textContent="Message has been successful sent.";          
      } else{
        document.querySelector("#output").textContent="Message has not been sent.";
      }
    }
  });
  
  xhr.open("POST", "https://contactus-38ea.restdb.io/rest/faqfor");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", "5c4cc7e78932456b814556bb");
  xhr.setRequestHeader("cache-control", "no-cache");
  
  xhr.send(data);
  evt.preventDefault();
}
document.querySelector('#mess').addEventListener('submit', sendamessage);
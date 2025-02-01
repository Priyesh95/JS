const clock = document.querySelector('#clock');



setInterval(function(){
    let date = new Date();
    let options = { timeStyle: 'medium', hour12: true };
    let timeString = date.toLocaleTimeString('en-US', options);
    clock.innerHTML = timeString;
},1000)
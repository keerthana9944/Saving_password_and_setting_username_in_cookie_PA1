document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = parseInt(getCookie('count')) || 0;


  // 2. If the cookie exists, increment the value and update the cookie
  if(count){
    count = parseInt(count);
    count++;
    setCookie('count', count, 365);
  }


  // 3. If the cookie does not exist, create it and set the value to 1
  else{
    count = 1;
    setCookie('count', count, 365);

  }
  // 4. Display the count on the webpage
  document.getElementById('displayCount').textContent = count;


  // your code here
});

function myTimer() {

  const clock = document.querySelector('.clock');
  const start = document.querySelector('.start');
  const pause = document.querySelector('.pause');
  const clear = document.querySelector('.clear');
  let seconds = 0;
  let timer;

  function startClock() {
    timer = setInterval(function() {
      seconds++;
      clock.innerHTML =  getTimeFromSecond(seconds);
    },1000);  
  }

  function getTimeFromSecond(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  start.addEventListener('click', function() {
    clearInterval(timer);
    startClock();
    clock.classList.remove('paused')
  });

  pause.addEventListener('click', function() {
    clearInterval(timer);
    clock.classList.add('paused');
  });

  clear.addEventListener('click', function() {
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    seconds = 0;
    clock.classList.remove('paused');
  });
}

myTimer();
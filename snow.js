document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.querySelector('.snowflakes');
  
    let interval = 200; // 雪の生成間隔の初期値
  
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.animationDelay = `${Math.random() * 2}s`;
  
      snowflakesContainer.appendChild(snowflake);
  
      snowflake.addEventListener('animationend', () => {
        snowflake.remove();
      });
    }
  
    function increaseSnowfall() {
      interval -= 50;
      clearInterval(timer);
      timer = setInterval(createSnowflake, interval);
    }
  
    let timer = setInterval(createSnowflake, interval);
    setInterval(increaseSnowfall, 2000);
  });
  
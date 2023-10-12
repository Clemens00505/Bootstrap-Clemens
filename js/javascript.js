let countdown = 10;

      function updateCountdown() {
        const countdownElement = document.querySelector(".countdown");
        countdownElement.textContent = `Je word over ${countdown} seconden teruggestuurd naar de hoofdpagina.`;
        countdown--;

        if (countdown >= 0) {
          setTimeout(updateCountdown, 1000);
        } else {
          window.location.href = "index.html";
        }
      }

      updateCountdown();
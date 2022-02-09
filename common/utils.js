function showMessage(message) {
  const gameArea = document.querySelector(".game-area");

  const alertMessage = `
      <div class="game-alert">
          <p class="game-alert-message">${message}</p>
      </div>
      `;

  gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}

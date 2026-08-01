const form = document.getElementById('settingsForm');
const frequencyInput = document.getElementById('frequency');
const frequencyValue = document.getElementById('frequencyValue');
const statusMessage = document.getElementById('statusMessage');

function updateFrequencyLabel() {
  const value = Number(frequencyInput.value);
  frequencyValue.textContent = `${value} time${value === 1 ? '' : 's'} a week`;
}

frequencyInput.addEventListener('input', updateFrequencyLabel);
updateFrequencyLabel();

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const notifications = document.getElementById('notifications').checked;
  const theme = document.getElementById('theme').value;
  const frequency = Number(frequencyInput.value);

  statusMessage.textContent = `Saved: ${fullName || 'Your settings'} | ${email} | notifications ${notifications ? 'on' : 'off'} | theme ${theme} | ${frequency} times/week.`;
});

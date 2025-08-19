window.addEventListener('DOMContentLoaded', () => {
  const runBtn = document.getElementById('run-script');
  const appInput = document.getElementById('app-name');
  const untilInput = document.getElementById('until-time');
  const logOutput = document.getElementById('log-output');
  const refreshBtn = document.getElementById('refresh-log');

  runBtn.addEventListener('click', () => {
    const app = appInput.value.trim();
    const until = untilInput.value.trim();

    if (app && until) {
      window.api.runScript(app, until);
    } else {
      alert('Please enter both App Name and Until Time.');
    }
  });

  refreshBtn.addEventListener('click', () => {
    const logs = window.api.readLog();
    logOutput.textContent = logs;
  });

  // Auto-load logs on startup
  const logs = window.api.readLog();
  logOutput.textContent = logs;
});

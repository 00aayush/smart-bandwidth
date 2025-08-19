const { contextBridge } = require('electron');
const { exec } = require('child_process');
const fs = require('fs');

contextBridge.exposeInMainWorld('api', {
  runScript: (app, until) => {
    const command = `powershell.exe -ExecutionPolicy Bypass -File SmartBandwidthManager.ps1 -AppName "${app}" -Until "${until}"`;
    exec(command, (error, stdout, stderr) => {
      if (error) console.error(`Error: ${error.message}`);
      if (stderr) console.error(`Stderr: ${stderr}`);
      console.log(`Output: ${stdout}`);
    });
  },
  cancelScript: (app) => {
    const command = `powershell.exe -ExecutionPolicy Bypass -File CancelBandwidth.ps1 -AppName "${app}"`;
    exec(command, (error, stdout, stderr) => {
      if (error) console.error(`Cancel Error: ${error.message}`);
      if (stderr) console.error(`Cancel Stderr: ${stderr}`);
      console.log(`Cancelled: ${stdout}`);
    });
  },
  readLog: () => {
    const logPath = `${process.env.USERPROFILE}\\Documents\\SmartBandwidthLog.txt`;
    return fs.existsSync(logPath) ? fs.readFileSync(logPath, 'utf8') : 'No logs found.';
  }
});

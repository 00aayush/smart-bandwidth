Absolutely, Aayush. Here's a clean and compelling `README.md` for your **SmartBandwidth** system—modular, voice-activated, time-aware, and fully integrated with n8n and Electron.

---

```markdown
# 🚀 SmartBandwidth

SmartBandwidth is a modular, voice-activated bandwidth control system designed for real-time app prioritization, download-aware scheduling, and seamless automation. Built with PowerShell, Electron, Node.js, and n8n integration, it empowers users to manage internet access with natural-language commands, voice triggers, and dashboard controls.

---

## 🧠 Features

- **Natural-Language Commands**  
  Trigger bandwidth prioritization with phrases like `now brave 2pm` or `now edge till 4:30`.

- **Time-Aware Access Control**  
  Automatically grants internet access to selected apps until a specified time, then reverts.

- **Download-Aware Extension**  
  Monitors app-specific download folders and extends access if downloads are still active.

- **Voice Activation**  
  Say “Boost Brave until 3pm” and let the system respond instantly.

- **Electron Dashboard**  
  GUI launcher with real-time status, system tray integration, and trigger buttons.

- **n8n Workflow Integration**  
  Trigger bandwidth logic remotely via webhook, schedule, or automation logic.

- **Logging & Transparency**  
  Every action is logged with timestamp, app name, and duration for full traceability.

---

## 📁 Folder Structure

```
SmartBandwidth/
├── Scripts/
│   ├── now.ps1
│   ├── ExtendDownloadMonitor.ps1
│   ├── revert.ps1
│   └── VoiceNow.ps1
├── Config/
│   └── apps.json
├── Logs/
│   └── activity.log
├── ElectronApp/
│   ├── main.js
│   ├── preload.js
│   └── renderer/
│       ├── index.html
│       └── app.js
├── n8n/
│   └── SmartBandwidthTrigger.json
```

---

## 🛠 Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Dashboard**
   ```bash
   npm start
   ```

3. **Activate Voice Control**
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\Scripts\VoiceNow.ps1
   ```

4. **Import n8n Workflow**
   - Open n8n
   - Import `SmartBandwidthTrigger.json`
   - Activate the workflow

---

## 🗣 Example Commands

| Command               | Action                                      |
|-----------------------|---------------------------------------------|
| `now edge 4pm`        | Prioritize Edge until 4:00 PM               |
| `now brave till 3:30` | Prioritize Brave until 3:30 PM              |
| `now epic games 2pm`  | Prioritize Epic Games until 2:00 PM         |
| `Boost Brave`         | Voice trigger for Brave prioritization      |

---

## 🔄 Extensibility

- Add new apps via `apps.json`
- Customize download folders per app
- Extend with n8n logic (e.g., torrent queue, app launch)
- Add GUI buttons or tray actions for new workflows

---

## 🧩 Credits

Built by [Aayush] with Microsoft Copilot  
Designed for control, transparency, and adaptive intelligence

---

```


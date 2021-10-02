# Remote control of computer

<img src="https://raw.githubusercontent.com/kvark85/remote_control_for_computer/main/images/web_interface.jpg" width="250" alt="Image with web interface on mobile">

You can unpack and use already built [application (Remote control-win32-x64.zip)](https://github.com/kvark85/remote_control_for_computer/raw/main/Remote%20control-win32-x64.zip)

## Run application for development
```bash
# Install dependencies
npm install
# Rebuild
npm rebuild --runtime=electron --target=15.0.0 --disturl=https://atom.io/download/atom-shell --abi=48
# Run the app
npm start
```
## Build an application for windows
Run PowerShell as Administrator
```bash
# Install electron-packager
npm install electron-packager -g
# Build an application for windows
electron-packager C:\projects\remote_control_for_computer --platform=win32 --arch=x64 "Remote control"
```

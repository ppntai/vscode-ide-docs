# ide-python Installation Guide

## 1. Windows Installation Procedure

### 1.1 Download Files
Please visit the [Github Release Page](https://github.com/ppntai/vscode-ide/releases/) and download the following two files:
- `VSCode-ide-python-win32-x64.zip`
- `ide-python-extensions.zip`

### 1.2 Install ide-python
- Unzip and double-click on the `ide-python.exe` file to launch.
- The icon after launching is shown below:  
![IDE Python Installation Icon](/06_ide-python/01_install_files/2.jpg)

### 1.3 Install Extensions

#### List of Extension Files
After unzipping the `ide-python-extensions.zip`, you will see the following extensions:
```
├── PKief.material-icon-theme-4.28.0.vsix
├── VisualStudioExptTeam.vscodeintellicode-1.2.30.vsix
├── ms-python.python-2023.19.12771010.vsix
├── ms-python.vscode-pylance-2023.7.10.vsix
├── ms-vscode-remote.remote-containers-0.300.0.vsix
├── ms-vscode-remote.remote-ssh-0.103.2023062115.vsix
├── ms-vscode-remote.remote-wsl-0.80.2.vsix
├── ms-vscode-remote.vscode-remote-extensionpack-0.24.0.vsix
├── ms-vscode.remote-server-1.3.2023070609.vsix
```

#### Install Extensions
1. Launch ide-python.
2. Navigate to Extensions.
3. Select `...` → `Install From VSIX`.
4. Select all extensions related to Python for installation (the software will automatically select the appropriate extensions based on your operating system).  
![Installation Guide](/01_ide-cpp/01/1.jpg)
5. Install other extensions using the same method.

#### Set Icon Theme
1. Choose `Material Icon Theme`.
2. Navigate to `Set File Icon Theme`.
3. Select the corresponding icon.  
![Icon Selection](/02_ide-java/01/3.jpg)

### 1.4 Configure ide-python

#### Edit Configuration File
Open the file `C:\Users\Administrator\.vside-python\argv.json` and add the following content:
```
"enable-proposed-api":["ms-python.python", "ms-toolsai.jupyter", "ms-toolsai.jupyter-renderers", "ms-vscode-remote.remote-containers", "ms-vscode-remote.remote-ssh", "ms-vscode-remote.remote-wsl", "ms-vscode.remote-server"]
```

#### Full Configuration File Content
```
{
    "enable-crash-reporter": true,
    "crash-reporter-id": "8fdd6ad5-9fab-45d3-8276-94ce641322c7",
    "enable-proposed-api":["ms-python.python", "ms-toolsai.jupyter", "ms-toolsai.jupyter-renderers", "ms-vscode-remote.remote-containers", "ms-vscode-remote.remote-ssh", "ms-vscode-remote.remote-wsl", "ms-vscode.remote-server"]
}
```

### 1.5 Use Developer Tools to Check Errors
Choose `Developer: Toggle Developer Tools`.

### 1.6 Code Testing
Ensure you have installed the Python development environment.

Write and execute the following Python code:
```python
print("Hello world!")
```
Code execution result:  
![Code Execution Result](/06_ide-python/01_install_files/1.jpg)

## 2. MacOS Installation Procedure
Please refer to the above Windows installation procedure.

## 3. ide-python Extension Overview

### Python Support
- **Python**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

- **Pylance**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)

### IntelliCode Support
- **IntelliCode**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

### Remote Development Support
- **Remote Development**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

- **Dev Containers**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

- **Remote - Tunnels**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-server)

- **WSL**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

- **Remote - SSH**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)

### Theme Support
- **Material Icon Theme**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
# ide-jupyter Installation Guide

## 1. Windows Installation Process

### 1.1 Download Files
Go to the [Github Release Page](https://github.com/ppntai/vscode-ide/releases/) and download the following two files:
- `vscode-ide-jupyter-win32-x64.exe`
- `ide-jupyter-extensions.zip`

### 1.2 Install ide-jupyter
- Double-click the `vscode-ide-jupyter-win32-x64.exe` file to start the installation.
- The icon after installation will look like this:  
![IDE Jupyter Installation Icon](/03_ide-jupyter/01_install_files/1.jpg)

### 1.3 Extension Installation

#### List of Extension Files
After unzipping the `ide-jupyter-extensions.zip`, you will find the following extensions:
```
├── ms-toolsai.jupyter
│   ├── ms-toolsai.jupyter-2023.6.1001861915.vsix
│   ├── ms-toolsai.jupyter-2023.6.1001861915@alpine-arm64.vsix
│   ├── ms-toolsai.jupyter-2023.6.1001861915@alpine-x64.vsix
│   ├── ms-toolsai.jupyter-2023.6.1001861915@darwin-arm64.vsix
│   ├── ms-toolsai.jupyter-2023.6.1001861915@darwin-x64.vsix
│   ├── ms-toolsai.jupyter-2023.6.1001861915@linux-arm64.vsix
│   ├── ms-toolsai.jupyter-2023.6.1001861915@linux-armhf.vsix
│   ├── ms-toolsai.jupyter-2023.6.1001861915@linux-x64.vsix
│   ├── ms-toolsai.jupyter-2023.6.1001861915@win32-arm64.vsix
│   ├── ms-toolsai.jupyter-2023.6.1001861915@win32-ia32.vsix
│   ├── ms-toolsai.jupyter-2023.6.1001861915@win32-x64.vsix
├── PKief.material-icon-theme-4.28.0.vsix
├── VisualStudioExptTeam.vscodeintellicode-1.2.30.vsix
├── ms-python.python-2023.12.0.vsix
├── ms-python.vscode-pylance-2023.7.10.vsix
├── ms-toolsai.jupyter-keymap-1.1.2.vsix
├── ms-toolsai.jupyter-renderers-1.0.17.vsix
├── ms-toolsai.vscode-jupyter-cell-tags-0.1.8.vsix
├── ms-toolsai.vscode-jupyter-slideshow-0.1.5.vsix
├── ms-vscode-remote.remote-containers-0.300.0.vsix
├── ms-vscode-remote.remote-ssh-0.103.2023062115.vsix
├── ms-vscode-remote.remote-wsl-0.80.2.vsix
├── ms-vscode-remote.vscode-remote-extensionpack-0.24.0.vsix
├── ms-vscode.remote-server-1.3.2023070609.vsix
```

#### Install the `ms-toolsai.jupyter` Extension
1. Launch ide-jupyter.
2. Go to Extensions.
3. Select `...` → `Install From VSIX`.
4. Choose all the `ms-toolsai.jupyter` extensions. The system will automatically choose the corresponding extension for installation based on your OS.  
![Installation Guide](/01_ide-cpp/01/1.jpg)

#### Installing Other Extensions
For other extensions, the installation process is similar to the one mentioned above.

#### Setting Icon Theme
1. Choose `Material Icon Theme`.
2. Go to `Set File Icon Theme`.
3. Select the corresponding icon.  
![Icon Selection](/02_ide-java/01/3.jpg)

### 1.4 Modify Configuration Parameters
Edit the configuration file `C:\Users\Administrator\.vside-jupyter\argv.json` and add the following content:

```
"enable-proposed-api": ["ms-python.python", "ms-toolsai.jupyter", "ms-toolsai.jupyter-renderers", "ms-vscode-remote.remote-containers", "ms-vscode-remote.remote-ssh", "ms-vscode-remote.remote-wsl", "ms-vscode.remote-server"]
```

The full content of the configuration file is:

```
{
    "enable-crash-reporter": true,
    "crash-reporter-id": "74f88bc1-d985-4264-93bc-141d4ed475a8",
    "enable-proposed-api": ["ms-python.python", "ms-toolsai.jupyter", "ms-toolsai.jupyter-renderers", "ms-vscode-remote.remote-containers", "ms-vscode-remote.remote-ssh", "ms-vscode-remote.remote-wsl", "ms-vscode.remote-server"]
}
```

### 1.5 Code Testing
Ensure you have installed the Python environment.

#### Create Jupyter Notebook
Use the `Ctrl+Shift+P` shortcut to open the Command Palette, type "create: Create New Notebook", and create a new Jupyter Notebook.

Enter and execute the following Python code:
```
print("hello")
```
Code execution result:  
![Code Execution Result](/03_ide-jupyter/01_install_files/2.jpg)

## 2. MacOS Installation Process
Please refer to the above Windows installation process.

## 3. ide-jupyter Extension Introduction

#### Python Support

Name: Python  
Id: ms-python.python  
Description: IntelliSense (Pylance), Linting, Debugging (multi-threaded, remote), Jupyter Notebooks, code formatting, refactoring, unit tests, and more.  
Version: 2023.12.0  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-python.python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

Name: Pylance  
Id: ms-python.vscode-pylance  
Description: A performant, feature-rich language server for Python in VS Code  
Version: 2023.7.10  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)

#### Jupyter Support

Name: Jupyter  
Id: ms-toolsai.jupyter  
Description: Jupyter notebook support, interactive programming and computing that supports Intellisense, debugging and more.  
Version: 2023.6.1001861915  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

Name: Jupyter Keymap  
Id: ms-toolsai.jupyter-keymap  
Description: Jupyter keymaps for notebooks  
Version: 1.1.2  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-keymap](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-keymap)

Name: Jupyter Notebook Renderers  
Id: ms-toolsai.jupyter-renderers  
Description: Renderers for Jupyter Notebooks (with plotly, vega, gif, png, svg, jpeg and other such outputs)  
Version: 1.0.17  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-renderers](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-renderers)

Name: Jupyter Slide Show  
Id: ms-toolsai.vscode-jupyter-slideshow  
Description: Jupyter Slide Show support for VS Code  
Version: 0.1.5  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-slideshow](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-slideshow)

Name: Jupyter Cell Tags  
Id: ms-toolsai.vscode-jupyter-cell-tags  
Description: Jupyter Cell Tags support for VS Code  
Version: 0.1.8  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-cell-tags](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-cell-tags)

#### IntelliCode support

Name: IntelliCode  
Id: VisualStudioExptTeam.vscodeintellicode  
Description: AI-assisted development  
Version: 1.2.30  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

#### Remote Development Support

Name: Remote Development  
Id: ms-vscode-remote.vscode-remote-extensionpack   
Description: An extension pack that lets you open any folder in a container, on a remote machine, or in WSL and take advantage of VS Code's full feature set.  
Version: 0.24.0  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-vscode

-remote.vscode-remote-extensionpack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

Name: Dev Containers  
Id: ms-vscode-remote.remote-containers  
Description: Open any folder or repository inside a Docker container and take advantage of Visual Studio Code's full feature set.  
Version: 0.299.0  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

Name: Remote - Tunnels  
Id: ms-vscode.remote-server  
Description: Connect to a remote machine through a Tunnel  
Version: 1.2.1  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-server](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-server)

Name: WSL  
Id: ms-vscode-remote.remote-wsl  
Description: Open any folder in the Windows Subsystem for Linux (WSL) and take advantage of Visual Studio Code's full feature set.  
Version: 0.80.2  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

Name: Remote - SSH  
Id: ms-vscode-remote.remote-ssh  
Description: Open any folder on a remote machine using SSH and take advantage of VS Code's full feature set.  
Version: 0.102.0  
Publisher: Microsoft  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)

#### Theme Support

Name: Material Icon Theme  
Id: PKief.material-icon-theme  
Description: Material Design Icons for Visual Studio Code  
Version: 4.28.0  
Publisher: Philipp Kief  
VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)  
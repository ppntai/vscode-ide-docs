# ide-jupyter 安装指南

## 1. Windows 安装流程

### 1.1 下载文件
前往 [Github Release 页面](https://github.com/ppntai/vscode-ide/releases/)，请下载以下两个文件：
- `vscode-ide-jupyter-win32-x64.exe`
- `ide-jupyter-extensions.zip`

### 1.2 安装 ide-jupyter
- 双击 `vscode-ide-jupyter-win32-x64.exe` 文件进行安装。
- 安装完成后的图标如下：  
![IDE Jupyter 安装图标](/03_ide-jupyter/01_install_files/1.jpg)

### 1.3 扩展安装

#### 扩展文件列表
解压 `ide-jupyter-extensions.zip` 后，您将看到以下扩展：
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

#### 安装 `ms-toolsai.jupyter` 扩展
1. 启动 ide-jupyter。
2. 进入 Extensions。
3. 选择 `...` → `Install From VSIX`。
4. 选择所有的 `ms-toolsai.jupyter` 扩展。系统会根据您的操作系统自动选择对应的扩展进行安装。  
![安装图示](/01_ide-cpp/01/1.jpg)

#### 安装其他扩展
对于其他扩展，安装过程与上述类似。

#### 设置图标主题
1. 选择 `Material Icon Theme`。
2. 进入 `Set File Icon Theme`。
3. 选择对应的图标。  
![图标选择](/02_ide-java/01/3.jpg)

### 1.4 修改配置参数
编辑配置文件 `C:\Users\Administrator\.vside-jupyter\argv.json`，并添加以下内容：
```
"enable-proposed-api": ["ms-python.python", "ms-toolsai.jupyter", "ms-toolsai.jupyter-renderers", "ms-vscode-remote.remote-containers", "ms-vscode-remote.remote-ssh", "ms-vscode-remote.remote-wsl", "ms-vscode.remote-server"]
```
完整配置文件内容如下：
```
{
    "enable-crash-reporter": true,
    "crash-reporter-id": "74f88bc1-d985-4264-93bc-141d4ed475a8",
    "enable-proposed-api": ["ms-python.python", "ms-toolsai.jupyter", "ms-toolsai.jupyter-renderers", "ms-vscode-remote.remote-containers", "ms-vscode-remote.remote-ssh", "ms-vscode-remote.remote-wsl", "ms-vscode.remote-server"]
}
```

### 1.5 代码测试
确保您已经安装了 Python 环境。

#### 创建 Jupyter Notebook
使用快捷键 `Ctrl+Shift+P` 调出 Command Palette，输入 "create: Create New Notebook"，创建一个新的 Jupyter Notebook。

输入以下 Python 代码并执行：
```
print("hello")
```
代码执行结果：  
![代码运行结果](/03_ide-jupyter/01_install_files/2.jpg)

## 2. MacOS 安装流程
请参考上述 Windows 的安装流程。

## 3. ide-jupyter 扩展介绍
#### python Support

Name: Python  
Id: ms-python.python  
Description: IntelliSense (Pylance), Linting, Debugging (multi-threaded, remote), Jupyter Notebooks, code formatting, refactoring, unit tests, and more.  
Version: 2023.12.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-python.python  

Name: Pylance  
Id: ms-python.vscode-pylance  
Description: A performant, feature-rich language server for Python in VS Code  
Version: 2023.7.10  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance  

#### Jupyter Support
Name: Jupyter  
Id: ms-toolsai.jupyter  
Description: Jupyter notebook support, interactive programming and computing that supports Intellisense, debugging and more.  
Version: 2023.6.1001861915  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter  

Name: Jupyter Keymap  
Id: ms-toolsai.jupyter-keymap  
Description: Jupyter keymaps for notebooks  
Version: 1.1.2  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-keymap  

Name: Jupyter Notebook Renderers  
Id: ms-toolsai.jupyter-renderers  
Description: Renderers for Jupyter Notebooks (with plotly, vega, gif, png, svg, jpeg and other such outputs)  
Version: 1.0.17  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-renderers  

Name: Jupyter Slide Show  
Id: ms-toolsai.vscode-jupyter-slideshow  
Description: Jupyter Slide Show support for VS Code  
Version: 0.1.5  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-slideshow  

Name: Jupyter Cell Tags  
Id: ms-toolsai.vscode-jupyter-cell-tags  
Description: Jupyter Cell Tags support for VS Code  
Version: 0.1.8  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-cell-tags  

#### IntelliCode support
Name: IntelliCode  
Id: VisualStudioExptTeam.vscodeintellicode  
Description: AI-assisted development  
Version: 1.2.30  
Publisher: Microsoft VS Marketplace  
Link: https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode  


##### remote development support  
Name: Remote Development  
Id: ms-vscode-remote.vscode-remote-extensionpack   
Description: An extension pack that lets you open any folder in a container, on a remote machine, or in WSL and take advantage of VS Code's full feature set.  
Version: 0.24.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack  


Name: Dev Containers  
Id: ms-vscode-remote.remote-containers  
Description: Open any folder or repository inside a Docker container and take advantage of Visual Studio Code's full feature set.  
Version: 0.299.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers  

Name: Remote - Tunnels  
Id: ms-vscode.remote-server  
Description: Connect to a remote machine through a Tunnel  
Version: 1.2.1  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-server  

Name: WSL  
Id: ms-vscode-remote.remote-wsl  
Description: Open any folder in the Windows Subsystem for Linux (WSL) and take advantage of Visual Studio Code's full feature set.  
Version: 0.80.2  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl  

Name: Remote - SSH  
Id: ms-vscode-remote.remote-ssh  
Description: Open any folder on a remote machine using SSH and take advantage of VS Code's full feature set.  
Version: 0.102.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh  


#### Theme support  
Name: Material Icon Theme  
Id: PKief.material-icon-theme  
Description: Material Design Icons for Visual Studio Code  
Version: 4.28.0  
Publisher: Philipp Kief  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme  
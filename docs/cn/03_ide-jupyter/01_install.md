# ide-jupyter 安装
## Windows 安装
### 下载
https://github.com/ppntai/vscode-ide/releases/
下载两个文件,分别是
- vscode-ide-jupyter-win32-x64.exe
- ide-jupyter-extensions.zip


### 安装 ide-jupyter
双击vs-code-ide-jupyter-win32-x64.exe安装,安装完成后的图标如下  
![1](/03_ide-jupyter/01_install_files/1.jpg)
### 安装扩展
解压ide-jupyter-extensions.zip,解压后的扩展如下
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
安装扩展
安装ms-toolsai.jupyter扩展
启动ide-jupyter-->Extensions-->...-->Install From VSIX-->选择所有的redhat.java扩展,它会根据当前的操作系统选择对应的扩展安装
![1](/01_ide-cpp/01/1.jpg)

安装其他扩展
过程和上面相似,选择其他的所有扩展进行安装


设置图标
选择Material Icon Theme-->Set File Icon Theme-->选择它的图标
![](/02_ide-java/01/3.jpg)

修改配置参数
编辑配置文件C:\Users\Administrator\.vside-jupyter\argv.json
添加
```
"enable-proposed-api":["ms-python.python","ms-toolsai.jupyter","ms-toolsai.jupyter-renderers","ms-vscode-remote.remote-containers",
	"ms-vscode-remote.remote-ssh","ms-vscode-remote.remote-wsl","ms-vscode.remote-server"],
```
修改后的内容如下
```
{


	// Allows to disable crash reporting.
	// Should restart the app if the value is changed.
	"enable-crash-reporter": true,

	// Unique id used for correlating crash reports sent from this instance.
	// Do not edit this value.
	"crash-reporter-id": "74f88bc1-d985-4264-93bc-141d4ed475a8",
	"enable-proposed-api":["ms-python.python","ms-toolsai.jupyter","ms-toolsai.jupyter-renderers","ms-vscode-remote.remote-containers",
	"ms-vscode-remote.remote-ssh","ms-vscode-remote.remote-wsl","ms-vscode.remote-server"],
}
```

使用Developer Tools检查错误
Developer: Toggle Developer Tools


### 编写代码测试
前提是已经安装了python环境
创建 Jupyter Notebook
当安装后，使用快捷键 Ctrl+Shift+P 调出 Command Palette，然后输入 "create: Create New Notebook" ，就能创建一个新的 Jupyter Notebook。
```
print("hello")
```
编写下面的代码,运行即可
![](/03_ide-jupyter/01_install_files/2.jpg)


## McOS安装
参考上面的安装过程
## ide-jupyter Extension
#### Jupyter Support

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

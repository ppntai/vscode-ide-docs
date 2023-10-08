# ide-python 安装
## Windows 安装
### 下载
https://github.com/ppntai/vscode-ide/releases/
下载两个文件,分别是
- VSCode-ide-python-win32-x64.zip
- ide-python-extensions.zip


### 安装 ide-python
解压后双击ide-python.exe启动,安装完成后的图标如下  
![2](/06_ide-python/01_install_files/2.jpg)

### 安装扩展
解压ide-python-extensions.zip,解压后的扩展如下
```
.
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
安装扩展
安装 python扩展
启动ide-python-->Extensions-->...-->Install From VSIX-->选择所有的python扩展,它会根据当前的操作系统选择对应的扩展安装
![1](/01_ide-cpp/01/1.jpg)

安装其他扩展
过程和上面相似,选择其他的所有扩展进行安装


设置图标
选择Material Icon Theme-->Set File Icon Theme-->选择它的图标
![](/02_ide-java/01/3.jpg)

### 配置ide-python
编辑配置文件
```
C:\Users\Administrator\.vside-python\argv.json
```
添加
```
	"enable-proposed-api":["ms-python.python","ms-toolsai.jupyter","ms-toolsai.jupyter-renderers","ms-vscode-remote.remote-containers",
	"ms-vscode-remote.remote-ssh","ms-vscode-remote.remote-wsl","ms-vscode.remote-server"],
```
添加后的内容如下
```
// This configuration file allows you to pass permanent command line arguments to VS Code.
// Only a subset of arguments is currently supported to reduce the likelihood of breaking
// the installation.
//
// PLEASE DO NOT CHANGE WITHOUT UNDERSTANDING THE IMPACT
//
// NOTE: Changing this file requires a restart of VS Code.
{
	// Use software rendering instead of hardware accelerated rendering.
	// This can help in cases where you see rendering issues in VS Code.
	// "disable-hardware-acceleration": true,

	// Allows to disable crash reporting.
	// Should restart the app if the value is changed.
	"enable-crash-reporter": true,

	// Unique id used for correlating crash reports sent from this instance.
	// Do not edit this value.
	"crash-reporter-id": "8fdd6ad5-9fab-45d3-8276-94ce641322c7",
	"enable-proposed-api":["ms-python.python","ms-toolsai.jupyter","ms-toolsai.jupyter-renderers","ms-vscode-remote.remote-containers",
	"ms-vscode-remote.remote-ssh","ms-vscode-remote.remote-wsl","ms-vscode.remote-server"],
}

```

使用Developer Tools检查其他错误  
Ctrl+Shift+P-->Developer: Toggle Developer Tools
![3](/05_ide-rust/01_install_files/3.jpg)
### 编写代码测试
前提是已经安装了python环境
```
print("Hello world!")
```

```
PS E:\code\python\python-study\00_python-base-hello> & D:/ProgramData/Anaconda3/python.exe e:/code/python/python-study/00_python-base-hello/src/hello.py
Hello world!
```
![1](/06_ide-python/01_install_files/1.jpg)


## McOS安装
参考上面的安装过程

## ide-python Extension
#### Python Support  
Name: Python  
Id: ms-python.python  
Description: IntelliSense (Pylance), Linting, Debugging (multi-threaded, remote), code formatting, refactoring, unit tests, and more.  
Version: 2023.16.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-python.python  

Name: Pylance  
Id: ms-python.vscode-pylance  
Description: A performant, feature-rich language server for Python in VS Code  
Version: 2023.7.10  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance  

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


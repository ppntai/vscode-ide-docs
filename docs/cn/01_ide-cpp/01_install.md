# ide-cpp 安装
## Windows 安装
### 下载
[vs-code-ide-cpp-win32-x64.exe](https://github.com/ppntai/vscode-ide/releases/download/ide-cpp-v1.0.0/vs-code-ide-cpp-win32-x64.exe)  
[ide-cpp-extensions.zip](https://github.com/ppntai/vscode-ide/releases/download/ide-cpp-v1.0.0/ide-cpp-extensions.zip)

### 安装 ide-cpp
双击vs-code-ide-cpp-win32-x64.exe安装,安装完成后的图标如下  
![1](/01_ide-cpp/01/2.jpg)

### 安装扩展
解压ide-cpp-extensions.zip,解压后的扩展如下
```
├── ms-vscode.cpptools
│   ├── ms-vscode.cpptools-1.16.3@alpine-arm64.vsix
│   ├── ms-vscode.cpptools-1.16.3@alpine-x64.vsix
│   ├── ms-vscode.cpptools-1.16.3@darwin-arm64.vsix
│   ├── ms-vscode.cpptools-1.16.3@darwin-x64.vsix
│   ├── ms-vscode.cpptools-1.16.3@linux-arm64.vsix
│   ├── ms-vscode.cpptools-1.16.3@linux-armhf.vsix
│   ├── ms-vscode.cpptools-1.16.3@linux-x64.vsix
│   ├── ms-vscode.cpptools-1.16.3@win32-arm64.vsix
│   ├── ms-vscode.cpptools-1.16.3@win32-ia32.vsix
│   ├── ms-vscode.cpptools-1.16.3@win32-x64.vsix
├── ms-vscode.cpptools-extension-pack-1.3.0.vsix
├── PKief.material-icon-theme-4.28.0.vsix
├── VisualStudioExptTeam.vscodeintellicode-1.2.30.vsix
├── formulahendry.code-runner-0.12.0.vsix
├── jeff-hykin.better-cpp-syntax-1.17.2.vsix
├── ms-vscode-remote.remote-containers-0.300.0.vsix
├── ms-vscode-remote.remote-ssh-0.103.2023062115.vsix
├── ms-vscode-remote.remote-wsl-0.80.2.vsix
├── ms-vscode-remote.vscode-remote-extensionpack-0.24.0.vsix
├── ms-vscode.cmake-tools-1.15.18.vsix
├── ms-vscode.cpptools-themes-2.0.0.vsix
├── ms-vscode.remote-server-1.3.2023070609.vsix
├── twxs.cmake-0.0.17.vsix
```
安装扩展
安装 ms-vscode.cpptools扩展
启动ide-cpp-->Extensions-->...-->Install From VSIX-->选择所有的ms-vscode.cpptools扩展,它会根据当前的操作系统选择对应的扩展安装
![1](/01_ide-cpp/01/1.jpg)
![1](/01_ide-cpp/01/3.jpg)
安装其他扩展
过程和上面相似,选择除去ms-vscode.cpptools外的所有扩展进行安装

设置图标
选择Material Icon Theme-->Set File Icon Theme-->选择它的图标
![1](/01_ide-cpp/01/4.jpg)

### 编写代码测试
前提是已经安装了cpp环境,例如mingw或者cywin
c
```
#include <stdio.h>

int main(){
    printf("Hello,World\n");
    return 1;
}
```

```
[Running] cd "e:\code\cpp\cpp-study\cpp-study-vs-code\vs-code-c-hello\" && gcc c-hello-world.c -o c-hello-world && "e:\code\cpp\cpp-study\cpp-study-vs-code\vs-code-c-hello\"c-hello-world
Hello,World

[Done] exited with code=1 in 0.407 seconds
```
![1](/01_ide-cpp/01/5.jpg)

cpp
```
#include <iostream>
using namespace std;

int main() {
  cout << "hello world" << endl;
  for (int i = 0; i < 10; i++) {
    cout << i << endl;
  }
  return 0;
}
```
```
[Running] cd "e:\code\cpp\cpp-study\cpp-study-vs-code\vs-code-c-hello\" && g++ cpp-hello-world.cpp -o cpp-hello-world && "e:\code\cpp\cpp-study\cpp-study-vs-code\vs-code-c-hello\"cpp-hello-world
hello world
0
1
2
3
4
5
6
7
8
9

[Done] exited with code=0 in 0.34 seconds
```

![1](/01_ide-cpp/01/6.jpg)

## McOS安装
参考上面的安装过程
## ide-cpp Extension
#### C/C++ Extension Pack
Cpp support
Name: C/C++ Extension Pack
Id: ms-vscode.cpptools-extension-pack
Description: Popular extensions for C++ development in Visual Studio Code.
Version: 1.3.0
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack

Name: C/C++
Id: ms-vscode.cpptools
Description: C/C++ IntelliSense, debugging, and code browsing.
Version: 1.16.3
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools

Name: C/C++ Themes
Id: ms-vscode.cpptools-themes
Description: UI Themes for C/C++ extension.
Version: 2.0.0
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-themes

Name: CMake
Id: twxs.cmake
Description: CMake langage support for Visual Studio Code
Version: 0.0.17
Publisher: twxs
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=twxs.cmake

Name: CMake Tools
Id: ms-vscode.cmake-tools
Description: Extended CMake support in Visual Studio Code
Version: 1.14.34
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools

Name: Better C++ Syntax
Id: jeff-hykin.better-cpp-syntax
Description: The bleeding edge of the C++ syntax
Version: 1.17.2
Publisher: Jeff Hykin
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=jeff-hykin.better-cpp-syntax

#### Code Runner support
Name: Code Runner
Id: formulahendry.code-runner
Description: Run C, C++, Java, JS, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, CMD, BASH, F#, C#, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml, R, AppleScript, Elixir, VB.NET, Clojure, Haxe, Obj-C, Rust, Racket, Scheme, AutoHotkey, AutoIt, Kotlin, Dart, Pascal, Haskell, Nim,
Version: 0.12.0
Publisher: Jun Han
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner

#### IntelliCode support
Name: IntelliCode
Id: VisualStudioExptTeam.vscodeintellicode
Description: AI-assisted development
Version: 1.2.30
Publisher: Microsoft VS Marketplace
Link: https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode


#### remote development support
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
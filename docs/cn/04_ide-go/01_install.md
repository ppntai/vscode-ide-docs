# ide-go 安装指南

## 1. Windows 安装流程

### 1.1 下载文件
前往 [Github Release 页面](https://github.com/ppntai/vscode-ide/releases/)，请下载以下两个文件：
- `vscode-ide-go-win32-x64.exe`
- `ide-go-extensions.zip`

### 1.2 安装 ide-go
- 解压 `vscode-ide-go-win32-x64.zip` 文件并执行其中的安装程序。
- 安装完成后的图标如下：  
![IDE Go 安装图标](/04_ide-go/01_install_files/1.jpg)

### 1.3 扩展安装

#### 扩展文件列表
解压 `ide-go-extensions.zip` 后，您将看到以下扩展：
```
├── PKief.material-icon-theme-4.28.0.vsix
├── formulahendry.code-runner-0.12.0.vsix
├── golang.Go-0.39.1.vsix
```

#### 安装扩展
1. 启动 ide-go。
2. 进入 Extensions。
3. 选择 `...` → `Install From VSIX`。
4. 选择所有的扩展进行安装。  
![安装图示](/01_ide-cpp/01/1.jpg)

#### 设置图标主题
1. 选择 `Material Icon Theme`。
2. 进入 `Set File Icon Theme`。
3. 选择对应的图标。  
![图标选择](/02_ide-java/01/3.jpg)

### 1.4 使用 Developer Tools 检查错误
选择 `Developer: Toggle Developer Tools`。

### 1.5 代码测试
确保您已经安装了 Go 开发环境。

编写以下 Go 代码并执行：
```go
package main

import (
	"fmt"
)

func main() {
	fmt.Print("hello,world\n")
}
```
代码执行结果：  
![代码运行结果](/04_ide-go/01_install_files/2.jpg)

## 2. MacOS 安装流程
请参考上述 Windows 的安装流程。

## 3. ide-go 扩展介绍

#### Go Support
Name: Go  
Id: golang.Go  
Description: Rich Go language support for Visual Studio Code  
Version: 0.39.1  
Publisher: Go Team at Google  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=golang.Go  

#### Theme support
Name: Material Icon Theme  
Id: PKief.material-icon-theme  
Description: Material Design Icons for Visual Studio Code  
Version: 4.28.0  
Publisher: Philipp Kief  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme  
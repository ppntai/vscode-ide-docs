# ide-go 安装
## Windows 安装
### 下载
https://github.com/ppntai/vscode-ide/releases/
下载两个文件,分别是
- vscode-ide-go-win32-x64.exe
- ide-go-extensions.zip


### 安装 ide-go
解压vs-code-ide-go-win32-x64.zip安装,安装完成后的图标如下  
![1](/04_ide-go/01_install_files/1.jpg)
### 安装扩展
解压ide-go-extensions.zip,解压后的扩展如下
```
├── PKief.material-icon-theme-4.28.0.vsix
├── formulahendry.code-runner-0.12.0.vsix
├── golang.Go-0.39.1.vsix
```
安装扩展
安装扩展
启动ide-go-->Extensions-->...-->Install From VSIX-->选择所有的扩展,程序会根据当前的操作系统选择对应的扩展安装
![1](/01_ide-cpp/01/1.jpg)

安装其他扩展
过程和上面相似,选择其他的所有扩展进行安装


设置图标
选择Material Icon Theme-->Set File Icon Theme-->选择它的图标
![](/02_ide-java/01/3.jpg)


使用Developer Tools检查错误
Developer: Toggle Developer Tools


### 编写代码测试
前提是已经安装了go环境
```
package main

import (
	"fmt"
)

func main() {
	fmt.Print("hello,world\n")
}

```

```
[Running] go run "e:\code\go\go_study\01_go-helloworld\hello_world2.go"
hello,world
```
![](/04_ide-go/01_install_files/2.jpg)

## McOS安装
参考上面的安装过程
## ide-go Extension
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

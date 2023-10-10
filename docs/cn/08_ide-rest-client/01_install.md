# ide-rest-client 安装
## Windows 安装
### 下载
https://github.com/ppntai/vscode-ide/releases/
下载两个文件,分别是
- VSCode-ide-rest-client-win32-x64.zip
- ide-rest-client-extensions.zip


### 安装 ide-rest-client
解压后双击ide-rest-client.exe启动,安装完成后的图标如下  
![2](/08_ide-rest-client/01_install_files/2.jpg)

### 安装扩展
解压ide-rest-client-extensions.zip,解压后的扩展如下
```
.
├── humao.rest-client-0.25.1.vsix
```
安装扩展
安装 rest-client扩展
启动ide-rest-client-->Extensions-->...-->Install From VSIX-->选择所有的rest-client扩展,它会根据当前的操作系统选择对应的扩展安装
![1](/01_ide-cpp/01/1.jpg)

安装其他扩展
过程和上面相似,选择其他的所有扩展进行安装


设置图标
选择Material Icon Theme-->Set File Icon Theme-->选择它的图标
![](/02_ide-java/01/3.jpg)

使用Developer Tools检查其他错误  
Ctrl+Shift+P-->Developer: Toggle Developer Tools
![3](/05_ide-rust/01_install_files/3.jpg)
### 编写测试
之后就可以编写rest-client文件了,后缀名.http
![1](/08_ide-rest-client/01_install_files/1.jpg)


## McOS安装
参考上面的安装过程

## ide-rest-client Extension
Name: REST Client  
Id: humao.rest-client  
Description: REST Client for Visual Studio Code  
Version: 0.25.1  
Publisher: humao  
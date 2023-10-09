# ide-markdown 安装
## Windows 安装
### 下载
https://github.com/ppntai/vscode-ide/releases/
下载两个文件,分别是
- VSCode-ide-markdown-win32-x64.zip
- ide-markdown-extensions.zip


### 安装 ide-markdown
解压后双击ide-markdown.exe启动,安装完成后的图标如下  
![1](/07_ide-markdown/01_install_files/1.jpg)

### 安装扩展
解压ide-markdown-extensions.zip,解压后的扩展如下
```
.
├── PKief.material-icon-theme-4.28.0.vsix
├── shd101wyy.markdown-preview-enhanced-0.7.10.vsix
├── yzhang.markdown-all-in-one-3.5.1.vsix
```
安装扩展
安装 markdown扩展
启动ide-markdown-->Extensions-->...-->Install From VSIX-->选择所有的markdown扩展,它会根据当前的操作系统选择对应的扩展安装
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
之后就可以编写markdown文件了


## McOS安装
参考上面的安装过程

## ide-markdown Extension
Name: Markdown Preview Enhanced  
Id: shd101wyy.markdown-preview-enhanced  
Description: Markdown Preview Enhanced ported to vscode  
Version: 0.7.10  
Publisher: Yiyi Wang  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced  

Name: Markdown All in One  
Id: yzhang.markdown-all-in-one  
Description: All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)  
Version: 3.5.1  
Publisher: Yu Zhang  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one  

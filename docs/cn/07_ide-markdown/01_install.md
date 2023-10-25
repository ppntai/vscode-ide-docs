# ide-markdown 安装指南

## 1. Windows 安装流程

### 1.1 下载文件
前往 [Github Release 页面](https://github.com/ppntai/vscode-ide/releases/)，下载以下两个文件：
- `VSCode-ide-markdown-win32-x64.zip`
- `ide-markdown-extensions.zip`

### 1.2 安装 ide-markdown
- 解压下载的ZIP文件。
- 双击 `ide-markdown.exe` 文件进行启动。
- 启动后的图标如下：  
![IDE Markdown 图标](/07_ide-markdown/01_install_files/1.jpg)

### 1.3 扩展安装

#### 扩展文件列表
解压 `ide-markdown-extensions.zip` 后，您将看到以下扩展：
```
├── PKief.material-icon-theme-4.28.0.vsix
├── shd101wyy.markdown-preview-enhanced-0.7.10.vsix
├── yzhang.markdown-all-in-one-3.5.1.vsix
```

#### 安装扩展
1. 启动 ide-markdown。
2. 进入 Extensions。
3. 选择 `...` → `Install From VSIX`。
4. 选择所有与 Markdown 相关的扩展进行安装（程序会根据您的操作系统选择对应的扩展进行安装）。  
![扩展安装图示](/01_ide-cpp/01/1.jpg)
5. 使用相同的方法安装其他扩展。

#### 设置图标主题
1. 选择 `Material Icon Theme`。
2. 进入 `Set File Icon Theme`。
3. 选择对应的图标。  
![图标选择](/02_ide-java/01/3.jpg)

### 1.4 使用 Developer Tools 检查错误
通过 `Ctrl+Shift+P` 打开命令面板并选择 `Developer: Toggle Developer Tools` 进行错误检查。

### 1.5 Markdown 编写测试
现在，您已经准备好编写和预览Markdown文件了。

## 2. MacOS 安装流程
请参考上述 Windows 的安装流程。

## 3. ide-markdown 扩展介绍

### Markdown 支持
- **Markdown Preview Enhanced**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

- **Markdown All in One**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

### 主题支持
- **Material Icon Theme**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
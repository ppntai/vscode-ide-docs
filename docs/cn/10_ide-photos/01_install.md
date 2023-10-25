# ide-photo 安装指南
## 1. Windows 安装流程

### 1.1 下载文件
前往 [Github Release 页面](https://github.com/ppntai/vscode-ide/releases/) 下载以下两个文件：
- `vs-code-ide-photo-win32-x64.exe`
- `ide-photo-extensions.zip`

### 1.2 安装 ide-photo
- 双击 `vs-code-ide-photo-win32-x64.exe` 文件进行安装。
- 安装完成后，您应能看到如下图标：  
![IDE Photo 图标](/10_ide-photos/01_install_files/2.jpg)

### 1.3 扩展安装

#### 扩展文件列表
解压 `ide-photo-extensions.zip` 后，您将看到以下扩展：
```
PKief.material-icon-theme-4.28.0.vsix
```

#### 安装扩展
1. 启动 ide-photo。
2. 进入 Extensions。
3. 选择 `...` → `Install From VSIX`。
4. 选择上述的扩展进行安装。  
![扩展安装图示](/01_ide-cpp/01/1.jpg)

#### 设置图标主题
1. 选择 `Material Icon Theme`。
2. 进入 `Set File Icon Theme`。
3. 选择对应的图标。  
![图标选择](/02_ide-java/01/3.jpg)

### 1.4 使用 Developer Tools 检查错误
通过 `Ctrl+Shift+P` 打开命令面板并选择 `Developer: Toggle Developer Tools` 进行错误检查。

### 1.5 图片预览测试
现在，您可以轻松预览图片文件。单击以预览文件，双击以打开文件。  
![图片预览测试](/10_ide-photos/01_install_files/1.jpg)

## 2. MacOS 安装流程
请参考上述 Windows 的安装流程。

## 3. ide-photo 扩展介绍

### 3.1 主题与图标
- **Material Icon Theme**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
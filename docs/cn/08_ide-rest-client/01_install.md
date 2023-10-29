# ide-rest-client 安装指南

## 1. Windows 安装流程

### 1.1 下载文件
前往 [Github Release 页面](https://github.com/ppntai/vscode-ide/releases/)，下载以下两个文件：
- `VSCode-ide-rest-client-win32-x64.zip`
- `ide-rest-client-extensions.zip`

### 1.2 安装 ide-rest-client
- 解压下载的ZIP文件。
- 双击 `ide-rest-client.exe` 文件进行启动。
- 启动后的图标如下：  
![IDE REST Client 图标](/vscode-ide-docs/08_ide-rest-client/01_install_files/2.jpg)

### 1.3 扩展安装

#### 扩展文件列表
解压 `ide-rest-client-extensions.zip` 后，您将看到以下扩展：
```
├── humao.rest-client-0.25.1.vsix
```

#### 安装扩展
1. 启动 ide-rest-client。
2. 进入 Extensions。
3. 选择 `...` → `Install From VSIX`。
4. 选择 REST Client 扩展进行安装。  
![扩展安装图示](/vscode-ide-docs/01_ide-cpp/01/1.jpg)

#### 设置图标主题
1. 选择 `Material Icon Theme`。
2. 进入 `Set File Icon Theme`。
3. 选择对应的图标。  
![图标选择](/vscode-ide-docs/02_ide-java/01/3.jpg)

### 1.4 使用 Developer Tools 检查错误
通过 `Ctrl+Shift+P` 打开命令面板并选择 `Developer: Toggle Developer Tools` 进行错误检查。

### 1.5 REST Client 编写测试
现在，您已经准备好编写和发送HTTP请求了。创建一个新文件并保存为 `.http` 扩展名，如 `request.http`。  
![REST Client 测试](/vscode-ide-docs/08_ide-rest-client/01_install_files/1.jpg)

## 2. MacOS 安装流程
请参考上述 Windows 的安装流程。

## 3. ide-rest-client 扩展介绍

### REST Client 支持
- **REST Client**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
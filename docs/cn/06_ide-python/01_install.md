# ide-python 安装指南

## 1. Windows 安装流程

### 1.1 下载文件
前往 [Github Release 页面](https://github.com/ppntai/vscode-ide/releases/)，请下载以下两个文件：
- `VSCode-ide-python-win32-x64.zip`
- `ide-python-extensions.zip`

### 1.2 安装 ide-python
- 解压并双击 `ide-python.exe` 文件进行启动。
- 启动后的图标如下：  
![IDE Python 安装图标](/vscode-ide-docs/06_ide-python/01_install_files/2.jpg)

### 1.3 扩展安装

#### 扩展文件列表
解压 `ide-python-extensions.zip` 后，您将看到以下扩展：
```
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

#### 安装扩展
1. 启动 ide-python。
2. 进入 Extensions。
3. 选择 `...` → `Install From VSIX`。
4. 选择所有与 Python 相关的扩展进行安装（程序会根据您的操作系统选择对应的扩展进行安装）。  
![安装图示](/vscode-ide-docs/01_ide-cpp/01/1.jpg)
5. 使用相同的方法安装其他扩展。

#### 设置图标主题
1. 选择 `Material Icon Theme`。
2. 进入 `Set File Icon Theme`。
3. 选择对应的图标。  
![图标选择](/vscode-ide-docs/02_ide-java/01/3.jpg)

### 1.4 配置 ide-python

#### 编辑配置文件
打开文件 `C:\Users\Administrator\.vside-python\argv.json`，并添加以下内容：
```
"enable-proposed-api":["ms-python.python", "ms-toolsai.jupyter", "ms-toolsai.jupyter-renderers", "ms-vscode-remote.remote-containers", "ms-vscode-remote.remote-ssh", "ms-vscode-remote.remote-wsl", "ms-vscode.remote-server"]
```

#### 完整的配置文件内容
```
{
	"enable-crash-reporter": true,
	"crash-reporter-id": "8fdd6ad5-9fab-45d3-8276-94ce641322c7",
	"enable-proposed-api": ["ms-python.python", "ms-toolsai.jupyter", "ms-toolsai.jupyter-renderers", "ms-vscode-remote.remote-containers", "ms-vscode-remote.remote-ssh", "ms-vscode-remote.remote-wsl", "ms-vscode.remote-server"]
}
```

### 1.5 使用 Developer Tools 检查错误
选择 `Developer: Toggle Developer Tools`。

### 1.6 代码测试
确保您已经安装了 Python 开发环境。

编写以下 Python 代码并执行：
```python
print("Hello world!")
```
代码执行结果：  
![代码运行结果](/vscode-ide-docs/06_ide-python/01_install_files/1.jpg)

## 2. MacOS 安装流程
请参考上述 Windows 的安装流程。

## 3. ide-python 扩展介绍

### Python 支持
- **Python**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

- **Pylance**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)

### IntelliCode 支持
- **IntelliCode**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

### 远程开发支持
- **Remote Development**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

- **Dev Containers**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

- **Remote - Tunnels**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-server)

- **WSL**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

- **Remote - SSH**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)

### 主题支持
- **Material Icon Theme**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
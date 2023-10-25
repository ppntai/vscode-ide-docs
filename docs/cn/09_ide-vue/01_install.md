# ide-vue 安装指南

## 1. Windows 安装流程
### 1.1 下载文件
前往 [Github Release 页面](https://github.com/ppntai/vscode-ide/releases/)，下载以下两个文件：
- `vs-code-ide-vue-win32-x64.exe`
- `ide-vue-extensions.zip`

### 1.2 安装 ide-vue
- 双击 `vs-code-ide-vue-win32-x64.exe` 文件进行安装。
- 启动后的图标如下：  
![IDE Vue 图标](/09_ide-vue/01_install_files/2.jpg)

### 1.3 扩展安装

#### 扩展文件列表
解压 `ide-vue-extensions.zip` 后，您将看到以下扩展：
```
├── PKief.material-icon-theme-4.31.0.vsix
├── Vue.volar-1.8.16.vsix
├── alefragnani.Bookmarks-13.4.2.vsix
├── christian-kohler.npm-intellisense-1.4.5.vsix
├── esbenp.prettier-vscode-10.1.0.vsix
├── octref.vetur-0.37.3.vsix
├── sdras.night-owl-2.0.1.vsix
├── tombonnike.vscode-status-bar-format-toggle-3.2.0.vsix
├── wmaurer.vscode-jumpy-0.3.1.vsix
├── xabikos.JavaScriptSnippets-1.8.0.vsix
```

#### 安装扩展
1. 启动 ide-vue。
2. 进入 Extensions。
3. 选择 `...` → `Install From VSIX`。
4. 选择所有列出的扩展进行安装。  
![扩展安装图示](/01_ide-cpp/01/1.jpg)

#### 设置图标主题
1. 选择 `Material Icon Theme`。
2. 进入 `Set File Icon Theme`。
3. 选择对应的图标。  
![图标选择](/02_ide-java/01/3.jpg)

### 1.4 使用 Developer Tools 检查错误
通过 `Ctrl+Shift+P` 打开命令面板并选择 `Developer: Toggle Developer Tools` 进行错误检查。

### 1.5 Vue 代码编写测试
现在，您可以开始编写 Vue 代码并享受强大的 IDE 功能。  
![Vue 代码测试](/09_ide-vue/01_install_files/1.jpg)

## 2. MacOS 安装流程
请参考上述 Windows 的安装流程。

## 3. ide-vue 扩展介绍

### 3.1 Vue 语言与框架支持
- **Vetur**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

- **Vue Language Features (Volar)**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### 3.2 代码质量与格式化
- **Prettier - Code formatter**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- **JavaScript (ES6) code snippets**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

### 3.3 常用工具与增强功能
- **Bookmarks**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

- **npm Intellisense**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

- **Formatting Toggle**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)

- **jumpy**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=wmaurer.vscode-jumpy)

### 3.4 主题与图标
- **Material Icon Theme**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

- **Night Owl**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
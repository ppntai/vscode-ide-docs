# ide-android 安装指南
## 1. Windows 安装流程

### 1.1 下载文件
前往 [Github Release 页面](https://github.com/ppntai/vscode-ide/releases/) 下载以下两个文件：
- `VSCode-ide-andriod-win32-x64.zip`
- `ide-android-extensions.zip`

### 1.2 安装 ide-android
- 双击 `VSCode-ide-andriod-win32-x64.zip` 文件进行安装。
- 安装完成后，您应能看到如下图标：  
![IDE Android 图标](/vscode-ide-docs/12_ide-android/01_install_files/1.jpg)

### 1.3 扩展安装

#### 扩展文件列表
解压 `ide-android-extensions.zip` 后，您将看到以下扩展：
```
.
├── AntonyDalmiere.android-support-0.6.0.vsix
├── DiemasMichiels.emulate-1.6.0.vsix
├── PKief.material-icon-theme-4.31.0.vsix
├── VisualStudioExptTeam.vscodeintellicode-1.2.30.vsix
├── adelphes.android-dev-ext-1.3.2.vsix
├── naco-siren.gradle-language-0.2.3.vsix
├── node_modules
│   ├── .yarn-integrity
├── redhat.java
│   ├── redhat.java-1.21.2023070804.vsix
│   ├── redhat.java-1.21.2023070804@darwin-arm64.vsix
│   ├── redhat.java-1.21.2023070804@darwin-x64.vsix
│   ├── redhat.java-1.21.2023070804@linux-arm64.vsix
│   ├── redhat.java-1.21.2023070804@linux-x64.vsix
├── richardwillis.vscode-gradle-extension-pack-0.0.4.vsix
├── vscjava.vscode-gradle-3.13.2023101809.vsi
```

#### 安装扩展
1. 启动 ide-android。
2. 进入 Extensions。
3. 选择 `...` → `Install From VSIX`。
4. 选择上述的扩展进行安装。  
![扩展安装图示](/vscode-ide-docs/01_ide-cpp/01/1.jpg)

#### 设置图标主题
1. 选择 `Material Icon Theme`。
2. 进入 `Set File Icon Theme`。
3. 选择对应的图标。  
![图标选择](/vscode-ide-docs/02_ide-java/01/3.jpg)

### 1.4 使用 Developer Tools 检查错误
通过 `Ctrl+Shift+P` 打开命令面板并选择 `Developer: Toggle Developer Tools` 进行错误检查。

### 1.5 代码测试
当前版本的 IDE-android 主要用于浏览 Android 代码和命令行调试，并不直接支持编写代码测试。

## 2. MacOS 安装流程
请参考上述 Windows 的安装流程。

## 3. ide-android 扩展介绍

- **Language Support for Java™ by Red Hat**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=redhat.java)

- **Android**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=adelphes.android-dev-ext)

- **Android iOS Emulator**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=DiemasMichiels.emulate)

- **Android Full Support**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=AntonyDalmiere.android-support)

- **Gradle Extension Pack**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=richardwillis.vscode-gradle-extension-pack)

- **Gradle for Java**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle)

- **Gradle Language Support**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=naco-siren.gradle-language)
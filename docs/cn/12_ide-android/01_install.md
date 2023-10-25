# ide-android 安装
## Windows 安装
### 下载
https://github.com/ppntai/vscode-ide/releases/
下载两个文件,分别是
- VSCode-ide-andriod-win32-x64.zip
- ide-android-extensions.zip


### 安装 ide-android
双击安装,安装完成后的图标如下  
![1](/12_ide-android/01_install_files/1.jpg)

### 安装扩展
解压ide-android-extensions.zip,解压后的扩展如下
```
.
├── AntonyDalmiere.android-support-0.6.0.vsix
├── DiemasMichiels.emulate-1.6.0.vsix
├── PKief.material-icon-theme-4.31.0.vsix
├── VisualStudioExptTeam.vscodeintellicode-1.2.30.vsix
├── adelphes.android-dev-ext-1.3.2.vsix
├── naco-siren.gradle-language-0.2.3.vsix
├── redhat.java
│   ├── redhat.java-1.21.2023070804.vsix
│   ├── redhat.java-1.21.2023070804@darwin-arm64.vsix
│   ├── redhat.java-1.21.2023070804@darwin-x64.vsix
│   ├── redhat.java-1.21.2023070804@linux-arm64.vsix
│   ├── redhat.java-1.21.2023070804@linux-x64.vsix
├── richardwillis.vscode-gradle-extension-pack-0.0.4.vsix
├── vscjava.vscode-gradle-3.13.2023101809.vsix
```
安装扩展
启动ide-android-->Extensions-->...-->Install From VSIX-->选择所有的扩展,它会根据当前的操作系统选择对应的扩展安装
![1](/01_ide-cpp/01/1.jpg)

安装其他扩展
过程和上面相似,选择其他的所有扩展进行安装


设置图标
选择Material Icon Theme-->Set File Icon Theme-->选择它的图标
![](/02_ide-java/01/3.jpg)


使用Developer Tools检查其他错误  
Ctrl+Shift+P-->Developer: Toggle Developer Tools

### 编写代码测试zan
暂不支持,目前仅用于浏览代码,和命令行调试



## McOS安装
参考上面的安装过程

## ide-android Extension

```
Name: Language Support for Java(TM) by Red Hat
Id: redhat.java
Description: Java Linting, Intellisense, formatting, refactoring, Maven/Gradle support and more...
Version: 1.23.0
Publisher: Red Hat
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=redhat.java
```

```
Name: Android
Id: adelphes.android-dev-ext
Description: Android debugging support for VS Code
Version: 1.3.2
Publisher: adelphes
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=adelphes.android-dev-ext
```

```
Name: Android iOS Emulator
Id: DiemasMichiels.emulate
Description: Run Android emulator and iOS simulator easily from VScode!
Version: 1.6.0
Publisher: Diemas Michiels
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=DiemasMichiels.emulate
```

```
Name: Android Full Support
Id: AntonyDalmiere.android-support
Description: Provide building, linting, syntax highlighting,run,autocomplete,symbol hover,go to implementation and more for Android native development.
Version: 0.6.0
Publisher: Antony
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=AntonyDalmiere.android-support
```

```
Name: Gradle Extension Pack
Id: richardwillis.vscode-gradle-extension-pack
Description: Useful Gradle extensions
Version: 0.0.4
Publisher: Richard Willis
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=richardwillis.vscode-gradle-extension-pack
```

```
Name: Gradle for Java
Id: vscjava.vscode-gradle
Description: Manage Gradle Projects, run Gradle tasks and provide better Gradle file authoring experience in VS Code
Version: 3.13.0
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle
```

```
Name: Gradle Language Support
Id: naco-siren.gradle-language
Description: Add Gradle language support for Visual Studio Code
Version: 0.2.3
Publisher: Naco Siren
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=naco-siren.gradle-language
```
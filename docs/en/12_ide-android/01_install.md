# ide-android Installation Guide
## 1. Windows Installation Procedure

### 1.1 Download Files
Visit the [Github Release Page](https://github.com/ppntai/vscode-ide/releases/) and download the following two files:
- `VSCode-ide-andriod-win32-x64.zip`
- `ide-android-extensions.zip`

### 1.2 Install ide-android
- Double-click on the `VSCode-ide-andriod-win32-x64.zip` file to install.
- After installation, you should see the following icon:  
![IDE Android Icon](/12_ide-android/01_install_files/1.jpg)

### 1.3 Install Extensions

#### List of Extension Files
After unzipping `ide-android-extensions.zip`, you will see the following extensions:
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

#### Install Extensions
1. Launch ide-android.
2. Navigate to Extensions.
3. Select `...` → `Install From VSIX`.
4. Install the aforementioned extensions.  
![Extensions Installation Guide](/01_ide-cpp/01/1.jpg)

#### Set Icon Theme
1. Choose `Material Icon Theme`.
2. Navigate to `Set File Icon Theme`.
3. Select the corresponding icon.  
![Icon Selection](/02_ide-java/01/3.jpg)

### 1.4 Use Developer Tools to Check Errors
Open the command palette with `Ctrl+Shift+P` and select `Developer: Toggle Developer Tools` to check for errors.

### 1.5 Code Testing
The current version of IDE-android is mainly used for browsing Android code and command-line debugging and does not directly support code writing tests.

## 2. MacOS Installation Procedure
Please refer to the Windows installation procedure described above.

## 3. ide-android Extension Overview

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
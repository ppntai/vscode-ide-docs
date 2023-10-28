# ide-markdown Installation Guide

## 1. Windows Installation Procedure

### 1.1 Download Files
Visit the [Github Release Page](https://github.com/ppntai/vscode-ide/releases/) and download the following two files:
- `VSCode-ide-markdown-win32-x64.zip`
- `ide-markdown-extensions.zip`

### 1.2 Install ide-markdown
- Unzip the downloaded ZIP file.
- Double-click on the `ide-markdown.exe` file to launch.
- The icon after launching is shown below:  
![IDE Markdown Icon](/07_ide-markdown/01_install_files/1.jpg)

### 1.3 Install Extensions

#### List of Extension Files
After unzipping `ide-markdown-extensions.zip`, you will see the following extensions:
```
├── PKief.material-icon-theme-4.28.0.vsix
├── shd101wyy.markdown-preview-enhanced-0.7.10.vsix
├── yzhang.markdown-all-in-one-3.5.1.vsix
```

#### Install Extensions
1. Launch ide-markdown.
2. Navigate to Extensions.
3. Select `...` → `Install From VSIX`.
4. Install all extensions related to Markdown (the software will automatically select the appropriate extensions based on your operating system).  
![Extensions Installation Guide](/01_ide-cpp/01/1.jpg)
5. Install other extensions using the same method.

#### Set Icon Theme
1. Choose `Material Icon Theme`.
2. Navigate to `Set File Icon Theme`.
3. Select the corresponding icon.  
![Icon Selection](/02_ide-java/01/3.jpg)

### 1.4 Use Developer Tools to Check Errors
Open the command palette with `Ctrl+Shift+P` and select `Developer: Toggle Developer Tools` to check for errors.

### 1.5 Markdown Writing Test
Now, you're ready to write and preview Markdown files.

## 2. MacOS Installation Procedure
Please refer to the above Windows installation procedure.

## 3. ide-markdown Extension Overview

### Markdown Support
- **Markdown Preview Enhanced**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

- **Markdown All in One**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

### Theme Support
- **Material Icon Theme**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
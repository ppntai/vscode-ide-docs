# ide-rest-client Installation Guide

## 1. Windows Installation Procedure

### 1.1 Download Files
Visit the [Github Release Page](https://github.com/ppntai/vscode-ide/releases/) and download the following two files:
- `VSCode-ide-rest-client-win32-x64.zip`
- `ide-rest-client-extensions.zip`

### 1.2 Install ide-rest-client
- Unzip the downloaded ZIP file.
- Double-click on the `ide-rest-client.exe` file to launch.
- The icon after launching is shown below:  
![IDE REST Client Icon](/08_ide-rest-client/01_install_files/2.jpg)

### 1.3 Install Extensions

#### List of Extension Files
After unzipping `ide-rest-client-extensions.zip`, you will see the following extension:
```
├── humao.rest-client-0.25.1.vsix
```

#### Install Extensions
1. Launch ide-rest-client.
2. Navigate to Extensions.
3. Select `...` → `Install From VSIX`.
4. Install the REST Client extension.  
![Extensions Installation Guide](/01_ide-cpp/01/1.jpg)

#### Set Icon Theme
1. Choose `Material Icon Theme`.
2. Navigate to `Set File Icon Theme`.
3. Select the corresponding icon.  
![Icon Selection](/02_ide-java/01/3.jpg)

### 1.4 Use Developer Tools to Check Errors
Open the command palette with `Ctrl+Shift+P` and select `Developer: Toggle Developer Tools` to check for errors.

### 1.5 REST Client Writing Test
Now, you're ready to write and send HTTP requests. Create a new file and save it with the `.http` extension, like `request.http`.  
![REST Client Test](/08_ide-rest-client/01_install_files/1.jpg)

## 2. MacOS Installation Procedure
Please refer to the above Windows installation procedure.

## 3. ide-rest-client Extension Overview

### REST Client Support
- **REST Client**  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
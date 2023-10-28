# ide-go Installation Guide

## 1. Windows Installation Procedure

### 1.1 Download Files
Go to the [Github Release Page](https://github.com/ppntai/vscode-ide/releases/) and download the following two files:
- `vscode-ide-go-win32-x64.exe`
- `ide-go-extensions.zip`

### 1.2 Install ide-go
- Unzip the `vscode-ide-go-win32-x64.zip` file and run the installer inside.
- The icon after installation will appear as follows:  
![IDE Go Installation Icon](/04_ide-go/01_install_files/1.jpg)

### 1.3 Extension Installation

#### List of Extension Files
After unzipping the `ide-go-extensions.zip`, you will see the following extensions:
```
├── PKief.material-icon-theme-4.28.0.vsix
├── formulahendry.code-runner-0.12.0.vsix
├── golang.Go-0.39.1.vsix
```

#### Install Extensions
1. Launch ide-go.
2. Go to Extensions.
3. Choose `...` → `Install From VSIX`.
4. Select all the extensions for installation.  
![Installation Guide](/01_ide-cpp/01/1.jpg)

#### Set Icon Theme
1. Choose `Material Icon Theme`.
2. Navigate to `Set File Icon Theme`.
3. Select the corresponding icon.  
![Icon Selection](/02_ide-java/01/3.jpg)

### 1.4 Use Developer Tools to Check for Errors
Choose `Developer: Toggle Developer Tools`.

### 1.5 Code Testing
Ensure that you have the Go development environment installed.

Write and execute the following Go code:
```go
package main

import (
	"fmt"
)

func main() {
	fmt.Print("hello, world\n")
}
```
Code execution result:  
![Code Execution Result](/04_ide-go/01_install_files/2.jpg)

## 2. MacOS Installation Procedure
Please refer to the above Windows installation procedure.

## 3. ide-go Extension Introduction
### Go Support
- **Go**  
  Publisher: Go Team at Google  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=golang.Go)

### Theme Support
- **Material Icon Theme**  
  Publisher: Philipp Kief  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)  
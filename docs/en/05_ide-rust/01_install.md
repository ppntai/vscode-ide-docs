# ide-rust Installation Guide

## 1. Windows Installation Procedure

### 1.1 Download Files
Please visit the [Github Release Page](https://github.com/ppntai/vscode-ide/releases/tag/ide-rust-v1.0.0) and download the following two files:
- `vs-code-ide-rust-win32-x64.exe`
- `ide-rust-extensions.zip`

### 1.2 Install ide-rust
- Double-click on the `vs-code-ide-rust-win32-x64.exe` file to initiate installation.
- The icon after the installation is shown below:  
![IDE Rust Installation Icon](/05_ide-rust/01_install_files/1.jpg)

### 1.3 Install Extensions

#### List of Extension Files
After unzipping the `ide-rust-extensions.zip`, you will see the following extensions:
```
├── rust-lang.rust
│   ├── rust-lang.rust-analyzer-0.4.1592@alpine-x64.vsix
│   ├── rust-lang.rust-analyzer-0.4.1592@darwin-arm64.vsix
│   ├── rust-lang.rust-analyzer-0.4.1592@darwin-x64.vsix
│   ├── rust-lang.rust-analyzer-0.4.1592@linux-arm64.vsix
│   ├── rust-lang.rust-analyzer-0.4.1592@linux-armhf.vsix
│   ├── rust-lang.rust-analyzer-0.4.1592@linux-x64.vsix
│   ├── rust-lang.rust-analyzer-0.4.1592@win32-arm64.vsix
│   ├── rust-lang.rust-analyzer-0.4.1592@win32-ia32.vsix
│   ├── rust-lang.rust-analyzer-0.4.1592@win32-x64.vsix
├── PKief.material-icon-theme-4.28.0.vsix
├── bungcip.better-toml-0.3.2.vsix
├── formulahendry.code-runner-0.12.0.vsix
├── serayuzgur.crates-0.6.0.vsix
├── swellaby.rust-pack-0.3.3.vsix
```

#### Install Extensions
1. Start ide-rust.
2. Navigate to Extensions.
3. Select `...` → `Install From VSIX`.
4. Select all the `rust-lang.rust` extensions for installation (the program will automatically choose the corresponding extensions based on your operating system).  
![Installation Guide](/01_ide-cpp/01/1.jpg)
5. Install other extensions using the same method.

#### Set Icon Theme
1. Choose `Material Icon Theme`.
2. Navigate to `Set File Icon Theme`.
3. Select the corresponding icon.  
![Icon Selection](/02_ide-java/01/3.jpg)

### 1.4 Configure ide-rust

#### Edit Configuration File
Open the file `C:\Users\Administrator\.vside-rust\argv.json` and add the following content:
```
"enable-proposed-api":["ms-toolsai.rust"]
```

#### Complete Configuration File Content
```
{
    "enable-crash-reporter": true,
    "crash-reporter-id": "f05d1a0c-6fc9-45ee-b8fc-c222c8bd2bff",
    "enable-proposed-api":["ms-toolsai.rust"]
}
```

### 1.5 Use Developer Tools to Check Errors
Open the command palette with `Ctrl+Shift+P` and select `Developer: Toggle Developer Tools` to check for errors.

### 1.6 Code Testing
Ensure you have the Rust development environment installed.

Write and execute the following Rust code:
```rust
fn main(){
    println!("Hello World")
}
```
Code execution result:  
![Code Execution Result](/01_install_files/2.jpg)

## 2. MacOS Installation Procedure
Please refer to the above Windows installation procedure.

## 3. ide-rust Extension Overview

Name: Rust Extension Pack  
Id: swellaby.rust-pack  
Description: Extension Pack for Rust  
Version: 0.3.3  
Publisher: Swellaby  
[VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=swellaby.rust-pack) 

Name: rust-analyzer  
Id: rust-lang.rust-analyzer  
Description: Rust language support for Visual Studio Code  
Version: 0.4.1592  
Publisher: rust-lang  

Name: crates  
Id: serayuzgur.crates  
Description: Helps Rust developers manage dependencies with Cargo.toml.  
Version: 0.6.0  
Publisher: serayuzgur  

Name: Better TOML  
Id: bungcip.better-toml  
Description: Better TOML Language support  
Version: 0.3.2  
Publisher: bungcip  

Name: Code Runner  
Id: formulahendry.code-runner  
Description: Run C, C++, Java, JS, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, CMD, BASH, F#, C#, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml, R, AppleScript, Elixir, VB.NET, Clojure, Haxe, Obj-C, Rust, Racket, Scheme, AutoHotkey, AutoIt, Kotlin, Dart, Pascal, Haskell, Nim, D, Lisp, Kit, V, SCSS, Sass, CUDA, Less, Fortran, Ring, Standard ML, Zig  
Version: 0.12.0  
Publisher: formulahendry  

Name: Material Icon Theme  
Id: PKief.material-icon-theme  
Description: Material Design Icons for Visual Studio Code  
Version: 4
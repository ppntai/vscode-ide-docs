# ide-rust 安装
## Windows 安装
### 下载
https://github.com/ppntai/vscode-ide/releases/tag/ide-rust-v1.0.0  
下载两个文件,分别是
- vs-code-ide-rust-win32-x64.exe
- ide-rust-extensions.zip


### 安装 ide-rust
双击vs-code-ide-rust-win32-x64.exe安装,安装完成后的图标如下  
![1](/01_install_files/1.jpg)

### 安装扩展
解压ide-rust-extensions.zip,解压后的扩展如下
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
安装扩展
安装 rust-lang.rust扩展
启动ide-rust-->Extensions-->...-->Install From VSIX-->选择所有的rust-lang.rust扩展,它会根据当前的操作系统选择对应的扩展安装
![1](/01_ide-cpp/01/1.jpg)

安装其他扩展
过程和上面相似,选择其他的所有扩展进行安装


设置图标
选择Material Icon Theme-->Set File Icon Theme-->选择它的图标
![](/02_ide-java/01/3.jpg)

### 配置ide-rust
编辑配置文件
```
C:\Users\Administrator\.vside-rust\argv.json
```
添加
```
"enable-proposed-api":["ms-toolsai.rust"]
```
添加后的内容如下
```
// This configuration file allows you to pass permanent command line arguments to VS Code.
// Only a subset of arguments is currently supported to reduce the likelihood of breaking
// the installation.
//
// PLEASE DO NOT CHANGE WITHOUT UNDERSTANDING THE IMPACT
//
// NOTE: Changing this file requires a restart of VS Code.
{
	// Use software rendering instead of hardware accelerated rendering.
	// This can help in cases where you see rendering issues in VS Code.
	// "disable-hardware-acceleration": true,

	// Allows to disable crash reporting.
	// Should restart the app if the value is changed.
	"enable-crash-reporter": true,

	// Unique id used for correlating crash reports sent from this instance.
	// Do not edit this value.
	"crash-reporter-id": "f05d1a0c-6fc9-45ee-b8fc-c222c8bd2bff",
	"enable-proposed-api":["ms-toolsai.rust"]
}
```

使用Developer Tools检查其他错误  
Ctrl+Shift+P-->Developer: Toggle Developer Tools
![3](/01_install_files/3.jpg)
### 编写代码测试
前提是已经安装了rust环境
```
fn main(){
    println!("Hello World")
}
```

```
[Running] cd "f:\code\rust\rust-study\rust-basic-study\rust-hello-world\" && rustc hello_world.rs && "f:\code\rust\rust-study\rust-basic-study\rust-hello-world\"hello_world
Hello World
```
![2](/01_install_files/2.jpg)


## McOS安装
参考上面的安装过程

## ide-rust Extension
#### rust Support
Name: Rust Extension Pack  
Id: swellaby.rust-pack  
Description: Extension Pack for Rust  
Version: 0.3.3  
Publisher: Swellaby  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=swellaby.rust-pack 

Name: rust-analyzer  
Id: rust-lang.rust-analyzer  
Description: Rust language support for Visual Studio Code  
Version: 0.4.1592  
Publisher: rust-lang  

Name: crates  
Id: serayuzgur.crates  
Description: Helps Rust developers managing dependencies with Cargo.toml.  
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
Version: 4.28.0  
Publisher: PKief  
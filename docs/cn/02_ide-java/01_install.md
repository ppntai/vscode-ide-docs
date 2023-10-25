# ide-java 安装指南

## 1. Windows 安装流程

### 1.1 下载链接
前往 [Github Release 页面](https://github.com/ppntai/vscode-ide/releases/tag/) 下载以下两个文件：
- `vscode-ide-java-win32-x64.exe`
- `ide-java-extensions.zip`

### 1.2 安装 ide-java
- 双击 `vscode-ide-java-win32-x64.exe` 文件进行安装。
- 安装完成后的图标如下：  
![IDE Java 安装图标](/02_ide-java/01/1.jpg)

### 1.3 扩展安装

#### 扩展文件列表
解压 `ide-java-extensions.zip` 后，您将看到以下扩展：
```
├── redhat.java
│   ├── redhat.java-1.21.2023070804.vsix
│   ├── redhat.java-1.21.2023070804@darwin-arm64.vsix
│   ├── redhat.java-1.21.2023070804@darwin-x64.vsix
│   ├── redhat.java-1.21.2023070804@linux-arm64.vsix
│   ├── redhat.java-1.21.2023070804@linux-x64.vsix
├── redhat.vscode-xml
│   ├── redhat.vscode-xml-0.25.2023062304.vsix
│   ├── redhat.vscode-xml-0.25.2023062304@darwin-arm64.vsix
│   ├── redhat.vscode-xml-0.25.2023062304@darwin-x64.vsix
│   ├── redhat.vscode-xml-0.25.2023062304@linux-x64.vsix
│   ├── redhat.vscode-xml-0.25.2023062304@win32-x64.vsix
├── PKief.material-icon-theme-4.28.0.vsix
├── VisualStudioExptTeam.vscodeintellicode-1.2.30.vsix
├── ms-vscode-remote.remote-containers-0.300.0.vsix
├── ms-vscode-remote.remote-ssh-0.103.2023062115.vsix
├── ms-vscode-remote.remote-wsl-0.80.2.vsix
├── ms-vscode-remote.vscode-remote-extensionpack-0.24.0.vsix
├── ms-vscode.remote-server-1.3.2023070609.vsix
├── naco-siren.gradle-language-0.2.3.vsix
├── redhat.vscode-yaml-1.13.0.vsix
├── richardwillis.vscode-gradle-extension-pack-0.0.4.vsix
├── vmware.vscode-boot-dev-pack-0.2.1.vsix
├── vmware.vscode-spring-boot-1.48.2023070804.vsix
├── vscjava.vscode-gradle-3.12.2023070100.vsix
├── vscjava.vscode-java-debug-0.52.2023063003.vsix
├── vscjava.vscode-java-dependency-0.23.2023060200.vsix
├── vscjava.vscode-java-pack-0.25.2023062906.vsix
├── vscjava.vscode-java-test-0.39.0.vsix
├── vscjava.vscode-lombok-1.1.0.vsix
├── vscjava.vscode-maven-0.41.2023042103.vsix
├── vscjava.vscode-spring-boot-dashboard-0.13.2023070100.vsix
├── vscjava.vscode-spring-initializr-0.11.2023070103.vsix
```

#### 安装 `redhat.java` 扩展
1. 启动 ide-java。
2. 进入 Extensions。
3. 选择 `...` → `Install From VSIX`。
4. 选择所有的 `redhat.java` 扩展。系统会根据您的操作系统自动选择对应的扩展进行安装。  
![安装图示](/01_ide-cpp/01/1.jpg)

#### 安装其他扩展
- 对于 `redhat.vscode-xml` 和其他扩展，安装过程与上述类似。

#### 设置图标
1. 选择 `Material Icon Theme`。
2. 进入 `Set File Icon Theme`。
3. 选择对应的图标。  
![图标选择](/02_ide-java/01/3.jpg)

### 1.4 ide-java 配置
- 打开配置文件 `C:\Users\Administrator\.vside-python\argv.json`。
- 添加以下内容：
```
"enable-proposed-api":["ms-vscode-remote.remote-containers","ms-vscode-remote.remote-ssh","ms-vscode-remote.remote-wsl","ms-vscode.remote-server"]
```
配置文件完整内容如下：
```
{
    "disable-hardware-acceleration": false,
    "enable-crash-reporter": true,
    "crash-reporter-id": "f52a60d6-a354-4274-9f22-bd2502c54da9",
    "enable-proposed-api":["ms-vscode-remote.remote-containers","ms-vscode-remote.remote-ssh","ms-vscode-remote.remote-wsl","ms-vscode.remote-server"]
}
```

### 1.5 代码测试
确保您已经安装了 Java 开发环境。

#### Java 示例代码
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello world");
        String javaVersion = System.getProperty("java.version");
        System.out.println(javaVersion);
    }
}
```

代码运行输出：
```
Hello world
17.0.4.1
```
![代码运行结果](/02_ide-java/01/2.jpg)

## McOS安装
参考上面的安装过程
## ide-java Extension
#### java support
Name: Extension Pack for Java  
Id: vscjava.vscode-java-pack  
Description: Popular extensions for Java development that provides Java IntelliSense, debugging, testing, Maven/Gradle support, project management and more  
Version: 0.25.12  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack  

Name: Language Support for Java(TM) by Red Hat  
Id: redhat.java  
Description: Java Linting, Intellisense, formatting, refactoring, Maven/Gradle support and more...  
Version: 1.20.0  
Publisher: Red Hat  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=redhat.java  

Name: Debugger for Java  
Id: vscjava.vscode-java-debug  
Description: A lightweight Java debugger for Visual Studio Code  
Version: 0.52.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug  

Name: Test Runner for Java  
Id: vscjava.vscode-java-test  
Description: Run and debug JUnit or TestNG test cases.  
Version: 0.39.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test  

Name: Maven for Java  
Id: vscjava.vscode-maven  
Description: Manage Maven projects, execute goals, generate project from archetype, improve user experience for Java developers.  
Version: 0.41.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven  

Name: Project Manager for Java  
Id: vscjava.vscode-java-dependency  
Description: Manage Java projects in Visual Studio Code  
Version: 0.23.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency  

Name: IntelliCode  
Id: VisualStudioExptTeam.vscodeintellicode  
Description: AI-assisted development  
Version: 1.2.30  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode  

#### xml support
Name: XML  
Id: redhat.vscode-xml  
Description: XML Language Support by Red Hat  
Version: 0.25.0  
Publisher: Red Hat  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml  

spring-boot support  
Name: Spring Boot Extension Pack  
Id: vmware.vscode-boot-dev-pack  
Description: A collection of extensions for developing Spring Boot applications  
Version: 0.2.1  
Publisher: VMware  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack  

Name: Spring Boot Tools  
Id: vmware.vscode-spring-boot  
Description: Provides validation and content assist for Spring Boot `application.properties`, `application.yml` properties files. As well as Boot-specific support for `.java` files.  
Version: 1.47.0  
Publisher: VMware  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot  

Name: Spring Initializr Java Support  
Id: vscjava.vscode-spring-initializr  
Description: A lightweight extension based on Spring Initializr to generate quick start Spring Boot Java projects.  
Version: 0.11.2  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-initializr  

Name: Spring Boot Dashboard  
Id: vscjava.vscode-spring-boot-dashboard  
Description: Spring Boot Dashboard for VS Code  
Version: 0.13.1  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-spring-boot-dashboard  

#### lombok supprt  
Name: Lombok Annotations Support for VS Code  
Id: vscjava.vscode-lombok  
Description: Refactor code with Lombok annotations, or remove Lombok annotations with actual methods.  
Version: 1.1.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-lombok  

#### yaml suport  
Name: YAML  
Id: redhat.vscode-yaml  
Description: YAML Language Support by Red Hat, with built-in Kubernetes syntax support  
Version: 1.13.0  
Publisher: Red Hat  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml  

#### gradle support  
Name: Gradle Extension Pack  
Id: richardwillis.vscode-gradle-extension-pack  
Description: Useful Gradle extensions  
Version: 0.0.4  
Publisher: Richard Willis  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=richardwillis.vscode-gradle-extension-pack  

Name: Gradle for Java  
Id: vscjava.vscode-gradle  
Description: Manage Gradle Projects, run Gradle tasks and provide better Gradle file authoring experience in VS Code  
Version: 3.12.7  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle  

Name: Gradle Language Support  
Id: naco-siren.gradle-language  
Description: Add Gradle language support for Visual Studio Code  
Version: 0.2.3  
Publisher: Naco Siren  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=naco-siren.gradle-language  

##### remote development support  
Name: Remote Development  
Id: ms-vscode-remote.vscode-remote-extensionpack  
Description: An extension pack that lets you open any folder in a container, on a remote machine, or in WSL and take advantage of VS Code's full feature set.
Version: 0.24.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack  


Name: Dev Containers  
Id: ms-vscode-remote.remote-containers  
Description: Open any folder or repository inside a Docker container and take advantage of Visual Studio Code's full feature set.  
Version: 0.299.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers  

Name: Remote - Tunnels  
Id: ms-vscode.remote-server  
Description: Connect to a remote machine through a Tunnel  
Version: 1.2.1  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-server  

Name: WSL  
Id: ms-vscode-remote.remote-wsl  
Description: Open any folder in the Windows Subsystem for Linux (WSL) and take advantage of Visual Studio Code's full feature set.  
Version: 0.80.2  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl  

Name: Remote - SSH  
Id: ms-vscode-remote.remote-ssh  
Description: Open any folder on a remote machine using SSH and take advantage of VS Code's full feature set.  
Version: 0.102.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh  

#### lombok support
Name: Lombok Annotations Support for VS Code  
Id: vscjava.vscode-lombok  
Description: Refactor code with Lombok annotations, or remove Lombok annotations with   actual methods.  
Version: 1.1.0  
Publisher: Microsoft  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-lombok  

#### Theme support
Name: Material Icon Theme  
Id: PKief.material-icon-theme  
Description: Material Design Icons for Visual Studio Code  
Version: 4.28.0  
Publisher: Philipp Kief  
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme  
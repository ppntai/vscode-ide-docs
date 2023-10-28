# ide-java Installation Guide

## 1. Windows Installation Process

### 1.1 Download Link
Visit the [Github Release Page](https://github.com/ppntai/vscode-ide/releases/tag/) and download the following two files:
- `vscode-ide-java-win32-x64.exe`
- `ide-java-extensions.zip`

### 1.2 Install ide-java
- Double-click the `vscode-ide-java-win32-x64.exe` file to begin the installation.
- The icon after the installation will look like this:  
![IDE Java Installation Icon](/02_ide-java/01/1.jpg)

### 1.3 Extension Installation

#### List of Extension Files
After extracting the `ide-java-extensions.zip`, you will find the following extensions:

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

#### Installing the `redhat.java` Extension
1. Launch ide-java.
2. Navigate to Extensions.
3. Select `...` → `Install From VSIX`.
4. Choose all the `redhat.java` extensions. The system will automatically select the appropriate extension for installation based on your OS.  
![Installation Guide](/01_ide-cpp/01/1.jpg)

#### Installing Other Extensions
- For `redhat.vscode-xml` and other extensions, the installation process is the same as described above.

#### Setting Icons
1. Choose `Material Icon Theme`.
2. Navigate to `Set File Icon Theme`.
3. Select the desired icon.  
![Icon Selection](/02_ide-java/01/3.jpg)

### 1.4 ide-java Configuration
- Open the configuration file located at `C:\Users\Administrator\.vside-python\argv.json`.
- Insert the following content:

```
"enable-proposed-api": ["ms-vscode-remote.remote-containers", "ms-vscode-remote.remote-ssh", "ms-vscode-remote.remote-wsl", "ms-vscode.remote-server"]
```

The entire content of the configuration file is:

```
{
    "disable-hardware-acceleration": false,
    "enable-crash-reporter": true,
    "crash-reporter-id": "f52a60d6-a354-4274-9f22-bd2502c54da9",
    "enable-proposed-api": ["ms-vscode-remote.remote-containers", "ms-vscode-remote.remote-ssh", "ms-vscode-remote.remote-wsl", "ms-vscode.remote-server"]
}
```

### 1.5 Code Testing
Ensure you have the Java development environment installed.

#### Java Sample Code

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello world");
        String javaVersion = System.getProperty("java.version");
        System.out.println(javaVersion);
    }
}
```

Output of the code execution:

```
Hello world
17.0.4.1
```

![Code Execution Result](/02_ide-java/01/2.jpg)

## McOS Installation
Please refer to the above installation process.

## ide-java Extension
### Java Support
- **Extension Pack for Java**  
  Publisher: Microsoft  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
  
- **Language Support for Java(TM) by Red Hat**  
  Publisher: Red Hat  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=redhat.java)
  
### XML Support
- **XML**  
  Publisher: Red Hat  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml)

### Spring Boot Support
- **Spring Boot Extension Pack**  
  Publisher: VMware  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)

### Lombok Support
- **Lombok Annotations Support for VS Code**  
  Publisher: Microsoft  


  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-lombok)

### Remote Development Support
- **Remote Development**  
  Publisher: Microsoft  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

### Theme Support
- **Material Icon Theme**  
  Publisher: Philipp Kief  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
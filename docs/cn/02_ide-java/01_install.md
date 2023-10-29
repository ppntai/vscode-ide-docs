# ide-java 安装指南

## 1. Windows 安装流程

### 1.1 下载链接
前往 [Github Release 页面](https://github.com/ppntai/vscode-ide/releases/tag/) 下载以下两个文件：
- `vscode-ide-java-win32-x64.exe`
- `ide-java-extensions.zip`

### 1.2 安装 ide-java
- 双击 `vscode-ide-java-win32-x64.exe` 文件进行安装。
- 安装完成后的图标如下：  
![IDE Java 安装图标](/vscode-ide-docs/02_ide-java/01/1.jpg)

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
![安装图示](/vscode-ide-docs/01_ide-cpp/01/1.jpg)

#### 安装其他扩展
- 对于 `redhat.vscode-xml` 和其他扩展，安装过程与上述类似。

#### 设置图标
1. 选择 `Material Icon Theme`。
2. 进入 `Set File Icon Theme`。
3. 选择对应的图标。  
![图标选择](/vscode-ide-docs/02_ide-java/01/3.jpg)

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
![代码运行结果](/vscode-ide-docs/02_ide-java/01/2.jpg)

## McOS安装
参考上面的安装过程
## ide-java Extension
### Java 支持
- **Extension Pack for Java**  
  Publisher: Microsoft  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
  
- **Language Support for Java(TM) by Red Hat**  
  Publisher: Red Hat
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=redhat.java)

### XML 支持
- **XML**  
  Publisher: Red Hat  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml) 

... (其他扩展)

### Spring Boot 支持
- **Spring Boot Extension Pack**  
  Publisher: VMware  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)

... (其他扩展)

### Lombok 支持
- **Lombok Annotations Support for VS Code**  
  Publisher: Microsoft  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-lombok)

### 远程开发支持
- **Remote Development**  
  Publisher: Microsoft  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

... (其他扩展)

### 主题支持
- **Material Icon Theme**  
  Publisher: Philipp Kief  
  [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
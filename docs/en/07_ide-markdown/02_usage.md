# ide-android 使用指南

## 1. 设置粘贴图片保存位置

Visual Studio Code 提供了一个设置项 "Markdown › Copy Files: Destination"，用于定义当您在 Markdown 文件中通过拖放或粘贴插入文件时，这些文件应该被保存到的位置。

### 配置说明：

- **Markdown › Copy Files: Destination**: 此设置项定义了通过拖放或粘贴创建的文件的保存位置。
- **Glob 模式**: 允许您为特定的 Markdown 文件定义不同的目标保存路径。
- **变量**: 在定义目标路径时可以使用的一些预定义变量，如 `${documentFileName}`, `${documentDirName}`, `${fileName}` 等。

### 如何配置？

在 Visual Studio Code 的设置中，添加以下配置以设置粘贴图片的保存路径：

```json
"markdown.copyFiles.destination": {
    "**/*.md": "${documentDirName}/${documentBaseName}_files/${fileName}",
    "**/*.markdown": "${documentDirName}/${documentBaseName}_files/${fileName}"
}
```

这样，当您在名为 `CH02.md` 的文件中粘贴一个图片时，该图片将被保存在与 `CH02.md` 同级的 `CH02_files` 文件夹中，并保持其原始文件名。

## 2. 快捷键 - Markdown All in One

使用 Markdown All in One 扩展，您可以通过以下快捷键来提高您的效率：

- `Ctrl+M`: 插入内联数学公式
- `Ctrl+I`: 插入斜体
- `Ctrl+B`: 插入粗体
- `Alt+Shift+F`: 格式代码

这些快捷键提供了一个快速、直观的方式来编辑和格式化 Markdown 文档，使得撰写文档变得更加轻松。
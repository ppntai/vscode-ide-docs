# usage

## 设置粘贴图片保持位置
Visual Studio Code支持Copy Files: Destination的支持的描述

Markdown › Copy Files: Destination
Defines where files copied created by drop or paste should be created. This is a map from globs that match on the Markdown document to destinations.

The destinations may use the following variables:

${documentFileName} — The full filename of the Markdown document, for example: readme.md.
${documentBaseName} — The basename of Markdown document, for example: readme.
${documentExtName} — The extension of the Markdown document, for example: md.
${documentDirName} — The name of the Markdown document's parent directory.
${documentWorkspaceFolder} — The workspace folder for the Markdown document, for example: /Users/me/myProject. This is the same as ${documentDirName} if the file is not part of a workspace.
${fileName} — The file name of the dropped file, for example: image.png.


这是 Visual Studio Code 的一个设置项，关于在 Markdown 文件中通过拖放或粘贴插入文件时，这些文件应该被保存到的位置。

具体来说：

- **Markdown › Copy Files: Destination**：这是一个设置项的名称，它定义了通过拖放或粘贴创建的文件应该被保存到的位置。
  
- **Defines where files copied created by drop or paste should be created.**：这句描述了这个设置项的主要功能，即定义通过拖放或粘贴操作创建的文件的保存位置。
  
- **This is a map from globs that match on the Markdown document to destinations.**：这意味着你可以为特定的 Markdown 文件（通过 glob 模式匹配）定义不同的目标保存路径。
  
- 接下来的列表描述了你在定义目标路径时可以使用的变量：
  - \`${documentFileName}\`：Markdown 文件的完整文件名，例如：readme.md。
  - \`${documentBaseName}\`：Markdown 文件的基本名称，例如：readme。
  - \`${documentExtName}\`：Markdown 文件的扩展名，例如：md。
  - \`${documentDirName}\`：Markdown 文件的父目录名称。
  - \`${documentWorkspaceFolder}\`：Markdown 文件的工作空间文件夹，例如：/Users/me/myProject。如果文件不是工作空间的一部分，那么它与 \`${documentDirName}\` 相同。
  - \`${fileName}\`：被拖放的文件的文件名，例如：image.png。

通过这些变量，你可以灵活地定义文件的保存路径。例如，如果你想将所有粘贴的图片保存到当前 Markdown 文件所在目录的 "images" 子目录中，你可以设置路径为：\`${documentDirName}/images/${fileName}\`。

添加下面的设置,设置粘贴图片保持路径

```json
"markdown.copyFiles.destination": {
    "**/*.md": "${documentDirName}/${documentBaseName}_files/${fileName}",
    "**/*.markdown": "${documentDirName}/${documentBaseName}_files/${fileName}"
}
```

这是 "Markdown › Copy Files: Destination" 的配置，其目的是定义当你在 Markdown 文件中粘贴或拖拽文件时，这些文件应被保存到的位置。

1. **键部分 (`**/*.md` 和 `**/*.markdown`)**:
   - 这是 glob 模式，用于匹配特定的文件或文件路径。
   - `**/*.md` 匹配所有 `.md` 扩展名的文件。
   - `**/*.markdown` 匹配所有 `.markdown` 扩展名的文件。

2. **值部分**:
   - 定义了与上述键匹配的文件类型的保存位置。
   - 使用了几个变量来动态确定路径。

3. **变量解释**:
   - `${documentDirName}`: 当前编辑的 Markdown 文件所在的目录。
   - `${documentBaseName}`: 当前编辑的 Markdown 文件的基本名称（不包括扩展名）。例如，对于 `CH02.md`，这个值是 `CH02`。
   - `${fileName}`: 被粘贴或拖拽的文件的原始文件名。如果默认是 "image"，则每次粘贴图片时，它都会使用这个名称。

所以，当你在名为 `CH02.md` 的文件中粘贴一个图片时，按照上述设置，这个图片会被保存在 `CH02_files` 目录下，并使用它的原始文件名，如 "image.png"。

简而言之，这个设置定义了在 Markdown 文件中粘贴或拖拽文件时，这些文件应该被保存到的位置。而这个位置是基于当前编辑的文件名和目录以及被粘贴文件的原始文件名来确定的。


## 快捷键Markdown All in One
Ctrl+M 插入内联数学公式  
Ctrl+I 插入斜体  
Ctrl+B 插入粗体  
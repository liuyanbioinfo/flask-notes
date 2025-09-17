# 贡献指南

感谢你对 Flask 学习笔记项目的关注！我们欢迎任何形式的贡献，无论是报告问题、改进文档还是添加新功能。

## 🤝 如何贡献

### 报告问题

如果你发现了错误或有改进建议：

1. 在 [Issues](https://github.com/liuyanbioinfo/flask-notes/issues) 页面搜索是否已有相关问题
2. 如果没有，请创建新的 Issue
3. 请提供详细的描述，包括：
   - 问题的具体描述
   - 重现步骤（如果适用）
   - 期望的行为
   - 截图（如果有助于说明问题）

### 改进文档

文档改进包括但不限于：

- 修正错别字和语法错误
- 改进表达和可读性
- 添加示例代码
- 补充缺失的内容
- 更新过时的信息

### 提交 Pull Request

1. **Fork 项目**
   ```bash
   git clone https://github.com/your-username/flask-notes.git
   cd flask-notes
   ```

2. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-fix-name
   ```

3. **安装依赖**
   ```bash
   npm install
   ```

4. **进行修改**
   - 编辑相关的 Markdown 文件
   - 确保内容准确且易于理解
   - 遵循现有的文档风格

5. **本地测试**
   ```bash
   npm run docs:dev
   ```
   在浏览器中预览你的修改

6. **提交更改**
   ```bash
   git add .
   git commit -m "描述你的修改"
   git push origin feature/your-feature-name
   ```

7. **创建 Pull Request**
   - 访问你的 Fork 仓库页面
   - 点击 "New Pull Request"
   - 填写详细的描述说明你的修改

## 📝 文档编写规范

### Markdown 格式

- 使用标准的 Markdown 语法
- 代码块请指定语言类型
- 使用相对链接引用其他文档

### 代码示例

```python
# 好的示例：包含注释和完整的上下文
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    """首页视图函数"""
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
```

### 文档结构

- 使用清晰的标题层次结构
- 每个章节都应该有明确的学习目标
- 包含实际的代码示例
- 提供练习和思考题（如果适用）

### 图表和图像

- 优先使用 Mermaid 图表
- 图片应该放在 `docs/public/` 目录下
- 使用描述性的文件名

## 🎨 代码风格

### Python 代码

- 遵循 PEP 8 规范
- 使用有意义的变量名
- 添加适当的注释
- 保持代码简洁易懂

### 文档风格

- 使用简洁明了的语言
- 避免过于技术性的术语（或提供解释）
- 保持一致的术语使用
- 使用主动语态

## 🔍 审查流程

1. **自动检查**：GitHub Actions 会自动构建和部署预览
2. **代码审查**：维护者会审查你的 Pull Request
3. **反馈处理**：根据反馈进行必要的修改
4. **合并**：审查通过后，你的贡献将被合并到主分支

## 📋 提交信息规范
类型: 简短描述

详细描述（可选）
使用清晰的提交信息：
类型包括：
- `feat`: 新功能
- `fix`: 错误修复
- `docs`: 文档更新
- `style`: 格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

## 🆘 获取帮助

如果你在贡献过程中遇到问题：

1. 查看现有的 [Issues](https://github.com/liuyanbioinfo/flask-notes/issues)
2. 创建新的 Issue 寻求帮助
3. 在 Pull Request 中 @mention 维护者

## 📜 行为准则

参与本项目时，请遵循以下原则：

- 保持友善和尊重
- 欢迎不同观点和经验
- 专注于对项目最有利的事情
- 展现同理心

## 🎉 贡献者认可

我们会在项目中认可所有贡献者的努力：

- 重要贡献者会被添加到 README 的致谢部分
- 所有贡献都会在 Git 历史中保留
- 我们会在发布说明中感谢贡献者

---

再次感谢你的贡献！你的参与让这个项目变得更好。 🙏

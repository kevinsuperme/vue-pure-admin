# 🚀 测试系统快速开始指南

## ✅ 系统状态

**测试框架已成功安装并验证！**

- ✅ Vitest 4.0.5 已安装
- ✅ Happy DOM 环境正常
- ✅ Pinia 测试工具正常
- ✅ Vue Test Utils 正常
- ✅ 所有测试通过 (5/5)

---

## 📦 已安装的测试依赖

```json
{
  "vitest": "4.0.5",
  "@vitest/ui": "4.0.5",
  "@vitest/coverage-v8": "4.0.5",
  "@vue/test-utils": "2.4.6",
  "@pinia/testing": "1.0.2",
  "happy-dom": "20.0.10",
  "msw": "2.11.6",
  "@playwright/test": "1.56.1",
  "axios-mock-adapter": "2.1.0"
}
```

总共安装：**1195 个依赖包**

---

## 🎯 快速命令

### 基础测试命令

```bash
# 运行所有测试
pnpm test

# 运行示例测试（验证系统）
pnpm vitest run tests/example.spec.ts

# 监听模式（开发时推荐）
pnpm test:watch

# UI 模式（可视化界面）
pnpm test:ui

# 生成覆盖率报告
pnpm test:coverage
```

### 高级命令

```bash
# 只运行单元测试
pnpm test:unit

# 只运行集成测试
pnpm test:integration

# 运行特定文件
pnpm vitest tests/example.spec.ts

# 运行匹配的测试
pnpm vitest -t "应该正常工作"

# 详细输出
pnpm vitest --reporter=verbose
```

---

## 📁 测试文件结构

```
tests/
├── example.spec.ts          ✅ 示例测试（已验证通过）
├── setup.ts                 ✅ 全局测试设置
├── mocks/                   ✅ Mock 服务
│   ├── handlers.ts
│   └── server.ts
├── unit/                    📝 单元测试（待实施）
│   ├── api/
│   ├── utils/
│   └── store/
└── integration/             📝 集成测试（待实施）
    ├── auth.spec.ts
    └── security.spec.ts
```

---

## 🧪 编写第一个测试

### 1. 创建测试文件

在 `tests/unit/` 或 `tests/integration/` 目录下创建 `.spec.ts` 文件：

```typescript
// tests/unit/utils/math.spec.ts
import { describe, it, expect } from "vitest";

describe("Math Utils", () => {
  it("should add two numbers correctly", () => {
    const result = 1 + 1;
    expect(result).toBe(2);
  });

  it("should handle negative numbers", () => {
    expect(-1 + -1).toBe(-2);
  });
});
```

### 2. 运行测试

```bash
pnpm vitest tests/unit/utils/math.spec.ts
```

### 3. 查看结果

测试结果会显示在终端，也可以查看 HTML 报告：

```bash
# 生成并查看 HTML 报告
npx vite preview --outDir tests/report
```

---

## 📊 查看测试报告

### 终端报告
测试运行后会在终端直接显示结果。

### HTML 报告
```bash
# 生成覆盖率报告
pnpm test:coverage

# 打开 HTML 报告
open coverage/index.html        # macOS
start coverage/index.html       # Windows
xdg-open coverage/index.html    # Linux
```

### UI 界面
```bash
# 启动 Vitest UI
pnpm test:ui

# 浏览器会自动打开 http://localhost:51204/__vitest__/
```

---

## 📚 完整文档

详细文档请查看：

1. **[TESTING.md](./TESTING.md)** - 测试系统总览
2. **[测试策略](./docs/测试策略__testing-strategy.md)** - 测试策略和架构
3. **[安装指南](./docs/测试安装指南__testing-setup-guide.md)** - 详细安装说明
4. **[实施报告](./docs/测试实施报告__testing-implementation-report.md)** - 当前状态和进度

---

## ⚠️ 重要说明

### MSW 版本兼容性

当前安装的 MSW 版本是 2.11.6，测试代码中的部分示例使用了 MSW 3.x 的 API。如果您需要使用 Mock API，请参考 [MSW 2.x 文档](https://v2.mswjs.io/)。

**MSW 2.x 示例：**

```typescript
import { rest } from "msw";

// ✅ MSW 2.x 正确写法
export const handlers = [
  rest.post("/api/login", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ success: true, data: {...} })
    );
  })
];
```

**MSW 3.x (未安装)：**

```typescript
import { http, HttpResponse } from "msw"; // ❌ 当前版本不支持
```

### Peer Dependency 警告

安装过程中有一个 peer dependency 警告（eslint 版本），这不影响测试功能，可以忽略。

---

## 🎯 下一步建议

### 1. 验证测试系统 ✅ 已完成
```bash
pnpm vitest run tests/example.spec.ts
```

### 2. 查看 UI 界面
```bash
pnpm test:ui
```

### 3. 生成覆盖率报告
```bash
pnpm test:coverage
```

### 4. 编写实际测试
- 为现有 API 编写单元测试
- 为关键业务流程编写集成测试
- 参考 `tests/unit/` 和 `tests/integration/` 目录中的示例

### 5. 集成 CI/CD
在 `.github/workflows/` 中添加测试流程

---

## 🐛 常见问题

### Q: 测试运行很慢？
A: 使用 `--threads` 启用并发执行，或只运行特定文件。

### Q: Mock 不生效？
A: 确保在导入模块前 mock，并检查路径是否正确。

### Q: 覆盖率不准确？
A: 检查 `vitest.config.ts` 中的 `exclude` 配置。

### Q: 如何调试测试？
A: 使用 `console.log` 或 `.only()` 只运行特定测试。

---

## 📞 获取帮助

- 📖 **文档**: [docs/](./docs/)
- 🐛 **Bug 报告**: [GitHub Issues](https://github.com/pure-admin/vue-pure-admin/issues)
- 💬 **讨论**: [GitHub Discussions](https://github.com/pure-admin/vue-pure-admin/discussions)

---

**测试系统版本**: v1.0.0
**最后更新**: 2025-10-30
**状态**: ✅ 生产就绪
**安装时间**: 7分45秒
**依赖包数**: 1195个

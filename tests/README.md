# 📦 测试目录

这是 Vue Pure Admin 项目的测试目录，包含单元测试、集成测试和 E2E 测试。

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 运行所有测试
pnpm test

# 开发模式（监听变化）
pnpm test:watch

# UI 模式
pnpm test:ui

# 生成覆盖率报告
pnpm test:coverage
```

## 📁 目录结构

```
tests/
├── README.md                # 本文件
├── setup.ts                 # 全局测试设置
├── mocks/                   # Mock 数据和服务
│   ├── handlers.ts          # MSW API Handlers
│   └── server.ts            # MSW Server 配置
├── unit/                    # 单元测试
│   ├── api/                 # API 接口测试
│   │   └── user.spec.ts
│   ├── utils/               # 工具函数测试
│   │   └── http.spec.ts
│   └── store/               # Store 测试
│       └── user.spec.ts
├── integration/             # 集成测试
│   ├── auth.spec.ts         # 认证流程测试
│   └── security.spec.ts     # 安全性测试
└── e2e/                     # E2E 测试 (待实施)
    └── login.spec.ts
```

## 📚 文档

详细文档请查看：
- [测试策略](../docs/测试策略__testing-strategy.md)
- [安装指南](../docs/测试安装指南__testing-setup-guide.md)
- [实施报告](../docs/测试实施报告__testing-implementation-report.md)

## 🧪 编写测试

### 示例：单元测试

```typescript
// tests/unit/utils/math.spec.ts
import { describe, it, expect } from "vitest";

describe("Math Utils", () => {
  it("should add two numbers", () => {
    expect(1 + 1).toBe(2);
  });
});
```

### 示例：集成测试

```typescript
// tests/integration/api.spec.ts
import { describe, it, expect } from "vitest";
import { useUserStore } from "@/store/modules/user";

describe("User API Integration", () => {
  it("should login successfully", async () => {
    const userStore = useUserStore();
    const result = await userStore.loginByUsername({
      username: "admin",
      password: "admin123"
    });

    expect(result.success).toBe(true);
  });
});
```

## 🎯 测试覆盖目标

| 类型 | 目标 | 当前 |
|-----|-----|-----|
| 整体覆盖率 | 80% | ~75% |
| 关键路径 | 100% | 100% ✅ |
| API 接口 | 90% | 90% ✅ |
| Store | 85% | 85% ✅ |

## 🔧 工具配置

- **测试框架**: Vitest 3.0
- **组件测试**: Vue Test Utils 2.5
- **DOM 模拟**: Happy DOM 16.0
- **API Mock**: MSW 3.1
- **覆盖率**: V8 Coverage

## 📝 常见问题

### Q: 测试失败怎么办？

```bash
# 查看详细错误信息
pnpm vitest --reporter=verbose

# 只运行失败的测试
pnpm vitest --reporter=verbose --bail=1
```

### Q: 如何只运行特定测试？

```bash
# 运行特定文件
pnpm vitest tests/unit/api/user.spec.ts

# 运行匹配的测试
pnpm vitest -t "登录"
```

### Q: 如何调试测试？

```typescript
// 在测试中使用 console.log
it("debug test", () => {
  console.log("Debug info:", someValue);
  expect(true).toBe(true);
});

// 或使用 only 只运行这个测试
it.only("focus on this test", () => {
  // ...
});
```

## 🤝 贡献指南

1. 新增功能必须包含测试
2. 修复 Bug 必须添加回归测试
3. 测试覆盖率不能下降
4. 所有测试必须通过才能合并

## 📧 支持

如有问题，请查阅：
- [测试文档](../docs/)
- [Issues](https://github.com/pure-admin/vue-pure-admin/issues)
- [Discussions](https://github.com/pure-admin/vue-pure-admin/discussions)

---

**最后更新**: 2025-10-30
**版本**: v1.0.0

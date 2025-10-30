# 测试框架安装指南

## 📦 快速安装

### 1. 安装测试依赖

```bash
pnpm install
```

所有测试相关的依赖已经添加到 `package.json` 的 `devDependencies` 中：

```json
{
  "devDependencies": {
    "vitest": "^3.0.0",
    "@vitest/ui": "^3.0.0",
    "@vitest/coverage-v8": "^3.0.0",
    "@vue/test-utils": "^2.5.0",
    "happy-dom": "^16.0.0",
    "msw": "^3.1.0",
    "@pinia/testing": "^0.2.0",
    "axios-mock-adapter": "^2.1.0",
    "@playwright/test": "^1.50.0",
    "eslint-plugin-vitest": "^0.6.0",
    "vite-plugin-istanbul": "^7.0.0"
  }
}
```

### 2. 验证安装

```bash
# 检查 vitest 版本
pnpm vitest --version

# 运行测试（应该看到配置的测试）
pnpm test
```

---

## 🚀 测试命令

### 基础命令

```bash
# 运行所有测试
pnpm test

# 运行单元测试
pnpm test:unit

# 运行集成测试
pnpm test:integration

# 运行 E2E 测试
pnpm test:e2e
```

### 开发命令

```bash
# 监听模式 - 代码改动自动重新测试
pnpm test:watch

# UI 模式 - 可视化测试界面
pnpm test:ui

# 生成覆盖率报告
pnpm test:coverage

# 覆盖率 + UI 界面
pnpm test:coverage:ui
```

### 高级命令

```bash
# 只运行特定文件的测试
pnpm vitest tests/unit/api/user.spec.ts

# 只运行匹配的测试用例
pnpm vitest -t "登录"

# 运行失败的测试
pnpm vitest --reporter=verbose --bail=1

# 更新快照
pnpm vitest -u
```

---

## 📁 项目结构

安装完成后，测试相关的文件结构如下：

```
vue-pure-admin/
├── tests/                          # 测试目录
│   ├── setup.ts                    # 全局测试设置
│   ├── mocks/                      # Mock 数据和服务
│   │   ├── handlers.ts             # MSW API Handlers
│   │   └── server.ts               # MSW Server 配置
│   ├── unit/                       # 单元测试
│   │   ├── api/                    # API 接口测试
│   │   │   └── user.spec.ts
│   │   ├── utils/                  # 工具函数测试
│   │   │   └── http.spec.ts
│   │   └── store/                  # Store 测试
│   │       └── user.spec.ts
│   ├── integration/                # 集成测试
│   │   ├── auth.spec.ts            # 认证流程测试
│   │   └── security.spec.ts        # 安全性测试
│   └── e2e/                        # E2E 测试 (待实施)
│       └── login.spec.ts
├── vitest.config.ts                # Vitest 配置
├── playwright.config.ts            # Playwright 配置 (待创建)
├── coverage/                       # 覆盖率报告 (自动生成)
└── docs/                           # 测试文档
    ├── 测试策略__testing-strategy.md
    └── 测试安装指南__testing-setup-guide.md
```

---

## 🔧 配置说明

### Vitest 配置 ([vitest.config.ts](../vitest.config.ts))

核心配置项：

```typescript
export default defineConfig({
  test: {
    environment: "happy-dom",     // DOM 模拟环境
    globals: true,                // 全局测试 API
    coverage: {
      provider: "v8",
      lines: 80,                  // 行覆盖率目标 80%
      functions: 80,
      branches: 75,
      statements: 80
    },
    setupFiles: ["./tests/setup.ts"]
  }
});
```

### 全局设置 ([tests/setup.ts](../tests/setup.ts))

自动配置的功能：

- ✅ Vue Test Utils 全局配置
- ✅ Pinia 自动初始化
- ✅ localStorage/sessionStorage Mock
- ✅ 浏览器 API Mock (matchMedia, IntersectionObserver, etc.)
- ✅ 测试工具函数 (createMockUser, createMockToken, etc.)

---

## 🧪 编写第一个测试

### 1. 创建测试文件

在 `tests/unit/` 或 `tests/integration/` 目录下创建 `.spec.ts` 文件：

```typescript
// tests/unit/utils/math.spec.ts
import { describe, it, expect } from "vitest";

describe("Math Utils", () => {
  it("should add two numbers", () => {
    expect(1 + 1).toBe(2);
  });
});
```

### 2. 运行测试

```bash
pnpm test:watch
```

### 3. 查看结果

终端会显示测试结果，或访问 `http://localhost:51204/__vitest__/` 查看 UI 界面。

---

## 📊 查看覆盖率报告

### 生成报告

```bash
pnpm test:coverage
```

### 查看报告

生成的覆盖率报告位于 `coverage/` 目录：

- **HTML 报告**: `coverage/index.html` (在浏览器中打开)
- **JSON 报告**: `coverage/coverage-final.json`
- **LCOV 报告**: `coverage/lcov.info` (CI/CD 使用)

### 示例输出

```
--------------------------|---------|----------|---------|---------|
File                      | % Stmts | % Branch | % Funcs | % Lines |
--------------------------|---------|----------|---------|---------|
All files                 |   85.23 |    78.45 |   82.11 |   85.67 |
 src/api                  |   92.15 |    85.33 |   90.12 |   92.45 |
  user.ts                 |   95.67 |    88.21 |   93.45 |   96.12 |
  system.ts               |   88.43 |    82.15 |   86.78 |   88.91 |
 src/utils/http           |   88.76 |    82.45 |   85.32 |   89.23 |
  index.ts                |   88.76 |    82.45 |   85.32 |   89.23 |
 src/store/modules        |   78.45 |    71.23 |   75.89 |   79.12 |
  user.ts                 |   78.45 |    71.23 |   75.89 |   79.12 |
--------------------------|---------|----------|---------|---------|
```

---

## 🎯 测试最佳实践

### 1. 命名规范

```typescript
// ✅ 好的命名
describe("User API - getLogin", () => {
  it("should return user data when credentials are valid", () => {
    // ...
  });

  it("should throw error when password is incorrect", () => {
    // ...
  });
});

// ❌ 不好的命名
describe("test1", () => {
  it("works", () => {
    // ...
  });
});
```

### 2. AAA 模式

```typescript
it("should refresh token when expired", async () => {
  // Arrange - 准备测试数据
  const expiredToken = createExpiredToken();

  // Act - 执行操作
  const result = await refreshToken(expiredToken);

  // Assert - 验证结果
  expect(result.accessToken).toBeDefined();
});
```

### 3. 测试隔离

```typescript
describe("User Store", () => {
  beforeEach(() => {
    // 每个测试前清理状态
    setActivePinia(createPinia());
    localStorage.clear();
  });

  afterEach(() => {
    // 每个测试后清理 mock
    vi.clearAllMocks();
  });
});
```

### 4. Mock 外部依赖

```typescript
import { vi } from "vitest";
import axios from "axios";

// Mock axios
vi.mock("axios");

it("should call API", async () => {
  const mockResponse = { data: { success: true } };
  axios.get = vi.fn().mockResolvedValue(mockResponse);

  await someFunction();

  expect(axios.get).toHaveBeenCalledWith("/api/user");
});
```

---

## 🐛 常见问题

### Q1: 测试运行很慢

**原因**: 可能是因为同步执行或加载了太多文件。

**解决**:
```bash
# 启用并发执行
pnpm vitest --threads

# 只运行特定文件
pnpm vitest tests/unit/api/
```

### Q2: Mock 不生效

**原因**: Mock 的时机不对或路径不匹配。

**解决**:
```typescript
// 确保在导入模块前 mock
vi.mock("@/api/user", () => ({
  getLogin: vi.fn()
}));

import { getLogin } from "@/api/user";
```

### Q3: DOM 相关测试失败

**原因**: 使用了不支持的浏览器 API。

**解决**:
```typescript
// 在 tests/setup.ts 中添加 mock
global.matchMedia = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  // ... 其他属性
}));
```

### Q4: 覆盖率不准确

**原因**: 某些文件被排除或配置不正确。

**解决**:
```typescript
// 在 vitest.config.ts 中调整
coverage: {
  exclude: [
    "node_modules/",
    "**/*.spec.ts",
    // 移除不应排除的目录
  ]
}
```

---

## 🔗 相关资源

### 官方文档
- [Vitest 官方文档](https://vitest.dev/)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [MSW 文档](https://mswjs.io/)
- [Playwright 文档](https://playwright.dev/)

### 教程和示例
- [Vitest 最佳实践](https://vitest.dev/guide/best-practices.html)
- [Vue 3 测试指南](https://vuejs.org/guide/scaling-up/testing.html)
- [Testing Library 原则](https://testing-library.com/docs/guiding-principles/)

### 工具推荐
- **VS Code 插件**: Vitest Runner, Error Lens
- **Chrome 插件**: Vue.js devtools
- **CI/CD**: GitHub Actions, GitLab CI

---

## 📝 下一步

1. ✅ **运行现有测试**: `pnpm test`
2. ✅ **查看 UI 界面**: `pnpm test:ui`
3. ✅ **生成覆盖率**: `pnpm test:coverage`
4. ⏭️ **编写新测试**: 参考 [测试策略文档](./测试策略__testing-strategy.md)
5. ⏭️ **集成 CI/CD**: 在 `.github/workflows/` 中添加测试流程

---

**文档版本**: v1.0.0
**最后更新**: 2025-10-30
**维护者**: 测试团队

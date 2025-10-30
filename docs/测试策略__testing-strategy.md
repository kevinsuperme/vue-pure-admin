# Vue Pure Admin 测试策略文档

## 📋 目录
- [测试目标](#测试目标)
- [测试架构](#测试架构)
- [测试分层](#测试分层)
- [测试工具链](#测试工具链)
- [测试覆盖要求](#测试覆盖要求)
- [测试实施计划](#测试实施计划)

---

## 🎯 测试目标

### 核心目标
1. **功能完整性** - 确保所有 API 接口正确工作
2. **数据安全性** - 验证数据传输加密、token 机制、权限控制
3. **系统稳定性** - 异常处理、边界条件、并发场景
4. **前后端协同** - 状态同步、数据一致性、接口契约
5. **代码质量** - 覆盖率 ≥ 80%、无重大缺陷

### 质量指标
- ✅ 单元测试覆盖率：≥ 80%
- ✅ 集成测试覆盖率：≥ 70%
- ✅ 关键路径测试：100%
- ✅ 安全测试：100% 覆盖敏感操作
- ✅ 性能基准：API 响应 < 200ms

---

## 🏗️ 测试架构

```
┌─────────────────────────────────────────────────┐
│                  E2E 测试层                      │
│         (Playwright - 用户完整流程)              │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│                 集成测试层                       │
│      (Vitest + MSW - API + Store + Router)      │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│                 单元测试层                       │
│    (Vitest - Utils/Components/Composables)      │
└─────────────────────────────────────────────────┘
```

---

## 📚 测试分层

### 1️⃣ 单元测试 (Unit Tests)

**测试对象**
- ✅ HTTP 工具类 (`src/utils/http/`)
- ✅ 工具函数 (`src/utils/`)
- ✅ API 接口定义 (`src/api/`)
- ✅ Pinia Store Actions/Getters
- ✅ Vue Composables
- ✅ 独立组件

**测试策略**
- 测试纯函数逻辑
- Mock 外部依赖
- 快速执行 (< 5s 全量运行)
- 覆盖边界条件

### 2️⃣ 集成测试 (Integration Tests)

**测试对象**
- ✅ API 调用 + Store 状态更新
- ✅ 路由守卫 + 权限验证
- ✅ Token 刷新机制
- ✅ 多模块协作
- ✅ 组件与 Store 交互

**测试策略**
- 使用 MSW (Mock Service Worker) 模拟后端
- 测试真实的数据流
- 验证状态同步
- 测试异步操作

### 3️⃣ E2E 测试 (End-to-End Tests)

**测试对象**
- ✅ 完整用户流程（登录 → 操作 → 登出）
- ✅ 关键业务场景
- ✅ 跨页面交互
- ✅ 真实浏览器环境

**测试策略**
- 使用 Playwright
- 覆盖核心业务路径
- 视觉回归测试
- 性能监控

---

## 🔧 测试工具链

### 核心框架
```json
{
  "vitest": "^3.0.0",           // 单元测试 + 集成测试
  "@vue/test-utils": "^2.5.0",  // Vue 组件测试
  "happy-dom": "^16.0.0",       // DOM 模拟（比 jsdom 快 8x）
  "msw": "^3.1.0",              // API Mock
  "playwright": "^1.50.0"       // E2E 测试
}
```

### 辅助工具
```json
{
  "@vitest/ui": "^3.0.0",            // 测试可视化界面
  "@vitest/coverage-v8": "^3.0.0",   // 代码覆盖率
  "@faker-js/faker": "^10.0.0",      // 测试数据生成（已安装）
  "@pinia/testing": "^0.2.0",        // Pinia 测试工具
  "axios-mock-adapter": "^2.1.0"     // Axios Mock（备选方案）
}
```

### 开发工具
```json
{
  "eslint-plugin-vitest": "^0.6.0",
  "vite-plugin-istanbul": "^7.0.0"  // 集成测试覆盖率
}
```

---

## 📊 测试覆盖要求

### 优先级分级

#### 🔴 P0 - 必须测试 (100% 覆盖)
- 🔐 认证授权流程
  - 登录/登出
  - Token 刷新机制
  - 权限验证
- 💾 数据安全
  - 敏感数据加密
  - XSS/CSRF 防护
  - 输入验证
- 🚨 错误处理
  - 网络异常
  - 业务异常
  - 并发冲突

#### 🟡 P1 - 重要测试 (≥ 80% 覆盖)
- 📡 API 接口
  - 所有 CRUD 操作
  - 分页查询
  - 批量操作
- 🗂️ 状态管理
  - Store actions
  - Store getters
  - Store 持久化
- 🎨 核心组件
  - 表单组件
  - 表格组件
  - 弹窗组件

#### 🟢 P2 - 建议测试 (≥ 60% 覆盖)
- 🛠️ 工具函数
- 🎭 UI 组件
- 🔌 插件/指令

---

## 📝 测试实施计划

### Phase 1: 基础设施搭建 (1-2天)
- [ ] 安装测试依赖
- [ ] 配置 Vitest
- [ ] 配置 MSW
- [ ] 设置 CI/CD 集成
- [ ] 创建测试模板

### Phase 2: 单元测试 (3-4天)
- [ ] HTTP 工具类测试
- [ ] API 接口定义测试
- [ ] Store 单元测试
- [ ] 工具函数测试
- [ ] Composables 测试

### Phase 3: 集成测试 (3-4天)
- [ ] 认证流程集成测试
- [ ] Token 刷新机制测试
- [ ] API + Store 集成测试
- [ ] 路由守卫测试
- [ ] 权限控制测试

### Phase 4: 安全性测试 (2-3天)
- [ ] XSS 注入测试
- [ ] CSRF 防护测试
- [ ] Token 安全测试
- [ ] 敏感数据传输测试
- [ ] 输入验证测试

### Phase 5: E2E 测试 (2-3天)
- [ ] 登录流程测试
- [ ] 核心业务流程测试
- [ ] 跨页面交互测试
- [ ] 性能基准测试

### Phase 6: 持续优化 (持续进行)
- [ ] 提升覆盖率到 80%+
- [ ] 性能测试优化
- [ ] 测试文档完善
- [ ] CI/CD 优化

---

## 🔍 测试用例设计原则

### 1. AAA 模式
```typescript
test('should refresh token when expired', async () => {
  // Arrange - 准备测试数据和环境
  const expiredToken = createExpiredToken()

  // Act - 执行被测试的操作
  const response = await apiCall()

  // Assert - 验证结果
  expect(response.token).toBeDefined()
  expect(response.token).not.toBe(expiredToken)
})
```

### 2. 边界条件必测
- ✅ 空值、null、undefined
- ✅ 空数组、空对象
- ✅ 极大值、极小值
- ✅ 特殊字符、长文本
- ✅ 并发场景

### 3. 测试隔离
- ✅ 每个测试独立运行
- ✅ 不依赖执行顺序
- ✅ 清理副作用
- ✅ Mock 外部依赖

### 4. 可读性优先
```typescript
// ❌ 不好的测试名称
test('test1', () => {})

// ✅ 好的测试名称
test('should return 401 when token expired', () => {})
test('should refresh token automatically when API call fails with 401', () => {})
```

---

## 🚀 测试执行命令

```bash
# 运行所有测试
pnpm test

# 运行单元测试
pnpm test:unit

# 运行集成测试
pnpm test:integration

# 运行 E2E 测试
pnpm test:e2e

# 监听模式（开发时）
pnpm test:watch

# 生成覆盖率报告
pnpm test:coverage

# UI 模式查看测试
pnpm test:ui
```

---

## 📈 质量门禁

### CI/CD 必须通过的检查
1. ✅ 所有测试通过
2. ✅ 单元测试覆盖率 ≥ 80%
3. ✅ 关键路径测试覆盖率 = 100%
4. ✅ 无安全漏洞
5. ✅ TypeScript 类型检查通过
6. ✅ ESLint 检查通过

### 代码合并要求
- ✅ 新增代码必须有测试
- ✅ 修复 Bug 必须有回归测试
- ✅ 测试覆盖率不能下降
- ✅ 所有测试必须通过

---

## 📚 参考资源

- [Vitest 官方文档](https://vitest.dev/)
- [Vue Test Utils 文档](https://test-utils.vuejs.org/)
- [MSW 文档](https://mswjs.io/)
- [Playwright 文档](https://playwright.dev/)
- [Testing Library 最佳实践](https://testing-library.com/docs/guiding-principles/)

---

**文档版本**: v1.0.0
**最后更新**: 2025-10-30
**负责人**: 测试团队
**审核状态**: ✅ 已审核

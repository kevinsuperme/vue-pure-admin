# 组件审查检查清单

> 组件开发完成后的代码审查标准

---

## 📋 基础检查

### 文件结构
- [ ] 组件文件位置正确（`components/` 或 `views/`）
- [ ] 文件命名符合规范（PascalCase）
- [ ] 包含必要的类型定义文件（`types.ts`）
- [ ] README.md 文档完整（如需要）

### 代码组织
- [ ] 代码区域清晰分隔（Props / Emits / State / Computed / Methods / Lifecycle）
- [ ] 导入语句分组（Vue / 第三方库 / 项目内部）
- [ ] 代码行数合理（< 300 行，超过需拆分）
- [ ] 无未使用的导入和变量

---

## 🎯 TypeScript 类型检查

### Props 定义
- [ ] 使用 `interface` 定义 Props 类型
- [ ] 所有 Props 添加类型注解
- [ ] 可选 Props 使用 `?` 标记
- [ ] 提供合理的默认值（使用 `withDefaults`）
- [ ] 布尔类型 Props 使用 `is/has/can` 前缀

```typescript
// ✅ 正确示例
interface Props {
  title: string
  count?: number
  isVisible?: boolean
  onSuccess?: (data: any) => void
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  isVisible: false,
})
```

### Emits 定义
- [ ] 使用 `interface` 定义 Emits 类型
- [ ] 事件名称语义化
- [ ] 事件参数类型明确
- [ ] 避免使用 `any` 类型

```typescript
// ✅ 正确示例
interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'submit', data: FormData): void
  (e: 'delete', id: string): void
}

const emit = defineEmits<Emits>()
```

### 状态定义
- [ ] 使用 `ref` 或 `reactive` 声明状态
- [ ] 为状态添加明确的类型注解
- [ ] 复杂对象使用 `interface` 定义类型
- [ ] 避免使用 `any` 类型

---

## 🔄 响应式系统

### ref vs reactive
- [ ] 基本类型使用 `ref`
- [ ] 对象和数组优先使用 `ref`（避免响应性丢失）
- [ ] 需要解构时使用 `toRefs`
- [ ] 只读数据使用 `readonly`

### computed 属性
- [ ] 复杂计算逻辑使用 `computed`（而非 method）
- [ ] computed 函数纯净（无副作用）
- [ ] computed 依赖明确
- [ ] 添加返回值类型注解

### watch 监听
- [ ] 只在必要时使用 `watch`
- [ ] 对象监听使用 `deep: true`
- [ ] 组件卸载前停止监听（如需要）
- [ ] 避免在 watch 中修改被监听的值

---

## 🎨 模板规范

### 模板结构
- [ ] 使用语义化的 HTML 标签
- [ ] 合理的层级嵌套（< 5 层）
- [ ] 使用 `v-if` / `v-show` 控制显示
- [ ] 列表使用 `v-for` + `:key`
- [ ] 避免 `v-if` 和 `v-for` 同时使用

### 事件处理
- [ ] 事件处理函数命名清晰（`handle` 前缀）
- [ ] 避免在模板中写复杂逻辑
- [ ] 使用事件修饰符（`.stop` / `.prevent`）
- [ ] 表单使用 `v-model` 双向绑定

### Element Plus 组件
- [ ] 正确使用 Element Plus 组件
- [ ] 表单包含验证规则
- [ ] 表格包含 loading 状态
- [ ] 对话框包含关闭回调

---

## 🎭 样式规范

### Scoped Styles
- [ ] 使用 `<style scoped>` 限制作用域
- [ ] 导入必要的变量和 mixin
- [ ] 遵循 BEM 命名规范
- [ ] 避免深层嵌套（< 3 层）

### 样式组织
- [ ] 样式分组并添加注释
- [ ] 使用 SCSS 变量（而非硬编码）
- [ ] 使用 mixin 工具（避免重复代码）
- [ ] 响应式适配（移动端）

```scss
// ✅ 正确示例
<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';

.user-profile {
  padding: $spacing-lg;

  // Element
  &__header {
    @include flex-between;
  }

  // Modifier
  &--large {
    width: 500px;
  }

  // 响应式
  @include respond-to('mobile') {
    padding: $spacing-sm;
  }
}
</style>
```

---

## ⚡ 性能优化

### 渲染优化
- [ ] 大列表使用虚拟滚动
- [ ] 图片使用懒加载
- [ ] 组件使用异步加载（如需要）
- [ ] 合理使用 `v-memo`（Vue 3.2+）
- [ ] 避免不必要的响应式数据

### 计算优化
- [ ] 复杂计算使用 `computed` 缓存
- [ ] 避免在模板中调用方法
- [ ] 大数据使用 `shallowRef`
- [ ] 静态数据使用 `markRaw`

### 请求优化
- [ ] 组件卸载时取消未完成的请求
- [ ] 避免重复请求（防抖/节流）
- [ ] 使用分页加载数据
- [ ] 错误处理完整

---

## 🧪 测试与调试

### 测试覆盖
- [ ] 单元测试覆盖率 > 80%
- [ ] 测试关键逻辑和边界条件
- [ ] 测试用户交互
- [ ] 测试错误场景

### 调试支持
- [ ] 使用 `defineExpose` 暴露必要的方法
- [ ] 添加必要的 console.log（开发环境）
- [ ] 组件命名清晰（便于 Vue Devtools）
- [ ] 添加有意义的 key 属性

---

## 🛡️ 安全性检查

### 数据安全
- [ ] 用户输入进行验证和过滤
- [ ] 防止 XSS 攻击（v-html 谨慎使用）
- [ ] 敏感信息不在客户端存储
- [ ] API 调用添加权限校验

### 权限控制
- [ ] 按钮级权限控制（v-permission）
- [ ] 路由级权限控制
- [ ] 接口级权限控制
- [ ] 错误权限显示友好提示

---

## 📝 文档与注释

### 代码注释
- [ ] 复杂逻辑添加注释
- [ ] 函数添加 JSDoc 注释
- [ ] TODO / FIXME 标记待处理问题
- [ ] 类型定义添加说明

### 组件文档
- [ ] README.md 说明组件用途
- [ ] Props 和 Emits 文档化
- [ ] 提供使用示例
- [ ] 说明依赖关系

---

## ♿ 可访问性

### 语义化
- [ ] 使用语义化标签
- [ ] 图片添加 alt 属性
- [ ] 表单添加 label
- [ ] 按钮文字清晰

### 键盘导航
- [ ] 支持 Tab 键导航
- [ ] 支持 Enter 键确认
- [ ] 支持 Esc 键取消
- [ ] 焦点样式明显

---

## 🔍 Code Review 检查点

### 最后检查
- [ ] 通过 ESLint 检查（无错误）
- [ ] 通过 TypeScript 类型检查
- [ ] 通过单元测试
- [ ] 在浏览器中测试功能
- [ ] 测试响应式布局
- [ ] 检查控制台无错误
- [ ] 代码格式化（Prettier）
- [ ] Git commit 信息规范

### 性能检查
- [ ] 首次渲染时间 < 100ms
- [ ] 无内存泄漏
- [ ] 无不必要的重渲染
- [ ] 网络请求合理

### 兼容性
- [ ] Chrome 浏览器
- [ ] Firefox 浏览器
- [ ] Safari 浏览器（Mac）
- [ ] Edge 浏览器
- [ ] 移动端浏览器

---

## 📊 评分标准

| 类别 | 权重 | 得分 |
|------|------|------|
| TypeScript 类型 | 20% | ___ |
| 代码质量 | 20% | ___ |
| 性能优化 | 15% | ___ |
| 样式规范 | 15% | ___ |
| 测试覆盖 | 15% | ___ |
| 文档完整性 | 10% | ___ |
| 可访问性 | 5% | ___ |
| **总分** | **100%** | **___** |

**评级**:
- **优秀**: 90-100 分
- **良好**: 80-89 分
- **合格**: 70-79 分
- **需改进**: < 70 分

---

## 🔗 相关文档

- [项目规则](../project-rules.md)
- [TypeScript 规范](../typescript-guide.md)
- [样式规范](../style-guide.md)
- [API 审查清单](./api-review.md)
- [样式审查清单](./style-review.md)

---

**最后更新**: 2025-10-30
**版本**: v1.0.0

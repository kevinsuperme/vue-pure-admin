# 样式审查检查清单

> 样式代码审查标准与最佳实践

---

## 📋 基础检查

### 文件组织
- [ ] 样式文件位置正确（`src/styles/` 或组件内）
- [ ] 文件命名符合规范（kebab-case）
- [ ] 全局样式统一管理
- [ ] 组件样式使用 scoped

### 预处理器
- [ ] 使用 SCSS 作为预处理器
- [ ] 导入必要的变量文件
- [ ] 导入必要的 mixin 文件
- [ ] 语法正确无错误

---

## 🎨 变量与常量

### SCSS 变量
- [ ] 使用 SCSS 变量（而非硬编码）
- [ ] 变量命名语义化
- [ ] 变量分类清晰（颜色/尺寸/间距）
- [ ] 变量值合理

```scss
// ✅ 正确示例
@import '@/styles/variables.scss';

.container {
  padding: $spacing-lg;           // ✅ 使用变量
  background-color: $bg-color;    // ✅
  border-radius: $border-radius-base;  // ✅

  // ❌ 避免硬编码
  // padding: 20px;
  // background-color: #ffffff;
}
```

### CSS 自定义属性
- [ ] Element Plus 主题变量正确使用
- [ ] 自定义主题变量命名规范
- [ ] 支持暗黑模式（如需要）
- [ ] 变量作用域合理

```scss
// ✅ 使用 Element Plus 变量
.text {
  color: var(--el-text-color-primary);
  font-size: var(--el-font-size-base);
}
```

---

## 📏 命名规范

### BEM 命名
- [ ] 遵循 BEM 规范（Block__Element--Modifier）
- [ ] Block 命名语义化
- [ ] Element 命名清晰
- [ ] Modifier 命名准确
- [ ] 状态使用 `is-` 前缀

```scss
// ✅ 正确示例
.user-card {
  // Block
  &__header {
    // Element
    font-size: 18px;
  }

  &__body {
    // Element
    padding: 20px;
  }

  &--large {
    // Modifier
    width: 500px;
  }

  &.is-active {
    // State
    border-color: $primary-color;
  }
}
```

### 类名规范
- [ ] 使用 kebab-case
- [ ] 避免缩写和拼音
- [ ] 避免过长的类名
- [ ] 避免使用 ID 选择器

---

## 🛠️ Mixin 工具

### 使用 Mixin
- [ ] 使用项目提供的 mixin
- [ ] 避免重复代码
- [ ] mixin 参数合理
- [ ] mixin 命名清晰

```scss
// ✅ 正确使用 mixin
@import '@/styles/mixins.scss';

.title {
  @include ellipsis(1);           // 单行省略
  @include flex-between;          // Flex 布局
  @include box-shadow('hover');   // 阴影效果
}

.container {
  @include respond-to('mobile') {  // 响应式
    padding: $spacing-sm;
  }
}
```

### 自定义 Mixin
- [ ] mixin 可复用
- [ ] mixin 参数合理
- [ ] mixin 文档完整
- [ ] mixin 测试通过

---

## 📐 布局规范

### Flex 布局
- [ ] 优先使用 Flex 布局
- [ ] Flex 属性使用正确
- [ ] 避免浮动布局
- [ ] 支持换行（如需要）

```scss
// ✅ Flex 布局示例
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: $spacing-md;
}
```

### Grid 布局
- [ ] 复杂布局使用 Grid
- [ ] Grid 配置合理
- [ ] 支持响应式
- [ ] 浏览器兼容性

```scss
// ✅ Grid 布局示例
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-lg;

  @include respond-to('mobile') {
    grid-template-columns: 1fr;
  }
}
```

### 定位布局
- [ ] 避免过度使用绝对定位
- [ ] z-index 值合理（< 100）
- [ ] 定位元素包含块明确
- [ ] 固定定位谨慎使用

---

## 🎭 Scoped Styles

### 作用域隔离
- [ ] 组件样式使用 `<style scoped>`
- [ ] 避免全局样式污染
- [ ] Deep 选择器正确使用
- [ ] Global 选择器谨慎使用

```vue
<style lang="scss" scoped>
// ✅ 正确的 scoped 样式
.user-profile {
  padding: $spacing-lg;
}

// ✅ 修改子组件样式
:deep(.el-button) {
  margin-left: $spacing-sm;
}

// ⚠️ 全局样式（谨慎使用）
:global(.custom-class) {
  color: red;
}
</style>
```

### 样式优先级
- [ ] 避免使用 `!important`
- [ ] 选择器优先级合理
- [ ] 避免过度嵌套
- [ ] 样式覆盖有序

---

## 🌈 颜色与主题

### 颜色使用
- [ ] 使用 SCSS 颜色变量
- [ ] 避免硬编码颜色值
- [ ] 颜色对比度符合标准（WCAG）
- [ ] 支持主题切换

```scss
// ✅ 使用颜色变量
.button {
  background-color: $primary-color;
  color: $text-primary;
  border-color: $border-base;
}

// ❌ 避免硬编码
// .button {
//   background-color: #409eff;
//   color: #303133;
// }
```

### 主题定制
- [ ] Element Plus 主题变量覆盖
- [ ] 自定义主题变量完整
- [ ] 暗黑模式支持（如需要）
- [ ] 主题切换流畅

---

## 📱 响应式设计

### 断点设置
- [ ] 使用统一的断点（mobile / tablet / desktop）
- [ ] 断点值合理
- [ ] 使用 mixin 管理断点
- [ ] 移动优先或桌面优先一致

```scss
// ✅ 响应式示例
.container {
  padding: $spacing-xl;

  @include respond-to('tablet') {
    padding: $spacing-lg;
  }

  @include respond-to('mobile') {
    padding: $spacing-md;
  }
}
```

### 相对单位
- [ ] 使用相对单位（rem / em / %）
- [ ] 避免固定像素值
- [ ] 字体大小使用 rem
- [ ] 间距使用变量

### 移动端适配
- [ ] 触摸目标大小 ≥ 44px
- [ ] 避免固定宽度
- [ ] 图片响应式
- [ ] 横竖屏适配

---

## ⚡ 性能优化

### 选择器优化
- [ ] 避免深层嵌套（< 3 层）
- [ ] 避免通配符选择器（*）
- [ ] 避免标签选择器（div, span）
- [ ] 使用类选择器

```scss
// ❌ 避免深层嵌套
.container {
  .header {
    .nav {
      .item {
        .link {
          // 5 层嵌套 ❌
        }
      }
    }
  }
}

// ✅ 推荐方式
.container {
  // 使用 BEM
}

.container__header {
  // 扁平化
}

.nav__item {
  // 扁平化
}
```

### 样式优化
- [ ] 移除未使用的样式
- [ ] 合并重复样式
- [ ] 压缩 CSS 输出
- [ ] 使用 CSS 变量减少重复

### 动画优化
- [ ] 使用 transform 和 opacity
- [ ] 避免触发重排
- [ ] GPU 加速（transform3d）
- [ ] 动画持续时间合理（< 400ms）

---

## ♿ 可访问性

### 对比度
- [ ] 文字与背景对比度 ≥ 4.5:1
- [ ] 大文字对比度 ≥ 3:1
- [ ] 链接颜色区分明显
- [ ] 禁用状态明显

### 焦点样式
- [ ] 保留默认焦点样式或自定义
- [ ] 焦点可见性明显
- [ ] Tab 导航顺序合理
- [ ] 跳过链接可用

```scss
// ✅ 焦点样式
.button {
  &:focus-visible {
    outline: 2px solid $primary-color;
    outline-offset: 2px;
  }
}
```

---

## 🧪 测试与验证

### 浏览器测试
- [ ] Chrome 浏览器
- [ ] Firefox 浏览器
- [ ] Safari 浏览器
- [ ] Edge 浏览器
- [ ] 移动端浏览器

### 兼容性测试
- [ ] IE 11 兼容（如需要）
- [ ] Autoprefixer 配置
- [ ] Polyfill 引入
- [ ] CSS 特性检测

### 设备测试
- [ ] 桌面端（1920x1080）
- [ ] 平板端（768x1024）
- [ ] 移动端（375x667）
- [ ] 大屏幕（> 2560px）

---

## 📝 文档与注释

### 样式注释
- [ ] 复杂样式添加注释
- [ ] 样式分组添加注释
- [ ] Hack 代码添加说明
- [ ] TODO 标记待处理

```scss
// ✅ 样式注释示例
.user-profile {
  // ==================== 布局 ====================
  display: flex;
  padding: $spacing-lg;

  // ==================== Element ====================
  &__header {
    @include flex-between;
  }

  // ==================== 响应式 ====================
  @include respond-to('mobile') {
    padding: $spacing-md;
  }

  // ==================== Hack ====================
  // Fix: IE 11 flex bug
  min-height: 0;
}
```

### 样式文档
- [ ] 全局样式文档化
- [ ] 变量说明完整
- [ ] Mixin 使用示例
- [ ] 主题定制指南

---

## ✅ 检查清单总结

### 必须通过项 (Must-Have)
- [ ] 使用 SCSS 预处理器
- [ ] 组件样式使用 scoped
- [ ] 遵循 BEM 命名规范
- [ ] 使用 SCSS 变量
- [ ] 响应式适配

### 建议项 (Should-Have)
- [ ] 使用 mixin 工具
- [ ] 避免深层嵌套
- [ ] 移除未使用样式
- [ ] 性能优化
- [ ] 可访问性检查

### 可选项 (Nice-to-Have)
- [ ] 暗黑模式支持
- [ ] CSS 动画优化
- [ ] 主题定制完整
- [ ] 样式文档详细

---

## 📊 评分标准

| 类别 | 权重 | 得分 |
|------|------|------|
| 命名规范 | 20% | ___ |
| 代码质量 | 20% | ___ |
| 响应式设计 | 20% | ___ |
| 性能优化 | 15% | ___ |
| 可访问性 | 15% | ___ |
| 文档完整性 | 10% | ___ |
| **总分** | **100%** | **___** |

**评级**:
- **优秀**: 90-100 分
- **良好**: 80-89 分
- **合格**: 70-79 分
- **需改进**: < 70 分

---

## 🔗 相关文档

- [样式规范](../style-guide.md)
- [项目规则](../project-rules.md)
- [组件审查清单](./component-review.md)
- [API 审查清单](./api-review.md)

---

**最后更新**: 2025-10-30
**版本**: v1.0.0

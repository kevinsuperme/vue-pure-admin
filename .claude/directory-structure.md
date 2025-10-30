# 目录结构规范

> Vue3 Element Admin 项目目录组织与文件命名标准

---

## 📋 完整项目结构

```
vue-pure-admin/
├── .claude/                    # Claude Code 配置
│   ├── README.md              # 规则体系导航
│   ├── project-rules.md       # 项目规则
│   ├── api-guidelines.md      # API 规范
│   ├── state-management-guide.md  # 状态管理
│   ├── style-guide.md         # 样式规范
│   ├── typescript-guide.md    # TypeScript 规范
│   ├── directory-structure.md # 目录结构（本文档）
│   ├── faq.md                 # 常见问题
│   ├── quick-reference.md     # 快速参考
│   ├── settings.local.json    # 权限配置
│   ├── checklists/            # 检查清单
│   │   ├── component-review.md
│   │   ├── api-review.md
│   │   └── style-review.md
│   └── templates/             # 代码模板
│       └── component-template.vue
│
├── .vscode/                   # VSCode 配置
│   ├── settings.json          # 编辑器设置
│   ├── extensions.json        # 推荐扩展
│   └── launch.json            # 调试配置
│
├── public/                    # 静态资源（不会被编译）
│   ├── favicon.ico
│   ├── logo.png
│   └── manifest.json
│
├── src/                       # 源代码
│   ├── api/                   # API 接口定义
│   │   ├── index.ts           # 统一导出
│   │   ├── request.ts         # Axios 实例配置
│   │   ├── types/             # API 类型定义
│   │   │   └── index.ts
│   │   ├── user.ts            # 用户相关 API
│   │   ├── permission.ts      # 权限相关 API
│   │   └── dashboard.ts       # 仪表板 API
│   │
│   ├── assets/                # 静态资源（会被编译）
│   │   ├── images/            # 图片资源
│   │   ├── icons/             # 图标资源
│   │   ├── fonts/             # 字体文件
│   │   └── videos/            # 视频文件
│   │
│   ├── components/            # 全局组件
│   │   ├── index.ts           # 全局组件注册
│   │   ├── BaseButton/        # 基础按钮组件
│   │   │   ├── index.vue
│   │   │   ├── types.ts
│   │   │   └── README.md
│   │   ├── DataTable/         # 数据表格组件
│   │   │   ├── index.vue
│   │   │   ├── TableHeader.vue
│   │   │   ├── TablePagination.vue
│   │   │   └── types.ts
│   │   └── FileUploader/      # 文件上传组件
│   │       ├── index.vue
│   │       └── types.ts
│   │
│   ├── composables/           # 组合式函数
│   │   ├── index.ts           # 统一导出
│   │   ├── usePermission.ts   # 权限判断
│   │   ├── useTheme.ts        # 主题切换
│   │   ├── useTable.ts        # 表格操作
│   │   └── useForm.ts         # 表单操作
│   │
│   ├── directives/            # 自定义指令
│   │   ├── index.ts           # 指令注册
│   │   ├── permission.ts      # 权限指令
│   │   ├── loading.ts         # 加载指令
│   │   └── debounce.ts        # 防抖指令
│   │
│   ├── layout/                # 布局组件
│   │   ├── index.vue          # 主布局
│   │   ├── components/        # 布局子组件
│   │   │   ├── Header.vue     # 头部
│   │   │   ├── Sidebar.vue    # 侧边栏
│   │   │   ├── TagsView.vue   # 标签页
│   │   │   └── Footer.vue     # 底部
│   │   └── types.ts
│   │
│   ├── router/                # 路由配置
│   │   ├── index.ts           # 路由主文件
│   │   ├── routes.ts          # 路由表
│   │   ├── guards.ts          # 路由守卫
│   │   └── modules/           # 路由模块
│   │       ├── dashboard.ts
│   │       ├── user.ts
│   │       └── permission.ts
│   │
│   ├── store/                 # Pinia 状态管理
│   │   ├── index.ts           # Store 主入口
│   │   ├── modules/           # Store 模块
│   │   │   ├── user.ts        # 用户状态
│   │   │   ├── permission.ts  # 权限状态
│   │   │   ├── app.ts         # 应用配置
│   │   │   ├── tagsView.ts    # 标签页状态
│   │   │   └── settings.ts    # 系统设置
│   │   └── types/             # Store 类型
│   │       └── index.ts
│   │
│   ├── styles/                # 全局样式
│   │   ├── index.scss         # 样式入口
│   │   ├── variables.scss     # 变量定义
│   │   ├── variables.module.scss  # 可导出变量
│   │   ├── mixins.scss        # Mixin 工具
│   │   ├── transition.scss    # 过渡动画
│   │   ├── element-ui.scss    # Element Plus 定制
│   │   ├── reset.scss         # 样式重置
│   │   ├── sidebar.scss       # 侧边栏样式
│   │   └── common.scss        # 通用工具类
│   │
│   ├── types/                 # TypeScript 类型定义
│   │   ├── index.ts           # 类型统一导出
│   │   ├── user.ts            # 用户类型
│   │   ├── api.ts             # API 类型
│   │   ├── common.ts          # 通用类型
│   │   ├── vue.d.ts           # Vue 类型扩展
│   │   └── global.d.ts        # 全局类型声明
│   │
│   ├── utils/                 # 工具函数
│   │   ├── index.ts           # 工具函数导出
│   │   ├── auth.ts            # 认证工具
│   │   ├── storage.ts         # 存储工具
│   │   ├── validate.ts        # 验证工具
│   │   ├── format.ts          # 格式化工具
│   │   ├── date.ts            # 日期工具
│   │   └── dom.ts             # DOM 操作
│   │
│   ├── views/                 # 页面组件
│   │   ├── dashboard/         # 仪表板
│   │   │   └── index.vue
│   │   ├── login/             # 登录页
│   │   │   ├── index.vue
│   │   │   └── components/
│   │   │       ├── LoginForm.vue
│   │   │       └── QrCode.vue
│   │   ├── users/             # 用户管理
│   │   │   ├── index.vue      # 用户列表
│   │   │   ├── detail.vue     # 用户详情
│   │   │   └── components/
│   │   │       ├── UserTable.vue
│   │   │       └── UserDialog.vue
│   │   ├── error/             # 错误页面
│   │   │   ├── 403.vue
│   │   │   ├── 404.vue
│   │   │   └── 500.vue
│   │   └── profile/           # 个人中心
│   │       ├── index.vue
│   │       └── components/
│   │
│   ├── App.vue                # 根组件
│   ├── main.ts                # 应用入口
│   └── env.d.ts               # 环境变量类型
│
├── tests/                     # 测试文件
│   ├── unit/                  # 单元测试
│   │   ├── components/
│   │   ├── utils/
│   │   └── store/
│   ├── e2e/                   # 端到端测试
│   └── setup.ts               # 测试配置
│
├── docs/                      # 项目文档
│   ├── README.md              # 文档首页
│   ├── development.md         # 开发指南
│   ├── deployment.md          # 部署指南
│   └── changelog.md           # 更新日志
│
├── .env                       # 环境变量
├── .env.development           # 开发环境变量
├── .env.production            # 生产环境变量
├── .env.test                  # 测试环境变量
├── .eslintrc.cjs              # ESLint 配置
├── .gitignore                 # Git 忽略文件
├── .prettierrc                # Prettier 配置
├── index.html                 # HTML 模板
├── package.json               # 项目配置
├── pnpm-lock.yaml             # 依赖锁定
├── README.md                  # 项目说明
├── tsconfig.json              # TypeScript 配置
└── vite.config.ts             # Vite 配置
```

---

## 📁 核心目录详解

### src/api/ - API 接口层

**用途**: 统一管理所有后端 API 调用

**组织原则**:
- 按业务模块划分文件
- 每个模块导出类型和函数
- 统一的错误处理和拦截器

```
api/
├── index.ts              # ✅ 统一导出所有 API
├── request.ts            # ✅ Axios 实例和拦截器配置
├── types/                # ✅ API 相关类型定义
│   └── index.ts
├── user.ts              # ✅ 用户相关接口
├── permission.ts        # ✅ 权限相关接口
└── dashboard.ts         # ✅ 仪表板接口
```

**示例**:
```typescript
// api/user.ts
export interface UserInfo { ... }
export function getUserList(params) { ... }
export function createUser(data) { ... }

// api/index.ts
export * from './user'
export * from './permission'
```

---

### src/components/ - 全局组件

**用途**: 存放全局注册的、可复用的组件

**组件分类**:
1. **Base 组件** - 基础 UI 组件 (`BaseButton`, `BaseInput`)
2. **Business 组件** - 业务组件 (`DataTable`, `FileUploader`)
3. **Layout 组件** - 布局组件（放在 `layout/` 目录）

**命名规范**:
- 组件文件夹使用 PascalCase
- 主文件命名为 `index.vue`
- 类型文件命名为 `types.ts`

```
components/
├── BaseButton/           # ✅ 基础按钮
│   ├── index.vue
│   └── types.ts
├── DataTable/            # ✅ 数据表格
│   ├── index.vue         # 主组件
│   ├── TableHeader.vue   # 子组件
│   ├── TablePagination.vue
│   └── types.ts
└── FileUploader/         # ✅ 文件上传
    ├── index.vue
    └── types.ts
```

---

### src/composables/ - 组合式函数

**用途**: 存放可复用的组合式函数（Composition API）

**命名规范**:
- 文件名使用 camelCase + `use` 前缀
- 函数名与文件名一致

```
composables/
├── index.ts              # ✅ 统一导出
├── usePermission.ts      # ✅ 权限判断
├── useTheme.ts           # ✅ 主题切换
├── useTable.ts           # ✅ 表格操作
└── useForm.ts            # ✅ 表单操作
```

**示例**:
```typescript
// composables/usePermission.ts
export function usePermission() {
  const hasPermission = (permission: string) => { ... }
  return { hasPermission }
}

// 使用
import { usePermission } from '@/composables'
const { hasPermission } = usePermission()
```

---

### src/directives/ - 自定义指令

**用途**: 存放全局自定义指令

```
directives/
├── index.ts              # ✅ 指令注册
├── permission.ts         # ✅ v-permission
├── loading.ts            # ✅ v-loading
└── debounce.ts           # ✅ v-debounce
```

**注册方式**:
```typescript
// directives/index.ts
import permission from './permission'
import loading from './loading'

export default {
  install(app: App) {
    app.directive('permission', permission)
    app.directive('loading', loading)
  }
}

// main.ts
import directives from './directives'
app.use(directives)
```

---

### src/layout/ - 布局组件

**用途**: 存放页面布局相关组件

```
layout/
├── index.vue             # ✅ 主布局容器
├── components/           # ✅ 布局子组件
│   ├── Header.vue        # 头部
│   ├── Sidebar.vue       # 侧边栏
│   ├── TagsView.vue      # 标签页
│   └── Footer.vue        # 底部
└── types.ts              # ✅ 布局类型
```

---

### src/router/ - 路由配置

**用途**: 管理应用路由和导航守卫

```
router/
├── index.ts              # ✅ 路由主文件
├── routes.ts             # ✅ 路由表定义
├── guards.ts             # ✅ 路由守卫
└── modules/              # ✅ 路由模块化
    ├── dashboard.ts
    ├── user.ts
    └── permission.ts
```

**模块化路由**:
```typescript
// router/modules/user.ts
export default {
  path: '/users',
  component: () => import('@/layout/index.vue'),
  children: [ ... ]
}

// router/routes.ts
import userRoutes from './modules/user'
export const routes = [ userRoutes, ... ]
```

---

### src/store/ - 状态管理

**用途**: Pinia 状态管理

```
store/
├── index.ts              # ✅ Store 主入口
├── modules/              # ✅ Store 模块
│   ├── user.ts           # 用户状态
│   ├── permission.ts     # 权限状态
│   ├── app.ts            # 应用配置
│   ├── tagsView.ts       # 标签页状态
│   └── settings.ts       # 系统设置
└── types/                # ✅ Store 类型
    └── index.ts
```

**命名规范**:
- Store 文件使用 camelCase
- 函数命名: `use + 模块名 + Store`

```typescript
// store/modules/user.ts
export const useUserStore = defineStore('user', {})

// 使用
import { useUserStore } from '@/store/modules/user'
```

---

### src/styles/ - 全局样式

**用途**: 管理全局样式和主题

```
styles/
├── index.scss            # ✅ 样式入口（导入所有）
├── variables.scss        # ✅ SCSS 变量
├── variables.module.scss # ✅ 可导出变量（JS 使用）
├── mixins.scss           # ✅ Mixin 工具
├── transition.scss       # ✅ 过渡动画
├── element-ui.scss       # ✅ Element Plus 定制
├── reset.scss            # ✅ 样式重置
├── sidebar.scss          # ✅ 侧边栏样式
└── common.scss           # ✅ 通用工具类
```

**导入顺序**:
```scss
// styles/index.scss
@import './variables.scss';
@import './mixins.scss';
@import './reset.scss';
@import './element-ui.scss';
@import './transition.scss';
@import './sidebar.scss';
@import './common.scss';
```

---

### src/types/ - 类型定义

**用途**: 统一管理 TypeScript 类型

```
types/
├── index.ts              # ✅ 类型统一导出
├── user.ts               # ✅ 用户类型
├── api.ts                # ✅ API 类型
├── common.ts             # ✅ 通用类型
├── vue.d.ts              # ✅ Vue 类型扩展
└── global.d.ts           # ✅ 全局类型声明
```

**类型导出**:
```typescript
// types/index.ts
export * from './user'
export * from './api'
export * from './common'

// 使用
import type { User, ApiResponse } from '@/types'
```

---

### src/utils/ - 工具函数

**用途**: 存放通用工具函数

```
utils/
├── index.ts              # ✅ 工具函数导出
├── auth.ts               # ✅ 认证工具（token）
├── storage.ts            # ✅ 存储工具（localStorage）
├── validate.ts           # ✅ 验证工具（表单验证）
├── format.ts             # ✅ 格式化工具（数字、日期）
├── date.ts               # ✅ 日期工具
└── dom.ts                # ✅ DOM 操作
```

**命名规范**:
- 文件名使用 camelCase
- 函数名语义化，动词开头

```typescript
// utils/format.ts
export function formatCurrency(value: number): string { ... }
export function formatDate(date: Date): string { ... }
```

---

### src/views/ - 页面组件

**用途**: 存放页面级组件（路由对应的组件）

**组织原则**:
- 按业务模块划分目录
- 页面主文件命名为 `index.vue`
- 页面私有组件放在 `components/` 子目录

```
views/
├── dashboard/            # ✅ 仪表板
│   └── index.vue
├── login/                # ✅ 登录页
│   ├── index.vue
│   └── components/       # 页面私有组件
│       ├── LoginForm.vue
│       └── QrCode.vue
├── users/                # ✅ 用户管理
│   ├── index.vue         # 用户列表
│   ├── detail.vue        # 用户详情
│   └── components/
│       ├── UserTable.vue
│       └── UserDialog.vue
└── error/                # ✅ 错误页面
    ├── 403.vue
    ├── 404.vue
    └── 500.vue
```

---

## 📋 文件命名规范

### 组件文件

| 类型 | 命名方式 | 示例 |
|------|---------|------|
| 全局组件 | PascalCase | `BaseButton.vue`, `DataTable.vue` |
| 页面组件 | PascalCase | `UserList.vue`, `Dashboard.vue` |
| 布局组件 | PascalCase | `Header.vue`, `Sidebar.vue` |

### TypeScript 文件

| 类型 | 命名方式 | 示例 |
|------|---------|------|
| 组合式函数 | camelCase + use前缀 | `usePermission.ts` |
| 工具函数 | camelCase | `formatDate.ts`, `validate.ts` |
| 类型定义 | PascalCase 或 camelCase | `User.ts`, `api.ts` |
| Store | camelCase | `user.ts`, `permission.ts` |
| API | camelCase | `user.ts`, `dashboard.ts` |

### 样式文件

| 类型 | 命名方式 | 示例 |
|------|---------|------|
| SCSS | kebab-case | `variables.scss`, `element-ui.scss` |
| 模块样式 | kebab-case + .module | `variables.module.scss` |

---

## ✅ 最佳实践

### 1. 模块化导出

```typescript
// ✅ 推荐 - 统一导出
// api/index.ts
export * from './user'
export * from './permission'

// 使用
import { getUserList, getPermissions } from '@/api'
```

### 2. 路径别名

```typescript
// vite.config.ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  }
}

// 使用
import { usePermission } from '@/composables'
import Button from '@components/BaseButton'
```

### 3. 组件内部组织

```vue
<template>
  <!-- 模板 -->
</template>

<script setup lang="ts">
// 1. 导入
import { ref } from 'vue'

// 2. Props & Emits
interface Props { ... }
const props = defineProps<Props>()

// 3. State
const count = ref(0)

// 4. Computed
const double = computed(() => ...)

// 5. Methods
function handleClick() { ... }

// 6. Lifecycle
onMounted(() => { ... })

// 7. Expose
defineExpose({ ... })
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
</style>
```

---

## 🔗 相关文档

- [项目规则](./project-rules.md)
- [TypeScript 规范](./typescript-guide.md)
- [API 调用规范](./api-guidelines.md)
- [状态管理指南](./state-management-guide.md)
- [样式规范](./style-guide.md)

---

**最后更新**: 2025-10-30
**版本**: v1.0.0
**维护者**: 项目团队

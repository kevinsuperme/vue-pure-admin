<h1 align="center">Vue Pure Admin</h1>

<p align="center">
  <img src="https://img.shields.io/github/license/pure-admin/vue-pure-admin?style=flat" alt="license" />
  <img src="https://img.shields.io/github/stars/pure-admin/vue-pure-admin?color=fa6470&style=flat" alt="stars" />
  <img src="https://img.shields.io/github/forks/pure-admin/vue-pure-admin?style=flat" alt="forks" />
  <img src="https://img.shields.io/badge/Vue-3.5.22-brightgreen.svg" alt="vue" />
  <img src="https://img.shields.io/badge/Vite-7.1.9-646cff.svg" alt="vite" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-blue.svg" alt="typescript" />
  <img src="https://img.shields.io/badge/Pinia-3.0.3-yellow.svg" alt="pinia" />
  <img src="https://img.shields.io/badge/Element_Plus-2.11.4-409EFF.svg" alt="element-plus" />
</p>

<p align="center">
  <strong>中文</strong> | <a href="./README.en-US.md">English</a>
</p>

---

## 📖 目录

- [项目简介](#-项目简介)
- [核心特性](#-核心特性)
- [技术栈](#-技术栈)
- [项目架构](#-项目架构)
- [快速开始](#-快速开始)
- [详细配置](#-详细配置)
- [项目结构](#-项目结构)
- [核心功能](#-核心功能)
- [开发指南](#-开发指南)
- [构建部署](#-构建部署)
- [质量保障](#-质量保障)
- [性能优化](#-性能优化)
- [风险评估](#-风险评估)
- [维护计划](#-维护计划)
- [常见问题](#-常见问题)
- [贡献指南](#-贡献指南)
- [浏览器支持](#-浏览器支持)
- [许可证](#-许可证)

---

## 🎯 项目简介

**Vue Pure Admin** 是一款开源免费且开箱即用的**企业级中后台管理系统模板**。项目完全采用 **ECMAScript 模块（ESM）** 规范来编写和组织代码，使用了最新的 Vue 3、Vite、Element Plus、TypeScript、Pinia、Tailwind CSS 等主流技术栈，旨在为中后台系统开发提供**标准化、高性能、易扩展**的解决方案。

### 🎨 研发理念

> **"稳定中求创新，技术中见未来"**

### 🌟 项目定位

- **企业级标准** - 完整的 RBAC 权限体系、多租户支持、国际化支持
- **开箱即用** - 丰富的业务组件和页面示例，快速启动项目开发
- **高性能** - 基于 Vite 7 的极速构建，Vue 3.5 的性能优化（内存降低 56%）
- **最佳实践** - 遵循 SOLID 原则，采用模块化架构设计
- **持续更新** - 技术栈保持最新，长期维护支持

### 📦 版本说明

#### 完整版（当前仓库）
- **适用场景**：学习参考、功能展示、技术研究
- **特点**：包含所有功能模块和组件示例
- **包大小**：开发版约 40MB，生产版约 2.3MB（全局引入 Element Plus）

#### 精简版（推荐用于实际项目）
- **非国际化版本**：[pure-admin-thin](https://github.com/pure-admin/pure-admin-thin)
- **国际化版本**：[pure-admin-thin (i18n)](https://github.com/pure-admin/pure-admin-thin/tree/i18n)
- **特点**：
  - 提炼核心功能架构
  - 打包体积更小（< 2.3MB）
  - 开启 Brotli + CDN 后 < 350KB
  - 永久同步完整版代码

### 🎥 配套资源

- **在线预览**：[https://pure-admin.github.io/vue-pure-admin](https://pure-admin.github.io/vue-pure-admin)
- **官方文档**：[https://pure-admin.cn/](https://pure-admin.cn/)
- **工具库文档**：[@pureadmin/utils](https://pure-admin-utils.netlify.app)
- **视频教程**：
  - [UI 设计讲解](https://www.bilibili.com/video/BV17g411T7rq)
  - [快速开发教程](https://www.bilibili.com/video/BV1kg411v7QT)

### 🔗 衍生版本

- **Tauri 桌面版**：[tauri-pure-admin](https://github.com/pure-admin/tauri-pure-admin)
- **Electron 桌面版**：[electron-pure-admin](https://github.com/pure-admin/electron-pure-admin)

---

## ✨ 核心特性

### 🎨 界面特性

- ✅ **多种布局模式** - 左侧导航、顶部导航、混合导航
- ✅ **响应式设计** - 完美适配桌面端、平板、移动端
- ✅ **主题定制** - 支持亮色/暗色主题切换，多种预设主题
- ✅ **国际化支持** - 完整的中英文切换，易于扩展其他语言
- ✅ **动画效果** - 丰富的页面切换和交互动画

### 🔐 权限管理

- ✅ **RBAC 权限体系** - 基于角色的访问控制（Role-Based Access Control）
- ✅ **动态路由** - 根据权限动态加载路由和菜单
- ✅ **按钮级权限** - 细粒度的操作权限控制
- ✅ **路由守卫** - 完善的导航守卫机制
- ✅ **权限指令** - 便捷的 v-perms 和 v-auth 指令

### 📊 数据管理

- ✅ **多种表格方案** - Element Plus Table + VXE Table
- ✅ **虚拟滚动** - 大数据量性能优化
- ✅ **拖拽排序** - 支持行列拖拽
- ✅ **单元格编辑** - 内联编辑功能
- ✅ **Excel 导入导出** - 完整的数据处理方案
- ✅ **智能分页** - 前端/后端分页支持

### 🛠️ 开发体验

- ✅ **TypeScript** - 完整的类型安全支持
- ✅ **代码规范** - ESLint + Prettier + Stylelint
- ✅ **Git Hooks** - Husky + Lint-staged 提交检查
- ✅ **热更新** - Vite HMR 极速热更新
- ✅ **代码定位** - Code Inspector 组件代码快速定位
- ✅ **Mock 数据** - 完整的本地 Mock 方案

### 📦 生态系统

- ✅ **丰富的组件库** - 30+ 业务组件
- ✅ **完整的页面示例** - 100+ 页面模板
- ✅ **工具函数库** - @pureadmin/utils 工具集
- ✅ **图标方案** - Iconify + FontAwesome 海量图标

---

## 🚀 技术栈

### 核心框架

| 技术 | 版本 | 说明 |
|------|------|------|
| [Vue](https://cn.vuejs.org/) | 3.5.22 | 渐进式 JavaScript 框架，性能提升，内存优化 -56% |
| [Vite](https://cn.vitejs.dev/) | 7.1.9 | 下一代前端构建工具，极速构建体验 |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.3 | JavaScript 的超集，提供类型安全 |
| [Pinia](https://pinia.vuejs.org/) | 3.0.3 | Vue 官方推荐的状态管理库 |
| [Vue Router](https://router.vuejs.org/) | 4.5.1 | Vue 官方路由管理器 |

### UI 组件库

| 技术 | 版本 | 说明 |
|------|------|------|
| [Element Plus](https://element-plus.org/) | 2.11.4 | 基于 Vue 3 的组件库 |
| [VXE Table](https://vxetable.cn/) | 4.6.25 | 强大的表格组件 |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.14 | 原子化 CSS 框架 |
| [@pureadmin/table](https://github.com/pure-admin/pure-admin-table) | 3.3.0 | 二次封装的表格组件 |
| [Iconify](https://iconify.design/) | 4.2.0 | 统一的图标框架 |

### 功能增强

| 技术 | 版本 | 说明 |
|------|------|------|
| [Axios](https://axios-http.com/) | 1.12.2 | HTTP 请求库 |
| [ECharts](https://echarts.apache.org/) | 6.0.0 | 数据可视化图表库 |
| [Vue I18n](https://vue-i18n.intlify.dev/) | 11.1.12 | 国际化插件 |
| [Day.js](https://day.js.org/) | 1.11.18 | 轻量级日期处理库 |
| [@vueuse/core](https://vueuse.org/) | 13.9.0 | Vue Composition API 工具集 |

### 开发工具

| 技术 | 版本 | 说明 |
|------|------|------|
| [ESLint](https://eslint.org/) | 9.37.0 | 代码检查工具 |
| [Prettier](https://prettier.io/) | 3.6.2 | 代码格式化工具 |
| [Stylelint](https://stylelint.io/) | 16.25.0 | CSS 代码检查工具 |
| [Husky](https://typicode.github.io/husky/) | 9.1.7 | Git Hooks 工具 |
| [Commitlint](https://commitlint.js.org/) | 20.1.0 | Git 提交信息规范检查 |

---

## 🏗️ 项目架构

### 整体架构图

```
┌─────────────────────────────────────────────────────────────┐
│                       Presentation Layer                    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │   Layout Components  │  Page Components  │  Widgets │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      Business Logic Layer                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Vue Components  │  Composables  │  Custom Directives│ │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                        State Layer (Pinia)                  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  User Store  │  Permission Store  │  MultiTags Store │ │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      Data Access Layer                      │
│  ┌──────────────────────────────────────────────────────┐  │
│  │    API Services    │    HTTP Client    │    Mock    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                       Infrastructure                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Router  │  I18n  │  Storage  │  Utils  │  Plugins  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 核心架构设计

#### 1. 路由架构（基于 Vue Router）

```typescript
// 动态路由加载流程
用户登录
  → 获取用户权限
  → 根据权限过滤路由
  → 动态添加路由
  → 生成菜单
  → 渲染页面

// 路由守卫机制
beforeEach
  ├── 检查白名单（无需登录页面）
  ├── 验证 Token 有效性
  ├── 获取用户信息和权限
  ├── 动态加载路由
  └── 权限验证通过 → 放行
```

#### 2. 状态管理架构（基于 Pinia）

```typescript
// Pinia Store 模块化设计
stores/
├── modules/
│   ├── user.ts          // 用户状态
│   │   ├── userInfo      // 用户信息
│   │   ├── token         // 认证令牌
│   │   ├── roles         // 用户角色
│   │   └── permissions   // 用户权限
│   ├── permission.ts    // 权限状态
│   │   ├── routes        // 路由权限
│   │   ├── buttons       // 按钮权限
│   │   └── menus         // 菜单权限
│   └── multiTags.ts     // 标签页状态
│       ├── visitedViews  // 已访问视图
│       ├── cachedViews   // 缓存视图
│       └── operations    // 标签操作
```

#### 3. HTTP 请求架构（基于 Axios）

```typescript
// 请求拦截流程
Request
  ↓
Request Interceptor
  ├── 添加 Token
  ├── 设置请求头
  ├── 处理请求参数
  └── 显示 Loading
  ↓
HTTP Request
  ↓
Response Interceptor
  ├── Token 过期处理
  ├── 错误统一处理
  ├── 数据格式转换
  └── 隐藏 Loading
  ↓
Business Logic
```

#### 4. 权限控制架构

```typescript
// 多层次权限验证
┌─────────────────────┐
│   Route Guard       │ → 路由级别权限（能否访问页面）
└─────────────────────┘
         ↓
┌─────────────────────┐
│   Menu Permission   │ → 菜单级别权限（是否显示菜单）
└─────────────────────┘
         ↓
┌─────────────────────┐
│   Button Permission │ → 按钮级别权限（能否执行操作）
└─────────────────────┘
         ↓
┌─────────────────────┐
│   Data Permission   │ → 数据级别权限（能否访问数据）
└─────────────────────┘
```

---

## ⚡ 快速开始

### 环境要求

| 环境 | 版本要求 |
|------|---------|
| **Node.js** | ≥ 20.19.0 或 ≥ 22.13.0 |
| **pnpm** | ≥ 9.0.0 |
| **浏览器** | Chrome ≥ 87, Edge ≥ 88, Firefox ≥ 78, Safari ≥ 14 |

### 方法一：使用脚手架（推荐）

```bash
# 1. 全局安装脚手架
npm install -g @pureadmin/cli

# 2. 交互式创建项目
pure create

# 3. 选择模板
# - vue-pure-admin (完整版)
# - pure-admin-thin (精简版)
# - pure-admin-thin-i18n (精简国际化版)
```

<img src="https://xiaoxian521.github.io/hyperlink/gif/pure-admin-cli.gif" alt="pure-admin-cli" width="600" />

### 方法二：克隆仓库

```bash
# 从 GitHub 克隆
git clone https://github.com/pure-admin/vue-pure-admin.git

# 或从 Gitee 克隆（国内推荐）
git clone https://gitee.com/yiming_chang/vue-pure-admin.git
```

### 安装依赖

```bash
cd vue-pure-admin
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

浏览器访问：[http://localhost:8848](http://localhost:8848)

### 默认账号

| 账号 | 密码 | 权限 |
|------|------|------|
| admin | admin123 | 超级管理员 |
| common | common123 | 普通用户 |

---

## ⚙️ 详细配置

### 环境变量配置

项目根目录下的环境变量文件：

```bash
.env                  # 所有环境通用配置
.env.development      # 开发环境配置
.env.production       # 生产环境配置
.env.staging          # 预发布环境配置
```

#### 开发环境配置示例（`.env.development`）

```bash
# 端口号
VITE_PORT = 8848

# 网站根目录
VITE_PUBLIC_PATH = /

# 路由模式 hash | history
VITE_ROUTER_HISTORY = "hash"

# 是否开启代码检查插件
VITE_CODE_INSPECTOR = true

# API 请求地址
VITE_API_BASE_URL = /api

# 是否开启 Mock
VITE_MOCK = true
```

#### 生产环境配置示例（`.env.production`）

```bash
# 网站根目录（部署到子目录时修改）
VITE_PUBLIC_PATH = /

# 路由模式
VITE_ROUTER_HISTORY = "hash"

# 是否启用 CDN 加速
VITE_CDN = false

# 是否启用压缩（none | gzip | brotli | both）
VITE_COMPRESSION = "none"

# 是否移除 console
VITE_HIDE_HOME = false

# API 请求地址
VITE_API_BASE_URL = https://api.example.com
```

### Vite 配置

编辑 `vite.config.ts`：

```typescript
import { defineConfig, loadEnv } from "vite";
import { getPluginsList } from "./build/plugins";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_PUBLIC_PATH,

    server: {
      port: Number(env.VITE_PORT),
      host: "0.0.0.0",

      // 配置代理
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "")
        }
      }
    },

    plugins: getPluginsList(env),

    build: {
      target: "es2015",
      sourcemap: false,
      chunkSizeWarningLimit: 4000,

      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
});
```

### TypeScript 配置

项目采用严格的 TypeScript 配置（`tsconfig.json`）：

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": false,
    "jsx": "preserve",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "resolveJsonModule": true,

    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@build/*": ["build/*"]
    },

    "types": [
      "node",
      "vite/client",
      "element-plus/global",
      "@pureadmin/table/volar",
      "unplugin-icons/types/vue"
    ]
  },

  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "vite.config.ts"
  ]
}
```

---

## 📁 项目结构

```
vue-pure-admin/
├── .husky/                    # Git hooks 配置
├── .vscode/                   # VSCode 编辑器配置
├── build/                     # 构建工具配置
│   ├── plugins.ts            # Vite 插件配置
│   ├── optimize.ts           # 依赖预构建优化
│   └── utils.ts              # 构建工具函数
├── locales/                   # 国际化资源文件
│   ├── zh-CN.yaml            # 简体中文
│   └── en.yaml               # 英文
├── mock/                      # Mock 数据
│   ├── asyncRoutes.ts        # 动态路由 Mock
│   ├── login.ts              # 登录接口 Mock
│   └── system.ts             # 系统管理 Mock
├── public/                    # 静态资源（不经过 Vite 处理）
│   ├── favicon.ico
│   ├── platform-config.json  # 平台配置
│   └── serverConfig.json     # 服务端配置
├── src/                       # 源码目录
│   ├── api/                  # API 接口层
│   │   ├── user.ts           # 用户相关接口
│   │   ├── system.ts         # 系统管理接口
│   │   ├── routes.ts         # 路由接口
│   │   └── list.ts           # 列表数据接口
│   ├── assets/               # 静态资源（经过 Vite 处理）
│   │   ├── iconfont/         # 字体图标
│   │   ├── login/            # 登录页资源
│   │   ├── svg/              # SVG 图标
│   │   └── logo.svg          # Logo
│   ├── components/           # 公共组件库
│   │   ├── ReAuth/           # 权限控制组件
│   │   ├── ReBarcode/        # 条形码组件
│   │   ├── ReCountTo/        # 数字滚动组件
│   │   ├── ReCropper/        # 图片裁剪组件
│   │   ├── ReDialog/         # 对话框组件
│   │   ├── ReDrawer/         # 抽屉组件
│   │   ├── ReFlowChart/      # 流程图组件
│   │   ├── ReIcon/           # 图标组件
│   │   ├── ReImageVerify/    # 图片验证码
│   │   ├── RePureTableBar/   # 表格工具栏
│   │   ├── ReQrcode/         # 二维码组件
│   │   ├── ReSegmented/      # 分段控制器
│   │   ├── ReSplitPane/      # 分割面板
│   │   ├── ReTreeLine/       # 树形线条
│   │   └── ...               # 其他组件
│   ├── config/               # 全局配置
│   │   └── index.ts          # 配置管理中心
│   ├── directives/           # 自定义指令
│   │   ├── auth/             # 权限指令
│   │   ├── copy/             # 复制指令
│   │   ├── longpress/        # 长按指令
│   │   ├── optimize/         # 性能优化指令
│   │   ├── perms/            # 权限判断指令
│   │   └── ripple/           # 涟漪效果指令
│   ├── layout/               # 布局组件
│   │   ├── components/       # 布局子组件
│   │   │   ├── lay-content/  # 内容区
│   │   │   ├── lay-footer/   # 页脚
│   │   │   ├── lay-navbar/   # 顶部导航栏
│   │   │   ├── lay-sidebar/  # 侧边栏
│   │   │   └── lay-tag/      # 标签页
│   │   └── index.vue         # 布局主组件
│   ├── plugins/              # 插件配置
│   │   ├── element-plus.ts   # Element Plus 配置
│   │   ├── i18n.ts           # 国际化配置
│   │   └── ...               # 其他插件
│   ├── router/               # 路由配置
│   │   ├── modules/          # 路由模块
│   │   │   ├── home.ts       # 首页路由
│   │   │   ├── system.ts     # 系统管理路由
│   │   │   ├── components.ts # 组件示例路由
│   │   │   └── ...           # 其他路由模块
│   │   ├── index.ts          # 路由主文件
│   │   └── utils.ts          # 路由工具函数
│   ├── store/                # Pinia 状态管理
│   │   ├── modules/          # 状态模块
│   │   │   ├── user.ts       # 用户状态
│   │   │   ├── permission.ts # 权限状态
│   │   │   ├── multiTags.ts  # 标签页状态
│   │   │   └── settings.ts   # 系统设置状态
│   │   └── index.ts          # Store 主文件
│   ├── style/                # 全局样式
│   │   ├── reset.scss        # 样式重置
│   │   ├── index.scss        # 主样式文件
│   │   ├── element-plus.scss # Element Plus 样式覆盖
│   │   ├── tailwind.css      # Tailwind CSS
│   │   └── variables.scss    # CSS 变量定义
│   ├── utils/                # 工具函数
│   │   ├── auth.ts           # 认证工具
│   │   ├── http/             # HTTP 请求封装
│   │   │   ├── index.ts      # Axios 封装
│   │   │   └── types.ts      # 类型定义
│   │   ├── localforage/      # 本地存储封装
│   │   ├── progress/         # 进度条工具
│   │   ├── responsive.ts     # 响应式存储
│   │   ├── tree.ts           # 树形数据处理
│   │   └── index.ts          # 通用工具函数
│   ├── views/                # 页面视图
│   │   ├── able/             # 功能演示
│   │   ├── components/       # 组件示例
│   │   ├── editor/           # 编辑器示例
│   │   ├── error/            # 错误页面
│   │   ├── iframe/           # 内嵌页面
│   │   ├── login/            # 登录页面
│   │   ├── system/           # 系统管理
│   │   │   ├── user/         # 用户管理
│   │   │   ├── role/         # 角色管理
│   │   │   ├── menu/         # 菜单管理
│   │   │   └── dept/         # 部门管理
│   │   ├── table/            # 表格示例
│   │   ├── tabs/             # 标签页示例
│   │   ├── welcome/          # 欢迎页
│   │   └── ...               # 其他页面
│   ├── App.vue               # 根组件
│   └── main.ts               # 应用入口
├── types/                     # TypeScript 类型声明
│   ├── global.d.ts           # 全局类型
│   ├── env.d.ts              # 环境变量类型
│   └── shims-vue.d.ts        # Vue 类型扩展
├── .env                       # 环境变量（通用）
├── .env.development          # 开发环境变量
├── .env.production           # 生产环境变量
├── .env.staging              # 预发布环境变量
├── .eslintrc.js              # ESLint 配置
├── .prettierrc.js            # Prettier 配置
├── .stylelintrc.js           # Stylelint 配置
├── commitlint.config.js      # Commitlint 配置
├── package.json              # 项目依赖配置
├── pnpm-lock.yaml            # pnpm 锁文件
├── tsconfig.json             # TypeScript 配置
├── vite.config.ts            # Vite 配置
└── README.md                 # 项目说明文档
```

---

## 🎨 核心功能

### 1. 权限管理系统

#### 1.1 RBAC 权限模型

```typescript
// 权限模型结构
User (用户)
  ↓ 1:N
Role (角色)
  ↓ N:N
Permission (权限)
  ↓ 1:N
Resource (资源：菜单、按钮、API)
```

#### 1.2 动态路由加载

```typescript
// src/router/utils.ts
// 根据权限动态加载路由
export async function initRouter() {
  // 1. 获取用户权限
  const { roles } = useUserStore();

  // 2. 加载路由配置
  const routes = await getAsyncRoutes({ roles });

  // 3. 格式化路由
  const formattedRoutes = formatTwoStageRoutes(routes);

  // 4. 动态添加路由
  formattedRoutes.forEach(route => {
    router.addRoute(route);
  });

  // 5. 更新权限状态
  usePermissionStore().handleRoutes(routes);
}
```

#### 1.3 按钮权限控制

```vue
<!-- 方式一：使用权限组件 -->
<re-auth :value="['btn:add', 'btn:edit']">
  <el-button type="primary">新增</el-button>
</re-auth>

<!-- 方式二：使用权限指令 -->
<el-button v-perms="['btn:delete']" type="danger">删除</el-button>

<!-- 方式三：使用权限函数 -->
<el-button v-if="hasPerms(['btn:export'])" type="warning">导出</el-button>
```

### 2. 状态管理

#### 2.1 用户状态管理

```typescript
// src/store/modules/user.ts
export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: null,      // 用户信息
    token: "",           // 访问令牌
    refreshToken: "",    // 刷新令牌
    roles: [],           // 用户角色
    permissions: []      // 用户权限
  }),

  actions: {
    // 登录
    async login(data) {
      const res = await loginApi(data);
      this.setToken(res.token);
      this.setUserInfo(res.userInfo);
      return res;
    },

    // 登出
    async logout() {
      await logoutApi();
      this.resetState();
      router.push("/login");
    },

    // 获取用户信息
    async getUserInfo() {
      const res = await getUserInfoApi();
      this.setUserInfo(res);
      return res;
    }
  }
});
```

#### 2.2 标签页管理

```typescript
// src/store/modules/multiTags.ts
export const useMultiTagsStore = defineStore("multiTags", {
  state: () => ({
    visitedViews: [],    // 已访问的页面
    cachedViews: []      // 需要缓存的页面
  }),

  actions: {
    // 添加标签
    addView(view) {
      this.addVisitedView(view);
      this.addCachedView(view);
    },

    // 关闭标签
    closeView(view) {
      this.delVisitedView(view);
      this.delCachedView(view);
    },

    // 关闭其他标签
    closeOthersView(view) {
      this.delOthersVisitedViews(view);
      this.delOthersCachedViews(view);
    },

    // 关闭所有标签
    closeAllViews() {
      this.delAllVisitedViews();
      this.delAllCachedViews();
    }
  }
});
```

### 3. HTTP 请求封装

#### 3.1 请求拦截器

```typescript
// src/utils/http/index.ts
class PureHttp {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  // 请求拦截
  private httpInterceptorsRequest(): void {
    this.axiosInstance.interceptors.request.use(
      config => {
        // 添加 Token
        const token = getToken();
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }

        // 添加时间戳防止缓存
        config.params = {
          ...config.params,
          t: Date.now()
        };

        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  // 响应拦截
  private httpInterceptorsResponse(): void {
    this.axiosInstance.interceptors.response.use(
      response => {
        const { code, data, message } = response.data;

        // Token 过期处理
        if (code === 401) {
          this.handleTokenExpired();
          return Promise.reject(new Error("Token expired"));
        }

        // 业务错误处理
        if (code !== 200) {
          ElMessage.error(message || "请求失败");
          return Promise.reject(new Error(message));
        }

        return data;
      },
      error => {
        // 网络错误处理
        this.handleNetworkError(error);
        return Promise.reject(error);
      }
    );
  }
}
```

### 4. 表格功能

#### 4.1 高级表格特性

- **虚拟滚动** - 渲染大数据量（10万+ 行）
- **单元格编辑** - 支持内联编辑
- **行列冻结** - 固定表头和列
- **拖拽排序** - 行列拖拽调整
- **筛选排序** - 高级筛选和排序
- **导入导出** - Excel/CSV 数据处理
- **自适应高度** - 自动计算表格高度

#### 4.2 表格示例

```vue
<template>
  <pure-table
    :data="tableData"
    :columns="columns"
    :pagination="pagination"
    :loading="loading"
    @selection-change="handleSelectionChange"
    @row-click="handleRowClick"
  >
    <!-- 自定义列 -->
    <template #operation="{ row }">
      <el-button type="primary" size="small" @click="handleEdit(row)">
        编辑
      </el-button>
      <el-button type="danger" size="small" @click="handleDelete(row)">
        删除
      </el-button>
    </template>
  </pure-table>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { PureTable } from "@pureadmin/table";

const loading = ref(false);
const tableData = ref([]);

const columns = [
  { type: "selection" },
  { label: "ID", prop: "id", width: 80 },
  { label: "姓名", prop: "name" },
  { label: "年龄", prop: "age" },
  { label: "操作", slot: "operation", width: 200 }
];

const pagination = reactive({
  total: 0,
  currentPage: 1,
  pageSize: 10
});
</script>
```

### 5. 国际化支持

#### 5.1 国际化配置

```typescript
// src/plugins/i18n.ts
import { createI18n } from "vue-i18n";

// 导入语言包
import zhCN from "../locales/zh-CN.yaml";
import en from "../locales/en.yaml";

const i18n = createI18n({
  legacy: false,
  locale: "zh-CN",
  fallbackLocale: "en",
  messages: {
    "zh-CN": zhCN,
    "en": en
  }
});

export default i18n;
```

#### 5.2 使用国际化

```vue
<template>
  <div>
    <!-- 模板中使用 -->
    <h1>{{ t("home.welcome") }}</h1>
    <p>{{ t("home.description", { name: userName }) }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

// 切换语言
const switchLanguage = (lang: string) => {
  locale.value = lang;
};
</script>
```

---

## 💻 开发指南

### 新增页面

#### 1. 创建页面文件

```bash
src/views/example/
├── index.vue         # 页面主文件
├── components/       # 页面组件
│   ├── Form.vue
│   └── Table.vue
├── hooks/            # 页面 Hooks
│   └── useTable.ts
└── types.ts          # 类型定义
```

#### 2. 添加路由配置

```typescript
// src/router/modules/example.ts
export default {
  path: "/example",
  redirect: "/example/index",
  meta: {
    icon: "ri:example-line",
    title: "示例页面",
    rank: 10
  },
  children: [
    {
      path: "/example/index",
      name: "Example",
      component: () => import("@/views/example/index.vue"),
      meta: {
        title: "示例页面",
        roles: ["admin", "common"]  // 权限配置
      }
    }
  ]
} satisfies RouteConfigsTable;
```

#### 3. 添加 API 接口

```typescript
// src/api/example.ts
import { http } from "@/utils/http";

export interface ExampleParams {
  page: number;
  size: number;
}

export interface ExampleResult {
  list: any[];
  total: number;
}

// 获取列表
export const getExampleList = (params: ExampleParams) => {
  return http.request<ExampleResult>("get", "/example/list", { params });
};

// 新增数据
export const createExample = (data: any) => {
  return http.request("post", "/example/create", { data });
};

// 更新数据
export const updateExample = (id: number, data: any) => {
  return http.request("put", `/example/${id}`, { data });
};

// 删除数据
export const deleteExample = (id: number) => {
  return http.request("delete", `/example/${id}`);
};
```

### 新增组件

#### 1. 创建组件

```vue
<!-- src/components/ReExample/index.vue -->
<template>
  <div class="re-example">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  visible?: boolean;
}

interface Emits {
  (e: "update:visible", value: boolean): void;
  (e: "confirm"): void;
}

const props = withDefaults(defineProps<Props>(), {
  title: "默认标题",
  visible: false
});

const emit = defineEmits<Emits>();

// 组件逻辑...
</script>

<style scoped lang="scss">
.re-example {
  // 样式...
}
</style>
```

#### 2. 导出组件

```typescript
// src/components/ReExample/index.ts
import ReExample from "./index.vue";

export { ReExample };
export default ReExample;
```

### 代码规范

#### 1. 命名规范

```typescript
// 文件命名：kebab-case
user-management.vue
user-api.ts

// 组件命名：PascalCase
const UserForm = defineComponent({ ... });

// 变量命名：camelCase
const userName = ref("");
const getUserInfo = () => { ... };

// 常量命名：UPPER_SNAKE_CASE
const API_BASE_URL = "https://api.example.com";
const MAX_RETRY_COUNT = 3;

// 类命名：PascalCase
class HttpService { ... }

// 接口命名：PascalCase + I 前缀
interface IUserInfo { ... }
```

#### 2. 注释规范

```typescript
/**
 * 用户登录
 * @param data - 登录表单数据
 * @param data.username - 用户名
 * @param data.password - 密码
 * @returns Promise<LoginResult> 登录结果
 * @example
 * const result = await login({ username: "admin", password: "123456" });
 */
export const login = (data: LoginParams): Promise<LoginResult> => {
  return http.request("post", "/login", { data });
};
```

#### 3. 提交规范

遵循 [Angular 提交规范](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)：

```bash
# 格式
<type>(<scope>): <subject>

# 类型（type）
feat:      新功能
fix:       修复 Bug
docs:      文档变更
style:     代码格式（不影响功能）
refactor:  重构（既不是新增功能，也不是修复 Bug）
perf:      性能优化
test:      测试相关
chore:     构建过程或辅助工具的变动
revert:    回滚提交

# 示例
feat(user): 添加用户管理模块
fix(auth): 修复登录 Token 过期问题
docs(readme): 更新安装说明
refactor(api): 重构 HTTP 请求封装
```

---

## 🚀 构建部署

### 本地构建

```bash
# 生产环境构建
pnpm build

# 预发布环境构建
pnpm build:staging

# 构建并生成分析报告
pnpm report
```

构建产物位于 `dist/` 目录。

### 预览构建结果

```bash
# 构建并预览
pnpm preview:build

# 仅预览（需先构建）
pnpm preview
```

### Docker 部署

#### 1. 构建镜像

```bash
# 使用项目根目录的 Dockerfile
docker build -t vue-pure-admin:latest .

# 指定 Dockerfile 路径
docker build -f ./Dockerfile -t vue-pure-admin:1.0.0 .
```

#### 2. 运行容器

```bash
# 基本运行
docker run -d -p 8080:80 --name pure-admin vue-pure-admin:latest

# 挂载配置文件
docker run -d \
  -p 8080:80 \
  -v $(pwd)/config:/app/config \
  --name pure-admin \
  vue-pure-admin:latest

# 设置环境变量
docker run -d \
  -p 8080:80 \
  -e NODE_ENV=production \
  -e API_BASE_URL=https://api.example.com \
  --name pure-admin \
  vue-pure-admin:latest
```

#### 3. Docker Compose

```yaml
# docker-compose.yml
version: "3.8"

services:
  web:
    image: vue-pure-admin:latest
    container_name: pure-admin
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=production
      - API_BASE_URL=https://api.example.com
    volumes:
      - ./config:/app/config
      - ./logs:/var/log/nginx
    restart: unless-stopped
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

启动服务：

```bash
docker-compose up -d
```

### Nginx 部署

#### 1. 基本配置

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /usr/share/nginx/html;
    index index.html;

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript
               application/json application/javascript application/xml+rss
               application/rss+xml application/x-font-ttf
               image/svg+xml application/vnd.ms-fontobject;

    # 路由配置（History 模式）
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API 代理
    location /api {
        proxy_pass http://backend-server:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### 2. HTTPS 配置

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # ... 其他配置同上 ...
}

# HTTP 重定向到 HTTPS
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}
```

### 持续集成/持续部署（CI/CD）

#### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "20"

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 9

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy to Server
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          SOURCE: "dist/"
          TARGET: "/usr/share/nginx/html"
```

---

## ✅ 质量保障

### 代码质量检查

#### 1. ESLint 代码检查

```bash
# 检查代码
pnpm lint:eslint

# 自动修复
pnpm lint:eslint --fix
```

配置文件：`eslint.config.js`

```javascript
import eslintJs from "@eslint/js";
import eslintPluginVue from "eslint-plugin-vue";
import typescriptEslint from "typescript-eslint";

export default [
  eslintJs.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...eslintPluginVue.configs["flat/recommended"],
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
  }
];
```

#### 2. Prettier 代码格式化

```bash
# 格式化代码
pnpm lint:prettier
```

配置文件：`.prettierrc.js`

```javascript
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  arrowParens: "avoid",
  endOfLine: "auto"
};
```

#### 3. Stylelint 样式检查

```bash
# 检查样式
pnpm lint:stylelint
```

配置文件：`.stylelintrc.js`

```javascript
module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended"
  ],
  rules: {
    "selector-class-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep", "global"]
      }
    ]
  }
};
```

#### 4. TypeScript 类型检查

```bash
# 类型检查
pnpm typecheck
```

### Git 提交检查

#### Husky + Lint-staged

```json
// package.json
{
  "lint-staged": {
    "*.{js,ts,vue,tsx}": ["eslint --fix"],
    "*.{css,scss,vue,html}": ["stylelint --fix"],
    "*.{js,ts,json,tsx,css,scss,vue,html,md}": ["prettier --write"]
  }
}
```

`.husky/pre-commit`:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged
```

#### Commitlint

`commitlint.config.js`:

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "build"
      ]
    ]
  }
};
```

---

## ⚡ 性能优化

### 构建优化

#### 1. 代码分割

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // 手动分割代码块
        manualChunks: {
          "vue-vendor": ["vue", "vue-router", "pinia"],
          "element-plus": ["element-plus"],
          "echarts": ["echarts"]
        }
      }
    }
  }
});
```

#### 2. 依赖预构建

```typescript
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "pinia",
      "element-plus",
      "@vueuse/core",
      "axios"
    ],
    exclude: ["@iconify/vue"]
  }
});
```

#### 3. 压缩优化

```bash
# 开启 Gzip 压缩
VITE_COMPRESSION = "gzip"

# 开启 Brotli 压缩（更高压缩率）
VITE_COMPRESSION = "brotli"

# 同时开启两种压缩
VITE_COMPRESSION = "both"
```

#### 4. CDN 加速

```bash
# 启用 CDN
VITE_CDN = true
```

配置 CDN 资源：

```typescript
// build/cdn.ts
export const cdn = {
  css: [
    "https://unpkg.com/element-plus@2.11.4/dist/index.css"
  ],
  js: [
    "https://unpkg.com/vue@3.5.22/dist/vue.global.prod.js",
    "https://unpkg.com/vue-router@4.5.1/dist/vue-router.global.prod.js",
    "https://unpkg.com/pinia@3.0.3/dist/pinia.iife.prod.js",
    "https://unpkg.com/element-plus@2.11.4/dist/index.full.min.js"
  ]
};
```

### 运行时优化

#### 1. 路由懒加载

```typescript
// 路由组件懒加载
const routes = [
  {
    path: "/user",
    component: () => import("@/views/user/index.vue")
  }
];
```

#### 2. 组件异步加载

```vue
<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// 异步组件
const AsyncComp = defineAsyncComponent(() =>
  import("./HeavyComponent.vue")
);
</script>
```

#### 3. 虚拟滚动

```vue
<template>
  <vue-virtual-scroller
    :items="items"
    :item-size="50"
    key-field="id"
  >
    <template #default="{ item }">
      <div class="item">{{ item.name }}</div>
    </template>
  </vue-virtual-scroller>
</template>
```

#### 4. 图片懒加载

```vue
<template>
  <img v-lazy="imageUrl" alt="lazy image" />
</template>
```

### 网络优化

#### 1. HTTP/2 支持

Nginx 配置：

```nginx
listen 443 ssl http2;
```

#### 2. 资源预加载

```html
<!-- index.html -->
<head>
  <!-- DNS 预解析 -->
  <link rel="dns-prefetch" href="https://api.example.com" />

  <!-- 预连接 -->
  <link rel="preconnect" href="https://api.example.com" />

  <!-- 预加载关键资源 -->
  <link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin />
</head>
```

### 性能监控

```typescript
// 性能监控
if (import.meta.env.PROD) {
  // 首屏加载时间
  window.addEventListener("load", () => {
    const timing = performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    console.log(`页面加载时间: ${loadTime}ms`);
  });

  // 路由切换性能
  router.afterEach(() => {
    const startTime = performance.now();
    nextTick(() => {
      const duration = performance.now() - startTime;
      console.log(`路由切换耗时: ${duration}ms`);
    });
  });
}
```

---

## ⚠️ 风险评估

### 技术风险

| 风险类型 | 风险等级 | 风险描述 | 缓解措施 |
|---------|---------|---------|---------|
| **依赖版本风险** | 🟡 中 | Vite 7.1.9 版本可能不稳定 | 验证版本来源，必要时降级到 7.0 |
| **浏览器兼容性** | 🟢 低 | 仅支持现代浏览器 | 明确浏览器支持范围，添加兼容性检测 |
| **TypeScript 升级** | 🟢 低 | TS 5.9 新特性可能有兼容性问题 | 充分测试，渐进式采用新特性 |
| **第三方库更新** | 🟡 中 | 依赖库更新可能引入 Breaking Changes | 锁定版本号，更新前充分测试 |

### 安全风险

| 风险类型 | 风险等级 | 风险描述 | 缓解措施 |
|---------|---------|---------|---------|
| **XSS 攻击** | 🟡 中 | 用户输入未正确转义 | 使用 Vue 模板语法，避免 v-html，输入验证 |
| **CSRF 攻击** | 🟡 中 | 跨站请求伪造 | Token 验证，Same-Site Cookie |
| **敏感信息泄露** | 🔴 高 | Token、密钥暴露 | 环境变量管理，不提交敏感信息到仓库 |
| **SQL 注入** | 🟢 低 | 后端 API 风险 | 后端参数验证，使用 ORM |
| **依赖漏洞** | 🟡 中 | 第三方库存在安全漏洞 | 定期运行 `pnpm audit`，及时更新 |

### 性能风险

| 风险类型 | 风险等级 | 风险描述 | 缓解措施 |
|---------|---------|---------|---------|
| **首屏加载慢** | 🟡 中 | 打包体积过大 | 代码分割、懒加载、CDN 加速 |
| **内存泄漏** | 🟡 中 | 组件未正确销毁 | 规范使用生命周期，及时清理监听 |
| **大数据渲染** | 🟡 中 | 大列表渲染卡顿 | 虚拟滚动、分页加载 |
| **并发请求过多** | 🟢 低 | API 请求并发过高 | 请求合并、防抖节流 |

### 运维风险

| 风险类型 | 风险等级 | 风险描述 | 缓解措施 |
|---------|---------|---------|---------|
| **服务器故障** | 🟡 中 | 单点故障 | 负载均衡、容器化部署 |
| **构建失败** | 🟢 低 | CI/CD 流程中断 | 完善构建脚本，错误告警 |
| **配置错误** | 🟡 中 | 环境变量配置错误 | 配置模板，自动化校验 |
| **缓存问题** | 🟢 低 | 静态资源缓存导致更新失败 | 文件名 Hash、Cache-Control 设置 |

### 风险应对策略

#### 1. 监控告警

```typescript
// 全局错误监听
window.addEventListener("error", event => {
  // 上报错误
  reportError({
    message: event.message,
    stack: event.error?.stack,
    url: location.href
  });
});

// Vue 错误捕获
app.config.errorHandler = (err, instance, info) => {
  console.error("Vue Error:", err, info);
  reportError({
    message: err.message,
    stack: err.stack,
    component: instance?.$options.name
  });
};
```

#### 2. 降级方案

```typescript
// API 降级
const apiWithFallback = async () => {
  try {
    return await primaryApi();
  } catch (error) {
    console.warn("Primary API failed, using fallback");
    return await fallbackApi();
  }
};

// 功能降级
const featureFlag = {
  advancedSearch: true,
  aiRecommendation: false  // 关闭不稳定功能
};
```

#### 3. 灰度发布

```nginx
# Nginx 灰度配置
upstream backend {
    server backend-v1.example.com weight=90;
    server backend-v2.example.com weight=10;
}
```

---

## 🔧 维护计划

### 日常维护

#### 每日检查

- [ ] 查看应用运行日志
- [ ] 监控系统性能指标
- [ ] 检查错误告警
- [ ] 备份关键数据

#### 每周检查

- [ ] 更新依赖包（npm audit）
- [ ] 代码质量检查
- [ ] 性能测试
- [ ] 安全扫描

#### 每月检查

- [ ] 依赖版本评估
- [ ] 技术债务评审
- [ ] 性能优化复盘
- [ ] 用户反馈汇总

### 版本更新

#### 依赖更新策略

```bash
# 检查过期依赖
pnpm outdated

# 交互式更新（推荐）
pnpm update -i

# 更新所有依赖到最新（谨慎使用）
pnpm update --latest

# 更新后测试
pnpm typecheck && pnpm lint && pnpm build
```

#### 版本发布流程

1. **准备阶段**
   ```bash
   # 拉取最新代码
   git checkout main
   git pull origin main

   # 创建发布分支
   git checkout -b release/v1.1.0
   ```

2. **版本更新**
   ```bash
   # 更新版本号（自动更新 package.json 和 CHANGELOG）
   npm version patch  # 1.0.0 -> 1.0.1
   npm version minor  # 1.0.0 -> 1.1.0
   npm version major  # 1.0.0 -> 2.0.0
   ```

3. **测试验证**
   ```bash
   pnpm typecheck
   pnpm lint
   pnpm build
   pnpm preview
   ```

4. **发布上线**
   ```bash
   # 合并到主分支
   git checkout main
   git merge release/v1.1.0

   # 打标签
   git tag v1.1.0

   # 推送代码和标签
   git push origin main
   git push origin v1.1.0
   ```

### 数据备份

#### 配置文件备份

```bash
# 备份关键配置
backup/
├── .env.production
├── nginx.conf
├── package.json
└── vite.config.ts
```

#### 本地存储备份

```typescript
// 导出本地存储数据
const exportLocalStorage = () => {
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    data[key] = localStorage.getItem(key);
  }

  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `storage-backup-${Date.now()}.json`;
  a.click();
};
```

### 故障恢复

#### 快速回滚

```bash
# 回滚到上一个版本
git revert HEAD
git push

# 回滚到指定版本
git reset --hard <commit-hash>
git push -f origin main  # 谨慎使用

# Docker 回滚
docker ps -a                          # 查看历史容器
docker start <old-container-id>       # 启动旧版本
docker stop <current-container-id>    # 停止当前版本
```

#### 数据恢复

```bash
# 从备份恢复
cp backup/.env.production .env.production
cp backup/nginx.conf /etc/nginx/nginx.conf

# 重启服务
docker-compose restart
```

---

## ❓ 常见问题

### 安装问题

#### Q1: pnpm install 失败

**问题描述**：依赖安装失败，提示网络错误或权限问题

**解决方案**：

```bash
# 1. 清除缓存
pnpm store prune

# 2. 使用国内镜像
pnpm config set registry https://registry.npmmirror.com/

# 3. 重新安装
pnpm install

# 4. 如果仍然失败，尝试
pnpm clean:cache
```

#### Q2: Node 版本不兼容

**问题描述**：Node.js 版本过低

**解决方案**：

```bash
# 使用 nvm 管理 Node 版本
nvm install 20.19.0
nvm use 20.19.0

# 或升级到最新 LTS
nvm install --lts
nvm use --lts
```

### 开发问题

#### Q3: 热更新不生效

**问题描述**：修改代码后页面不自动刷新

**解决方案**：

```bash
# 1. 检查 Vite 配置
# vite.config.ts
server: {
  hmr: true,
  watch: {
    usePolling: true  // WSL2 环境需要
  }
}

# 2. 重启开发服务器
pnpm dev
```

#### Q4: 路由跳转 404

**问题描述**：页面刷新后出现 404

**解决方案**：

```bash
# Hash 模式（推荐）
VITE_ROUTER_HISTORY = "hash"

# History 模式需配置服务器
# Nginx 配置
location / {
    try_files $uri $uri/ /index.html;
}
```

#### Q5: 跨域问题

**问题描述**：API 请求被 CORS 策略阻止

**解决方案**：

```typescript
// vite.config.ts
server: {
  proxy: {
    "/api": {
      target: "http://backend-server:3000",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, "")
    }
  }
}
```

### 构建问题

#### Q6: 构建内存溢出

**问题描述**：打包时提示内存不足

**解决方案**：

```bash
# 增加 Node.js 内存限制
NODE_OPTIONS=--max-old-space-size=8192 pnpm build

# 或修改 package.json
"scripts": {
  "build": "NODE_OPTIONS=--max-old-space-size=8192 vite build"
}
```

#### Q7: 打包体积过大

**问题描述**：dist 文件夹过大（> 10MB）

**解决方案**：

```bash
# 1. 启用 CDN
VITE_CDN = true

# 2. 启用压缩
VITE_COMPRESSION = "brotli"

# 3. 分析打包体积
pnpm report

# 4. 按需引入组件
import { ElButton } from "element-plus";
```

### 部署问题

#### Q8: Nginx 部署后页面空白

**问题描述**：部署后访问页面空白，控制台报错

**解决方案**：

```nginx
# 检查静态资源路径
location / {
    root /usr/share/nginx/html;
    index index.html;
    try_files $uri $uri/ /index.html;
}

# 检查权限
chmod -R 755 /usr/share/nginx/html
```

#### Q9: Docker 容器启动失败

**问题描述**：容器启动后立即退出

**解决方案**：

```bash
# 查看容器日志
docker logs <container-id>

# 进入容器调试
docker run -it vue-pure-admin /bin/sh

# 检查 Dockerfile
# 确保 CMD 命令正确
CMD ["nginx", "-g", "daemon off;"]
```

### 权限问题

#### Q10: 按钮权限不生效

**问题描述**：v-perms 指令无法隐藏按钮

**解决方案**：

```typescript
// 1. 确认用户权限已加载
const { permissions } = useUserStore();
console.log("用户权限:", permissions);

// 2. 检查权限配置
// router/modules/xxx.ts
meta: {
  permissions: ["btn:add", "btn:edit"]
}

// 3. 使用权限指令
<el-button v-perms="['btn:add']">新增</el-button>
```

---

## 🤝 贡献指南

我们非常欢迎您的贡献！无论是报告 Bug、提出新功能建议，还是提交代码改进，都是对项目的巨大帮助。

### 参与方式

#### 1. 报告 Bug

[提交 Issue](https://github.com/pure-admin/vue-pure-admin/issues/new/choose)

**请包含以下信息**：
- Bug 描述和复现步骤
- 预期行为和实际行为
- 环境信息（浏览器、Node 版本等）
- 截图或错误日志

#### 2. 功能建议

[提交功能请求](https://github.com/pure-admin/vue-pure-admin/issues/new/choose)

**请说明**：
- 功能描述和使用场景
- 预期效果
- 是否愿意参与开发

#### 3. 提交代码

**步骤**：

```bash
# 1. Fork 项目
# 在 GitHub 上点击 Fork 按钮

# 2. 克隆到本地
git clone https://github.com/YOUR_USERNAME/vue-pure-admin.git

# 3. 创建功能分支
git checkout -b feat/your-feature

# 4. 提交代码
git add .
git commit -m "feat(module): add new feature"

# 5. 推送到远程
git push origin feat/your-feature

# 6. 创建 Pull Request
# 在 GitHub 上创建 PR
```

**代码要求**：
- ✅ 遵循项目代码规范
- ✅ 通过 ESLint 检查
- ✅ 添加必要的注释和文档
- ✅ 通过现有测试
- ✅ 提交信息符合规范

### 特别贡献者

非常感谢以下开发者对项目的杰出贡献 ❤️

| 贡献人 | 贡献内容 |
|:-----:|:--------:|
| [hb0730](https://github.com/hb0730) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=hb0730) |
| [o-cc](https://github.com/o-cc) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=o-cc) |
| [yj-liuzepeng](https://github.com/yj-liuzepeng) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=yj-liuzepeng) |
| [skyline523](https://github.com/skyline523) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=skyline523) |
| [shark-lajiao](https://github.com/shark-lajiao) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=shark-lajiao) |
| [WitMiao](https://github.com/WitMiao) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=WitMiao) |
| [QFifteen](https://github.com/QFifteen) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=QFifteen) |
| [edgexie](https://github.com/edgexie) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=edgexie) |
| [way-jm](https://github.com/way-jm) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=way-jm) |
| [simple-hui](https://github.com/simple-hui) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=simple-hui) |
| [tinysimple](https://github.com/tinysimple) | [查看代码](https://github.com/pure-admin/vue-pure-admin/commits?author=tinysimple) |

---

## 🌐 浏览器支持

本地开发推荐使用 **Chrome**、**Edge**、**Firefox** 浏览器。

**详细兼容性**：
- [Vue 3 浏览器支持](https://cn.vuejs.org/about/faq.html#what-browsers-does-vue-support)
- [Vite 浏览器兼容性](https://cn.vitejs.dev/guide/build#browser-compatibility)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| :-: | :-: | :-: | :-: | :-: |
| ❌ 不支持 | 最新 2 个版本 | 最新 2 个版本 | 最新 2 个版本 | 最新 2 个版本 |

---

## 📝 更新日志

查看 [CHANGELOG.zh_CN.md](./CHANGELOG.zh_CN.md) 了解项目更新历史。

---

## 👨‍💻 维护者

- [xiaoxian521](https://github.com/xiaoxian521)
- [Ten-K](https://github.com/Ten-K)

---

## 📄 许可证

**完全免费开源**

[MIT © 2020-present, pure-admin](./LICENSE)

---

## 💖 支持项目

如果这个项目对您有帮助，请考虑：

- ⭐ 点亮 Star
- 🔀 Fork 项目
- 🐛 报告 Bug
- 💡 提出建议
- 📖 完善文档
- 🎉 分享给更多人

---

## 🌟 Star History

非常感谢每一位支持者 :heart:

[![Stargazers repo roster for @pure-admin/vue-pure-admin](https://bytecrank.com/nastyox/reporoster/php/stargazersSVG.php?user=pure-admin&repo=vue-pure-admin)](https://github.com/pure-admin/vue-pure-admin/stargazers)

## 🍴 Fork History

感谢认真学习的小伙伴们 :heart:

[![Forkers repo roster for @pure-admin/vue-pure-admin](https://bytecrank.com/nastyox/reporoster/php/forkersSVG.php?user=pure-admin&repo=vue-pure-admin)](https://github.com/pure-admin/vue-pure-admin/network/members)

---

## 📞 联系我们

- **问题反馈**：[GitHub Issues](https://github.com/pure-admin/vue-pure-admin/issues)
- **官方文档**：[https://pure-admin.cn/](https://pure-admin.cn/)
- **在线演示**：[https://pure-admin.github.io/vue-pure-admin](https://pure-admin.github.io/vue-pure-admin)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/pure-admin">Pure Admin Team</a>
</p>

<p align="center">
  <sub>项目最后更新时间：2025-10-30</sub>
</p>

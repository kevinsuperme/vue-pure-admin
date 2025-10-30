# 常见问题解答 (FAQ)

> Vue3 Element Admin 开发过程中的常见问题与解决方案

---

## 📋 目录

1. [开发环境](#开发环境)
2. [Vue 3 & Composition API](#vue-3--composition-api)
3. [TypeScript](#typescript)
4. [Element Plus](#element-plus)
5. [Pinia 状态管理](#pinia-状态管理)
6. [路由与权限](#路由与权限)
7. [API 调用](#api-调用)
8. [样式与布局](#样式与布局)
9. [构建与部署](#构建与部署)
10. [性能优化](#性能优化)

---

## 开发环境

### Q: 项目启动失败，报错 "Cannot find module"？

**A:** 检查以下步骤：

```bash
# 1. 清除依赖
rm -rf node_modules package-lock.json

# 2. 重新安装
pnpm install

# 3. 如果使用 npm
npm install --legacy-peer-deps

# 4. 检查 Node 版本（推荐 >= 18.0.0）
node -v
```

### Q: 开发服务器启动慢？

**A:** 优化 Vite 配置：

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: true,
    // 预构建依赖
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia', 'element-plus'],
    },
  },
})
```

### Q: 热更新 (HMR) 不生效？

**A:** 检查：
1. 文件保存是否成功
2. 浏览器控制台是否有错误
3. 是否修改了 Vite 配置后未重启

```bash
# 重启开发服务器
pnpm dev
```

---

## Vue 3 & Composition API

### Q: ref 和 reactive 的区别？何时使用？

**A:**

```typescript
// ✅ ref - 推荐用于基本类型和单个对象
const count = ref(0)
const user = ref<User | null>(null)
console.log(count.value)  // 需要 .value

// ✅ reactive - 推荐用于对象和数组
const form = reactive({
  name: '',
  email: '',
})
console.log(form.name)  // 不需要 .value

// ❌ 避免 - reactive 的解构会失去响应性
const { name } = reactive({ name: 'John' })  // ❌ name 不是响应式

// ✅ 使用 toRefs 解决
const state = reactive({ name: 'John' })
const { name } = toRefs(state)  // ✅ name 是响应式
```

### Q: 为什么修改数据后视图没有更新？

**A:** 常见原因：

```typescript
// ❌ 错误 1: 直接解构 ref 失去响应性
const { value } = ref(0)  // ❌
value++  // 不会触发更新

// ✅ 正确
const count = ref(0)
count.value++

// ❌ 错误 2: 替换整个 reactive 对象
let state = reactive({ count: 0 })
state = { count: 1 }  // ❌ 失去响应性

// ✅ 正确
state.count = 1  // 或使用 Object.assign(state, { count: 1 })

// ❌ 错误 3: 在模板中忘记 .value
<template>
  <div>{{ count }}</div>  <!-- ✅ 模板中自动解包 -->
  <div>{{ count.value }}</div>  <!-- ❌ 不需要 .value -->
</template>
```

### Q: computed 和 method 的区别？

**A:**

```typescript
// ✅ computed - 有缓存，依赖不变不重新计算
const filteredList = computed(() => {
  console.log('Computed called')  // 只在依赖变化时执行
  return list.value.filter(item => item.active)
})

// ❌ method - 无缓存，每次访问都执行
function getFilteredList() {
  console.log('Method called')  // 每次调用都执行
  return list.value.filter(item => item.active)
}

// 推荐：复杂计算使用 computed
```

### Q: watch 不监听到对象内部变化？

**A:**

```typescript
const user = ref({ name: 'John', age: 30 })

// ❌ 默认只监听引用变化
watch(user, (newVal) => {
  console.log('Changed')  // 修改 user.value.age 不会触发
})

// ✅ 使用 deep: true
watch(user, (newVal) => {
  console.log('Changed')  // 修改 user.value.age 会触发
}, { deep: true })

// ✅ 或监听具体属性
watch(() => user.value.age, (newAge) => {
  console.log('Age changed to:', newAge)
})
```

---

## TypeScript

### Q: 如何正确定义组件 Props 类型？

**A:**

```typescript
// ✅ 推荐方式 - 使用 interface
interface Props {
  title: string
  count?: number  // 可选
  user: UserInfo
  onSuccess?: () => void  // 回调函数
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,  // 默认值
  onSuccess: () => {},
})

// ❌ 避免使用 any
interface Props {
  data: any  // ❌ 不要用 any
}

// ✅ 使用具体类型或泛型
interface Props<T = any> {
  data: T | null
}
```

### Q: 如何处理 API 响应类型？

**A:**

```typescript
// ✅ 定义完整的响应类型
export interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}

// ✅ 使用泛型
export function getUserList() {
  return request<ApiResponse<UserInfo[]>>({
    url: '/users',
    method: 'get',
  })
}

// ✅ 组件中使用
async function fetchUsers() {
  const { data } = await getUserList()
  // data 的类型是 UserInfo[]，有完整的类型提示
}
```

### Q: "Type 'xxx' is not assignable to type 'yyy'" 错误？

**A:**

```typescript
// ❌ 类型不匹配
const user: User = {
  id: 1,  // ❌ User.id 是 string 类型
  name: 'John',
}

// ✅ 使用正确的类型
const user: User = {
  id: '1',  // ✅
  name: 'John',
}

// ✅ 或使用类型断言（谨慎使用）
const user = {
  id: 1,
  name: 'John',
} as User

// ✅ 更好的方式：使用类型保护
function isValidUser(data: any): data is User {
  return typeof data.id === 'string' && typeof data.name === 'string'
}
```

---

## Element Plus

### Q: Element Plus 组件样式不生效？

**A:**

```typescript
// 方案 1: 确保导入了样式
// main.ts
import 'element-plus/dist/index.css'

// 方案 2: 检查是否配置了按需导入
// vite.config.ts
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}

// 方案 3: 使用 :deep() 修改组件样式
<style scoped>
:deep(.el-button) {
  margin-left: 10px;
}
</style>
```

### Q: 如何全局配置 Element Plus？

**A:**

```typescript
// main.ts
import { ElMessage } from 'element-plus'

// 全局配置
app.use(ElementPlus, {
  size: 'default',  // 组件默认尺寸
  zIndex: 3000,     // 弹出层初始 z-index
  locale: zhCn,     // 中文语言包
})

// 或配置默认消息
ElMessage.success({ message: '操作成功', duration: 3000 })
```

### Q: 表单验证不触发？

**A:**

```typescript
// ✅ 确保表单项有 prop 属性
<el-form :model="form" :rules="rules">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="form.username" />
  </el-form-item>
</el-form>

// ✅ 规则正确定义
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
})

// ✅ 调用验证方法
const formRef = ref<FormInstance>()
await formRef.value?.validate()
```

---

## Pinia 状态管理

### Q: Pinia store 数据不持久化？

**A:**

```typescript
// 安装插件
pnpm add pinia-plugin-persistedstate

// main.ts
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// store 中配置
export const useUserStore = defineStore('user', {
  state: () => ({ token: '' }),
  persist: {
    key: 'user-store',
    storage: localStorage,
    paths: ['token'],  // 只持久化 token
  },
})
```

### Q: 如何在 Store 外部使用 Store？

**A:**

```typescript
// ❌ 错误 - 在 setup 外部调用
const userStore = useUserStore()  // ❌ 可能报错

export function someFunction() {
  const userStore = useUserStore()  // ❌
}

// ✅ 正确方式 1 - 在函数内部调用
export function someFunction() {
  return () => {
    const userStore = useUserStore()  // ✅
  }
}

// ✅ 正确方式 2 - 传入 pinia 实例
import { getActivePinia } from 'pinia'

export function someFunction() {
  const pinia = getActivePinia()
  if (pinia) {
    const userStore = useUserStore(pinia)
  }
}
```

### Q: Store 数据解构后失去响应性？

**A:**

```typescript
// ❌ 直接解构失去响应性
const { token, userInfo } = useUserStore()  // ❌

// ✅ 使用 storeToRefs
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { token, userInfo } = storeToRefs(userStore)  // ✅ 保持响应性
const { login, logout } = userStore  // ✅ 方法可以直接解构
```

---

## 路由与权限

### Q: 路由跳转不生效？

**A:**

```typescript
// ❌ 错误写法
router.push('/users')  // 可能找不到 router 实例

// ✅ 组件内使用
import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/users')

// ✅ 组件外使用
import router from '@/router'
router.push('/users')
```

### Q: 如何实现权限控制？

**A:**

```typescript
// 路由元信息
{
  path: '/admin',
  meta: {
    roles: ['admin'],  // 需要 admin 角色
    permissions: ['user:edit'],  // 需要特定权限
  }
}

// 路由守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const roles = userStore.roles

  if (to.meta.roles) {
    if (roles.some(role => to.meta.roles.includes(role))) {
      next()
    } else {
      next('/403')
    }
  } else {
    next()
  }
})

// 指令权限控制
// directives/permission.ts
export default {
  mounted(el: HTMLElement, binding: any) {
    const { value } = binding
    const userStore = useUserStore()

    if (!userStore.permissions.includes(value)) {
      el.parentNode?.removeChild(el)
    }
  }
}

// 使用
<el-button v-permission="'user:edit'">编辑</el-button>
```

---

## API 调用

### Q: 接口请求超时？

**A:**

```typescript
// 方案 1: 全局配置
const service = axios.create({
  timeout: 60000,  // 60秒
})

// 方案 2: 单个请求配置
request({
  url: '/large-file',
  method: 'get',
  timeout: 120000,  // 2分钟
})
```

### Q: 如何取消请求？

**A:**

```typescript
import { ref, onBeforeUnmount } from 'vue'
import axios from 'axios'

const controller = ref<AbortController | null>(null)

async function fetchData() {
  // 取消上一个请求
  controller.value?.abort()

  // 创建新控制器
  controller.value = new AbortController()

  try {
    const { data } = await getData({
      signal: controller.value.signal,
    })
    return data
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled')
    }
  }
}

// 组件卸载时取消
onBeforeUnmount(() => {
  controller.value?.abort()
})
```

### Q: 如何处理并发请求？

**A:**

```typescript
// ✅ 使用 Promise.all - 全部成功才返回
async function fetchDashboard() {
  try {
    const [users, orders, stats] = await Promise.all([
      getUserList(),
      getOrderList(),
      getStatistics(),
    ])
    return { users, orders, stats }
  } catch (error) {
    // 任意一个失败就抛出错误
  }
}

// ✅ 使用 Promise.allSettled - 部分失败不影响
async function fetchMultiple() {
  const results = await Promise.allSettled([
    getUserList(),
    getOrderList(),
    getStatistics(),
  ])

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Success ${index}:`, result.value)
    } else {
      console.error(`Failed ${index}:`, result.reason)
    }
  })
}
```

---

## 样式与布局

### Q: Scoped 样式不生效？

**A:**

```vue
<!-- ❌ 错误 -->
<style scoped>
.el-button {
  color: red;  // 不生效，因为 scoped 限制
}
</style>

<!-- ✅ 使用 :deep() -->
<style scoped>
:deep(.el-button) {
  color: red;  // ✅ 生效
}
</style>

<!-- ✅ 或使用全局样式 -->
<style>
.custom-button.el-button {
  color: red;
}
</style>
```

### Q: 如何实现响应式布局？

**A:**

```scss
// 使用 mixin
@mixin respond-to($breakpoint) {
  @if $breakpoint == "mobile" {
    @media (max-width: 768px) {
      @content;
    }
  }
}

.container {
  padding: 20px;

  @include respond-to('mobile') {
    padding: 10px;
  }
}

// 使用 Element Plus 断点
<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
  内容
</el-col>
```

### Q: CSS 变量如何在 JS 中使用？

**A:**

```scss
// variables.module.scss
:export {
  primaryColor: #409eff;
  sidebarWidth: 210px;
}
```

```typescript
// 组件中导入
import variables from '@/styles/variables.module.scss'

console.log(variables.primaryColor)  // '#409eff'
console.log(variables.sidebarWidth)  // '210px'
```

---

## 构建与部署

### Q: 打包后页面空白？

**A:**

```typescript
// 检查 vite.config.ts 的 base 配置
export default defineConfig({
  base: './',  // 相对路径
  // 或
  base: '/your-app-name/',  // 子路径部署
})

// 检查路由模式
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // history 模式需要服务器配置
  // 或
  history: createWebHashHistory(),  // hash 模式无需服务器配置
})
```

### Q: 如何优化打包体积？

**A:**

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    // 分包策略
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus'],
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
        },
      },
    },
    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // 删除 console
        drop_debugger: true,
      },
    },
  },
})

// 使用动态导入
const UserList = () => import('@/views/users/list.vue')
```

### Q: 如何配置环境变量？

**A:**

```bash
# .env.development
VITE_APP_TITLE=开发环境
VITE_APP_BASE_API=/dev-api
VITE_APP_PORT=8080

# .env.production
VITE_APP_TITLE=生产环境
VITE_APP_BASE_API=https://api.example.com
```

```typescript
// 使用
const apiUrl = import.meta.env.VITE_APP_BASE_API
const title = import.meta.env.VITE_APP_TITLE

// TypeScript 类型声明
// env.d.ts
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_BASE_API: string
  readonly VITE_APP_PORT: number
}
```

---

## 性能优化

### Q: 列表渲染卡顿？

**A:**

```vue
<!-- ✅ 使用 key -->
<div v-for="item in list" :key="item.id">
  {{ item.name }}
</div>

<!-- ✅ 虚拟滚动（大列表） -->
<el-table-v2
  :columns="columns"
  :data="largeData"
  :width="700"
  :height="400"
/>

<!-- ✅ 分页加载 -->
<el-pagination
  :total="total"
  :page-size="20"
  @current-change="handlePageChange"
/>
```

### Q: 组件渲染频繁？

**A:**

```typescript
// ✅ 使用 computed 缓存
const filteredList = computed(() => {
  return list.value.filter(item => item.active)
})

// ✅ 使用 v-memo（Vue 3.2+）
<div v-for="item in list" :key="item.id" v-memo="[item.id, item.name]">
  {{ item.name }}
</div>

// ✅ 使用 shallowRef（大数据）
const bigData = shallowRef<LargeDataSet>()
```

### Q: 首屏加载慢？

**A:**

```typescript
// 1. 路由懒加载
const routes = [
  {
    path: '/users',
    component: () => import('@/views/users/index.vue'),
  },
]

// 2. 组件懒加载
const HeavyComponent = defineAsyncComponent(() =>
  import('@/components/HeavyComponent.vue')
)

// 3. 预加载关键资源
<link rel="preload" href="/critical.css" as="style">

// 4. 图片懒加载
<img v-lazy="imageUrl" />
```

---

## 🔗 相关资源

- [项目规则](./project-rules.md)
- [API 调用规范](./api-guidelines.md)
- [状态管理指南](./state-management-guide.md)
- [样式规范](./style-guide.md)
- [快速参考](./quick-reference.md)

---

## 📞 获取帮助

如果问题未在此列出：

1. **查看官方文档**
   - [Vue 3 文档](https://cn.vuejs.org/)
   - [Element Plus 文档](https://element-plus.org/zh-CN/)
   - [Pinia 文档](https://pinia.vuejs.org/zh/)

2. **提交 Issue**
   - 描述问题和重现步骤
   - 提供错误信息和环境信息

3. **团队讨论**
   - 查看团队 Wiki
   - 参加技术分享会

---

**最后更新**: 2025-10-30
**版本**: v1.0.0
**维护者**: 项目团队

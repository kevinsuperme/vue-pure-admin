# TypeScript 开发规范

> Vue3 Element Admin TypeScript 最佳实践与规范

---

## 📋 目录

1. [基础配置](#基础配置)
2. [类型定义规范](#类型定义规范)
3. [接口与类型别名](#接口与类型别名)
4. [泛型使用](#泛型使用)
5. [Vue 3 类型支持](#vue-3-类型支持)
6. [工具类型](#工具类型)
7. [类型守卫](#类型守卫)
8. [最佳实践](#最佳实践)

---

## 基础配置

### tsconfig.json 推荐配置

```json
{
  "compilerOptions": {
    // 目标版本
    "target": "ESNext",
    "module": "ESNext",
    "lib": ["ESNext", "DOM", "DOM.Iterable"],

    // 模块解析
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    // 严格模式
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,

    // 额外检查
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,

    // 其他
    "skipLibCheck": true,
    "isolatedModules": true,
    "jsx": "preserve",

    // 路径映射
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 类型定义规范

### 基础类型

```typescript
// ✅ 推荐 - 使用 TypeScript 原生类型
const name: string = 'John'
const age: number = 30
const isActive: boolean = true
const data: null = null
const value: undefined = undefined

// ✅ 数组类型
const numbers: number[] = [1, 2, 3]
const users: User[] = []
const matrix: number[][] = [[1, 2], [3, 4]]

// ✅ 元组类型
const tuple: [string, number] = ['John', 30]
const point: [x: number, y: number] = [10, 20]  // 带标签

// ✅ 枚举类型
enum UserRole {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

// ✅ 常量枚举（编译时移除）
const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

// ❌ 避免使用 any
const data: any = {}  // ❌ 类型不安全

// ✅ 使用 unknown 替代
const data: unknown = {}
if (typeof data === 'object') {
  // 类型收窄后使用
}
```

### 联合类型与交叉类型

```typescript
// ✅ 联合类型（或）
type Status = 'pending' | 'success' | 'error'
type ID = string | number
type MixedData = string | number | boolean

// ✅ 交叉类型（且）
type User = {
  name: string
}

type WithTimestamp = {
  createdAt: Date
  updatedAt: Date
}

type UserWithTimestamp = User & WithTimestamp

// ✅ 使用示例
const user: UserWithTimestamp = {
  name: 'John',
  createdAt: new Date(),
  updatedAt: new Date(),
}

// ✅ 类型别名
type Callback = (data: any) => void
type AsyncCallback = (data: any) => Promise<void>
type Nullable<T> = T | null
type Optional<T> = T | undefined
```

---

## 接口与类型别名

### Interface vs Type

```typescript
// ✅ Interface - 推荐用于对象结构
interface User {
  id: string
  name: string
  email: string
  age?: number  // 可选属性
  readonly createdAt: Date  // 只读属性
}

// ✅ Type Alias - 推荐用于联合类型、函数类型
type Status = 'active' | 'inactive'
type Callback = (id: string) => void
type ID = string | number

// ✅ Interface 可以扩展
interface AdminUser extends User {
  permissions: string[]
  role: 'admin'
}

// ✅ Interface 可以声明合并
interface User {
  avatar?: string  // 自动合并到 User 接口
}

// ✅ Type 可以使用联合类型
type Role = 'admin' | 'user' | 'guest'

// ✅ Type 可以使用映射类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
```

### 索引签名

```typescript
// ✅ 字符串索引签名
interface StringMap {
  [key: string]: string
}

const map: StringMap = {
  name: 'John',
  email: 'john@example.com',
}

// ✅ 数字索引签名
interface NumberArray {
  [index: number]: number
}

// ✅ 混合类型
interface MixedType {
  name: string  // 固定属性
  [key: string]: string | number  // 索引签名
}

const mixed: MixedType = {
  name: 'John',
  age: 30,
  city: 'New York',
}

// ✅ Record 工具类型（推荐）
type UserMap = Record<string, User>
```

---

## 泛型使用

### 基础泛型

```typescript
// ✅ 泛型函数
function identity<T>(arg: T): T {
  return arg
}

const num = identity<number>(42)
const str = identity<string>('hello')
const user = identity<User>({ id: '1', name: 'John' })

// ✅ 泛型接口
interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}

type UserResponse = ApiResponse<User>
type ListResponse = ApiResponse<User[]>

// ✅ 泛型类
class DataStore<T> {
  private data: T[] = []

  add(item: T): void {
    this.data.push(item)
  }

  get(index: number): T | undefined {
    return this.data[index]
  }

  getAll(): T[] {
    return this.data
  }
}

const userStore = new DataStore<User>()
userStore.add({ id: '1', name: 'John' })
```

### 泛型约束

```typescript
// ✅ extends 约束
interface Lengthwise {
  length: number
}

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length
}

getLength('hello')  // ✅ string 有 length
getLength([1, 2, 3])  // ✅ array 有 length
getLength({ length: 10 })  // ✅ 对象有 length
// getLength(123)  // ❌ number 没有 length

// ✅ keyof 约束
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = { id: '1', name: 'John', age: 30 }
const name = getProperty(user, 'name')  // ✅ 类型: string
// const invalid = getProperty(user, 'invalid')  // ❌ 类型错误

// ✅ 多个类型参数
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 }
}

const merged = merge({ name: 'John' }, { age: 30 })
// merged 类型: { name: string } & { age: number }
```

### 实际应用场景

```typescript
// ✅ API 请求泛型
export function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  return axios(config).then(res => res.data)
}

// 使用
interface UserInfo {
  id: string
  name: string
}

async function fetchUser(id: string) {
  const user = await request<ApiResponse<UserInfo>>({
    url: `/users/${id}`,
    method: 'get',
  })
  // user.data 的类型是 UserInfo
}

// ✅ 分页响应泛型
interface PaginationResponse<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}

type UserListResponse = ApiResponse<PaginationResponse<UserInfo>>

// ✅ 状态管理泛型
interface State<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

function useState<T>(): State<T> {
  return {
    data: null,
    loading: false,
    error: null,
  }
}

const userState = useState<UserInfo>()
```

---

## Vue 3 类型支持

### 组件 Props 类型

```typescript
// ✅ 推荐方式 - defineProps + TypeScript
<script setup lang="ts">
interface Props {
  title: string
  count?: number
  user: UserInfo
  list: string[]
  onSuccess?: (data: any) => void
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  list: () => [],
  onSuccess: () => {},
})
</script>

// ✅ 可选的泛型 Props
<script setup lang="ts" generic="T extends Record<string, any>">
interface Props<T> {
  data: T
  columns: Array<keyof T>
}

const props = defineProps<Props<T>>()
</script>
```

### 组件 Emits 类型

```typescript
<script setup lang="ts">
// ✅ 严格的 Emits 类型
interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'submit', data: FormData): void
  (e: 'delete', id: string): void
}

const emit = defineEmits<Emits>()

// 使用
emit('update:modelValue', 'new value')
emit('submit', formData)
emit('delete', '123')
</script>
```

### Ref 类型

```typescript
import { ref, Ref, computed, ComputedRef } from 'vue'

// ✅ ref 类型推断
const count = ref(0)  // Ref<number>
const name = ref('John')  // Ref<string>

// ✅ ref 显式类型
const user = ref<UserInfo | null>(null)
const list = ref<UserInfo[]>([])

// ✅ computed 类型
const double = computed(() => count.value * 2)  // ComputedRef<number>

const displayName = computed<string>(() => {
  return user.value?.name || 'Unknown'
})

// ✅ 模板引用类型
import type { ComponentPublicInstance } from 'vue'

const inputRef = ref<HTMLInputElement>()
const componentRef = ref<ComponentPublicInstance>()

onMounted(() => {
  inputRef.value?.focus()
  componentRef.value?.$el
})
```

### 组合式函数类型

```typescript
// ✅ 完整的 Composable 类型
import { ref, Ref } from 'vue'

interface UseCounterReturn {
  count: Ref<number>
  increment: () => void
  decrement: () => void
  reset: () => void
}

export function useCounter(initialValue = 0): UseCounterReturn {
  const count = ref(initialValue)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = initialValue
  }

  return {
    count,
    increment,
    decrement,
    reset,
  }
}

// 使用
const { count, increment } = useCounter(10)
```

---

## 工具类型

### 内置工具类型

```typescript
interface User {
  id: string
  name: string
  email: string
  age: number
  createdAt: Date
}

// ✅ Partial - 所有属性可选
type PartialUser = Partial<User>
// { id?: string; name?: string; email?: string; ... }

// ✅ Required - 所有属性必填
type RequiredUser = Required<Partial<User>>

// ✅ Readonly - 所有属性只读
type ReadonlyUser = Readonly<User>

// ✅ Pick - 选择部分属性
type UserPreview = Pick<User, 'id' | 'name'>
// { id: string; name: string }

// ✅ Omit - 排除部分属性
type UserWithoutEmail = Omit<User, 'email'>
// { id: string; name: string; age: number; createdAt: Date }

// ✅ Record - 键值对类型
type UserMap = Record<string, User>
type RolePermissions = Record<'admin' | 'user', string[]>

// ✅ Exclude - 从联合类型中排除
type Status = 'pending' | 'success' | 'error'
type SuccessOrError = Exclude<Status, 'pending'>
// 'success' | 'error'

// ✅ Extract - 从联合类型中提取
type StringOrNumber = Extract<string | number | boolean, string | number>
// string | number

// ✅ NonNullable - 排除 null 和 undefined
type NonNullableString = NonNullable<string | null | undefined>
// string

// ✅ ReturnType - 函数返回值类型
function getUser() {
  return { id: '1', name: 'John' }
}
type UserReturn = ReturnType<typeof getUser>
// { id: string; name: string }

// ✅ Parameters - 函数参数类型
function updateUser(id: string, data: Partial<User>) {}
type UpdateUserParams = Parameters<typeof updateUser>
// [id: string, data: Partial<User>]
```

### 自定义工具类型

```typescript
// ✅ 深度只读
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

// ✅ 深度可选
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// ✅ 可为 null
type Nullable<T> = T | null

// ✅ 可为 undefined
type Optional<T> = T | undefined

// ✅ 值类型
type ValueOf<T> = T[keyof T]

// ✅ 函数属性
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

// ✅ 非函数属性
type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]

// 使用示例
interface Example {
  name: string
  age: number
  sayHello: () => void
}

type FuncKeys = FunctionPropertyNames<Example>  // 'sayHello'
type NonFuncKeys = NonFunctionPropertyNames<Example>  // 'name' | 'age'
```

---

## 类型守卫

### 基础类型守卫

```typescript
// ✅ typeof 类型守卫
function processValue(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase()  // value: string
  } else {
    return value.toFixed(2)  // value: number
  }
}

// ✅ instanceof 类型守卫
function processDate(value: Date | string) {
  if (value instanceof Date) {
    return value.getTime()  // value: Date
  } else {
    return new Date(value).getTime()  // value: string
  }
}

// ✅ in 操作符类型守卫
interface Cat {
  meow: () => void
}

interface Dog {
  bark: () => void
}

function makeSound(animal: Cat | Dog) {
  if ('meow' in animal) {
    animal.meow()  // animal: Cat
  } else {
    animal.bark()  // animal: Dog
  }
}
```

### 自定义类型守卫

```typescript
// ✅ 类型谓词 (Type Predicate)
interface User {
  id: string
  name: string
  email: string
}

function isUser(value: any): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.id === 'string' &&
    typeof value.name === 'string' &&
    typeof value.email === 'string'
  )
}

// 使用
function processData(data: any) {
  if (isUser(data)) {
    console.log(data.name)  // data: User，有完整类型提示
  }
}

// ✅ 数组类型守卫
function isUserArray(value: any): value is User[] {
  return Array.isArray(value) && value.every(isUser)
}

// ✅ 空值检查
function isNotNull<T>(value: T | null): value is T {
  return value !== null
}

function isNotNullOrUndefined<T>(value: T | null | undefined): value is T {
  return value != null
}

// 使用
const users: (User | null)[] = [user1, null, user2]
const validUsers = users.filter(isNotNull)  // User[]
```

---

## 最佳实践

### 1. 避免使用 any

```typescript
// ❌ 错误
function processData(data: any) {
  return data.map((item: any) => item.value)
}

// ✅ 正确 - 使用泛型
function processData<T extends { value: any }>(data: T[]): any[] {
  return data.map(item => item.value)
}

// ✅ 更好 - 使用 unknown
function processData(data: unknown) {
  if (Array.isArray(data)) {
    return data.map(item => item)
  }
  return []
}
```

### 2. 使用 const 断言

```typescript
// ❌ 类型推断为 string
const status = 'pending'  // string

// ✅ 类型推断为 'pending'
const status = 'pending' as const  // 'pending'

// ✅ 对象字面量
const config = {
  api: '/api',
  timeout: 5000,
} as const
// { readonly api: '/api'; readonly timeout: 5000 }

// ✅ 数组字面量
const roles = ['admin', 'user', 'guest'] as const
// readonly ['admin', 'user', 'guest']
```

### 3. 类型导出

```typescript
// ✅ 导出类型
export interface User {
  id: string
  name: string
}

export type UserRole = 'admin' | 'user'

// ✅ 导出类型别名
export type { User as UserInfo }

// ✅ 从其他模块导出
export type { User } from './types/user'
```

### 4. 类型注释位置

```typescript
// ✅ 推荐 - 参数和返回值标注
function getUser(id: string): Promise<User> {
  return api.get(`/users/${id}`)
}

// ✅ 推荐 - 变量声明时标注
const users: User[] = []

// ❌ 避免 - 过度标注
const count: number = 0  // 类型可以推断，不需要标注
```

### 5. 类型文件组织

```
src/types/
├── index.ts          # 统一导出
├── user.ts          # 用户相关类型
├── api.ts           # API 相关类型
├── common.ts        # 通用类型
└── vue.d.ts         # Vue 类型扩展
```

```typescript
// types/index.ts
export * from './user'
export * from './api'
export * from './common'

// 使用
import type { User, ApiResponse } from '@/types'
```

---

## ✅ 检查清单

- [ ] 启用 TypeScript 严格模式
- [ ] 避免使用 any（使用 unknown 替代）
- [ ] 使用接口定义对象结构
- [ ] 使用类型别名定义联合类型
- [ ] 为函数参数和返回值添加类型
- [ ] 使用泛型提高代码复用性
- [ ] 使用类型守卫进行类型收窄
- [ ] 导出所有类型定义
- [ ] 使用工具类型简化代码
- [ ] 添加必要的类型注释

---

**下一步**: 查看 [项目规则](./project-rules.md) | [API 规范](./api-guidelines.md)

---

**最后更新**: 2025-10-30
**版本**: v1.0.0
**维护者**: 项目团队

# API 审查检查清单

> API 模块开发完成后的代码审查标准

---

## 📋 基础检查

### 文件组织
- [ ] API 文件位置正确（`src/api/`）
- [ ] 文件命名符合规范（camelCase）
- [ ] 按业务模块划分文件
- [ ] 包含类型定义文件或独立类型文件

### 模块导出
- [ ] 统一在 `api/index.ts` 中导出
- [ ] 导出所有类型定义
- [ ] 导出所有 API 函数
- [ ] 避免循环依赖

---

## 🎯 类型定义

### 接口类型
- [ ] 请求参数类型定义完整
- [ ] 响应数据类型定义完整
- [ ] 使用 `interface` 定义对象结构
- [ ] 避免使用 `any` 类型

```typescript
// ✅ 正确示例
export interface UserInfo {
  id: string
  username: string
  email: string
  roles: string[]
}

export interface LoginParams {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  refreshToken: string
}
```

### 泛型应用
- [ ] API 响应使用泛型包装
- [ ] 分页响应使用泛型
- [ ] 列表响应使用泛型
- [ ] 类型推断准确

```typescript
// ✅ 正确示例
export interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}

export interface PaginationResponse<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}

// 使用
export function getUserList(params: UserListParams) {
  return request<ApiResponse<PaginationResponse<UserInfo>>>({
    url: '/users',
    method: 'get',
    params,
  })
}
```

---

## 🔧 请求配置

### Axios 配置
- [ ] 基础 URL 配置正确
- [ ] 超时时间设置合理（60s）
- [ ] 请求头配置完整
- [ ] 拦截器配置正确

### 请求拦截器
- [ ] Token 自动添加
- [ ] 时间戳防缓存（GET 请求）
- [ ] 请求参数序列化
- [ ] 错误日志记录

### 响应拦截器
- [ ] 成功响应正确处理
- [ ] Token 过期自动处理
- [ ] 业务错误统一处理
- [ ] 网络错误统一处理

---

## 📦 API 函数定义

### 函数命名
- [ ] 命名语义化（get/create/update/delete）
- [ ] RESTful 风格一致
- [ ] 函数名与接口对应
- [ ] 避免缩写和拼音

```typescript
// ✅ 正确命名
getUserList()      // GET /users
getUserById()      // GET /users/:id
createUser()       // POST /users
updateUser()       // PUT /users/:id
deleteUser()       // DELETE /users/:id
batchDeleteUsers() // POST /users/batch-delete
```

### 参数设计
- [ ] 参数类型明确
- [ ] 可选参数使用 `?` 标记
- [ ] 参数验证（必填项）
- [ ] 默认值合理

```typescript
// ✅ 正确示例
export function getUserList(params: {
  page: number
  pageSize: number
  keyword?: string
  status?: 'active' | 'inactive'
}) {
  return request<ApiResponse<PaginationResponse<UserInfo>>>({
    url: '/users',
    method: 'get',
    params,
  })
}
```

### 返回值设计
- [ ] 返回 Promise 类型
- [ ] 泛型类型准确
- [ ] 错误信息完整
- [ ] 支持链式调用

---

## 🛡️ 错误处理

### 业务错误
- [ ] Token 过期处理
- [ ] 权限不足处理
- [ ] 参数错误提示
- [ ] 服务器错误提示

### 网络错误
- [ ] 请求超时处理
- [ ] 网络断开处理
- [ ] 404 错误处理
- [ ] 500 错误处理

### 错误信息
- [ ] 错误消息用户友好
- [ ] 错误代码标准化
- [ ] 错误日志记录
- [ ] 错误堆栈保留（开发环境）

```typescript
// ✅ 正确示例
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== SUCCESS_CODE) {
      ElMessage.error(res.message || '请求失败')
      return Promise.reject(new Error(res.message))
    }
    return res
  },
  (error) => {
    handleNetworkError(error)
    return Promise.reject(error)
  }
)
```

---

## ⚡ 性能优化

### 请求优化
- [ ] 避免重复请求
- [ ] 请求防抖/节流
- [ ] 请求取消支持
- [ ] 请求重试机制

### 数据优化
- [ ] 分页加载数据
- [ ] 数据缓存策略
- [ ] 增量更新数据
- [ ] 压缩传输数据

### 并发控制
- [ ] 并发请求数限制
- [ ] 请求优先级设置
- [ ] 请求队列管理
- [ ] 长连接优化

```typescript
// ✅ 请求取消示例
const controller = new AbortController()

export function getData(signal?: AbortSignal) {
  return request({
    url: '/data',
    method: 'get',
    signal,
  })
}

// 使用
const controller = new AbortController()
getData(controller.signal)
controller.abort() // 取消请求
```

---

## 🔐 安全性检查

### 数据安全
- [ ] 敏感数据加密传输
- [ ] Token 存储安全
- [ ] 防止 CSRF 攻击
- [ ] 防止 XSS 攻击

### 参数安全
- [ ] 输入参数验证
- [ ] SQL 注入防护
- [ ] 特殊字符转义
- [ ] 文件上传限制

### 权限校验
- [ ] 接口权限验证
- [ ] Token 过期检查
- [ ] 用户角色验证
- [ ] 操作权限验证

---

## 📝 文档与注释

### JSDoc 注释
- [ ] 函数用途说明
- [ ] 参数说明
- [ ] 返回值说明
- [ ] 使用示例

```typescript
/**
 * 获取用户列表
 * @param params - 查询参数
 * @param params.page - 页码
 * @param params.pageSize - 每页数量
 * @param params.keyword - 搜索关键词
 * @returns 用户列表数据
 * @example
 * const { data } = await getUserList({ page: 1, pageSize: 20 })
 */
export function getUserList(params: UserListParams) {
  return request<ApiResponse<PaginationResponse<UserInfo>>>({
    url: '/users',
    method: 'get',
    params,
  })
}
```

### 接口文档
- [ ] API 端点说明
- [ ] 请求方法说明
- [ ] 参数格式说明
- [ ] 响应格式说明

---

## 🧪 测试与验证

### 单元测试
- [ ] 测试覆盖率 > 80%
- [ ] 测试正常响应
- [ ] 测试异常响应
- [ ] 测试边界条件

### 集成测试
- [ ] 测试完整流程
- [ ] 测试错误处理
- [ ] 测试并发请求
- [ ] 测试超时场景

### 接口验证
- [ ] 接口可用性验证
- [ ] 参数格式验证
- [ ] 响应格式验证
- [ ] 错误码验证

```typescript
// ✅ 测试示例
describe('getUserList', () => {
  it('should return user list', async () => {
    const params = { page: 1, pageSize: 20 }
    const { data } = await getUserList(params)

    expect(data.list).toBeInstanceOf(Array)
    expect(data.total).toBeGreaterThan(0)
  })

  it('should handle error', async () => {
    const params = { page: -1, pageSize: 20 }

    await expect(getUserList(params)).rejects.toThrow()
  })
})
```

---

## 🌐 兼容性检查

### 浏览器兼容
- [ ] 现代浏览器支持（Chrome, Firefox, Safari, Edge）
- [ ] IE 11 支持（如需要）
- [ ] 移动端浏览器支持
- [ ] Polyfill 配置

### 服务端兼容
- [ ] API 版本兼容
- [ ] 数据格式兼容
- [ ] 错误码兼容
- [ ] 向后兼容

---

## 📊 标准 API 模块模板

```typescript
// src/api/user.ts
import request from './request'
import type { ApiResponse } from './request'

// ==================== 类型定义 ====================

/** 用户信息 */
export interface UserInfo {
  id: string
  username: string
  email: string
  avatar: string
  roles: string[]
}

/** 用户列表查询参数 */
export interface UserListParams {
  page: number
  pageSize: number
  keyword?: string
  status?: 'active' | 'inactive'
}

/** 分页响应 */
export interface PaginationResponse<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}

// ==================== API 函数 ====================

/**
 * 获取用户列表
 */
export function getUserList(params: UserListParams) {
  return request<ApiResponse<PaginationResponse<UserInfo>>>({
    url: '/users',
    method: 'get',
    params,
  })
}

/**
 * 获取用户详情
 */
export function getUserById(id: string) {
  return request<ApiResponse<UserInfo>>({
    url: `/users/${id}`,
    method: 'get',
  })
}

/**
 * 创建用户
 */
export function createUser(data: Partial<UserInfo>) {
  return request<ApiResponse<UserInfo>>({
    url: '/users',
    method: 'post',
    data,
  })
}

/**
 * 更新用户
 */
export function updateUser(id: string, data: Partial<UserInfo>) {
  return request<ApiResponse<UserInfo>>({
    url: `/users/${id}`,
    method: 'put',
    data,
  })
}

/**
 * 删除用户
 */
export function deleteUser(id: string) {
  return request<ApiResponse<void>>({
    url: `/users/${id}`,
    method: 'delete',
  })
}
```

---

## ✅ 检查清单总结

### 必须通过项 (Must-Have)
- [ ] TypeScript 类型检查无错误
- [ ] 请求/响应拦截器配置正确
- [ ] 错误处理完整
- [ ] 所有类型定义导出
- [ ] JSDoc 注释完整

### 建议项 (Should-Have)
- [ ] 单元测试覆盖率 > 80%
- [ ] 请求取消支持
- [ ] 请求重试机制
- [ ] 接口文档完善
- [ ] 性能优化

### 可选项 (Nice-to-Have)
- [ ] 请求缓存策略
- [ ] 并发控制
- [ ] 请求队列管理
- [ ] 埋点统计
- [ ] 监控告警

---

## 📊 评分标准

| 类别 | 权重 | 得分 |
|------|------|------|
| 类型定义 | 25% | ___ |
| 错误处理 | 25% | ___ |
| 安全性 | 20% | ___ |
| 性能优化 | 15% | ___ |
| 测试覆盖 | 10% | ___ |
| 文档完整性 | 5% | ___ |
| **总分** | **100%** | **___** |

**评级**:
- **优秀**: 90-100 分
- **良好**: 80-89 分
- **合格**: 70-79 分
- **需改进**: < 70 分

---

## 🔗 相关文档

- [API 调用规范](../api-guidelines.md)
- [TypeScript 规范](../typescript-guide.md)
- [项目规则](../project-rules.md)
- [组件审查清单](./component-review.md)

---

**最后更新**: 2025-10-30
**版本**: v1.0.0

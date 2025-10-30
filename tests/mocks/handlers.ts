/**
 * MSW (Mock Service Worker) API Handlers
 * 用于在测试中 mock HTTP 请求
 */

import { http, HttpResponse } from "msw";

// API 基础路径（根据实际情况调整）
const API_BASE_URL = "/api";

// ============================================
// 认证相关 Mock
// ============================================

export const authHandlers = [
  // 登录接口
  http.post(`${API_BASE_URL}/login`, async ({ request }) => {
    const body = await request.json() as any;
    const { username, password } = body;

    // 模拟登录验证
    if (username === "admin" && password === "admin123") {
      return HttpResponse.json({
        success: true,
        data: {
          avatar: "https://avatars.githubusercontent.com/u/44761321",
          username: "admin",
          nickname: "管理员",
          roles: ["admin"],
          permissions: ["*:*:*"],
          accessToken: "eyJhbGciOiJIUzUxMiJ9.admin",
          refreshToken: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
          expires: new Date(Date.now() + 7200000).toISOString()
        }
      });
    }

    if (username === "common" && password === "common123") {
      return HttpResponse.json({
        success: true,
        data: {
          avatar: "https://avatars.githubusercontent.com/u/52823142",
          username: "common",
          nickname: "普通用户",
          roles: ["common"],
          permissions: ["permission:btn:add", "permission:btn:edit"],
          accessToken: "eyJhbGciOiJIUzUxMiJ9.common",
          refreshToken: "eyJhbGciOiJIUzUxMiJ9.commonRefresh",
          expires: new Date(Date.now() + 7200000).toISOString()
        }
      });
    }

    // 登录失败
    return HttpResponse.json(
      {
        success: false,
        message: "用户名或密码错误"
      },
      { status: 401 }
    );
  }),

  // Token 刷新接口
  http.post(`${API_BASE_URL}/refresh-token`, async ({ request }) => {
    const body = await request.json() as any;
    const { refreshToken } = body;

    // 模拟 token 刷新
    if (refreshToken && refreshToken.includes("Refresh")) {
      return HttpResponse.json({
        success: true,
        data: {
          accessToken: "eyJhbGciOiJIUzUxMiJ9.newAccessToken",
          refreshToken: "eyJhbGciOiJIUzUxMiJ9.newRefreshToken",
          expires: new Date(Date.now() + 7200000).toISOString()
        }
      });
    }

    return HttpResponse.json(
      {
        success: false,
        message: "无效的 refreshToken"
      },
      { status: 401 }
    );
  }),

  // 获取个人信息
  http.get(`${API_BASE_URL}/mine`, () => {
    return HttpResponse.json({
      success: true,
      data: {
        avatar: "https://avatars.githubusercontent.com/u/44761321",
        username: "admin",
        nickname: "管理员",
        email: "admin@example.com",
        phone: "13800138000",
        description: "系统管理员"
      }
    });
  }),

  // 获取个人安全日志
  http.get(`${API_BASE_URL}/mine-logs`, () => {
    return HttpResponse.json({
      success: true,
      data: {
        list: [
          {
            id: 1,
            action: "登录",
            ip: "192.168.1.100",
            time: new Date().toISOString(),
            status: "成功"
          },
          {
            id: 2,
            action: "修改密码",
            ip: "192.168.1.100",
            time: new Date(Date.now() - 86400000).toISOString(),
            status: "成功"
          }
        ],
        total: 2,
        pageSize: 10,
        currentPage: 1
      }
    });
  })
];

// ============================================
// 系统管理相关 Mock
// ============================================

export const systemHandlers = [
  // 获取用户列表
  http.post(`${API_BASE_URL}/user`, async ({ request }) => {
    const body = await request.json() as any;
    const { currentPage = 1, pageSize = 10 } = body;

    return HttpResponse.json({
      success: true,
      data: {
        list: [
          {
            id: 1,
            username: "admin",
            nickname: "管理员",
            email: "admin@example.com",
            phone: "13800138000",
            status: 1,
            createTime: "2024-01-01 10:00:00"
          },
          {
            id: 2,
            username: "user1",
            nickname: "用户1",
            email: "user1@example.com",
            phone: "13800138001",
            status: 1,
            createTime: "2024-01-02 10:00:00"
          }
        ],
        total: 2,
        pageSize,
        currentPage
      }
    });
  }),

  // 获取角色列表
  http.get(`${API_BASE_URL}/list-all-role`, () => {
    return HttpResponse.json({
      success: true,
      data: [
        { id: 1, name: "管理员", code: "admin" },
        { id: 2, name: "普通用户", code: "common" }
      ]
    });
  }),

  // 获取角色管理列表
  http.post(`${API_BASE_URL}/role`, () => {
    return HttpResponse.json({
      success: true,
      data: {
        list: [
          {
            id: 1,
            name: "管理员",
            code: "admin",
            description: "系统管理员",
            createTime: "2024-01-01 10:00:00"
          }
        ],
        total: 1,
        pageSize: 10,
        currentPage: 1
      }
    });
  }),

  // 获取菜单列表
  http.post(`${API_BASE_URL}/menu`, () => {
    return HttpResponse.json({
      success: true,
      data: [
        {
          id: 1,
          name: "首页",
          path: "/home",
          icon: "homeFilled",
          parentId: 0
        },
        {
          id: 2,
          name: "系统管理",
          path: "/system",
          icon: "setting",
          parentId: 0
        }
      ]
    });
  })
];

// ============================================
// 错误场景 Mock
// ============================================

export const errorHandlers = [
  // 模拟网络错误
  http.get(`${API_BASE_URL}/network-error`, () => {
    return HttpResponse.error();
  }),

  // 模拟 401 未授权
  http.get(`${API_BASE_URL}/unauthorized`, () => {
    return HttpResponse.json(
      { success: false, message: "未授权" },
      { status: 401 }
    );
  }),

  // 模拟 403 禁止访问
  http.get(`${API_BASE_URL}/forbidden`, () => {
    return HttpResponse.json(
      { success: false, message: "禁止访问" },
      { status: 403 }
    );
  }),

  // 模拟 404 未找到
  http.get(`${API_BASE_URL}/not-found`, () => {
    return HttpResponse.json(
      { success: false, message: "资源未找到" },
      { status: 404 }
    );
  }),

  // 模拟 500 服务器错误
  http.get(`${API_BASE_URL}/server-error`, () => {
    return HttpResponse.json(
      { success: false, message: "服务器内部错误" },
      { status: 500 }
    );
  }),

  // 模拟超时
  http.get(`${API_BASE_URL}/timeout`, async () => {
    await new Promise(resolve => setTimeout(resolve, 15000)); // 超过默认 timeout
    return HttpResponse.json({ success: true });
  })
];

// ============================================
// 导出所有 Handlers
// ============================================

export const handlers = [
  ...authHandlers,
  ...systemHandlers,
  ...errorHandlers
];

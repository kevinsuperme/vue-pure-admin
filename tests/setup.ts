/**
 * Vitest 全局测试设置文件
 * 在所有测试文件之前执行
 */

import { vi } from "vitest";
import { config } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

// ============================================
// Vue Test Utils 全局配置
// ============================================

// 配置全局组件、插件等
config.global.mocks = {
  $t: (key: string) => key, // Mock i18n
  $route: {
    path: "/",
    name: "home",
    params: {},
    query: {}
  },
  $router: {
    push: vi.fn(),
    replace: vi.fn(),
    go: vi.fn(),
    back: vi.fn()
  }
};

// 全局存根组件（避免测试时加载不必要的组件）
config.global.stubs = {
  Teleport: true,
  Transition: false,
  "el-icon": true
};

// ============================================
// Pinia 测试设置
// ============================================

// 每个测试前创建新的 Pinia 实例
beforeEach(() => {
  const pinia = createPinia();
  setActivePinia(pinia);
});

// ============================================
// Mock 浏览器 API
// ============================================

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    key: (index: number) => {
      const keys = Object.keys(store);
      return keys[index] || null;
    },
    get length() {
      return Object.keys(store).length;
    }
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock
});

// Mock sessionStorage
const sessionStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    key: (index: number) => {
      const keys = Object.keys(store);
      return keys[index] || null;
    },
    get length() {
      return Object.keys(store).length;
    }
  };
})();

Object.defineProperty(window, "sessionStorage", {
  value: sessionStorageMock
});

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
} as any;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as any;

// Mock scrollTo
window.scrollTo = vi.fn();

// ============================================
// 清理函数
// ============================================

afterEach(() => {
  // 清理 localStorage
  localStorageMock.clear();

  // 清理 sessionStorage
  sessionStorageMock.clear();

  // 清理所有 mock
  vi.clearAllMocks();
});

// ============================================
// 全局测试工具
// ============================================

// 模拟延迟
export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

// 等待下一个 tick
export const nextTick = () => new Promise(resolve => setTimeout(resolve, 0));

// 创建测试用的 token 数据
export const createMockToken = (overrides = {}) => ({
  accessToken: "mock-access-token",
  refreshToken: "mock-refresh-token",
  expires: new Date(Date.now() + 7200000).toISOString(), // 2 小时后过期
  ...overrides
});

// 创建测试用的用户数据
export const createMockUser = (overrides = {}) => ({
  avatar: "https://avatars.githubusercontent.com/u/44761321",
  username: "testuser",
  nickname: "测试用户",
  roles: ["admin"],
  permissions: ["*:*:*"],
  ...overrides
});

// 打印测试环境信息
console.log("🧪 Test environment initialized");
console.log("✅ Happy DOM");
console.log("✅ Pinia");
console.log("✅ Vue Test Utils");
console.log("✅ Browser API Mocks");

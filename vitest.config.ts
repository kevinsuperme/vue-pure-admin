import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), vueJsx()],

  test: {
    // 测试环境
    environment: "happy-dom", // 比 jsdom 快 8 倍

    // 全局设置
    globals: true, // 启用全局测试 API（describe, it, expect 等）

    // 覆盖率配置
    coverage: {
      provider: "v8", // 使用 V8 引擎的覆盖率收集器
      reporter: ["text", "json", "html", "lcov"],
      reportsDirectory: "./coverage",
      exclude: [
        "node_modules/",
        "tests/",
        "**/*.spec.ts",
        "**/*.test.ts",
        "**/*.d.ts",
        "**/mock/**",
        "**/mockData/**",
        "build/",
        "dist/",
        ".vscode/",
        "public/",
        "**/.{eslint,prettier,stylelint}*"
      ],
      all: true, // 包含所有文件
      lines: 80, // 行覆盖率目标
      functions: 80, // 函数覆盖率目标
      branches: 75, // 分支覆盖率目标
      statements: 80 // 语句覆盖率目标
    },

    // 测试文件匹配规则
    include: [
      "tests/**/*.{test,spec}.{js,ts}",
      "src/**/*.{test,spec}.{js,ts}"
    ],

    // 排除的文件
    exclude: [
      "node_modules",
      "dist",
      ".idea",
      ".git",
      ".cache",
      "build"
    ],

    // 测试超时时间
    testTimeout: 10000, // 10 秒
    hookTimeout: 10000,

    // 并发执行
    threads: true,
    maxThreads: 4,
    minThreads: 1,

    // 隔离测试
    isolate: true,

    // 监听模式配置
    watch: false,

    // 测试报告
    reporters: ["default", "html"],
    outputFile: {
      html: "./tests/report/index.html"
    },

    // 设置文件（在每个测试文件之前运行）
    setupFiles: ["./tests/setup.ts"],

    // Mock 配置
    mockReset: true, // 每个测试后重置 mock
    restoreMocks: true, // 恢复原始实现
    clearMocks: true // 清除 mock 调用历史
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~/": resolve(__dirname, "src"),
      "@build": resolve(__dirname, "build"),
      "@test": resolve(__dirname, "tests")
    }
  }
});

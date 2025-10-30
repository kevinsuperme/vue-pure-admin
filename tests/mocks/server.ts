/**
 * MSW Server Setup
 * 在 Node 环境中启动 MSW 服务器（用于测试）
 */

import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// 创建 MSW 服务器实例
export const server = setupServer(...handlers);

// 在所有测试前启动服务器
beforeAll(() => {
  server.listen({
    onUnhandledRequest: "warn" // 未处理的请求发出警告
  });
});

// 每个测试后重置 handlers
afterEach(() => {
  server.resetHandlers();
});

// 所有测试完成后关闭服务器
afterAll(() => {
  server.close();
});

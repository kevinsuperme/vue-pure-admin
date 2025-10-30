/**
 * 示例测试 - 验证测试系统是否正常工作
 */

import { describe, it, expect } from "vitest";

describe("测试系统验证", () => {
  it("基础断言应该正常工作", () => {
    expect(1 + 1).toBe(2);
    expect("hello").toBe("hello");
    expect(true).toBe(true);
  });

  it("对象断言应该正常工作", () => {
    const obj = { name: "test", value: 100 };
    expect(obj).toHaveProperty("name");
    expect(obj.name).toBe("test");
  });

  it("数组断言应该正常工作", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toHaveLength(5);
    expect(arr).toContain(3);
  });

  it("异步测试应该正常工作", async () => {
    const promise = Promise.resolve("成功");
    await expect(promise).resolves.toBe("成功");
  });
});

describe("TypeScript 类型检查", () => {
  it("应该支持 TypeScript", () => {
    const num: number = 42;
    const str: string = "hello";
    const bool: boolean = true;

    expect(num).toBe(42);
    expect(str).toBe("hello");
    expect(bool).toBe(true);
  });
});

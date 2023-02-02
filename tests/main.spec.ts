import { someTimeAgo } from "../src/index";

describe("main suite", () => {
  it("test1", () => {
    const longTimeAgo = new Date("2000-01-30");
    const result = someTimeAgo(longTimeAgo, "en-US");
    expect(result).toEqual(longTimeAgo.toLocaleDateString("en-US"));
  });
});

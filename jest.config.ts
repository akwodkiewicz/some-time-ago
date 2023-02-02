import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "tests/coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;

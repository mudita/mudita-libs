module.exports = {
  roots: ["<rootDir>/__tests__"],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  testRegex: "(<rootDir>/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageDirectory: "./coverage/",
  collectCoverage: true,
}

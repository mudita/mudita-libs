import fn from "../src";

test("result list is unique ", () => {
  const result = fn(["A", "A", "B"])
  expect(result).toHaveLength(2)
})

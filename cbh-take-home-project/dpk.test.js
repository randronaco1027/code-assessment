const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Test that the return key is 128 characters", () => {
    const trivialKey = deterministicPartitionKey("jimSmith277777");
    expect(trivialKey.length).toBe(128);
  });
});

describe("deterministicPartitionKey", () => {
  it("Test that the return key is a string", () => {
    const trivialKey = deterministicPartitionKey("jimSmith277777");
    expect(typeof trivialKey).toBe("string");
  });
});


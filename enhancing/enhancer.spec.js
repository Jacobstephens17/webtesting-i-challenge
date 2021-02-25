const enhancer = require("./enhancer.js");


const item = {
  name: "Katana",
  enhancement: 13,
  durability: 37,
};


describe("sanity check", () => {
  it("works", () => {
    expect(3).toBe(3);
  });
});


describe("success", () => {
  it("succeeds", async () => {
    const success = await enhancer.success(item);
    expect(success.enhancement).toBe(14);
  });
});


describe("failure", () => {
  it("fails", async () => {
    const fail = await enhancer.fail(item);
    expect(fail.durability).toBe(32);
  });
});


describe("repair", () => {
  it("repairs", async () => {
    const repair = await enhancer.repair(item);
    expect(repair.durability).toBe(100);
  });
});


describe("get", () => {
  it("gets", async () => {
    const get = await enhancer.get(item);
    expect(get.name).toBe("[+14] Katana");
  });
});
describe("pow", function () {
  let a = 1,
    b = 2;
  it(`возводит ${a} в степень ${b}`, function () {
    assert.equal(pow(a, b), a ** b);
  });
});

/*
describe("pow", function () {
    for (let a = 0; a < 3; a++) {
      for (let b = 0; b < 3; b++) {
        it(`возводит ${a} в степень ${b}`, function () {
          assert.equal(pow(a, b), a ** b);
        });
        console.log(a + " " + b);
      }
    }
  
    it("2 в степени 3 будет 8", function () {
      assert.equal(pow(2, 3), 8);
    });
  
    it("3 в степени 3 будет 27", function () {
      assert.equal(pow(3, 3), 27);
    });
  });
  */

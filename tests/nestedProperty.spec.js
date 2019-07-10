import nestedProperty from "../nestedProperty";

describe("Nested property", () => {
  test("returns the correct value", () => {
    let testObject = {
      firstLevel: {
        secondLevel: "theValue"
      }
    };

    expect(nestedProperty("firstLevel.secondLevel").of(testObject)).toBe(
      "theValue"
    );
  });

  test("throws an error if the property does not exist", () => {
    let testObject = {
      firstLevel: {}
    };

    expect(() => {
      nestedProperty("firstLevel.secondLevel").of(testObject);
    }).toThrow();
  });

  test("throws an error if any nesting level does not exist", () => {
    let testObject = {
      firstLevel: {}
    };

    expect(() => {
      nestedProperty("firstLevel.secondLevel.thirdLevel").of(testObject);
    }).toThrow();
  });

  describe("with the orNull() switch", () => {
    test("returns the correct value", () => {
      let testObject = {
        firstLevel: {
          secondLevel: "theValue"
        }
      };

      expect(
        nestedProperty("firstLevel.secondLevel")
          .orNull()
          .of(testObject)
      ).toBe("theValue");
    });

    test("returns null if the property does not exist", () => {
      let testObject = {
        firstLevel: {}
      };

      expect(
        nestedProperty("firstLevel.secondLevel")
          .orNull()
          .of(testObject)
      ).toBe(null);
    });

    test("returns null if any nesting level does not exist", () => {
      let testObject = {
        firstLevel: {}
      };

      expect(
        nestedProperty("firstLevel.secondLevel.thirdLevel")
          .orNull()
          .of(testObject)
      ).toBe(null);
    });
  });
});

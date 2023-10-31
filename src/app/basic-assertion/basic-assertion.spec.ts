import { BasicAssertion } from "./basic-assertion";

// Basic building block that contains one or more testing
// suites. Will often start at class level, with the class
// name being used, followed be describe calls for each function
// the class contains. Each describe call will contain one or 
// more `it` calls where assertions are performed.
describe('BasicAssertion', () => {
  const component = new BasicAssertion();

  describe('isSkyBlue', () => {
    // Can be thought of as a loose equivalent to a Java method
    // annotated with `@Test`. Karma (the test runner) picks these
    // up and executes the callbacks to form test suites.
    it('should return true', () => {
      expect(component.isSkyBlue()).toBeTrue();
    });
  });

  describe('isSkyBrown', () => {
    it('should return false', () => {
      // todo: use 'toBeFalse()` to assert return value of method under test
    });
  });

  describe('bestNintendoFranchise', () => {
    it("should return 'Zelda'", () => {
      // todo: use 'toEqual($arg)` to assert return value of method under test
      // where $arg is your expected value
    });
  });

  describe('returnsNull', () => {
    it('shoulld return null', () => {
      // todo: use 'toBeNull()' to assert return value of method under test
    });
  });
});
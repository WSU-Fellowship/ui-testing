// Super simplistic class like the one used
// in the jUnit introduction to make your first assertions.
export class BasicAssertion {
  public isSkyBlue(): boolean {
    return true;
  }

  public isSkyBrown(): boolean {
    return false;
  }

  public bestNintendoFranchise(): string {
    return "Zelda";
  }

  public returnsNull(): any {
    return null;
  }
}
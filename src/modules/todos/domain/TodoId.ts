export class TodoId {
  private readonly value: string;

  constructor(value: string) {
    // add validation if needed
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }

  public static create(value: string): TodoId {
    return new TodoId(value);
  }
}

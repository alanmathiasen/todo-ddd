import { TodoId } from "../TodoId";
import { TodoTitle } from "../TodoTitle";
import { TodoStatus } from "../TodoStatus";

export class Todo {
  private id: TodoId;
  private title: TodoTitle;
  public status: TodoStatus;

  constructor(id: TodoId, title: TodoTitle, status: TodoStatus) {
    this.id = id;
    this.title = title;
    this.status = status;
  }

  public getId(): TodoId {
    return this.id;
  }

  public getTitle(): TodoTitle {
    return this.title;
  }

  public getStatus(): TodoStatus {
    return this.status;
  }

  public complete(): void {
    this.status = TodoStatus.COMPLETED;
  }

  public reopen(): void {
    this.status = TodoStatus.OPEN;
  }

  static fromDocument(doc: any): Todo {
    let todo = new Todo(doc.id, doc.title, doc.status);
    return todo;
  }
}

import { Entity } from "../../../shared/domain/Entity";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { TaskDescription } from "./TaskDescription";
import { TaskIsCompleted } from "./TaskIsCompleted";

export interface TaskProps {
  description: TaskDescription;
  isCompleted: TaskIsCompleted;
}

export class Task extends Entity<TaskProps> {
  constructor(props: TaskProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get description(): TaskDescription {
    return this.props.description;
  }
  get isCompleted(): TaskIsCompleted {
    return this.props.isCompleted;
  }
}

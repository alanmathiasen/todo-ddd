import { AggregateRoot } from "../AggregateRoot";
import { UniqueEntityID } from "../UniqueEntityID";

export abstract class DomainEvent {
  public readonly occurredOn: Date;
  public readonly aggregateId: UniqueEntityID;

  constructor(aggregateId: UniqueEntityID) {
    this.occurredOn = new Date();
    this.aggregateId = aggregateId;
  }

  public static markAggregateForDispatch(aggregate: AggregateRoot<any>): void {
    // Logic to mark aggregate for dispatch
  }
}

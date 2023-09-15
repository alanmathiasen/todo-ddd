import { Entity } from "./Entity";
import { DomainEvent } from "./events/DomainEvent";
import { UniqueEntityID } from "./UniqueEntityID";

export abstract class AggregateRoot<T> extends Entity<T> {
  //TODO DOMAIN EVENTS WOULD GO HERE
}

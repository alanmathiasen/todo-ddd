import { domainEventPublisher } from '../infra/events/DomainEventPublisher';
interface TodoUpdatedEvent {
  id: string;
}

domainEventPublisher.on('TodoUpdated', (event: TodoUpdatedEvent) => {
  console.log(`Todo with ID ${event.id} was updated`);
});
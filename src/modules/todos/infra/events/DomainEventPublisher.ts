import { EventEmitter } from 'events';

export class DomainEventPublisher extends EventEmitter{}

export const domainEventPublisher = new DomainEventPublisher();

// To subscribe to an event:
domainEventPublisher.on('Publish', (event, type) => {
  console.log(`Todo with ID ${event.id} was ${type}`);
});

import { CreateTodoUseCase } from "./CreateTodoUseCase";
import { CreateTodoController } from "./CreateTodoController";
import { ITodoRepository } from "../../repos/ITodoRepository";
import { TodoDTO } from "../../dtos/TodoDTO";
import { Todo } from "../../domain/Todo";

// Mock the Todo Repository
class MockTodoRepository implements Partial<ITodoRepository> {
  private todos: Map<string, Todo>;

  constructor() {
    this.todos = new Map<string, Todo>();
  }
  async save(todo: Todo): Promise<void> {
    this.todos.set(todo.getId().getValue(), todo);
    return Promise.resolve();
  }
}

describe("CreateTodo", () => {
  let useCase: CreateTodoUseCase;
  let controller: CreateTodoController;
  let repo: MockTodoRepository;

  beforeEach(() => {
    repo = new MockTodoRepository();
    useCase = new CreateTodoUseCase(repo);
    controller = new CreateTodoController(useCase);
  });

  it("should create a new todo", async () => {
    const request: TodoDTO = {
      id: "1",
      title: "MCS",
      status: "OPEN",
    };

    // Mock Express Request and Response
    const mockRequest = {
      body: request,
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await controller.executeImpl(request, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith("OK");
  });
});

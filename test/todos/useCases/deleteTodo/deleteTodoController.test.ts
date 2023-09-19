import { CreateTodoUseCase } from "../../../../src/modules/todos/useCases/memory/createTodoInMemory/CreateTodoUseCase";
import { CreateTodoController } from "../../../../src/modules/todos/useCases/memory/createTodoInMemory/CreateTodoController";
import { DeleteTodoUseCase } from "../../../../src/modules/todos/useCases/memory/deleteTodoInMemory/DeleteTodoUseCase";
import { DeleteTodoController } from "../../../../src/modules/todos/useCases/memory/deleteTodoInMemory/DeleteTodoController";
import { TodoRepositoryMock } from "../MockTodoRepositoryClass";

describe("DeleteTodo", () => {
  let CreateUseCase: CreateTodoUseCase;
  let CreateController: CreateTodoController;
  let DeleteUseCase: DeleteTodoUseCase;
  let DeleteController: DeleteTodoController;
  let repo: TodoRepositoryMock;
  let mockRequest: any;
  let mockResponse: any;

  beforeEach(async () => {
    repo = new TodoRepositoryMock();
    CreateUseCase = new CreateTodoUseCase(repo);
    CreateController = new CreateTodoController(CreateUseCase);
    mockRequest = {
      id: "1",
      title: "My todo",
      status: "OPEN",
    } as any;

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as any;

    await CreateController.executeImpl(mockRequest, mockResponse);
  });

  it("should delete a todo", async () => {
    mockRequest = {
      params: {
        id: "1",
      },
      body: {
        title: "My todo",
        status: "OPEN",
      },
    } as any;
    repo = new TodoRepositoryMock();
    DeleteUseCase = new DeleteTodoUseCase(repo);
    DeleteController = new DeleteTodoController(DeleteUseCase);
    await DeleteController.executeImpl(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith("Deleted OK");
  });

  it("should fail trying to delete a todo with an invalid id", async () => {
    mockRequest = {
      params: {
        id: "2",
      },
      body: {
        title: "My todo",
        status: "OPEN",
      },
    } as any;

    repo = new TodoRepositoryMock();
    DeleteUseCase = new DeleteTodoUseCase(repo);
    DeleteController = new DeleteTodoController(DeleteUseCase);
    await DeleteController.executeImpl(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });
});

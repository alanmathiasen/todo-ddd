import { CreateTodoUseCase } from "../../../../src/modules/todos/useCases/createTodo/CreateTodoUseCase";
import { CreateTodoController } from "../../../../src/modules/todos/useCases/createTodo/CreateTodoController";
import { DeleteAllUseCase } from "../../../../src/modules/todos/useCases/deleteTodo/DeleteAllUseCase";
import { DeleteAllController } from "../../../../src/modules/todos/useCases/deleteTodo/DeleteAllController";
import { TodoRepositoryMock } from "../MockTodoRepositoryClass";

describe("DeleteTodo", () => {
  let CreateUseCase: CreateTodoUseCase;
  let CreateController: CreateTodoController;
  let deleteAllController: DeleteAllController;
  let deleteAllUseCase: DeleteAllUseCase
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

  it("should delete all todos", async () => {
    const mockRequestt = {
      params: {
        id: "1",
      },
      body: {
        title: "My todo",
        status: "OPEN",
      },
    } as any;
    repo = new TodoRepositoryMock();
    deleteAllUseCase = new DeleteAllUseCase(repo);
    deleteAllController = new DeleteAllController(deleteAllUseCase);
    await deleteAllController.executeImpl(mockRequestt, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith("Deleted OK");
  });

});

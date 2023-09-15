import { CreateTodoUseCase } from "../../../../src/modules/todos/useCases/createTodo/CreateTodoUseCase";
import { CreateTodoController } from "../../../../src/modules/todos/useCases/createTodo/CreateTodoController";
import { TodoRepositoryMock } from "../MockTodoRepositoryClass";

describe("CreateTodo", () => {
  let useCase: CreateTodoUseCase;
  let controller: CreateTodoController;
  let repo: TodoRepositoryMock;
  let mockRequest: any;
  let mockResponse: any;

  beforeEach(() => {
    repo = new TodoRepositoryMock();
    useCase = new CreateTodoUseCase(repo);
    controller = new CreateTodoController(useCase);
    mockRequest = {
      body: null,
    } as any;

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as any;
  });

  it("should create a new todo", async () => {
    const dto = {
      id: "1",
      title: "My todo",
      status: "OPEN",
    };
    mockRequest.body = dto;

    // Mock Express Request and Response

    await controller.executeImpl(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith("OK");
  });

  it("should fail trying to create a new todo", async () => {
    const dto = {
      hola: "mucho gusto",
    };
    mockRequest.body = dto;

    await controller.executeImpl(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });

  it("should fail trying to create a new todo due to bad status and missing title", async () => {
    const dto = {
      id: "1",
      status: "Abierto",
    };
    mockRequest.body = dto;

    await controller.executeImpl(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });

  it("should fail trying to create a new todo due to bad title", async () => {
    const dto = {
      id: "3",
      title: null,
      status: "OPEN",
    };
    mockRequest.body = dto;

    await controller.executeImpl(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });
});

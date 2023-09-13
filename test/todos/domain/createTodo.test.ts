import { TodoDTO } from "../../../src/modules/todos/dtos/TodoDTO";
import { ITodoRepository } from "../../../src/modules/todos/repos/ITodoRepository";
import { CreateTodoController } from "../../../src/modules/todos/useCases/createTodo/CreateTodoController";
import { CreateTodoUseCase } from "../../../src/modules/todos/useCases/createTodo/CreateTodoUseCase";
import { TodoRepositoryMock } from "../../__mocks__/TodoRepositoryMock";

describe("CreateTodoUseCase", () => {
  let useCase: CreateTodoUseCase;
  let todoRepository: ITodoRepository;

  beforeEach(() => {
    todoRepository = new TodoRepositoryMock();
    useCase = new CreateTodoUseCase(todoRepository);
  });

  it("should create a new todo", async () => {
    const dto: TodoDTO = {
      id: "1",
      title: "My todo",
      status: "OPEN",
    };

    await useCase.execute(dto);

    expect(todoRepository.save).toHaveBeenCalled();
  });
});

describe("CreateTodoController", () => {
  let controller: CreateTodoController;
  let useCase: CreateTodoUseCase;
  let request: any;
  let response: any;

  beforeEach(() => {
    useCase = new CreateTodoUseCase(new TodoRepositoryMock());
    controller = new CreateTodoController(useCase);
    request = {
      body: null,
    };
    response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  it("should create a new todo", async () => {
    const dto = {
      id: "1",
      title: "My todo",
      status: "OPEN",
    };

    request.body = dto;

    await controller.executeImpl(request, response);

    expect(response.status).toHaveBeenCalledWith(201); // httpStatus.CREATED
    expect(response.json).toHaveBeenCalledWith("OK");
  });
});

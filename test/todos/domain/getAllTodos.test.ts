import { Todo } from "../../../src/modules/todos/domain/Todo";
import { TodoId } from "../../../src/modules/todos/domain/TodoId";
import { TodoStatus } from "../../../src/modules/todos/domain/TodoStatus";
import { TodoTitle } from "../../../src/modules/todos/domain/TodoTitle";
import { TodoMapper } from "../../../src/modules/todos/mappers/TodoMapper";
import { ITodoRepository } from "../../../src/modules/todos/repos/ITodoRepository";
import { GetAllTodosController } from "../../../src/modules/todos/useCases/getAllTodos/GetAllTodosController";
import { GetAllTodosUseCase } from "../../../src/modules/todos/useCases/getAllTodos/GetAllTodosUseCase";
import { TodoRepositoryMock } from "../../__mocks__/TodoRepositoryMock";

describe("Get All Todos Use Case", () => {
  let useCase: GetAllTodosUseCase;
  let todoRepository: ITodoRepository;
  beforeEach(() => {
    todoRepository = new TodoRepositoryMock();
    useCase = new GetAllTodosUseCase(todoRepository);
  });

  it("should get all todos", async () => {
    // Arrange
    const expectedTodos = [
      { id: "1", title: "Todo 1", status: "OPEN" },
      { id: "2", title: "Todo 2", status: "COMPLETED" },
    ];
    todoRepository.findAll = jest.fn().mockResolvedValue(expectedTodos);

    // Act
    const todos = await useCase.execute();

    // Assert
    expect(todos).toEqual(expectedTodos);
    expect(todoRepository.findAll).toHaveBeenCalled();
  });
});

describe("GetAllTodosController", () => {
  let controller: GetAllTodosController;
  let useCase: GetAllTodosUseCase;
  let request: any;
  let response: any;

  beforeEach(() => {
    useCase = new GetAllTodosUseCase(new TodoRepositoryMock());
    controller = new GetAllTodosController(useCase);
    request = {};
    response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      type: jest.fn().mockReturnThis(),
    };
  });

  it("should get all todos", async () => {
    // Arrange
    const todos = [
      new Todo(TodoId.create("1"), TodoTitle.create("Todo 1"), TodoStatus.OPEN),
      new Todo(TodoId.create("2"), TodoTitle.create("Todo 2"), TodoStatus.COMPLETED),
    ];
    useCase.execute = jest.fn().mockResolvedValue(todos);
    const expectedResponse = [TodoMapper.toDTO(todos[0]), TodoMapper.toDTO(todos[1])];
    // Act
    await controller.executeImpl(request, response);

    // Assert
    expect(response.status).toHaveBeenCalledWith(200); // httpStatus.OK
    expect(response.json).toHaveBeenCalledWith(expectedResponse);
  });
});

import { GetMongoTodoByIdController } from "../../../../../../src/modules/todos/useCases/mongoDB/getTodoInMongo/getMongoTodoByIdController";
import { GetMongoTodoByIdUseCase } from "../../../../../../src/modules/todos/useCases/mongoDB/getTodoInMongo/getMongoTodoByIdUseCase";
import { dbConnection } from "../../../../../../src/shared/infra/http/app";
import { disconnectDB } from "../../../../../../src/shared/infra/server/server";
import { MongoTodoRepositoryMock } from "../../../../../todos/useCases/MongoMockTodoRepositoryClass";


describe("Get todo by id in Mongo", () => {
  let MongoTodoByIdUseCase: GetMongoTodoByIdUseCase;
  let MongoTodoByIdController: GetMongoTodoByIdController;
  let repo: MongoTodoRepositoryMock;
  let mockResponse: any;

  beforeAll(async () => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as any;
    await dbConnection();
  });
  it("should return a todo from the DB", async () => {
    repo = new MongoTodoRepositoryMock();
    MongoTodoByIdUseCase = new GetMongoTodoByIdUseCase(repo);
    MongoTodoByIdController = new GetMongoTodoByIdController(MongoTodoByIdUseCase);
    await MongoTodoByIdController.executeImpl({ params: { id: "1" } }, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });

  afterAll(async () => {
    await disconnectDB();
  })
});
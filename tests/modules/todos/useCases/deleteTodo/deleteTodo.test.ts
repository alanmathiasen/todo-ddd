import { Request, Response } from 'express';
import { deleteTodoController, deleteTodoUseCase } from '../../../../../src/modules/todos/useCases/deleteTodo';

// Mock the DeleteTodoUseCase
jest.mock('../../../../../src/modules/todos/useCases/deleteTodo/DeleteTodoUseCase.ts');

describe('DeleteTodoController', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    // Create a mock request and response object
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should delete a todo', async () => {
    // Arrange
    mockRequest.params = { id: '1' };
    mockRequest.body = {};

    // Act
    await deleteTodoController.executeImpl(mockRequest as Request, mockResponse as Response);

    // Assert
    expect(deleteTodoUseCase.execute).toHaveBeenCalledWith({ id: '1', title: '', status: 'OPEN' });
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith('Deleted OK');
  });
});
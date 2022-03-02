import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo'

test('renders todo item', () => {
  const mockComplete = jest.fn()
  const mockDelete = jest.fn()
  const todo = {
      text: "testtext",
      done: false
  }
  render(<Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete}/>);
  expect(screen.getByText('testtext')).toBeDefined()
  expect(screen.getByText('This todo is not done')).toBeDefined()
  const donebutton = screen.getByText('Set as done')
  fireEvent.click(donebutton)
  const deletebutton = screen.getByText('Delete')
  fireEvent.click(deletebutton)
  expect(mockComplete.mock.calls).toHaveLength(1)
  expect(mockDelete.mock.calls).toHaveLength(1)
});

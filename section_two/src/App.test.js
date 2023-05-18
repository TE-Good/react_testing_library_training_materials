import { render, screen } from '@testing-library/react';
import App from './App';

test('displays title', () => {
  render(<App />);

  const title = screen.getByText('ToDo List');
  expect(title).toBeInTheDocument();
});

test('when submitting a form, the form is cleared', () => {});

test('the submit button is disabled when the form is not complete', () => {});

test('A new entry in the table is created when submitting the form', () => {});

test('When the "Already Complete" is checked, then the table row entry is also checked', () => {});

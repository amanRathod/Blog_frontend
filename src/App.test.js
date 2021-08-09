import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// describe('<App />', () => {
//   it('Renders <App /> component correctly', () => {
//     const { getByText } = render(<App />);
//     expect(getByText(/Getting started with React testing library/i)).toBeInTheDocument();
//   });
// });
test('renders learn react link', () => {
  render(<App />);
  const linkElement = render.getByText('react');
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PhaserAI', () => {
  render(<App />);
  const linkElement = screen.getByText(/PhaserAI/i);
  expect(linkElement).toBeInTheDocument();
});
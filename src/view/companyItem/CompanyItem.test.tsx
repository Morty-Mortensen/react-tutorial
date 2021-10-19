import React from 'react';
import { render, screen } from '@testing-library/react';
import CompanyItem from './CompanyItem';

test('renders learn react link', () => {
  render(<CompanyItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

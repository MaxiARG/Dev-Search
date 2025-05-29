import React from 'react';
import { render, screen } from '@testing-library/react';

describe('trivial to test jest is working', () => {
  it('renders hello world text', () => {
    expect(1 + 1).toBe(2);
  });
});

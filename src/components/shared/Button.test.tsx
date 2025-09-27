import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('renders children and supports click', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });
    await user.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant and size classes', () => {
    render(
      <Button variant="outline" size="sm">
        Small Outline
      </Button>
    );
    const btn = screen.getByRole('button', { name: /small outline/i });
    expect(btn.className).toMatch(/border/);
    expect(btn.className).toMatch(/px-3/);
  });
});

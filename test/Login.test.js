// SignIn.test.js
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from './SignIn';


describe('SignIn component', () => {
 
  it('renders without crashing', () => {
    render(<SignIn />);
    expect(screen.getByTestId('signin-component')).toBeInTheDocument();
  });

  it('validates data input', () => {
    const { getByLabelText, getByText } = render(<SignIn />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    // Test empty data input
    fireEvent.click(submitButton);
    expect(getByText('data input not Empty')).toBeInTheDocument();

    // Test username length
    fireEvent.change(usernameInput, { target: { value: 'abcd' } });
    fireEvent.click(submitButton);
    expect(getByText('username must have 5 character up')).toBeInTheDocument();

    // Test password validation
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);
    expect(getByText('Password must has at least one number and least one special character')).toBeInTheDocument();
  });
  test('renders SignIn component', () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // Your test assertions go here
  });

  test('navigates on button click', async () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // Mock the callAPIFetch function
    jest.mock('../../service/api', () => ({
      callAPIFetch: jest.fn(() => Promise.resolve({ ok: true, json: () => [] })),
    }));

    // Mock the Swal.fire function
    jest.mock('sweetalert2', () => ({
      fire: jest.fn(),
    }));

    // Mock the useNavigate hook
    const navigateMock = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => navigateMock,
    }));

    const usernameInput = screen.getByPlaceholderText('Enter username or email address');
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    const submitButton = screen.getByText('Sign in');

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

    // Mock the API response
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => [{ id: 1, username: 'testUser', role: 'user' }],
    });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Wait for the asynchronous operations to complete
    await waitFor(() => {
      // Your navigation-related assertions go here
      expect(navigateMock).toHaveBeenCalledWith('/movie');
    });
  });
});

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from '../../components/App';
import store from '../../store/index';

afterEach(cleanup);

it("Takes website's snapshot", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  expect(
    asFragment(
      <Provider store={store}>
        <App />
      </Provider>,
    ),
  ).toMatchSnapshot();
});

it("Displays website's title", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  const element = screen.getByText(/Veggie Meal Catalog/i);
  expect(element).toBeInTheDocument();
});

it('Displays search bar', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  const element = screen.getByPlaceholderText(/Search for Meal/i);
  expect(element).toBeInTheDocument();
});

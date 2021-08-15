import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/react";

import CreateTeam from "../../components/CreateTeam/CreateTeam";
import { store } from '../../store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("component CreateTeam", () => {
  it("test button save", async () => {

    const { getByTestId } = render(<Provider store={store}><BrowserRouter><CreateTeam /></BrowserRouter></Provider>)

    const button = await waitFor(() => getByTestId("btn"))
    fireEvent.click(button)
  });
});

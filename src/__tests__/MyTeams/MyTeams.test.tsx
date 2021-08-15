import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import MyTeams from "../../components/MyTeams/MyTeams";
import { store } from '../../store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";;

describe("component MyTeams", () => {
  it("test title menu", async () => {
    render(<Provider store={store}><BrowserRouter><MyTeams /></BrowserRouter></Provider>)

    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("test button nav", async () => {

    const { getByTestId } = render(<Provider store={store}><BrowserRouter><MyTeams /></BrowserRouter></Provider>)

    const btn = await waitFor(() => getByTestId("btn-nav"))
    fireEvent.click(btn)
  });
});




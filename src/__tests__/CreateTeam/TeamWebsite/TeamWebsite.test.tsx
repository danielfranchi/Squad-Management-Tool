import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/react";

import TeamWebsite from "../../../components/CreateTeam/TeamWebsite/TeamWebsite";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { BrowserRouter } from "react-router-dom";

describe("component TeamWebsite", () => {
  it("test input WebSite", async () => {

    const { getByTestId } = render(<Provider store={store}><BrowserRouter><TeamWebsite /></BrowserRouter></Provider>)

    const inputSite = await waitFor(() => getByTestId("inputSite"))
    const name = "http://venturus.com"
    fireEvent.change(inputSite, { target: { value: name } })

    expect(inputSite.value).toEqual(name)
  });
});
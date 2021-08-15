import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/react";

import TeamName from "../../../components/CreateTeam/TeamName/TeamName";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { BrowserRouter } from "react-router-dom";

describe("component MyTeams", () => {
  it("test input name", async () => {

    const { getByTestId } = render(<Provider store={store}><BrowserRouter><TeamName /></BrowserRouter></Provider>)

    const input = await waitFor(() => getByTestId("textInput"))
    const name = "daniel"
    fireEvent.change(input, { target: { value: name } })

    expect(input.value).toEqual(name)
  });
});





import React from "react"
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react"

import Header from "../../components/Header/Header"

describe('component Header', () => {
  it('show application name', () => {
    render(<Header />)

    expect(screen.getByText("Squad Management Tool")).toBeInTheDocument()
  })
})
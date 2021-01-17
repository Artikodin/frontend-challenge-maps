import React from "react";
import { render, screen } from "@testing-library/react";

import FetchHandler from "../index";

const MockFetchComponent = () => <div>mock-component</div>;

describe("FetchHandler", () => {
  test("should display error", () => {
    const error = new Error("Error");
    const loading = false;

    render(
      <FetchHandler error={error} loading={loading}>
        <MockFetchComponent />
      </FetchHandler>
    );

    expect(screen.getByRole("alert")).toHaveTextContent("Error");
  });
  test("should display loading", () => {
    const error = null;
    const loading = true;

    render(
      <FetchHandler error={error} loading={loading}>
        <MockFetchComponent />
      </FetchHandler>
    );

    expect(screen.getByTestId("spin")).toBeInTheDocument();
  });
  test("should display component", () => {
    const error = null;
    const loading = false;

    render(
      <FetchHandler error={error} loading={loading}>
        <MockFetchComponent />
      </FetchHandler>
    );

    expect(screen.getByText("mock-component")).toBeInTheDocument();
  });
});

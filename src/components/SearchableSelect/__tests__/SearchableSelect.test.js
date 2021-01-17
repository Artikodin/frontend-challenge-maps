import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchableSelect from "../index";

describe("SearchableSelect", () => {
  test("should render correct options", async () => {
    render(
      <SearchableSelect
        options={[{ value: "randomValue1" }, { value: "randomValue2" }]}
      />
    );

    const selectElement = screen.getByRole("combobox");
    userEvent.click(selectElement);

    await screen.findByRole("option", { name: "randomValue1" });
    await screen.findByRole("option", { name: "randomValue2" });
  });
  test("should select option on click", async () => {
    const mockSetCategory = jest.fn(value => value);

    render(
      <SearchableSelect
        options={[{ value: "randomValue1" }, { value: "randomValue2" }]}
        onChange={mockSetCategory}
      />
    );

    const selectElement = screen.getByRole("combobox");
    userEvent.click(selectElement);

    await screen.findByRole("option", { name: "randomValue1" });
    const [
      firstOptionAccessibility,
      firstOptionClickable
    ] = screen.getAllByText("randomValue1");
    userEvent.click(firstOptionClickable);

    expect(mockSetCategory.mock.results[0].value).toBe("randomValue1");
    expect(
      screen.getByRole("option", { name: "randomValue1" })
    ).toHaveAttribute("aria-selected", "true");
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {

  test("renders initial count as 0", () => {
    render(<App />);
    const countValue = screen.getByTestId("count-value");
    expect(countValue.textContent).toBe("0");
  });

  test("increments the count when Increment button is clicked", () => {
    render(<App />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);

    const countValue = screen.getByTestId("count-value");
    expect(countValue.textContent).toBe("1");
  });

  test("decrements the count when Decrement button is clicked", () => {
    render(<App />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);

    const countValue = screen.getByTestId("count-value");
    expect(countValue.textContent).toBe("-1");
  });

  test("resets the count when Reset button is clicked", () => {
    render(<App />);
    const incrementButton = screen.getByText("Increment");
    const resetButton = screen.getByText("Reset");

    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);

    const countValue = screen.getByTestId("count-value");
    expect(countValue.textContent).toBe("0");
  });

});

import Home from "@/pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe.skip("Home", () => {
  it("renders a title", () => {
    render(<Home />);

    const title = screen.getByText(/welcome to NextJS App/i);

    expect(title).toBeInTheDocument();
  });
});

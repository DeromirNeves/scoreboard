/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Page from "../app/page"

describe("HelloWorld", () => {
  it("renders hello world", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});

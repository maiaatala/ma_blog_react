/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { TextEncoder, TextDecoder } from "util";

import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router";
import NotFoundPage from "../../pages/errors/NotFoundPage";

Object.assign(global, { TextDecoder, TextEncoder });

test("renders error message", () => {
  render(
    <Router>
      <NotFoundPage />
    </Router>,
  );
  const errorMessage = screen.getByText(/Oops 404!/i);
  expect(errorMessage).toBeInTheDocument();
});

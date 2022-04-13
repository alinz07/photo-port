import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component", () => {
    //baseline test
    it("renders", () => {
        render(<Contact></Contact>);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<Contact></Contact>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("contact me is visible", () => {
    it("inserts text into the h1", () => {
        //arrange
        const { getByTestId } = render(<Contact />);
        //assert
        expect(getByTestId("contact-me")).toHaveTextContent("Contact me");
        expect(getByTestId("sub-btn")).toHaveTextContent("Submit");
    });
});

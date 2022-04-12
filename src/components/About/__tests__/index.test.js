// We need react to enable the components to function properly so we can test them.
import React from "react";
import { render, cleanup } from "@testing-library/react";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
    //first test to verify that the component is rendering
    it("renders", () => {
        render(<About />);
    });
    //it and test can be used interchangeably
    test("matches snapshot DOM node structure", () => {
        //render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});

import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: "Grocery booth",
    index: 1,
    category: "commercial",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
};

afterEach(cleanup);

describe("Modal Component", () => {
    it("renders", () => {
        render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(
            <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    describe("click event", () => {
        it("calls onClose handler", () => {
            const { getByText } = render(
                <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
            );
            fireEvent.click(getByText("Close this modal"));
            expect(mockToggleModal).toHaveBeenCalledTimes(1);
        });
    });
});

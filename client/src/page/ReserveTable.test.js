import { render, screen } from "@testing-library/react";
import ReserveTable from "./ReserveTable";



describe('Render ReserveTable page',()=>{
    test('Date', () => {
        render(<ReserveTable />);
        const headingElement = screen.getByText("Choose date");
        expect(headingElement).toBeInTheDocument();
    })
    test('Time', () => {
        render(<ReserveTable />);
        const headingElement = screen.getByText("Choose time");
        expect(headingElement).toBeInTheDocument();
    })
    test('Geust', () => {
        render(<ReserveTable />);
        const headingElement = screen.getByText("Number of guests");
        expect(headingElement).toBeInTheDocument();
    })
    test('Occasion', () => {
        render(<ReserveTable />);
        const headingElement = screen.getByText("Occasion");
        expect(headingElement).toBeInTheDocument();
    })
    test('Renders ReserveTable page', () => {
        render(<ReserveTable />);
        const headingElement = screen.getByText("Make Your reservation");
        expect(headingElement).toBeInTheDocument();
    })
    
})
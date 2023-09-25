import { render, screen } from "@testing-library/react";
import Nav from "./Nav"
import { BrowserRouter } from "react-router-dom";


describe('Render App bar',()=>{
    test('Home', () => {
        render(<BrowserRouter><Nav/></BrowserRouter>)
        const headingElement = screen.getByTestId("Nav-Home");
        expect(headingElement).toBeInTheDocument();
    })
    test('About', () => {
        render(<BrowserRouter><Nav/></BrowserRouter>)
        const headingElement = screen.getByTestId("Nav-About");
        expect(headingElement).toBeInTheDocument();
    })
    test('Menu', () => {
        render(<BrowserRouter><Nav/></BrowserRouter>)
        const headingElement = screen.getByTestId("Nav-Menu");
        expect(headingElement).toBeInTheDocument();
    })
    test('ReservTable', () => {
        render(<BrowserRouter><Nav/></BrowserRouter>)
        const headingElement = screen.getByTestId("Nav-ReserveTable");
        expect(headingElement).toBeInTheDocument();
    })
    test('Login', () => {
        render(<BrowserRouter><Nav/></BrowserRouter>)
        const headingElement = screen.getByTestId("Nav-Login");
        expect(headingElement).toBeInTheDocument();
    })
    test('OrderOnline', () => {
        render(<BrowserRouter><Nav/></BrowserRouter>)
        const headingElement = screen.getByTestId("Nav-OrderOnline");
        expect(headingElement).toBeInTheDocument();
    })

    
})
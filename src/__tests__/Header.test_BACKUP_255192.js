import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

<<<<<<< HEAD
import Header from '../components/Header'
=======
import Header from "../components/Header.test.js!";
>>>>>>> 357427112068179993823092678ed6470088883f

test("displays the text 'hello from the Header!'", () => {
  render(<Header />)

  expect(screen.queryByText('hello from the Header!')).toBeInTheDocument()
})
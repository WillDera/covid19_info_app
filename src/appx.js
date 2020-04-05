import React from "react";
import { useTheme } from "./ThemeContext";
import styled, { withTheme } from "styled-components";
import { buttonBackgroundColor, buttonTextColor } from "./theme";
import App from "./App";

function Appx(props) {
	const themeToggle = useTheme();

	const Button = styled.button`
		background: ${buttonBackgroundColor};
		border: none;
		border-radius: 0.3em;
		box-shadow: none;
		color: ${buttonTextColor};
		cursor: pointer;
		font-size: 1em;
		padding: 0.5em 1em;
	`;

    console.log(props)

	return (
		<header className="App-header">
			<p>
				<Button onClick={() => themeToggle.toggle()}>
					{props.theme.mode === "dark"
						? "Switch to Light Mode"
						: "Switch to Dark Mode"}
				</Button>
			</p>
		</header>
	);
}

export default withTheme(Appx);

import React, { FC } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { Button as PrimeButton, ButtonProps } from "primereact/button";

// Custom Props
interface CustomButtonProps extends ButtonProps {
	childtext?: any;
}

// Our template
export const Default: FC<CustomButtonProps> = (props) => (
	<PrimeButton {...props}>
		{props.children} {props.childtext}
	</PrimeButton>
);

export default {
	title: "Button",
	component: Default,
	argTypes: {
		// For now we can't bind children from the ui so we gonna disable it. If you need to use children you can look the WithChild example below.
		children: {
			control: false
		},
		childtext: {
			type: "string",
			table: {
				defaultValue: "HI! I'm Child text"
			}
		},
		// Log functions
		onClick: { action: "clicked" },
		onFocus: { action: "focused" },
		onBlur: { action: "blurred" }
	}
} as ComponentMeta<typeof Default>;

export const SuccessButton = Default.bind({}) as Story<CustomButtonProps>;

SuccessButton.args = { label: "Success", severity: "success" };

export const LongTextButton = Default.bind({}) as Story<CustomButtonProps>;

LongTextButton.args = { label: "Looooooooooooooooooooooooooooong Text" };

export const WithChildText = Default.bind({}) as Story<CustomButtonProps>;

WithChildText.args = { childtext: "Child Text" };

export const WithChild = Default.bind({}) as Story<CustomButtonProps>;

WithChild.args = { children: <h1>Child with h1</h1> };

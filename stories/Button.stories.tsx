import React, { FC } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { Button as PrimeButton, ButtonProps } from "primereact/button";

interface CustomButtonProps extends ButtonProps {
	childtext?: any;
}

export const Default: FC<CustomButtonProps> = (props) => (
	<PrimeButton {...props}>
		{props.children} {props.childtext}
	</PrimeButton>
);

export default {
	title: "Button",
	component: Default,
	argTypes: {
		children: {
			disabled: true
		},
		childtext: { type: "string", defaultValue: "" },
		onClick: { action: "clicked" },
		onFocus: { action: "focused" },
		onBlur: { action: "blurred" }
	}
} as ComponentMeta<typeof PrimeButton>;

export const SuccessButton = Default.bind({}) as Story<CustomButtonProps>;

SuccessButton.args = { label: "Success", severity: "success" };

export const LongTextButton = Default.bind({}) as Story<CustomButtonProps>;

LongTextButton.args = { label: "Looooooooooooooooooooooooooooong Text" };

export const WithChildText = Default.bind({}) as Story<CustomButtonProps>;

WithChildText.args = { childtext: "Child Text" };

export const WithChild = Default.bind({}) as Story<CustomButtonProps>;

WithChild.args = { children: <h1>Child with h1</h1> };

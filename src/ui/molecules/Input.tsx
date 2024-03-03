import { type InputHTMLAttributes } from "react";
import { Label } from "@/ui/atoms/Label";

type InputProps = {
	label: string;
};

export const Input = ({ label, ...props }: InputProps & InputHTMLAttributes<HTMLInputElement>) => (
	<Label>
		{label}
		<input
			{...props}
			className="my-1 block w-full rounded-md border py-2 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
		/>
	</Label>
);

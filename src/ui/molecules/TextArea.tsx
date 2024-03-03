import { type TextareaHTMLAttributes } from "react";
import { Label } from "@/ui/atoms/Label";

type TextAreaProps = {
	label: string;
};

export const TextArea = ({
	label,
	...props
}: TextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) => (
	<Label>
		{label}
		<textarea
			{...props}
			className="mt-1 block max-h-48 min-h-[4.5rem] w-full rounded-md border text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
		/>
	</Label>
);

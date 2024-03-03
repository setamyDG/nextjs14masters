import { type ReactNode } from "react";

type LabelProps = {
	children: ReactNode;
};
export const Label = ({ children }: LabelProps) => (
	<label className="">
		<span className="text-xs font-semibold text-gray-700">{children}</span>
	</label>
);

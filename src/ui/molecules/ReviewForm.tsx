import React, { type FormHTMLAttributes } from "react";
import { Input } from "@/ui/molecules/Input";
import { TextArea } from "@/ui/molecules/TextArea";
import { Label } from "@/ui/atoms/Label";

type ReviewFormProps = {
	formAction: FormHTMLAttributes<HTMLFormElement>["action"];
};

export const ReviewForm = ({ formAction }: ReviewFormProps) => (
	<form action={formAction} data-testid="add-review-form">
		<Input required label="Review title" name="headline" />
		<TextArea required label="Review content" name="content" />
		<div className="my-2">
			<Label>
				Rating
				<fieldset className="my-2 flex flex-row-reverse justify-end">
					{[5, 4, 3, 2, 1].map((value) => (
						<React.Fragment key={value}>
							<input
								className="mx-4 h-4 w-4"
								id={`rating-${value}`}
								type="radio"
								key={value}
								value={value}
								name="rating"
								required
							/>
							<label htmlFor={`rating-${value}`} className="cursor-pointer">
								{value}
							</label>
						</React.Fragment>
					))}
				</fieldset>
				<fieldset className="flex flex-row-reverse justify-end"></fieldset>
			</Label>
		</div>
		<Input required label="Name" name="name" />
		<Input required label="Email" name="email" />
		<button
			type="submit"
			className="mt-4 w-full rounded-md bg-gradient-to-r from-gray-700 to-black py-2 text-center font-semibold text-white opacity-90 transition-all hover:bg-gray-800 hover:opacity-100"
		>
			Submit
		</button>
	</form>
);

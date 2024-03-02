import { revalidateTag } from "next/cache";
import React from "react";
import { submitProductReview } from "@/api/product";
import { Input } from "@/ui/molecules/Input";
import { TextArea } from "@/ui/molecules/TextArea";
import { Label } from "@/ui/atoms/Label";

type ReviewFormProps = {
	productId: string;
};

export const ReviewForm = ({ productId }: ReviewFormProps) => {
	const handeAddReviewAction = async (formData: FormData) => {
		"use server";
		const data = {
			author: formData.get("name") as string,
			description: formData.get("content") as string,
			productId: productId,
			email: formData.get("email") as string,
			rating: Number(formData.get("rating")),
			title: formData.get("title") as string,
		};
		await submitProductReview(
			data.author,
			data.description,
			data.email,
			data.productId,
			data.rating,
			data.title,
		);
		revalidateTag("productReview");
	};

	return (
		<form action={handeAddReviewAction} data-testid="add-review-form">
			<Input label="Review title" name="title" />
			<TextArea label="Review content" name="content" />
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
			<Input label="Name" name="name" />
			<Input label="Email" name="email" />
			<button
				type="submit"
				className="mt-4 w-full rounded-md bg-gradient-to-r from-gray-700 to-black py-2 text-center font-semibold text-white opacity-90 transition-all hover:bg-gray-800 hover:opacity-100"
			>
				Submit
			</button>
		</form>
	);
};

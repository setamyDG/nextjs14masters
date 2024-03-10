import { Calendar } from "lucide-react";
import { type ProductReviewFragment } from "@/gql/graphql";
import { Rating } from "@/ui/atoms/Rating";

type ReviewItemProps = {
	review: ProductReviewFragment;
};

export const ReviewItem = ({ review }: ReviewItemProps) => (
	<li className="py-12">
		<div className="flex justify-between">
			<div className="flex flex-col">
				<p className="font-semibold">{review.author}</p>
				<span className="text-xs italic text-gray-600">{review.email}</span>
				<h3 className="mt-2 text-lg font-medium text-gray-900">{review.title}</h3>
			</div>
			<div className="flex items-center gap-1">
				<Calendar size={16} />
				<time className="text-sm text-gray-500">
					{Intl.DateTimeFormat("en-US", {
						year: "numeric",
						month: "long",
						day: "2-digit",
					}).format(new Date(review.createdAt as string))}
				</time>
			</div>
		</div>
		<div className="mt-4 space-y-6">
			<p className="text-sm text-gray-500">{review.description}</p>
			<div className="flex items-center">
				<Rating isAvgTextVisible={false} rating={review.rating} />
				<p className="ml-2 text-sm text-gray-500">{review.rating} / 5</p>
			</div>
		</div>
	</li>
);

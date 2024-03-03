import { type ProductReviewFragment } from "@/gql/graphql";
import { ReviewItem } from "@/ui/molecules/ReviewItem";

type ReviewProductListProps = {
	reviews: ProductReviewFragment[];
};

export const ReviewProductList = ({ reviews }: ReviewProductListProps) => (
	<ul className="my-6 divide-y divide-gray-200">
		{reviews.map((review) => (
			<ReviewItem key={review.id} review={review} />
		))}
	</ul>
);

import { Star } from "lucide-react";

type RatingProps = {
	rating: number;
	isAvgTextVisible?: boolean;
};

export const Rating = ({ rating, isAvgTextVisible = true }: RatingProps) => {
	const renderStars = () => {
		return Array.from({ length: 5 }, (_, index) => (
			<Star
				key={index}
				fill={index < Math.round(rating) ? "#ffd700" : "#c7c7c7"}
				color={index < Math.round(rating) ? "#ffd700" : "#c7c7c7"}
				size="16"
			/>
		));
	};

	return (
		<div className="flex text-center">
			{isAvgTextVisible && (
				<span data-testid="product-rating" className="mr-2 text-xs">
					{rating.toFixed(1)} / 5
				</span>
			)}
			{renderStars()}
		</div>
	);
};

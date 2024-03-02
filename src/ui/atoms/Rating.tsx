import { Star } from "lucide-react";

type RatingProps = {
	rating: number;
};

export const Rating = ({ rating }: RatingProps) => {
	const renderStars = () => {
		return Array.from({ length: 5 }, (_, index) => (
			<Star
				key={index}
				fill={index < rating ? "#ffd700" : "#c7c7c7"}
				color={index < rating ? "#ffd700" : "#c7c7c7"}
				size="16"
			/>
		));
	};

	return (
		<div data-testid="product-rating" className="flex">
			{renderStars()}
		</div>
	);
};

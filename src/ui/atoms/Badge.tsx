type BadgeProps = {
	value: string | number;
};

export const Badge = ({ value }: BadgeProps) => (
	<span className="py-0.25 inline-flex items-center rounded-full bg-red-500 px-1.5 text-xs font-medium text-white">
		{value}
	</span>
);

type IconProps = {
	src: string;
	alt: string;
	onClick?: () => void;
};
export const Icon = ({ src, alt }: IconProps) => (
	<img src={src} alt={alt} width={20} className=":hover cursor-pointer" />
);

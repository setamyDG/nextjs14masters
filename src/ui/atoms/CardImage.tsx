import NextImage from "next/image";

type CardImageProps = {
	src: string;
	alt: string;
};

export const CardImage = ({ alt, src }: CardImageProps): JSX.Element => (
	<div className="aspect-square cursor-pointer overflow-hidden  border bg-gray-100">
		<NextImage
			width={300}
			height={300}
			alt={alt}
			src={src}
			className="h-full w-full object-cover object-center p-4 mix-blend-multiply transition-transform"
		/>
	</div>
);

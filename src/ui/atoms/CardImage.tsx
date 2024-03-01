import { CheckCheck } from "lucide-react";
import NextImage from "next/image";

type CardImageProps = {
	src: string;
	alt: string;
};

export const CardImage = ({ alt, src }: CardImageProps): JSX.Element => (
	<div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50">
		<div className="absolute bottom-2 right-2 mt-2 flex items-center gap-2 rounded-md bg-gray-600 px-2 py-1">
			<CheckCheck size={20} color="white" />
			<p className="hidden rounded-md text-sm text-white lg:block">in stock</p>
		</div>
		<NextImage
			width={300}
			height={300}
			alt={alt}
			src={src}
			className="h-full w-full object-cover object-center p-4 mix-blend-multiply transition-transform"
		/>
	</div>
);

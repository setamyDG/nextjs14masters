import Image from "next/image";

export const Hero = () => {
	return (
		<div className="mb-12 h-full bg-white">
			<div className="w-full max-w-full">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
					<div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
						<Image
							src="https://images.unsplash.com/photo-1608687087357-845abfade367?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							width={300}
							height={300}
							alt="Photo by Minh Pham"
							className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
						/>

						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
					</div>

					<div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
						<Image
							src="https://images.unsplash.com/photo-1608228088998-57828365d486?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Photo by Magicle"
							width={450}
							height={300}
							className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
						/>

						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
					</div>
					<div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
						<Image
							src="https://images.unsplash.com/photo-1519748771451-a94c596fad67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Photo by Martin Sanchez"
							width={450}
							height={300}
							className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
						/>

						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
					</div>
					<div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-80">
						<Image
							src="https://images.unsplash.com/photo-1575202332411-b01fe9ace7a8?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Photo by Martin Sanchez"
							width={300}
							height={300}
							className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
						/>

						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

import Image from "next/image";

const CarCard = ({ car, i }: { car: any; i: number }) => {
	return (
		<article
			className={
				"overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex w-full " +
				(i % 2 === 0 ? "flex-row-reverse" : "")
			}
		>
			<Image
				alt=""
				src={
					"https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg"
				}
				className="h-56 w-full object-cover"
				width={300}
				height={224}
			/>

			<div className="p-4 sm:p-6 w-[28rem]">
				<a href="#">
					<h3 className="text-lg font-medium text-gray-900">
						{car.brand} - {car.model}
					</h3>
				</a>

				<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 flex flex-col gap-3">
					<span>Anno:{car.year}</span>
					<span>Prezzo:{car.price}€</span>
				</p>

				<a
					href="#"
					className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
				>
					Scopri di più
					<span
						aria-hidden="true"
						className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
					>
						&rarr;
					</span>
				</a>
			</div>
		</article>
	);
};

export default CarCard;

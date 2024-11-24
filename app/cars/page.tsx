import CarCard from "@/components/accar-ui/car-card";
import { mocksCars } from "@/website.config";

export default async function Cars() {
	return (
		<>
			<main className=" flex flex-col gap-6 w-full justify-center">
				<p>cars page</p>
				{mocksCars?.map((car, i) => <CarCard car={car} i={i} />)}
			</main>
		</>
	);
}

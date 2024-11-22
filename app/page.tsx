import Image from "next/image";
import Link from "next/link";

export default async function Index() {
	return (
		<>
			<main className="flex-1 flex flex-col gap-6 px-4">
				<div className="col-inner text-center dark">
					<div id="text-2361018523" className="text">
						<h2>Scopri il nostro garage e le nostre offerte su</h2>
					</div>

					<div>
						<Image
							alt=""
							width="251"
							height="60"
							src="https://www.cassinelliauto.it/wp-content/uploads/2021/11/concessionario-cassinelli-auto-piacenza-autoscout-24.svg"
						/>{" "}
					</div>
				</div>

				<Link
					rel="noopener noreferrer"
					href="https://www.autoscout24.it/concessionari/cassinelli-auto-di-cassinelli-luca?cq_src=google_ads&amp;cq_cmp=9737206534&amp;cq_term=&amp;cq_plac=&amp;cq_net=g&amp;cq_plt=gp&amp;gclid=CjwKCAjwgZCoBhBnEiwAz35RwjyjVhJGGBT9Pf4tqbO3pm7tb1fSTdJ2SxXq7zxcW0220ptcvhgT2RoCnyoQAvD_BwE"
					target="_blank"
				>
					<span>Guarda tutte le auto in offerta!</span>
				</Link>
			</main>
		</>
	);
}

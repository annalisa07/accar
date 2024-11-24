const config = {
	navbar: {
		routes: [
			{
				name: "Home",
				url: "/",
			},
			{
				name: "About us",
				url: "/about-us",
			},
			{
				name: "Auto",
				url: "/cars",
			},
			{
				name: "Contacts",
				url: "/contacts",
			},
		],
	},
};

//export type carType = (typeof mocksCars)[0];

const mocksCars = [
	{
		brand: "Tesla",
		model: "Model S",
		year: 2022,
		price: 79999,
		url: "https://cdn.motor1.com/images/mgl/VkP9Y/s1/2022-tesla-model-s.jpg",
	},
	{
		brand: "BMW",
		model: "X5",
		year: 2023,
		price: 65999,
		url: "https://cdn.bmwblog.com/wp-content/uploads/2023-BMW-X5.jpg",
	},
	{
		brand: "Mercedes-Benz",
		model: "C-Class",
		year: 2023,
		price: 44999,
		url: "https://media.mbusa.com/models/2023-C-Class.jpg",
	},
	{
		brand: "Audi",
		model: "A4",
		year: 2023,
		price: 41999,
		url: "https://www.audiusa.com/content/dam/nemo/models/a4/2023.jpg",
	},
	{
		brand: "Toyota",
		model: "Corolla",
		year: 2022,
		price: 20999,
		url: "https://www.toyota.com/corolla/2022.jpg",
	},
	{
		brand: "Ford",
		model: "Mustang",
		year: 2023,
		price: 55999,
		url: "https://cdn.motor1.com/images/mgl/bZXGp/s1/2023-ford-mustang.jpg",
	},
	{
		brand: "Chevrolet",
		model: "Camaro",
		year: 2023,
		price: 25999,
		url: "https://www.chevrolet.com/camaro/2023.jpg",
	},
	{
		brand: "Honda",
		model: "Civic",
		year: 2023,
		price: 22999,
		url: "https://cdn.honda.com/civic/2023.jpg",
	},
	{
		brand: "Hyundai",
		model: "Elantra",
		year: 2022,
		price: 20999,
		url: "https://cdn.hyundaiusa.com/elantra/2022.jpg",
	},
	{
		brand: "Nissan",
		model: "Altima",
		year: 2023,
		price: 25999,
		url: "https://www.nissanusa.com/altima/2023.jpg",
	},
	{
		brand: "Kia",
		model: "Sorento",
		year: 2023,
		price: 30999,
		url: "https://cdn.kia.com/sorento/2023.jpg",
	},
	{
		brand: "Volkswagen",
		model: "Golf",
		year: 2023,
		price: 27999,
		url: "https://www.vw.com/golf/2023.jpg",
	},
];

export { config, mocksCars };

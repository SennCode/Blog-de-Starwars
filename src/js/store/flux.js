const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: [],
			favoritos: [],
			
		},
		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPeople : async() => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				setStore({people: data.results})
				
			},
			
			getPlanets : async() => {
				const res = await fetch("https://www.swapi.tech/api/planets/")
				const data = await res.json()
				const arrayNombres = data.results.filter(element => element.name !== 'Tatooine')
				console.log(arrayNombres)
				setStore({planets: arrayNombres})
			},
			getVehicles : async() => {
				const res = await fetch("https://www.swapi.tech/api/vehicles/")
				const data = await res.json()
				setStore({vehicles: data.results})
			},
			getFavoritos : (nombre) => {
				const store = getStore()
				let auxFavoritos = [...store.favoritos]
				let objetoFavoritos = {
					"id": auxFavoritos.length, "nombre": nombre
				}
				auxFavoritos.push(objetoFavoritos)
				setStore ({favoritos: auxFavoritos})
			},
			 deleteFavoritos : (id) => {
				const store = getStore()
				console.log(id)
				const filtrados = store.favoritos.filter(favorito => favorito.id !== id)
				console.log(filtrados)
				setStore({favoritos: filtrados})
				
			}
			}
	};
};

export default getState;

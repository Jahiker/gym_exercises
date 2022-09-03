export const exercisesOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const responose = await fetch(url, options);
    const data = await responose.json();

    return data;
} 
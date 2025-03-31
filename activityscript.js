document.getElementById("checkExercises").addEventListener("click", async function () {
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5a5b602929msh68ea9f7710aacdfp1e3142jsncdd5d9c5ea34',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const categories = await response.json();
        
        localStorage.setItem("categories", JSON.stringify(categories));
        window.open("exercisefilters.html", "_blank");
    } catch (error) {
        console.error("Error fetching exercises:", error);
    }
});

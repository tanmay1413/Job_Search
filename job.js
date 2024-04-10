
// const url = 'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd93b6f1812msh06704719ba46df1p1e7b5cjsnbbc13988f03a',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
};

const getJob = (jobtitle) => {
    jobName.innerHTML = jobtitle;
    // jobLocation.innerHTML= location;

    fetch(`https://jsearch.p.rapidapi.com/search?query=${jobtitle}&page=1&num_pages=1`, options)
        .then((response) => { return response.json() })
        .then((data) => {
            console.log(data)
            type.innerHTML = data.data[0].job_title
            location.innerHTML = data.data[0].job_city
            Cname.innerHTML = data.data[0].employer_name


        })
}

submit.addEventListener("click", (event) => {
    event.preventDefault()
    getJob(jobtitle.value)
})

getJob("software engineer in Pune India")

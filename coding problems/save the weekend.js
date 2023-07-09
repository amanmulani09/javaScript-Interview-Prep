const podcastData = [
    {
        id: 1,
        title: "Scrimba Podcast", 
        duration: 50, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Alex Booker"], 
        rating: 10,
        genre: "education",
        paid: false
    },
    {
        id: 2,
        title: "Crime Fan", 
        duration: 150, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Bob Smith", "Camilla Lambert"], 
        genre: "true crime",
        rating: 5, 
        paid: true
    },
    {
        id: 3,
        title: "Mythical Creatures", 
        duration: 99, 
        tags: ["entertainment", "general", "unicorns"], 
        hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"], 
        genre: "fantasy",
        rating: 8,
        paid: true
    },
    {   
        id: 4,
        title: "Crime Crime Crime", 
        duration: 70, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
        genre: "true crime",
        rating: 6, 
        paid: true
    },
    {
        id: 5,
        title: "Something about Witches", 
        duration: 35, 
        tags: ["fantasy", "entertainment"], 
        hosts: ["Frewin Wyrm", "Evanora Highmore"], 
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        id: 6,
        title: "Coding Corner", 
        duration: 55, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
        genre: "education",
        rating: 9,
        paid: false
    },
]

function generateDescription(podcasts){

    let dataWithDescp = podcasts.map(podcast =>{
        let hosts = podcast.hosts.join(',');
        let paid = "PAID";
        let free = "FREE"
        return {
            ...podcast,
            description:`Welcome to the ${podcast.title} podcast, In ${podcast.duration} minutes you will finish the podcast
                         It is under the ${podcast.genre} category, the hosts of podcast are ${hosts}, It has the ${podcast.rating}
                         ratings, and it is a ${podcast.paid ? paid : free} to listen podcast`
        }
    })
    return dataWithDescp;
}

console.log(generateDescription(podcastData));
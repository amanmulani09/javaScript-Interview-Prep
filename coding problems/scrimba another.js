const data = [
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
        title: "Crime Crime Crime", 
        duration: 70, 
        tags: ["crime", "entertainment", "mature"], 
        hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"], 
        genre: "true crime",
        rating: 6, 
        paid: true
    },
    {
        title: "Something about Witches", 
        duration: 35, 
        tags: ["fantasy", "entertainment"], 
        hosts: ["Frewin Wyrm", "Evanora Highmore"], 
        genre: "fantasy",
        rating: 8,
        paid: false
    },
    {
        title: "Coding Corner", 
        duration: 55, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"], 
        genre: "education",
        rating: 9,
        paid: false
    },
]

function getHosts(data){
    const totalHosts = data.map(item => item.hosts );
    return totalHosts.flat();
}

// getHosts(data)

const awards = ["🏆", "⭐", "💎", "🥇", "👑"];
function assignAward(data,awards){
 const totalHosts = getHosts(data);
    // console.log(totalHosts)
    // console.log(randomAward)
    const hostsWithAward = totalHosts.map(host => 
        {
    const randomAward = Math.floor(Math.random()*awards.length)
            
           return `${awards[randomAward]} ${host}`
        })
        
    return hostsWithAward;
}
assignAward(data,awards)

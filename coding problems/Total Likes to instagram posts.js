const likedData = [
    {
       post: "A lot of you have asked about my morning skin care routine...",
       likes: 348
    },
    {
       post: "New Year, new me. #blessed",
       likes: 102
    },
    {
       post: "Sunday by the pool 🌴 #vibes #mood #hotdoglegs",
       likes: 544
    },
    {
       post: "Here are my top 5 #notsponsored unbiased dry shampoo recs...",
       likes: 745
    },
    {
       post: "Last day in Hawaii! The tans will fade but the memories will last forever #holidays #foreverhawaii #blessed #followme",
       likes: 412
    },
    {
       post: "Leg day #summerbody2022 #gymshark #beachworkout",
       likes: 275
    },
]

function getAverageLikes(data){
   let totalPosts = data.length;
   // const totalLikes = data.reduce((item,acc)=> acc+= item.likes,0)
   const totalLikes = data.reduce((acc,value)=>{
       return acc+=value.likes
   },0);
   return Math.floor(totalLikes/totalPosts)
}


getAverageLikes(likedData)
const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

//input :smile:
//output 😊

const getmyEmoji = (str)=>{
    if(str.startsWith(':') && str.endsWith(':')){
        let finalLenght = str.length;
        let emoji = str.slice(1,finalLenght-1);
        return emojis[emoji]
    } else{
        return str;
    }
}

// input I :smile: with my :heart:
// outupt I 😊 with my 💜


const getmyEmojiFeelings = (str)=>{
    let strArr = str.split(' ');
    let finalStrArr = strArr.map((item)=> getmyEmoji(item))
    return finalStrArr.join(' ');
}

getmyEmojiFeelings('I :heart: my :cat:');

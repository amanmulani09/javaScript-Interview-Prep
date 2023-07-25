// an anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the origninal letters exactly once.


// input : s = anagram, L  "nagaram" ---------> true
// Input s rat, L, car ---------> output false


const findAnagram = function(s,l){
    if(s.length !== l.length) return false;
    return s.split('').sort().join('') === l.split('').sort().join('') ? true : false;
}


findAnagram('rat','car')

const findAnagram2 = function(s,t){
    if(s.length !== t.length ) return false;
    let obj1 = {};
    let obj2 = {};
    for(let i =0; i<s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1; // used to check if any property exist in the Object before
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
        
    }
    for(let key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
}

findAnagram2('rat','tar')
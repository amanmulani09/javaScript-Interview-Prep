// an anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the origninal letters exactly once.


// input : s = anagram, L  "nagaram" ---------> true
// Input s rat, L, car ---------> output false


const findAnagram = function(s,l){
    if(s.length !== l.length) return false;
    return s.split('').sort().join('') === l.split('').sort().join('') ? true : false;
}


findAnagram('rat','car')
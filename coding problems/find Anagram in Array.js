
function findAnagarmInString(anagram,str){
    let firstAnagram = anagram.split('').sort().join('');
    let strAnagram = str.split('').sort().join('');
    console.log(firstAnagram,strAnagram)
    if(firstAnagram === strAnagram){
        return true
    }
}

const findAnagarmsInArray = (array,anagram)=>{
    let anagrams = [];
    array.forEach(item => findAnagarmInString(anagram,item) && anagrams.push(item))
    return anagrams;
}

console.log(findAnagarmsInArray(["tater", "tree", "teart", "tetra", "heart", "hamster"],'treat'));
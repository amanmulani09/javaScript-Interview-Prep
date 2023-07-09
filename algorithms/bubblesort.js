

function bubbleSort(array){
    const length = array.length;
    
        if(length === 0) return 
    
        let checked;
    
        do{
        console.log('do')
            checked = false;
    
            for(let i = 0; i<length; i++){
                if(array[i] > array[i+1]){
                    console.log(array[i]);
                    console.log(checked)
                    let temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
                    checked = true;
                }
            }
            
        }while(checked)
        return array;
    }
    
    
    bubbleSort([1,3,5,7,9,4,2]);
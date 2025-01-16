// Task 01:
const iterateWithAsyncAwait= async (array) => {
    try {
       for (i in array){
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(console.log(array[i]));
                    }, 1000);
                });
            }
    } catch (err) {
        console.log(err);
    }
}
// iterateWithAsyncAwait([1,2,3,4,5,6,7,8,9])

// Task 02:
const  awaitCall=async()=>{
    try{
        


    }
    catch(err){
        console.log(err);
    }
}

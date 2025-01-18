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
        const call=await fetch('https://jsonplaceholder.typicode.com/posts');
        const data=await call.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
// awaitCall();



// Task 03:
const  awaitCall2=async()=>{
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data=await response.json();
        console.log(data);
    }
    catch(err){
        console.log(`somthing went wrong ${err}`);
    }
}
// awaitCall2();


// Task:
// Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. 
// Each function should log a message after a delay of 1 second. Chain these functions using await.
const acyncfunc1=async()=>{
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('async function 1'));
        },1000);
    })
}

const acyncfunc2=async()=>{
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('async function 2'));
        },1000);
    })
}

const acyncfunc3=async()=>{
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('async function 3'));
        },1000);
    })
}
const chainedAsyncFunctions=async()=>{
    try{
        await acyncfunc1();
        await acyncfunc2();
        await acyncfunc3();
    }
    catch(err){
        console.log(`èrror: ${err}`);
    }
}
// chainedAsyncFunctions();

// task 04:
async function concurrentRequests(){
    try{
        await Promise.all([fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users')])
        .then(([posts,users])=>Promise.all([posts.json(),users.json()]))
        .then(([posts,users])=>{
            console.log(posts);
            console.log(users);
        })
        .catch(err=>console.error(err));}

    catch(err){
        console.error(err);
    }
}
// concurrentRequests();

// task 05:
const parallelCalls=async()=>{
    try{
        const posts =fetch('https://jsonplaceholder.typicode.com/posts');
        const users=fetch('https://jsonplaceholder.typicode.com/users');
        const res=await Promise.all([users,posts])
        res.forEach(async (res)=>{
            console.log(await res.json());
        })
        
    }
    catch(err){
        console.log(err);
    }
}
parallelCalls();

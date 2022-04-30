console.clear();

let getdata=()=>{
    let xhr= new XMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1');
xhr.onload=()=>{
    let data=xhr.response;
     console.log(JSON.parse(data))

    }
xhr.onerror=()=>{
    console.log("Error is here")
}
    xhr.send()
}

getdata();
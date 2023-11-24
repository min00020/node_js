function webServerConnect(){
    return fetch('https://jsonplaceholder.typicode.com/posts/1',{
        headers : {
            'Cache-Control': 'no-cache'
        }
    })
    .then(function(response){
        return response.json()
    });
    //.then(response => response.json()) 둘 다 가능
}

async function getJSONData(){
    const result = await webServerConnect();
    console.log(result);
}
//await쓰는 경우 바깥 함수 async라는 거 알려줘야함

getJSONData();
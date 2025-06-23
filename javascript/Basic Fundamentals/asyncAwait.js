// Q: Use async/await to fetch data from this dummy API: https://jsonplaceholder.typicode.com/todos/1


const fetchData = async()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()
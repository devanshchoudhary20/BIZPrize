

const onion = fetch("http://localhost:3001/item")
.then(res => res.json())
.then(data => {
    console.log(data)
})
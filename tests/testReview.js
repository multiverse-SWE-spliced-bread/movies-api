const movieList = [
    {name:"Gladiator", runtime:155, genre: "Historical Drama" },
    {name:"The Big Short", runtime:125, genre:""},
    {name:"Mean Girls", runtime: 97, genre: ""}
]



const userList = [
    {name: "Steve", email: "steve@email.com"},
    {name: "Ryan", email: "ryan@email.com"},
    {name:"Christian", email:"christian@email.com"}
]



const newArray = movieList.map((movie) => movie.name)

console.log(newArray)
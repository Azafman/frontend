let friend={
    first: 'Mateu',
    sexo:'M',
    peso:80.3,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
let $aza =9 

friend.engordar(2)
console.log(`${friend.first} tem ${friend.peso}KG`)
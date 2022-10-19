const user = {
     id: 42,
     displayName: 'jdoe',
     fullName: {
          firstName: 'John',
          lastName: 'Doe'
     }
};
const name={
     sla:12,
     abc:13,
     id: 13//Esta propriedade não sera acessaada porqu não foi passada como parâmetro
     // exemplo userId(name);
}


function userId({id}) {
     //Ele vai pegar a propriedade id do objeto user passado como parâmetro
     return id;//42
}
function getFullName({fullName:{firstName:first,lastName:last}}) {
     return `${first} ${last}`
}

console.log(userId(user));

getFullName(user);// John Doe
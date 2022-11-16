
window.addEventListener('load', e => {
     startTable(document.querySelector('.resultado'));
})
function startTable(div) {
     const tableDocument = document.createElement('table');
     div.appendChild(tableDocument);

     //não precisei usar ../../pessoas.json
     fetch('pessoas.json')
     .then(async dataJson => {
          const dates = await dataJson.text();
          const datesOfc = JSON.parse(dates);

          for(let user in datesOfc) {
               addDataUser(datesOfc[user]);
          }
          
     })

     const addDataUser = data => {
          const rowEl = document.createElement('tr');
          const trName = document.createElement('td');
          const trEmail = document.createElement('td');
          const trCpf = document.createElement('td');

          rowEl.classList.add('bord')
          trName.innerHTML = data.nome;
          trEmail.innerHTML = data.email;
          trCpf.innerHTML = data.cpf;

          rowEl.appendChild(trName);
          rowEl.appendChild(trEmail);
          rowEl.appendChild(trCpf);
          tableDocument.appendChild(rowEl);
     }


}
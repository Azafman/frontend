function createTableInsert(el) {
     const table = document.createElement('table')
     const div = document.querySelector(".resultado")
     
     el.forEach(element => {
          let tRow = document.createElement('tr');
          let tColumnName = document.createElement('td');
          let tColumnCpf= document.createElement('td');

          tColumnCpf = element.cpf;
          tColumnName = element.nome

          table.appendChild(tRow);
          tRow.appendChild(tColumnName);
          tRow.appendChild(tColumnCpf);
     });
     div.appendChild(table)
}

fetch('pessoas.json')
.then(el => el.text())
.then(createTableInsert)
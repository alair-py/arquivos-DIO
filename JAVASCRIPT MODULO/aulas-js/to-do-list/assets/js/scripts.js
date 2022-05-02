'use strict';



//Recebe banco de dados localStorage em formato JSON ARRAY
const getDatabase = () => JSON.parse(localStorage.getItem('todoList')) ?? [];

//Cria banco de dados localStorage em formato de String
const setDatabase = (database) => localStorage.setItem('todoList', JSON.stringify(database));



//FUNCTION CRIAR ITENS
const createItem = (task, status, index)  => {
    //cria elemento label
    const newItem = document.createElement('label');
    //add classe no elemento label criado
    newItem.classList.add('todo_item');

    //insere conteudo e elementos dentro do label criado
    newItem.innerHTML = `
        <input type="checkbox" ${status} data-index=${index}>
        <div>${task}</div>
        <input type="button" value="X" data-index=${index}>
    `
    //insere o elemento label criado com os dados, como filho do elemento pai
    document.getElementById('todoList').appendChild(newItem);
}



//LIMPAR ELEMENTOS DA TELA
const clearTasks = () => {
    const todoList = document.getElementById('todoList');

    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}


//FUNCTION RECARREGA OS ITENS NA TELA BASEADOS NO BANCO DE DADOS
const refreshScreen = () => {
    //Limpar as Tarefas anteriores pra não duplicar itens.
    clearTasks();

    //Chama função que busca o banco de dados localstorage
    const database = getDatabase();

    //para cada item no banco, chama a function createItem passando os dados do JSON
    database.forEach( (item, index) => createItem(item.task, item.status, index));
}


//FUNCTION ADICIONAR NOVO ITEM
const addItem = (event) => {
    //recupera tecla pressionada no EventListener e guarda valor do target
    const pressedKey = event.key;
    const task = event.target.value;
    

    if(pressedKey === 'Enter') {
        const database = getDatabase();

        //adiciona o novo item no banco
        database.push({'task': task, 'status': ''});

        setDatabase(database);

        refreshScreen();

        //Limpa input depois de inserir
        event.target.value = '';
    }
}



//FUNCTION PARA REMOVER ITEM BASEADO NO INDEX
const removeItem = (indexReceive) => {

    //Chama função que busca o banco de dados localstorage
    const database = getDatabase();
    database.splice(indexReceive, 1);

    //atualiza localstorage depois de alterações
    setDatabase(database);

    refreshScreen();
}


//FUNCTION PARA CHECKAR ITEM BASEADO NO INDEX
const checkItem = (indexReceive) => {
    //Chama função que busca o banco de dados localstorage
    const database = getDatabase();

    if (database[indexReceive].status === '') {
        database[indexReceive].status = 'checked';
    }
    else {
        database[indexReceive].status = ''
    }

    //atualiza localstorage depois de alterações
    setDatabase(database);

    refreshScreen();
}



//FUNCTION PARA DESCOBRIR QUAL ELEMENTO HTML FOI CLICADO
const clickedItem = (event) => {
    const elementClicked = event.target;
    const indexTarget = elementClicked.dataset.index;

    if (elementClicked.type === "button") {
        removeItem(indexTarget);
    }
    else if (elementClicked.type === "checkbox") {
        checkItem(indexTarget);

    }

}



//EventListeners
document.getElementById('newItem').addEventListener('keypress', addItem);
document.getElementById('todoList').addEventListener('click', clickedItem);


refreshScreen();

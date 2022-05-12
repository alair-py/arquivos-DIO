(function () {
    var _a;
    //Guarda o seletor de Query numa variável para facilitar chamada
    const $ = (query) => document.querySelector(query);
    function calcTempo(milseg) {
        const minutes = Math.floor(milseg / 60000);
        const seconds = Math.floor((milseg % 60000) / 1000);
        return `${minutes}m e ${seconds}s`;
    }
    function valorPgmt(tempo) {
        const tempoNumber = parseInt(tempo);
        const menos30 = 4.00;
        const menos60 = 6.00;
        const mais60 = 10.00;
        if (tempoNumber < 30) {
            alert(`Valor a pagar R$ ${menos30}`);
        }
        else if (tempoNumber > 30 && tempoNumber < 60) {
            alert(`Valor a pagar R$ ${menos60}`);
        }
        else {
            alert(`Valor a pagar R$ ${mais60}`);
        }
    }
    function patio() {
        function read() {
            //Verifica o LocalStorage para persistencia.
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        ;
        function save(veiculos) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }
        ;
        function create(veiculo, keep) {
            var _a, _b;
            //Cria um elemento HTMl table-row
            const row = document.createElement("tr");
            //Insere no TR criado, um HTML que é populado com os dados vindo do instanciamento.
            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.entrada}</td>
                <td>
                    <button class="delete" data-placa="${veiculo.placa}">Finalizar</button>
                </td>
            `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remove(this.dataset.placa);
            });
            //Então insere na table #Patio a nova row configurada
            (_b = $("#patio")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            //Se o KEEP vier TRUE salva no banco, senão só renderiza os que já existem. Evita duplicados.
            if (keep)
                save([...read(), veiculo]);
        }
        ;
        function remove(placa) {
            const { entrada, nome } = read().find(veiculo => veiculo.placa === placa);
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`))
                return;
            valorPgmt(tempo);
            save(read().filter(veiculo => veiculo.placa !== placa));
            render();
        }
        ;
        function render() {
            $("#patio").innerHTML = "";
            //Procura se existe itens no banco
            const patio = read();
            //Se existe itens, percorre todos e renderiza na tabela usando o create, mas sem salvar duplicado.
            if (patio.length) {
                patio.forEach((veiculo) => create(veiculo));
            }
        }
        ;
        //Disponibiliza os métodos para serem chamados.
        return { read, create, remove, save, render };
    }
    patio().render();
    //Escuta click no botão com arrow function
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        //Guarda os valores vindos dos inputs
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        //Verifica se os valores foram passados.
        if (!nome || !placa) {
            alert("Os campos são obrigatórios.");
            return;
        }
        //Se vem valores, cria um novo Item, passando os valores necessarios da Interface.
        patio().create({ nome, placa, entrada: new Date().toISOString() }, true);
    });
})();

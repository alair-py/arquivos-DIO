
//Contrato para criar novo veiculo
interface Veiculo {
    nome: string;
    placa: string;
    entrada: Date | string;
}


(function() {
    //Guarda o seletor de Query numa variável para facilitar chamada
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);


    function calcTempo(milseg: number) {
        const minutes = Math.floor(milseg/60000);
        const seconds = Math.floor((milseg % 60000) / 1000);

        return `${minutes}m e ${seconds}s`;
    }

    //Calcula valores a pagar baseado no tempo
    function valorPgmt(tempo: string) {
        const tempoNumber = parseInt(tempo);

        //variaveis com valores a pagar
        const menos30 = 4.00;
        const menos60 = 6.00;
        const mais60 = 10.00;

        if(tempoNumber < 30) {
            alert(`Valor a pagar R$ ${menos30}`);
        }
        else if(tempoNumber > 30 && tempoNumber < 60) {
            alert(`Valor a pagar R$ ${menos60}`);
        }
        else {
            alert(`Valor a pagar R$ ${mais60}`);
        }
    }


    function patio() {
        function read(): Veiculo[] {
            //Verifica o LocalStorage para persistencia.
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        };


        function save(veiculos: Veiculo[]) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        };


        function create(veiculo: Veiculo, keep?: boolean) {
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

            row.querySelector(".delete")?.addEventListener("click", function() {
                remove(this.dataset.placa);
            })

            //Então insere na table #Patio a nova row configurada
            $("#patio")?.appendChild(row);

            //Se o KEEP vier TRUE salva no banco, senão só renderiza os que já existem. Evita duplicados.
            if(keep) save([...read(), veiculo]);
        };



        function remove(placa: string) {
            //Procura se veiculo existe no banco baseado na placa passada na chamada
            const {entrada, nome} = read().find(veiculo => veiculo.placa === placa);

            //Calculo do tempo permanecido
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());

            //Gera Alert com mensagem de quanto tempo permaneceu e se deseja sair
            if(!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)) return;

            //Se deseja sair chama função que calcula valor a pagar baseado no tempo
            valorPgmt(tempo);

            //Salva os dados no banco exceto o veiculo que teve a placa passada na chamada.
            save(read().filter(veiculo => veiculo.placa !== placa));

            render();
        };

        function render() {
            $("#patio")!.innerHTML = "";
            //Procura se existe itens no banco
            const patio = read();

            //Se existe itens, percorre todos e renderiza na tabela usando o create, mas sem salvar duplicado.
            if(patio.length) {
                patio.forEach((veiculo) => create(veiculo));
            }
        };

        //Disponibiliza os métodos para serem chamados.
        return {read, create, remove, save, render};
    }


    patio().render();

    //Escuta click no botão com arrow function
    $("#cadastrar")?.addEventListener("click", () => {

        //Guarda os valores vindos dos inputs
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        //Verifica se os valores foram passados.
        if(!nome || !placa) {
            alert("Os campos são obrigatórios.");
            return;
        }

        //Se vem valores, cria um novo Item, passando os valores necessarios da Interface.
        patio().create({nome, placa, entrada: new Date().toISOString()}, true);
    })
}) ();
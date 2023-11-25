export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1>PraFazê </h1> {/* colocar ícone depois */}
      <div className="p-10 border-4 border-black divide-y divide-orange-800">
        <div>
          <label htmlFor="-1"> Cadastre uma tarefa</label>
          <input type="text" name="Cadastre uma tarefa" id="-1" />
          <button>+</button>
        </div>
        <div>
          <input type="checkbox" name="Sou uma tarefa" id="0" />
          <label htmlFor="0"> Sou uma tarefa</label>
        </div>
        <div className="flex flex-row">
          <button>Tarefas restantes</button>
          <button>Todas as tarefas</button>
          <button>Tarefas Ativas</button>
          <button>Tarefas Completas</button>
        </div>
      </div>
    </div>
  );
}

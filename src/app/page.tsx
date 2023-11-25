"use client";
import { useEffect, useState } from "react";

interface Tarefa {
  id: string;
  nome: string;
  status: boolean;
}

export default function Home() {
  const [tarefaParaAdicionar, setTarefaParaAdicionar] = useState("");

  const [tarefas, setTarefas] = useState([
    { id: "0", nome: "Sou uma tarefa", status: false },
  ]);

  const [tarefasConcluidas, setTarefasConcluidas] = useState<Tarefa[]>([]);

  const handleClick = (id: string, nome: string) => {
    setTarefas([...tarefas, { id: id, nome: nome, status: false }]);
  };

  const handleChange = (event: any) => {
    setTarefaParaAdicionar(event.target.value);
  };

  // make useEffect hook
  useEffect(() => {
    console.log(tarefasConcluidas);
  }, [tarefasConcluidas]);

  function displayTarefas() {
    //if filter = 0 display all tasks. If filter = 1 display only active tasks. If filter = 2 display only completed tasks.
    let filter = 0;
    if (tarefas.length > 0 && filter === 0) {
      return tarefas.map((tarefa) => (
        <li key={tarefa.id}>
          <input
            type="checkbox"
            onClick={() => {
              tarefa.status = !tarefa.status;
              setTarefasConcluidas([...tarefasConcluidas, tarefa]);
            }}
          />
          {tarefa.status && (
            <label htmlFor={tarefa.id} className="line-through">
              {tarefa.nome}
            </label>
          )}
          {!tarefa.status && (
            <label className="bg-green-400" htmlFor={tarefa.id}>
              {tarefa.nome}
            </label>
          )}
        </li>
      ));
    } else {
      return <li>Não há tarefas</li>;
    }
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1>PraFazê </h1> {/* colocar ícone depois */}
      <div className="p-10 border-4 border-black divide-y divide-orange-800">
        <div>
          <label htmlFor="-1"> Cadastre uma tarefa</label>
          <input type="text" onChange={handleChange} id="-1" />
          <button
            onClick={() =>
              handleClick(
                (parseInt(tarefas[tarefas.length - 1].id) + 1).toString(),
                tarefaParaAdicionar
              )
            }
          >
            Adicionar
          </button>
        </div>
        <div>
          <ul>
            <li>Tarefas</li>
            {displayTarefas()}
          </ul>
        </div>
        <div className="flex flex-row">
          <p>Contador de Tarefas restantes</p>
          <button>Todas as tarefas</button>
          <button>Tarefas Ativas</button>
          <button>Tarefas Completas</button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from 'react';

// defining the 'colaborador' interface to represent the structure of a machine object
interface Colaborador {
  nome: string;
  especialidade: string;
  disponivel: boolean;
}

// defining the 'equipe' interface to represent the structure of a machine object
interface Equipe {
  nome: string;
  codigo: string;
  colaboradores: Colaborador[];
}

// defining the 'solicitação' interface to represent the structure of a machine object
interface Solicitacao {
  descricao: string;
  equipeAtribuida: string | null;
}

export default function Manutencao() {
  // state to manage the list of teams, requests and manage selected team
  const [equipes, setEquipes] = useState<Equipe[]>([]);
  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([]);
  const [equipeSelecionada, setEquipeSelecionada] = useState<string | null>(null);

  // function to handle form submission for creating a new team
  const handleEquipeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // creating a new team object with the data from the form
    const formData = new FormData(e.currentTarget);
    const novaEquipe: Equipe = {
      nome: formData.get('nome') as string,
      codigo: formData.get('codigo') as string,
      colaboradores: []
    };

    // adding the new team to the state
    setEquipes(prev => [...prev, novaEquipe]);

    // resetting the form after submission
    e.currentTarget.reset(); 
  };

  // function to handle form submission for adding a new collaborator to a team
  const handleColaboradorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const nomeEquipe = formData.get('equipe') as string;

    // creating a new collaborator object with the data from the form
    const novoColaborador: Colaborador = {
      nome: formData.get('nome') as string,
      especialidade: formData.get('especialidade') as string,
      disponivel: true
    };

    // updating the state to add the new collaborator to the correct team
    setEquipes(prev =>
      prev.map(equipe =>
        equipe.codigo === nomeEquipe
          ? { ...equipe, colaboradores: [...equipe.colaboradores, novoColaborador] }
          : equipe
      )
    );

    // resetting the form after submission
    e.currentTarget.reset();
  };


   // function to handle form submission for registering a new maintenance request
  const handleSolicitacaoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // creating a new maintenance request object with the data from the form
    const novaSolicitacao: Solicitacao = {
      descricao: formData.get('descricao') as string,
      equipeAtribuida: formData.get('equipeAtribuida') as string || null
    };

    // adding the new maintenance request to the state
    setSolicitacoes(prev => [...prev, novaSolicitacao]);

     // if a team is assigned to the maintenance request, update the team's collaborators to mark them as unavailable
    if (novaSolicitacao.equipeAtribuida) {
      setEquipes(prev =>
        prev.map(equipe =>
          equipe.codigo === novaSolicitacao.equipeAtribuida
            ? {
                ...equipe,
                colaboradores: equipe.colaboradores.map(colaborador => ({
                  ...colaborador,
                  disponivel: false
                }))
              }
            : equipe
        )
      );
    }

    e.currentTarget.reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Equipes de Manutenção</h1>

      <form onSubmit={handleEquipeSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome da Equipe:</label>
          <input id="nome" name="nome" placeholder="Nome da equipe" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>

        <div className="mb-4">
          <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">Código:</label>
          <input id="codigo" name="codigo" placeholder="Código da equipe" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-pink-800 text-white font-semibold rounded-md shadow-sm focus:outline-none">Cadastrar Equipe</button>
      </form>

      <h2 className="text-xl font-bold mb-4">Adicionar Colaboradores</h2>

      <form onSubmit={handleColaboradorSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="equipe" className="block text-sm font-medium text-gray-700">Equipe:</label>
          <select id="equipe" name="equipe" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            {equipes.map(equipe => (
              <option key={equipe.codigo} value={equipe.codigo}>{equipe.nome}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome do Colaborador:</label>
          <input id="nome" name="nome" placeholder="Nome do colaborador" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>

        <div className="mb-4">
          <label htmlFor="especialidade" className="block text-sm font-medium text-gray-700">Especialidade:</label>
          <input id="especialidade" name="especialidade" placeholder="Especialidade do colaborador" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-pink-800 text-white font-semibold rounded-md shadow-sm focus:outline-none">Adicionar Colaborador</button>
      </form>

      <h2 className="text-xl font-bold mb-4">Registrar Solicitação de Manutenção</h2>

      <form onSubmit={handleSolicitacaoSubmit}>
        <div className="mb-4">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição:</label>
          <input id="descricao" name="descricao" placeholder="Descrição da solicitação" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>

        <div className="mb-4">
          <label htmlFor="equipeAtribuida" className="block text-sm font-medium text-gray-700">Atribuir Equipe:</label>
          <select id="equipeAtribuida" name="equipeAtribuida" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="">Nenhuma</option>
            {equipes.map(equipe => (
              <option key={equipe.codigo} value={equipe.codigo}>{equipe.nome}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-pink-800 text-white font-semibold rounded-md shadow-sm focus:outline-none">Registrar Solicitação</button>
      </form>

      <h2 className="text-xl font-bold mt-10 mb-4">Equipes Cadastradas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {equipes.map(equipe => (
          <div key={equipe.codigo} className="p-4 bg-gray-200 rounded-md shadow-sm">
            <h3 className="text-lg font-bold mb-2">{equipe.nome}</h3>
            <ul>
              {equipe.colaboradores.map(colaborador => (
                <li key={colaborador.nome} className={`text-sm ${colaborador.disponivel ? 'text-green-600' : 'text-red-600'}`}>
                  {colaborador.nome} ({colaborador.especialidade})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-10 mb-4">Solicitações de Manutenção</h2>
      <ul>
        {solicitacoes.map((solicitacao, index) => (
          <li key={index} className="mb-2">
            {solicitacao.descricao} - {solicitacao.equipeAtribuida ? `Equipe Atribuída: ${solicitacao.equipeAtribuida}` : 'Nenhuma equipe atribuída'}
          </li>
        ))}
      </ul>
    </div>
  );
}

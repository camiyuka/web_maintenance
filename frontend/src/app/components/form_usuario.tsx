"use client";

import React, { useState, useEffect } from 'react';

// defining the 'cadastrousuarios' component
const CadastroUsuarios: React.FC = () => {
  // defining the 'usuario' interface to represent the structure of a user object
  interface Usuario {
    nome: string;
    tipo: 'administrador' | 'tecnico' | 'usuario'; 
  }

  // using the 'useState' hook to manage the list of users
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // loading saved users from localStorage when the component mounts
  useEffect(() => {
    const usuariosSalvos = localStorage.getItem('usuarios');
    if (usuariosSalvos) {
      setUsuarios(JSON.parse(usuariosSalvos));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  // handling form submission to add a new user
  const handleUsuarioSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // extracting form data
    const formData = new FormData(e.currentTarget);
    const novoUsuario: Usuario = {
      nome: formData.get('nome') as string,
      tipo: formData.get('tipo') as 'administrador' | 'tecnico' | 'usuario'
    };

    // updating the list of users with the new user
    setUsuarios(prev => [...prev, novoUsuario]);
    e.currentTarget.reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Usuários</h1>

      <form onSubmit={handleUsuarioSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome do Usuário:
          </label>
          <input
            id="nome"
            name="nome"
            placeholder="Nome do usuário"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
            Tipo de Acesso:
          </label>
          <select
            id="tipo"
            name="tipo"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="administrador">Administrador</option>
            <option value="tecnico">Técnico</option>
            <option value="usuario">Usuário</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-pink-800 text-white font-semibold rounded-md shadow-sm focus:outline-none"
        >
          Criar Conta
        </button>
      </form>

      <h2 className="text-xl font-bold mt-10 mb-4">Usuários Cadastrados</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index} className="mb-2">
            {usuario.nome} ({usuario.tipo})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CadastroUsuarios;

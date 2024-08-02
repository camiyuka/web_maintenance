import React from 'react';

export default function FormsMaquinas() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Máquinas</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome da máquina"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Tipo da máquina:</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            placeholder="Tipo da máquina"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">Modelo:</label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            placeholder="Modelo da máquina"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="data_fabricacao" className="block text-sm font-medium text-gray-700">Data de fabricação:</label>
          <input
            type="date"
            id="data_fabricacao"
            name="data_fabricacao"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="numero_serie" className="block text-sm font-medium text-gray-700">Número de série:</label>
          <input
            type="text"
            id="numero_serie"
            name="numero_serie"
            placeholder="Número de série"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="localizacao" className="block text-sm font-medium text-gray-700">Localização:</label>
          <input
            type="text"
            id="localizacao"
            name="localizacao"
            placeholder="Localização"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="manutencao" className="block text-sm font-medium text-gray-700">Histórico de manutenção:</label>
          <textarea
            id="manutencao"
            name="manutencao"
            placeholder="Histórico de manutenção"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-pink-800 text-white font-semibold rounded-md shadow-sm hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

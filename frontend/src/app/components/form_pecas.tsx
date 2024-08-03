import React from 'react';

export default function FormsPecas() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Peças</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome da peça"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">Código:</label>
          <input
            type="number"
            id="peca"
            name="peca"
            placeholder="Código da peça"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Fornecedor" className="block text-sm font-medium text-gray-700">Fornecedor:</label>
          <input
            type="text"
            id="fornecedor"
            name="fornecedor"
            placeholder="Fornecedor"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="estoque" className="block text-sm font-medium text-gray-700">Quantidade em estoque:</label>
          <input
            type="number"
            id="estoque"
            name="estoque"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="valor_unitario" className="block text-sm font-medium text-gray-700">Valor unitário:</label>
          <input
            type="text"
            id="numero_serie"
            name="numero_serie"
            placeholder="Número de série"
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

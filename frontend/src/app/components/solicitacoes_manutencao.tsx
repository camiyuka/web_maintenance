import React, { useState } from 'react';

export default function SolicitacaoManutencao() {
  const [status, setStatus] = useState('pendente');
  const [comments, setComments] = useState('');
  const [files, setFiles] = useState([]);
  const [team, setTeam] = useState('');
  const [parts, setParts] = useState([{ name: '', quantity: '', supplier: '' }]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handlePartChange = (index, field, value) => {
    const newParts = [...parts];
    newParts[index][field] = value;
    setParts(newParts);
  };

  const addPart = () => {
    setParts([...parts, { name: '', quantity: '', supplier: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6"> Manutenção de computador</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos de cadastro básicos omitidos para brevidade */}

        {/* Gerenciamento do Status */}
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status da Manutenção:</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="pendente">Pendente</option>
            <option value="em_andamento">Em Andamento</option>
            <option value="concluida">Concluída</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </div>

        {/* Adicionar Comentários */}
        <div className="mb-4">
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comentários:</label>
          <textarea
            id="comments"
            name="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Adicionar Arquivos */}
        <div className="mb-4">
          <label htmlFor="files" className="block text-sm font-medium text-gray-700">Arquivos Relacionados:</label>
          <input
            type="file"
            id="files"
            name="files"
            multiple
            onChange={handleFileChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Atribuir Equipe de Manutenção */}
        <div className="mb-4">
          <label htmlFor="team" className="block text-sm font-medium text-gray-700">Equipe de Manutenção:</label>
          <input
            type="text"
            id="team"
            name="team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            placeholder="Equipe responsável"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Registrar Peças e Materiais Utilizados */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Peças e Materiais Utilizados:</label>
          {parts.map((part, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                placeholder="Peça/Material"
                value={part.name}
                onChange={(e) => handlePartChange(index, 'name', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-2"
              />
              <input
                type="text"
                placeholder="Quantidade"
                value={part.quantity}
                onChange={(e) => handlePartChange(index, 'quantity', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-2"
              />
              <input
                type="text"
                placeholder="Fornecedor"
                value={part.supplier}
                onChange={(e) => handlePartChange(index, 'supplier', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addPart}
            className="mt-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Adicionar Peça/Material
          </button>
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

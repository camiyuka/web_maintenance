import React from 'react';

const MachineDetails = ({ machine }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">{machine.name}</h1>
      
      {/* Informações Básicas */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Informações Básicas</h2>
        <p><strong>Tipo:</strong> {machine.type}</p>
        <p><strong>Modelo:</strong> {machine.model}</p>
        <p><strong>Data de Fabricação:</strong> {machine.manufactureDate}</p>
        <p><strong>Número de Série:</strong> {machine.serialNumber}</p>
        <p><strong>Localização:</strong> {machine.location}</p>
      </div>
      
      {/* Histórico de Manutenções */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Histórico de Manutenções</h2>
        {machine.maintenanceHistory.length === 0 ? (
          <p>Nenhuma manutenção registrada.</p>
        ) : (
          <ul>
            {machine.maintenanceHistory.map((maintenance, index) => (
              <li key={index} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                <p><strong>Data:</strong> {maintenance.date}</p>
                <p><strong>Descrição:</strong> {maintenance.description}</p>
                <p><strong>Responsável:</strong> {maintenance.responsible}</p>
                <p><strong>Status:</strong> {maintenance.status}</p>
                <p><strong>Comentários:</strong> {maintenance.comments}</p>
                <p><strong>Peças e Materiais Utilizados:</strong></p>
                <ul className="ml-4 list-disc list-inside">
                  {maintenance.partsUsed.map((part, partIndex) => (
                    <li key={partIndex}>
                      <p><strong>Peça/Material:</strong> {part.name}</p>
                      <p><strong>Quantidade:</strong> {part.quantity}</p>
                      <p><strong>Fornecedor:</strong> {part.supplier}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MachineDetails;


export function Table(){

  const data = [
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard", 
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
    {
      Ambiente: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      Equipamento: "Dashboard",
      Solicitação: 1234,
      Atendimento: 1234,
      Ações:"botões"
    },
  ];

return (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">Ambiente</th>
          <th className="py-2 px-4 border-b border-gray-200">Equipamento</th>
          <th className="py-2 px-4 border-b border-gray-200">Solicitação</th>
          <th className="py-2 px-4 border-b border-gray-200">Atendimento</th>
          <th className="py-2 px-4 border-b border-gray-200">Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="even:bg-gray-100">
            <td className="py-2 px-4 border-b border-gray-200">{item.Ambiente}</td>
            <td className="py-2 px-4 border-b border-gray-200">{item.Equipamento}</td>
            <td className="py-2 px-4 border-b border-gray-200">{item.Solicitação}</td>
            <td className="py-2 px-4 border-b border-gray-200">{item.Atendimento}</td>
            <td className="py-2 px-4 border-b border-gray-200">{item.Ações}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

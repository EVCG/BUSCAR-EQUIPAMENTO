var equipamentos = [
    {
        tipo: 'servidor',
        descricao: 'Servidor Lenovo SR650 v1 - 2ª geração de processadores Intel Xeon (Bronze, Silver, Gold, Platinum) - até 28 núcleos por CPU, velocidades de até 3.9 GHz - Suporte a 1ª geração de processadores Intel Xeon - Até 3 TB de memória com RDIMMs 3DS de 128 GB - Memória persistente até 7.5 TB combinando RDIMMs e DCPMMs - Até 24 baias SFF e 2 LFF, suporte a 14 LFF - RAID SAS/SATA, PCIe NVMe - Slots PCIe 3.0, sem drive óptico - LOM slot para Ethernet, gerenciamento via XClarity Controller, TPM 2.0.'
    },
    {
        tipo: 'servidor',
        descricao: 'Servidor lenovo SR650 V2 - 3ª geração de processadores Intel Xeon - até 40 núcleos por CPU - 8TB de memória RDIMM 3DS - 16 módulos de memória persistente, 40 baias de drives de 2.5 - 20 de 3.5 - 32 NVMe - slot OCP 3.0 - 8 slots PCIe 4.0 - TPM 2.0 - Secure Boot - AES-NI - alimentação redundante e gerenciamento via XClarity Controller.'
    },
    {
        tipo: 'servidor',
        descricao: 'Servidor Lenovo SR650 V3 - 4ª e 5ª geração de processadores Intel Xeon - até 64 núcleos por CPU - 8TB de memória RDIMM 3DS - Não suporta memória persistente - 40 baias de drives de 2.5", 20 de 3.5" - 36 NVMe - Slot OCP 3.0 - 12 slots PCIe (10 traseiros, 2 frontais) - TPM 2.0 - Secure Boot - AES-NI - Alimentação redundante e gerenciamento via XClarity Controller 2.'
    },
    {
        tipo: 'servidor',
        descricao: 'Servidor Lenovo SR675 V3 - Suporta até dois processadores AMD EPYC 9004 Series - Até 128 núcleos por CPU - Memória DDR5, até 3TB usando 24x 128GB 3DS RDIMMs - Não suporta memória persistente - Até 24 baias de drive dependendo da configuração - Suporta NVMe, SAS/SATA SSDs - 14 slots de expansão PCIe + 1 slot OCP - Suporta até 8 GPUs PCIe ou 4 GPUs SXM5 - Gerenciamento via XClarity Controller 2 - Alimentação redundante com opções de 1800W, 2400W, e 2600W.'
    },
    {
        tipo: 'servidor',
        descricao: 'Servidor Lenovo SR670 V2 - Suporta 3ª geração Intel Xeon Scalable, até 4 TB de memória, memória persistente Intel Optane, até 4 GPUs, até 8 drives hot-swap, SW RAID padrão, até 5 adaptadores PCIe Gen4, 4 PSUs redundantes, gerenciamento via XClarity Controller e Lenovo Intelligent Computing Orchestration.'
    },
    {
        tipo:'servidor',
        descricao:'Servidor Lenovo ThinkSystem SR550 - Suporta até dois processadores Intel Xeon Gen 2 (Bronze, Silver, Gold, Platinum), com até 22 núcleos e velocidades de até 3.8 GHz. Oferece até 768 GB de memória com 12 slots DIMM, suportando RDIMMs e LRDIMMs. As opções de armazenamento incluem até 491.52 TB com SSDs SAS/SATA de 2.5 polegadas e até 240 TB com HDDs de 3.5 polegadas. Dispõe de até 6 slots de expansão I/O PCIe 3.0, duas fontes de alimentação hot-swap redundantes de 550 W ou 750 W (Platinum ou Titanium de alta eficiência), e gestão de sistemas através do XClarity Controller. Compatível com Microsoft Windows Server, Red Hat Enterprise Linux, SUSE Linux Enterprise Server, VMware ESXi.'
    }
    ,
    {
        tipo: 'switch',
       
    },
    {
        tipo: 'access point',
        
    }
];

function buscarArray(){
    var busca = document.querySelector('.busca').value.toLowerCase();
    var tipoEquipamento = document.querySelector('.tipo-equipamento').value;
    var listaResultados = document.getElementById('resultados');
    listaResultados.innerHTML = '';
    equipamentos.forEach(function(equipamento){
        if (equipamento.descricao.toLowerCase().includes(busca) && (equipamento.tipo === tipoEquipamento || tipoEquipamento === 'todos')){
            var li = document.createElement('li');
            li.textContent = equipamento.descricao; 
            listaResultados.appendChild(li); 
        }
    });
}

document.querySelector('.busca').addEventListener('input', buscarArray);
document.querySelector('.tipo-equipamento').addEventListener('change', buscarArray);

function buscarArray(){
    var busca = document.querySelector('.busca').value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var tipoEquipamento = document.querySelector('.tipo-equipamento').value;
    var listaResultados = document.getElementById('resultados');
    listaResultados.innerHTML = '';
    equipamentos.forEach(function(equipamento){
        var descricaoSemAcento = equipamento.descricao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (descricaoSemAcento.includes(busca) && (equipamento.tipo === tipoEquipamento || tipoEquipamento === 'todos')){
            var li = document.createElement('li');
            li.textContent = equipamento.descricao; 
            listaResultados.appendChild(li); 
}
});
}

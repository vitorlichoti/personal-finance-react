import { startOfMonth, endOfMonth, format } from 'date-fns';

function obterPrimeiroUltimoDiaDoMes(posicaoMes: number): { from: string, to: string } {
  const dataAtual = new Date();
  
  // Define o mês com base na posição fornecida
  dataAtual.setMonth(posicaoMes);
  
  // Obtém o primeiro dia do mês
  const primeiroDia = startOfMonth(dataAtual);
  
  // Obtém o último dia do mês
  const ultimoDia = endOfMonth(dataAtual);
  
  // Formata as datas no formato desejado (yyyy-MM-dd)
  const primeiroDiaFormatado = format(primeiroDia, 'yyyy-MM-dd');
  const ultimoDiaFormatado = format(ultimoDia, 'yyyy-MM-dd');
  
  return { from: primeiroDiaFormatado, to: ultimoDiaFormatado };
}

export { obterPrimeiroUltimoDiaDoMes };

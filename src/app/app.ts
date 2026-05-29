import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('OrbitWatch');

  features = [
    {
      icon: '🔄',
      name: 'Ingestão de Dados em Tempo Real',
      description: 'Pipeline automatizado que coleta focos de incêndio da API da NASA FIRMS diariamente, normaliza os dados e os armazena em banco relacional para consultas analíticas por estado, bioma e período.',
      color: 'cyan',
      tech: ['Apache Airflow', 'Oracle', 'SQL', 'NASA FIRMS API']
    },
    {
      icon: '🤖',
      name: 'Predição de Risco com IA',
      description: 'Modelos de machine learning analisam temperatura de superfície, índice de vegetação (NDVI) e umidade para calcular o risco de queimada em cada região. O modelo também indica quais variáveis mais influenciaram cada previsão, tornando o resultado auditável.',
      color: 'violet',
      tech: ['Python', 'XGBoost', 'Random Forest', 'SHAP']
    },
    {
      icon: '👁️',
      name: 'Classificação de Imagens Satelitais',
      description: 'Redes neurais convolucionais analisam imagens do satélite Sentinel-2 pixel a pixel e classificam cada área em uma das categorias: vegetação saudável, região queimada, desmatamento recente ou área inundada. Isso permite mapear o estado atual do território de forma visual e contínua.',
      color: 'green',
      tech: ['TensorFlow', 'CNN', 'Sentinel-2', 'EuroSAT']
    },
    {
      icon: '🔔',
      name: 'Alertas Automáticos',
      description: 'Quando o número de focos em uma região ultrapassa o limiar configurado, o sistema aciona automaticamente notificações por e-mail e registra a ocorrência em planilha compartilhada — sem intervenção humana.',
      color: 'orange',
      tech: ['Automação RPA', 'Google Sheets', 'SMTP', 'BPMN']
    },
    {
      icon: '☁️',
      name: 'Ambiente em Nuvem',
      description: 'A plataforma opera inteiramente na nuvem Azure, o que garante disponibilidade contínua, escalabilidade automática conforme a demanda e acesso de qualquer lugar. Atualizações são publicadas automaticamente a cada novo deploy, sem downtime.',
      color: 'cyan',
      tech: ['Azure', 'GitHub Actions', 'Key Vault', 'Application Insights']
    },
    {
      icon: '🛸',
      name: 'Braço Auxiliar Orbital',
      description: 'Protótipo de braço mecânico embarcado em nanossatélites para capturar e remover detritos espaciais próximos a pontos frágeis da estrutura orbital — prevenindo colisões que poderiam comprometer missões ativas. Controlado via serial com Arduino e dois servomotores, com LED de status e modelagem 3D paramétrica.',
      color: 'violet',
      tech: ['Arduino', 'Servo Motors', 'OpenSCAD', 'C++']
    }
  ];

  sdgs = [
    { number: 13, label: 'Ação Climática', icon: '🌍', color: 'green' },
    { number: 2, label: 'Agricultura Sustentável', icon: '🌾', color: 'orange' },
    { number: 11, label: 'Cidades Inteligentes', icon: '🏙️', color: 'cyan' }
  ];

  stats = [
    { value: 'NASA', label: 'FIRMS + INPE como fontes', icon: '🛰️' },
    { value: '24/7', label: 'monitoramento contínuo', icon: '⏱️' },
    { value: 'Azure', label: 'infraestrutura em nuvem', icon: '☁️' },
    { value: 'Real-time', label: 'alertas automáticos', icon: '⚡' }
  ];
}

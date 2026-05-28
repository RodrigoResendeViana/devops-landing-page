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
      icon: '🤖',
      name: 'Predição de Risco com IA',
      description: 'Modelos de machine learning treinados com dados da NASA FIRMS analisam temperatura de superfície, índice de vegetação (NDVI) e umidade para calcular o risco de queimada — alto, médio ou baixo — com explicabilidade via SHAP.',
      color: 'violet',
      tech: ['Python', 'XGBoost', 'Random Forest', 'SHAP']
    },
    {
      icon: '🔄',
      name: 'Ingestão de Dados em Tempo Real',
      description: 'Pipeline automatizado que coleta focos de incêndio da API da NASA FIRMS diariamente, normaliza os dados e os armazena em banco relacional para consultas analíticas por estado, bioma e período.',
      color: 'cyan',
      tech: ['Apache Airflow', 'Oracle', 'SQL', 'NASA FIRMS API']
    },
    {
      icon: '👁️',
      name: 'Classificação de Imagens Satelitais',
      description: 'Redes neurais convolucionais identificam o tipo de cobertura em imagens do Sentinel-2: vegetação saudável, área queimada, desmatamento recente ou região inundada — com precisão superior a 90%.',
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
      name: 'Infraestrutura Cloud com CI/CD',
      description: 'A plataforma roda no Azure App Service com deploy contínuo a cada push na branch principal. Credenciais armazenadas no Key Vault e monitoramento de performance pelo Application Insights.',
      color: 'cyan',
      tech: ['Azure', 'GitHub Actions', 'Key Vault', 'Application Insights']
    },
    {
      icon: '🛸',
      name: 'Coleta Física — Braço Orbital',
      description: 'Protótipo de garra para nanossatélites capaz de coletar detritos em órbita. Controlado via serial com Arduino, dois servos e LED de status. Modelagem 3D paramétrica em OpenSCAD.',
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
    { value: '220M', label: 'km² monitorados', icon: '🛰️' },
    { value: '24/7', label: 'monitoramento contínuo', icon: '⏱️' },
    { value: '>90%', label: 'precisão do modelo', icon: '🎯' },
    { value: '<5min', label: 'latência de alerta', icon: '⚡' }
  ];
}

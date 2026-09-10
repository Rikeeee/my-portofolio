import portfolioImg00 from '../asset/projects/SAGEDesa.png';
import portfolioImgInnervate from '../asset/projects/innervate-logo.png';
import portfolioImgBPBatam from '../asset/projects/bpbatam-dashboard.png';
import portfolioImg01 from '../asset/projects/tugasgrafana.jpg';
import portfolioImg02 from '../asset/projects/crediwiz.jpg';
import portfolioImg03 from '../asset/projects/Dosen.jpg';
import portfolioImg04 from '../asset/projects/ECM.jpg';
import portfolioImg05 from '../asset/projects/WAD.jpg';
import portfolioImg06 from '../asset/projects/DM.jpg';
import portfolioImg07 from '../asset/projects/WASM.jpg';
import portfolioImg08 from '../asset/projects/ELS.jpg';
import portfolioImg09 from '../asset/projects/IRB.jpg';

const portfolioData = [
  {
    id: '00',
    imgUrl: portfolioImg00,
    title: 'SAGE-Desa: Multimodel Predictive System for Farmer Resilience (Final Project)',
    description:
      'A web-based decision-support dashboard for smallholder farmers, integrating classification (Random Forest, Ordinal Logistic Regression), regression (Extra Trees, LASSO), and time-series forecasting (ARIMAX, LSTM, Exponential Smoothing) models for weather, crop yield, income, and commodity price prediction, plus an AI-assisted crop recommendation engine. Achieved 92.4% user satisfaction in acceptance testing.',
    tech: ['Python', 'React', 'FastAPI', 'PostgreSQL', 'Scikit-learn', 'TensorFlow/Keras'],
    siteUrl: 'https://github.com/Rikeeee/sage_desa',
  },

  {
    id: 'innervate',
    imgUrl: portfolioImgInnervate,
    title: 'Artificial Intelligence and Machine Learning Services — Innervate Engineering Limited',
    description:
      'Developed corrosion rate prediction models for oil & gas pipelines, covering internal corrosion physics (NORSOK M-506) and external corrosion physics (AMPP SP0169 / ISO 15589-1), fused through a Physics-Informed Neural Network (PINN) layer. Implemented ASME B31G / B31.8S / B31.4-based remaining strength and probability-of-failure assessment for inline inspection analysis, delivered as FastAPI microservice endpoints. (Work is proprietary to Innervate Engineering Limited — details shown are limited to publicly describable scope.)',
    tech: ['Python', 'FastAPI', 'PyTorch', 'Physics-Informed Neural Networks', 'ASME B31G', 'NORSOK M-506'],
    siteUrl: 'https://innervate-lab.com/',
  },

  {
    id: 'bpbatam',
    imgUrl: portfolioImgBPBatam,
    title: 'Machine Learning Specialist — BP Batam (Health Claims Prediction Dashboard)',
    description:
      'Built a Streamlit dashboard implementing machine learning models to predict and analyze INA-CBGs, Non-CBGs, and drug (Obat) BPJS Kesehatan claims for the Data and Information Center of the Batam Free Trade Zone and Free Port Authority (BP Batam).',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
    siteUrl: 'https://github.com/Rikeeee/Dashboard-Pengajuan-Klaim',
  },

  {
    id: '01',
    imgUrl: portfolioImg01,
    title: 'Dashboard Sistem CRM Data Mart with Grafana',
    description:
      'Crafted with React and Vite, our cutting-edge dashboard project features dynamic data visualization using Tremor components. Experience real-time insights and seamless user interaction, all powered by the latest web technologies.',
    tech: ['Grafana', 'Pentaho Data Integration', 'Python', 'R Studio'],
    siteUrl: 'https://drive.google.com/file/d/1vYzCZmb9vreAPVySjRIltobOOgvvuChW/view?usp=sharing',
  },

  {
    id: '02',
    imgUrl: portfolioImg02,
    title: 'Crediwiz - Credit Card Predictions',
    description:
      'The Credit Card Predictions task aims to build a predictive model to estimate user behavior, such as default risk, by analyzing transaction data and user profiles. This model helps financial institutions manage credit risk and deliver more personalized services.',
    tech: ['Python', 'Streamlit', 'PyCaret'],
    siteUrl: 'https://drive.google.com/file/d/1Ylmr-b4jvCZ6K3-QxtyvFn2mi1FUcv7p/view?usp=sharing',
  },

  {
    id: '03',
    imgUrl: portfolioImg03,
    title: 'Lecturer Performance Analysis Dashboard at PENS with Tableau',
    description:
      'Develop an interactive dashboard using Tableau to display lecturer performance which can help academic managers evaluate and improve the quality of lecturer teaching.',
    tech: ['Tableau', 'Python', 'Microsoft Excel', 'SPSS'],
    siteUrl: 'https://public.tableau.com/app/profile/fir.manda/viz/KinerjaDosenFixed/hometeori2',
  },

  {
    id: '04',
    imgUrl: portfolioImg04,
    title: 'Analysis of the Effect of Economic Growth on Inflation Using the Error Correction Model (ECM)',
    description:
      'This study analyzes the long-term relationship (cointegration) between inflation, economic growth, and crisis factors, examines the short- and long-term impacts using the Error Correction Model (ECM), tests data stationarity and cointegration for validity, assesses the crisis effect on inflation and its link to economic growth, and provides policy insights on their economic implications.',
    tech: ['Python', 'Jupyter Notebook', 'statsmodels'],
    siteUrl: 'https://github.com/Rikeeee/Ekonometrika_ECM',
  },

  {
    id: '05',
    imgUrl: portfolioImg05,
    title: 'Development Of Lecturer Performance Dashboards In The Learning Process In PENS',
    description: 'Develop an interactive dashboard using Tableau to display lecturer Sperformance which can help academic managers evaluate and improve the quality of lecturer teaching.',
    tech: ['Tableau', 'Python', 'Jupyter Notebook', 'Multidimensional Scaling'],
    siteUrl: 'https://public.tableau.com/app/profile/fir.manda/viz/KinerjaDosenFixed/hometeori2?publish=yes',
  },

  {
    id: '06',
    imgUrl: portfolioImg06,
    title: 'Health Risk Analysis and Patterns of Healthcare Service Usage: A DataDriven Approach Based on Patient Identity',
    description: 'Analyzing patient identity data to identify factors that are significant in predicting an individual health risk.',
    tech: ['Python', 'Data Mining', 'K-Nearest Neighbors Classifier', 'Decision Tree Classifier'],
    siteUrl: 'https://drive.google.com/file/d/1Le9Q8JVg3RbckL5-XbMltayTesg5Ed_l/view?usp=sharing',
  },

  {
    id: '07',
    imgUrl: portfolioImg07,
    title: 'Cyberbullying Detection on Deddy Corbuzier YouTube Channel Comments Using Random Forest and SVM Algorithms',
    description: 'This study aims to compare the performance of two machine learning models, Random Forest and Support Vector Machine (SVM), in detecting cyberbullying comments.',
    tech: ['Python', 'Random Forest', 'Support Vector Machine (SVM)', 'Text Mining'],
    siteUrl: 'https://drive.google.com/file/d/1N_4WiZTMjaHKN3cD-_A1GBdkqgGYB-cd/view?usp=sharing',
  },

  {
    id: '08',
    imgUrl: portfolioImg08,
    title: 'Eepis Lending Space: Web Service Development to Room or Space Reservation on Campus',
    description:
      'This project aims to develop a platform that facilitates room reservations for students, staff, and organizations, enhancing efficiency in room management while providing a seamless and user-friendly booking experience on campus.',
    tech: ['Html', 'CSS', 'MySQL', 'Java Script'],
    siteUrl: 'https://drive.google.com/file/d/1uppIq2VpeSylEU_eMBN3vLrC9eDtL3Op/view?usp=sharing',
  },

  {
    id: '09',
    imgUrl: portfolioImg09,
    title: 'Dashboard for Clustering Disaster Risk Index in East Java with Tableau',
    description:
      'This dashboard leverages Tableau to visualize the Disaster Risk Index in East Java. It includes an interactive map, bar charts, pie charts, and box plots, allowing users to explore geographic distributions and relationships between risk factors. Users can filter data by year, enabling analysis of trends and risk levels over time to support informed decision-making in disaster management and risk reduction.',
    tech: ['Tableau', 'Python'],
    siteUrl: 'https://public.tableau.com/app/profile/rike.anindhita/viz/UAS_17006797833740/Dashboard1?publish=yes',
  },

];

export default portfolioData;

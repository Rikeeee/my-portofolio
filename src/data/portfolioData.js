import portfolioImg01 from '../asset/projects/tugasgrafana.jpg';
import portfolioImg02 from '../asset/projects/crediwiz.jpg';
import portfolioImg03 from '../asset/projects/IRB.jpg';
import portfolioImg04 from '../asset/projects/ECM.jpg';
import portfolioImg05 from '../asset/projects/WAD.png';
import portfolioImg06 from '../asset/projects/DM.jpg';
import portfolioImg07 from '../asset/projects/WASM.jpg';

const portfolioData = [
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
    description: 'The Credit Card Predictions task aims to build a predictive model to estimate user behavior, such as default risk, by analyzing transaction data and user profiles. This model helps financial institutions manage credit risk and deliver more personalized services.',
    tech: ['Python', 'Streamlit', 'PyCaret'],
    siteUrl: 'https://drive.google.com/file/d/1Ylmr-b4jvCZ6K3-QxtyvFn2mi1FUcv7p/view?usp=sharing',
  },

  {
    id: '03',
    imgUrl: portfolioImg03,
    title: 'Dashboard for Clustering Disaster Risk Index in East Java with Tableau',
    description: 'This dashboard leverages Tableau to visualize the Disaster Risk Index in East Java. It includes an interactive map, bar charts, pie charts, and box plots, allowing users to explore geographic distributions and relationships between risk factors. Users can filter data by year, enabling analysis of trends and risk levels over time to support informed decision-making in disaster management and risk reduction.',
    tech: ['Tableau', 'Python'],
    siteUrl: 'https://public.tableau.com/app/profile/rike.anindhita/viz/UAS_17006797833740/Dashboard1?publish=yes',
  },

  {
    id: '04',
    imgUrl: portfolioImg04,
    title: 'Analysis of the Effect of Economic Growth on Inflation Using the Error Correction Model (ECM)',
    description: 'This study analyzes the long-term relationship (cointegration) between inflation, economic growth, and crisis factors, examines the short- and long-term impacts using the Error Correction Model (ECM), tests data stationarity and cointegration for validity, assesses the crisis effect on inflation and its link to economic growth, and provides policy insights on their economic implications.',
    tech: ['Python', 'Jupyter Notebook', 'statsmodels'],
    siteUrl: 'https://github.com/Rikeeee/Ekonometrika_ECM',
  },

  {
    id: '05',
    imgUrl: portfolioImg05,
    title: 'Development Of Lecturer Performance Dashboards In The Learning Process In PENS',
    description:
      'Develop an interactive dashboard using Tableau to display lecturer Sperformance which can help academic managers evaluate and improve the quality of lecturer teaching.',
    tech: ['Tableau', 'Python', 'Jupyter Notebook', 'Multidimensional Scaling'],
    siteUrl: 'https://public.tableau.com/app/profile/fir.manda/viz/KinerjaDosenFixed/hometeori2?publish=yes',
  },

  {
    id: '06',
    imgUrl: portfolioImg06,
    title: 'Health Risk Analysis and Patterns of Healthcare Service Usage: A DataDriven Approach Based on Patient Identity',
    description:
      'Analyzing patient identity data to identify factors that are significant in predicting an individual health risk.',
    tech: ['Python', 'Data Mining', 'K-Nearest Neighbors Classifier', 'Decision Tree Classifier'],
    siteUrl: 'https://drive.google.com/file/d/1Le9Q8JVg3RbckL5-XbMltayTesg5Ed_l/view?usp=sharing',
  },
  {
    id: '07',
    imgUrl: portfolioImg07,
    title: 'Cyberbullying Detection on Deddy Corbuzier YouTube Channel Comments Using Random Forest and SVM Algorithms',
    description:
      'This study aims to compare the performance of two machine learning models, Random Forest and Support Vector Machine (SVM), in detecting cyberbullying comments.',
    tech: ['Python', 'Random Forest', 'Support Vector Machine (SVM)', 'Text Mining'],
    siteUrl: 'https://drive.google.com/file/d/1N_4WiZTMjaHKN3cD-_A1GBdkqgGYB-cd/view?usp=sharing',
  },
];

export default portfolioData;

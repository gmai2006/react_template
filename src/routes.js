import React from 'react';
import Afxfilter from './views/tables/Afxfilter';
import Afxfilterd from './views/tables/Afxfilterd';
import Afxinfo from './views/tables/Afxinfo';
import Afxkeygen from './views/tables/Afxkeygen';
import Afxoperators from './views/tables/Afxoperators';
import Afxptoseis from './views/tables/Afxptoseis';
import Afxtable from './views/tables/Afxtable';
import Afxtablefields from './views/tables/Afxtablefields';
import Afxtranslate from './views/tables/Afxtranslate';
import MisthZpxrisi from './views/tables/MisthZpxrisi';
import MisthZpperiod from './views/tables/MisthZpperiod';
import MisthZpkat from './views/tables/MisthZpkat';
import MisthFinal from './views/tables/MisthFinal';
import MisthZptmima from './views/tables/MisthZptmima';
import MisthZpidikot from './views/tables/MisthZpidikot';
import MisthZpthesi from './views/tables/MisthZpthesi';
import MisthZptamio from './views/tables/MisthZptamio';
import MisthZpoikog from './views/tables/MisthZpoikog';
import MisthYpal from './views/tables/MisthYpal';
import MisthFinalYpal from './views/tables/MisthFinalYpal';
import MisthZpepidom from './views/tables/MisthZpepidom';
import MisthFinalYpalEpidom from './views/tables/MisthFinalYpalEpidom';
import MisthZpkrat from './views/tables/MisthZpkrat';
import MisthKratapod from './views/tables/MisthKratapod';
import MisthFinalYpalKrat from './views/tables/MisthFinalYpalKrat';
import MisthFylo from './views/tables/MisthFylo';
import MisthFyloEpidom from './views/tables/MisthFyloEpidom';
import MisthFyloKrat from './views/tables/MisthFyloKrat';
import MisthFyloYpal from './views/tables/MisthFyloYpal';
import MisthReport from './views/tables/MisthReport';
import MisthReportCols from './views/tables/MisthReportCols';
import MisthReportYpal from './views/tables/MisthReportYpal';
import MisthZpyvar from './views/tables/MisthZpyvar';
import MisthYpalYvar from './views/tables/MisthYpalYvar';
import MisthZpstath from './views/tables/MisthZpstath';
import MisthZptitlos from './views/tables/MisthZptitlos';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/tables/Afxfilter', name: 'Afxfilter', element: Afxfilter },
  { path: '/tables/Afxfilterd', name: 'Afxfilterd', element: Afxfilterd },
  { path: '/tables/Afxinfo', name: 'Afxinfo', element: Afxinfo },
  { path: '/tables/Afxkeygen', name: 'Afxkeygen', element: Afxkeygen },
  { path: '/tables/Afxoperators', name: 'Afxoperators', element: Afxoperators },
  { path: '/tables/Afxptoseis', name: 'Afxptoseis', element: Afxptoseis },
  { path: '/tables/Afxtable', name: 'Afxtable', element: Afxtable },
  { path: '/tables/Afxtablefields', name: 'Afxtablefields', element: Afxtablefields },
  { path: '/tables/Afxtranslate', name: 'Afxtranslate', element: Afxtranslate },
  { path: '/tables/MisthZpxrisi', name: 'MisthZpxrisi', element: MisthZpxrisi },
  { path: '/tables/MisthZpperiod', name: 'MisthZpperiod', element: MisthZpperiod },
  { path: '/tables/MisthZpkat', name: 'MisthZpkat', element: MisthZpkat },
  { path: '/tables/MisthFinal', name: 'MisthFinal', element: MisthFinal },
  { path: '/tables/MisthZptmima', name: 'MisthZptmima', element: MisthZptmima },
  { path: '/tables/MisthZpidikot', name: 'MisthZpidikot', element: MisthZpidikot },
  { path: '/tables/MisthZpthesi', name: 'MisthZpthesi', element: MisthZpthesi },
  { path: '/tables/MisthZptamio', name: 'MisthZptamio', element: MisthZptamio },
  { path: '/tables/MisthZpoikog', name: 'MisthZpoikog', element: MisthZpoikog },
  { path: '/tables/MisthYpal', name: 'MisthYpal', element: MisthYpal },
  { path: '/tables/MisthFinalYpal', name: 'MisthFinalYpal', element: MisthFinalYpal },
  { path: '/tables/MisthZpepidom', name: 'MisthZpepidom', element: MisthZpepidom },
  { path: '/tables/MisthFinalYpalEpidom', name: 'MisthFinalYpalEpidom', element: MisthFinalYpalEpidom },
  { path: '/tables/MisthZpkrat', name: 'MisthZpkrat', element: MisthZpkrat },
  { path: '/tables/MisthKratapod', name: 'MisthKratapod', element: MisthKratapod },
  { path: '/tables/MisthFinalYpalKrat', name: 'MisthFinalYpalKrat', element: MisthFinalYpalKrat },
  { path: '/tables/MisthFylo', name: 'MisthFylo', element: MisthFylo },
  { path: '/tables/MisthFyloEpidom', name: 'MisthFyloEpidom', element: MisthFyloEpidom },
  { path: '/tables/MisthFyloKrat', name: 'MisthFyloKrat', element: MisthFyloKrat },
  { path: '/tables/MisthFyloYpal', name: 'MisthFyloYpal', element: MisthFyloYpal },
  { path: '/tables/MisthReport', name: 'MisthReport', element: MisthReport },
  { path: '/tables/MisthReportCols', name: 'MisthReportCols', element: MisthReportCols },
  { path: '/tables/MisthReportYpal', name: 'MisthReportYpal', element: MisthReportYpal },
  { path: '/tables/MisthZpyvar', name: 'MisthZpyvar', element: MisthZpyvar },
  { path: '/tables/MisthYpalYvar', name: 'MisthYpalYvar', element: MisthYpalYvar },
  { path: '/tables/MisthZpstath', name: 'MisthZpstath', element: MisthZpstath },
  { path: '/tables/MisthZptitlos', name: 'MisthZptitlos', element: MisthZptitlos },
];

export default routes;
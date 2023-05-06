import React from 'react';
import init from "../init";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Afxfilter from '../pages/tables/Afxfilter';
import Afxfilterd from '../pages/tables/Afxfilterd';
import Afxinfo from '../pages/tables/Afxinfo';
import Afxkeygen from '../pages/tables/Afxkeygen';
import Afxoperators from '../pages/tables/Afxoperators';
import Afxptoseis from '../pages/tables/Afxptoseis';
import Afxtable from '../pages/tables/Afxtable';
import Afxtablefields from '../pages/tables/Afxtablefields';
import Afxtranslate from '../pages/tables/Afxtranslate';
import MisthZpxrisi from '../pages/tables/MisthZpxrisi';
import MisthZpperiod from '../pages/tables/MisthZpperiod';
import MisthZpkat from '../pages/tables/MisthZpkat';
import MisthFinal from '../pages/tables/MisthFinal';
import MisthZptmima from '../pages/tables/MisthZptmima';
import MisthZpidikot from '../pages/tables/MisthZpidikot';
import MisthZpthesi from '../pages/tables/MisthZpthesi';
import MisthZptamio from '../pages/tables/MisthZptamio';
import MisthZpoikog from '../pages/tables/MisthZpoikog';
import MisthYpal from '../pages/tables/MisthYpal';
import MisthFinalYpal from '../pages/tables/MisthFinalYpal';
import MisthZpepidom from '../pages/tables/MisthZpepidom';
import MisthFinalYpalEpidom from '../pages/tables/MisthFinalYpalEpidom';
import MisthZpkrat from '../pages/tables/MisthZpkrat';
import MisthKratapod from '../pages/tables/MisthKratapod';
import MisthFinalYpalKrat from '../pages/tables/MisthFinalYpalKrat';
import MisthFylo from '../pages/tables/MisthFylo';
import MisthFyloEpidom from '../pages/tables/MisthFyloEpidom';
import MisthFyloKrat from '../pages/tables/MisthFyloKrat';
import MisthFyloYpal from '../pages/tables/MisthFyloYpal';
import MisthReport from '../pages/tables/MisthReport';
import MisthReportCols from '../pages/tables/MisthReportCols';
import MisthReportYpal from '../pages/tables/MisthReportYpal';
import MisthZpyvar from '../pages/tables/MisthZpyvar';
import MisthYpalYvar from '../pages/tables/MisthYpalYvar';
import MisthZpstath from '../pages/tables/MisthZpstath';
import MisthZptitlos from '../pages/tables/MisthZptitlos';;

const TableMenu = () => {
  const path = '/' + init.appName;
  return (
    <div>
      <Switch>

          <Route path={path + '/tables/afxfilter'} component={Afxfilter} />
          <Route path={path + '/tables/afxfilterd'} component={Afxfilterd} />
          <Route path={path + '/tables/afxinfo'} component={Afxinfo} />
          <Route path={path + '/tables/afxkeygen'} component={Afxkeygen} />
          <Route path={path + '/tables/afxoperators'} component={Afxoperators} />
          <Route path={path + '/tables/afxptoseis'} component={Afxptoseis} />
          <Route path={path + '/tables/afxtable'} component={Afxtable} />
          <Route path={path + '/tables/afxtablefields'} component={Afxtablefields} />
          <Route path={path + '/tables/afxtranslate'} component={Afxtranslate} />
          <Route path={path + '/tables/misthzpxrisi'} component={MisthZpxrisi} />
          <Route path={path + '/tables/misthzpperiod'} component={MisthZpperiod} />
          <Route path={path + '/tables/misthzpkat'} component={MisthZpkat} />
          <Route path={path + '/tables/misthfinal'} component={MisthFinal} />
          <Route path={path + '/tables/misthzptmima'} component={MisthZptmima} />
          <Route path={path + '/tables/misthzpidikot'} component={MisthZpidikot} />
          <Route path={path + '/tables/misthzpthesi'} component={MisthZpthesi} />
          <Route path={path + '/tables/misthzptamio'} component={MisthZptamio} />
          <Route path={path + '/tables/misthzpoikog'} component={MisthZpoikog} />
          <Route path={path + '/tables/misthypal'} component={MisthYpal} />
          <Route path={path + '/tables/misthfinalypal'} component={MisthFinalYpal} />
          <Route path={path + '/tables/misthzpepidom'} component={MisthZpepidom} />
          <Route path={path + '/tables/misthfinalypalepidom'} component={MisthFinalYpalEpidom} />
          <Route path={path + '/tables/misthzpkrat'} component={MisthZpkrat} />
          <Route path={path + '/tables/misthkratapod'} component={MisthKratapod} />
          <Route path={path + '/tables/misthfinalypalkrat'} component={MisthFinalYpalKrat} />
          <Route path={path + '/tables/misthfylo'} component={MisthFylo} />
          <Route path={path + '/tables/misthfyloepidom'} component={MisthFyloEpidom} />
          <Route path={path + '/tables/misthfylokrat'} component={MisthFyloKrat} />
          <Route path={path + '/tables/misthfyloypal'} component={MisthFyloYpal} />
          <Route path={path + '/tables/misthreport'} component={MisthReport} />
          <Route path={path + '/tables/misthreportcols'} component={MisthReportCols} />
          <Route path={path + '/tables/misthreportypal'} component={MisthReportYpal} />
          <Route path={path + '/tables/misthzpyvar'} component={MisthZpyvar} />
          <Route path={path + '/tables/misthypalyvar'} component={MisthYpalYvar} />
          <Route path={path + '/tables/misthzpstath'} component={MisthZpstath} />
          <Route path={path + '/tables/misthzptitlos'} component={MisthZptitlos} />
      </Switch>
  </div>
)};

export default TableMenu;
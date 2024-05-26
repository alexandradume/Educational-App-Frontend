import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./LogIn";
import Profile from "./Profile";
import TestsPage from "./TestsPage";
import Lectie from "./Lectie";
import Test from "./Test";
import SubmitPage from "./SubmitPage";
import Lessons from "./Lessons";
import ClasaANoua from "./ClasaANoua";
import Instructiuni from "./Instructiuni";
import AlgoritmiElementari from "./AlgoritmiElementari";
import TablouriUnidimensionale from "./TablouriUnidimensionale";
import Sortare from "./Sortare";
import TablouriBidimensionale from "./TablouriBidimensionale";
import Subprograme from "./Subprograme";
import Recursivitate from "./Recursivitate";
import DivideEtImpera from "./DivideEtImpera";
import SiruriDeCaractere from "./SiruriDeCractere";
import Stack from "./Stack";
import Queue from "./Coada";
import Backtracking from "./Backtracking";
import Greedy from "./Greedy";
import ProgramareDinamica from "./ProgramareDinamica";
import GrafuriNeorientate from "./GrafuriNeorientate";
import GrafuriAlgoritmi from "./GrafuriAlgoritmi";
import TeoriaGrafurilor from "./GrafuriNeorientate";
import Raspunsuri from "./Raspunsuri";
import SignIn from "./SignIn";
import Quest from "./Quest";
import MainQuest from "./MainQuest";
import SubmitQuest from "./SubmitQuest";
import Podium from "./Podium";
import Chart from "./Chart";
import Map from "./Map";
import Arbori from "./Arbori";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/tests" component={TestsPage} />
        <Route path="/test" component={Test} />
        <Route path="/lectie" component={Lectie} />
        <Route path="/submit" component={SubmitPage} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/quest" component={Quest} />
        <Route path="/instructiuni" component={Instructiuni} />
        <Route path="/lectii-clasa-a-noua" component={ClasaANoua} />
        <Route path="/algoritmi-elementari" component={AlgoritmiElementari} />
        <Route path="/sortare" component={Sortare} />
        <Route path="/subprograme" component={Subprograme} />
        <Route path="/recursivitate" component={Recursivitate} />
        <Route path="/divide-et-impera" component={DivideEtImpera} />
        <Route path="/siruri-de-caractere" component={SiruriDeCaractere} />
        <Route path="/coada" component={Queue} />
        <Route path="/backtracking" component={Backtracking} />
        <Route path="/greedy" component={Greedy} />
        <Route path="/programare-dinamica" component={ProgramareDinamica} />
        <Route path="/programare-dinamica" component={ProgramareDinamica} />
        <Route path="/teoria-grafurilor" component={TeoriaGrafurilor} />
        <Route path="/stiva" component={Stack} />
        <Route path="/grafuri-algoritmi" component={GrafuriAlgoritmi} />
        <Route path="/raspunsuri" component={Raspunsuri} />
        <Route path="/signin" component={SignIn} />
        <Route path="/main-quest" component={MainQuest} />
        <Route path="/submit-quest" component={SubmitQuest} />
        <Route path="/podium" component={Podium} />
        <Route path="/map" component={Map} />
        <Route path="/arbori" component={Arbori} />

        <Route path="/chart" component={Chart} />
        <Route
          path="/tablouri-bidimenisonale"
          component={TablouriBidimensionale}
        />
        <Route
          path="/tablouri-unidimenisonale"
          component={TablouriUnidimensionale}
        />

        <Route path="/" component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;

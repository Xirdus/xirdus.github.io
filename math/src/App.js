import { HashRouter, Link, Route, Switch } from 'react-router-dom';

import SimpleMath, * as SimpleMathData from './SimpleMath';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <h2><Link to="/simple-addition">Simple addition</Link></h2>
          <h2><Link to="/simple-subtraction">Simple subtraction</Link></h2>
          <h2><Link to="/simple-multiplication">Simple multiplication</Link></h2>
          <h2><Link to="/simple-division">Simple division</Link></h2>
        </Route>
        <Route>
          <div className="back-button"><Link to="/">&lt; Back</Link></div>
          <Switch>
            <Route exact path="/simple-addition">
              <SimpleMath dataFn={SimpleMathData.additionData}/>
            </Route>
            <Route exact path="/simple-subtraction">
              <SimpleMath dataFn={SimpleMathData.subtractionData}/>
            </Route>
            <Route exact path="/simple-multiplication">
              <SimpleMath dataFn={SimpleMathData.multiplicationData}/>
            </Route>
            <Route exact path="/simple-division">
              <SimpleMath dataFn={SimpleMathData.divisionData}/>
            </Route>
          </Switch>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

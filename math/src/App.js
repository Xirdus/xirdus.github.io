import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import SimpleMath, * as SimpleMathData from './SimpleMath';

function App() {
  return (
    <BrowserRouter>
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
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

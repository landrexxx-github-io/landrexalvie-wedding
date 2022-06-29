import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

import Bridegroom from './components/Bridegroom'
import Countdown from './components/Countdown'
import Footer from './components/Footer'
import Invitation from './components/Invitation'
import Header from './components/Header'
import Organization from './components/Organization'
import RSVP from './components/RSVP'
import Seeyou from './components/Seeyou'
import Sidebar from './components/Sidebar'
import Story from './components/Story'
import Questions from './components/Questions'
import ListOfAttendees from './components/ListOfAttendees'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <div id='oliven-main'>
          <Switch>
            <Route exact path="/">
              <Header />
              <Bridegroom />
              <Countdown />
              <Story />
              <Seeyou />
              <Organization />
              <Invitation />
              <Questions />
              <RSVP />
              <Footer />
            </Route>
            <Route path="/list">
              <ListOfAttendees/>
            </Route>
          </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;

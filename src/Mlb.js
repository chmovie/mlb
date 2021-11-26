import React, { createFactory } from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Mvp from './components/Mvp'
import Vladimir from './ext/Vladimir'
import Ohtani from './ext/Ohtani'

function Mlb() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Mvp} />
      <Route path="/vladimir" component={Vladimir} />
      <Route path="/ohtani" component={Ohtani} />
    </HashRouter>
  )
}
export default Mlb
import React from 'react';
import ReactDOM from 'react-dom';
import {ScreenContainer} from './components/screen-container.js'
import './style.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
library.add(fal)
library.add(fas)

ReactDOM.render(
  <ScreenContainer />,
  document.getElementById('root')
);


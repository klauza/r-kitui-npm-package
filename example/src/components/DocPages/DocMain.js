import React from 'react';
import DocReusable from '../DocReusable';

const DocMain = () => {
  return (
    <div>
      <DocReusable active={null}>
        <h1>Documentation</h1>

        <div>Buttons: 1 2 3</div>

        <div>Carousels: 1 2 3</div>

        <div>Not Founds: 1 2 3</div>
      </DocReusable>
    </div>
  )
}

export default DocMain

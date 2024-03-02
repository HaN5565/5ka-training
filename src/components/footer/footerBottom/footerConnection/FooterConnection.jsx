import React from 'react';
import '../../../../index.css'
import s from './FooterConnection.module.css'
import ConnectionSvg from './connectionSvg/ConnectionSvg';

const FooterConnection = () => {
  return (
    <div className={s.FooterConnection}>
      <ConnectionSvg />
    </div>
  );
};

export default FooterConnection;
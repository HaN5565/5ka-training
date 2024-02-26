import React from 'react';
import '../../../index.css'
import s from './Compilation.module.css'
import CompilationTitle from './compilationsTitle/CompilationTitle';
import CompilationItems from './compilationsItems/CompilationsItems'

const Compilations = () => {
  return (
    <div className={s.Compilations}>
      <CompilationTitle />
      <CompilationItems />
    </div>
  );
};

export default Compilations;
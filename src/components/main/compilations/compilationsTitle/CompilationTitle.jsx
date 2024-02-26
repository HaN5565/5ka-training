import React from 'react';
import '../../../../index.css'
import s from '../Compilation.module.css'

const CompilationTitle = () => {
  return (
    <div className={s.CompilationTitle}>
      <h1 className={s.title}>Подборки на любой вкус</h1>
    </div>
  );
};

export default CompilationTitle;
import React from "react";
import '../../../../index.css'
import s from '../Compilation.module.css'
import CompilationItem from "./CompilationItem";

const CompilationItems = () => {
  return (
    <div className={s.CompilationItems}>
      <CompilationItem />
    </div>
  )
}

export default CompilationItems
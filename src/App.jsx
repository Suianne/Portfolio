import { useState } from "react";
import { projetos } from "./data/projetos";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="row g-4">
      {projetos.map((p) => (
        <div className="col-md-6 col-lg-4" key={p.id}>
          <ProjectCard {...p} onAbrir={(dados) => window.abrirModalProjeto?.(dados)} />
        </div>
      ))}
    </div>
  );
}
export default App;
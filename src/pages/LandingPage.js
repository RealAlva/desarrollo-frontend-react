import React from 'react';
import LoginForm from '../components/LoginForm';  // Importar el formulario de login
import './LandingPage.css';  // Asegúrate de que los estilos estén aplicados

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
      </header>
      <main className="landing-main">
        <section className="intro-section">
          <h2>Bienvenido</h2>
          <p>
            Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
          </p>
        </section>

        <section className="topics-section">
          <h3>Temas Cubiertos</h3>
          <table className="topics-table">
            <tbody>
              <tr>
                <td>Componentes funcionales y de clase</td>
                <td>Uso de <strong>React hooks</strong> como <strong>useState</strong> y <strong>useEffect</strong></td>
              </tr>
              <tr>
                <td>Creación de <strong>custom hooks</strong> como <strong>useForm</strong></td>
                <td>Gestión de variables de estado con <strong>useState</strong></td>
              </tr>
              <tr>
                <td>Gestión de estado global con <strong>Redux</strong></td>
                <td>Integración de <strong>Redux</strong> con React</td>
              </tr>
              <tr>
                <td>Manejo de <strong>Formularios</strong> en React</td>
                <td>Publicando nuestra página con <strong>GitHub Pages</strong></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="resources-section">
          <h3>Recursos Adicionales</h3>
          <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
        </section>
      </main>
      <footer className="landing-footer">
        <p>&copy; 2024 Módulo 7. USIP.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
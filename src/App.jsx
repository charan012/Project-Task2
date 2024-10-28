import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ListRenderer from './components/ListRenderer';
import LifecycleLogger from './components/LifecycleLogger';
import RegistrationForm from './components/RegistrationForm';
import ThemeProvider from './components/ThemeProvider';
import ThemedComponent from './components/ThemedComponent';


function App() {
  const headerStyle = {
    color: 'black',
    padding: '20px', 
    textAlign: 'center', 
    borderRadius: '5px', 
    display: 'inline-block', 
    cursor: 'pointer', 
    transition: 'background-color 0.3s', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
  };

  return (
    <div className="App">
      <div
        style={headerStyle}
      >
        <h1 style={{ margin: 0 }}>PROJECT TASK - 2</h1>
      </div>

      <nav>
        <ul>
          <li><Link to="/list-renderer">List Renderer</Link></li>
          <li><Link to="/lifecycle-logger">Lifecycle Logger</Link></li>
          <li><Link to="/registration-form">Registration Form</Link></li>
          <li><Link to="/themed-component">Themed Component</Link></li>
          <li><Link to="/hoc-logging">HOC with Logging</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/list-renderer" element={<ListRenderer />} />
        <Route path="/lifecycle-logger" element={<LifecycleLogger />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/themed-component" element={
          <ThemeProvider>
            <ThemedComponent />
          </ThemeProvider>
        } />

      </Routes>
    </div>
  );
}

export default App;

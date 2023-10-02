import CreateNote from './components/CriarNota';
import Header from './components/Header';
import Painelnotas from './components/Painelnotas';
import NotaContextProvider from './context/NotaContext';

function App() {
  return (
    <NotaContextProvider>
      <main className="bg-gray-100">
        <Header />

        <CreateNote />
        <Painelnotas />
      </main>
    </NotaContextProvider>
  );
}

export default App;


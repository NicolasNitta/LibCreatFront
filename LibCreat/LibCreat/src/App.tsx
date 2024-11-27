import { ApiProvider } from './APIContext/PageContext';
import RoutesMain from './routes/RoutesMain';

function App() {

  return (
    <>
      <ApiProvider>
        <RoutesMain />
      </ApiProvider>
    </>

  )
}

export default App;

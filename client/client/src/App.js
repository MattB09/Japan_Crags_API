import './App.css';
import CragList from './components/CragList';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";


const link = createHttpLink({
  uri: 'http://localhost:4000/',
  credentials: 'same-origin'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CragList />
      </div>
    </ApolloProvider>
  );
}

export default App;

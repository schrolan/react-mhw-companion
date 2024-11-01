import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Auth from './utils/auth'
import User from './pages/user'
import Login from './pages/login'
import SignUp from './pages/signUp'
import Header from './components/header'
import Container from './components/container'
import AilmentSearch from './pages/ailmentSearch'
import ArmorSearch from './pages/armorSearch'
import ArmorSetSearch from './pages/armorSetSearch'
import CharmSearch from './pages/charmSearch'
import DecorationSearch from './pages/decorationSearch'
import EventSearch from './pages/eventSearch'
import ItemSearch from './pages/itemSearch'
import LocationSearch from './pages/locationSearch'
import MonsterSearch from './pages/monsterSearch'
import SkillSearch from './pages/skillSearch'
import WeaponSearch from './pages/weaponSearch'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<AilmentSearch />} />
            <Route path="/search/armor" element={<ArmorSearch />} />
            <Route path="/search/armor-sets" element={<ArmorSetSearch />} />
            <Route path="/search/charms" element={<CharmSearch />} />
            <Route path="/search/decorations" element={<DecorationSearch />} />
            <Route path="/search/events" element={<EventSearch />} />
            <Route path="/search/items" element={<ItemSearch />} />
            <Route path="/search/locations" element={<LocationSearch />} />
            <Route path="/search/monsters" element={<MonsterSearch />} />
            <Route path="/search/skills" element={<SkillSearch />} />
            <Route path="/search/weapons" element={<WeaponSearch />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
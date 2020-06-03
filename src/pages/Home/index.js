import React, { useState } from 'react';
import Input from '../../components/Input';
import Container from '../../components/Container/style';
import Wrapper from '../../components/Wrapper/style';
import Box from '../../components/Box/style';
import { getRepositories } from '../../services/api';

const Home = () => {
  const [repositories, setRepositories] = useState([]);

  const filterRepositories = async (e) => {
    try {
      const repos = await getRepositories(e.target.value);
      setRepositories(repos.data.items);
    }
    catch(e) {
      console.log(e);
    }

  }

  return (
  <div>
    <Container>
      <Wrapper>
        <Input placeholder="Nome do usuário..." />
        <Input placeholder="Repositório..." onChange={(e) => filterRepositories(e)}/>
      </Wrapper>
      <Wrapper>
        { repositories.map((repo) => <Box>
          { repo.name }
        </Box>)}
      </Wrapper>
    </Container>
  </div>
)};

export default Home;

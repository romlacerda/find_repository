import { get } from '.';

const endpoint = 'https://api.github.com/';

export const getRepositories = (repositoryName) => get(`${endpoint}search/repositories?q=${repositoryName}`);
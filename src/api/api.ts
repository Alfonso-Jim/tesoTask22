import axios from 'axios';

export async function getServersData(token: string) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get('https://playground.tesonet.lt/v1/servers', config).then((response) => {
    return response;
  });
  return response;
}

interface paramsInterface {
  username: string;
  password: string;
}

export async function authRequest(params: paramsInterface) {
  const response = await axios.post('https://playground.tesonet.lt/v1/tokens', params).then((response) => {
    return response;
  });
  return response;
}

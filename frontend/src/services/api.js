import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || '/api';

export const startService = async (code) => {
  try {
    const response = await axios.post(`${API_BASE}/start`, { code });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || '启动服务失败');
  }
};

export const endService = async (gameId) => {
  return axios.post(`${API_BASE}/end`, { game_id: gameId });
};

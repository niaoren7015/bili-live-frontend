import { useState } from 'react';
import { startService } from '../services/api';

export default function AuthForm() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await startService(code);
      console.log('服务启动成功:', result);
      alert(`长连地址：${result.data.wss_link}`);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="输入主播身份码"
      />
      <button type="submit" disabled={loading}>
        {loading ? '启动中...' : '开播'}
      </button>
    </form>
  );
}

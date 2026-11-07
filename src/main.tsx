import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';

// 把 React 组件挂载到 index.html 的 root 容器。
createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
);

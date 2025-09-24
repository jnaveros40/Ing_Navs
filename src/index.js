import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
serviceWorkerRegistration.register({
  onSuccess: () => {
    console.log('Portfolio is now available offline!');
    // Show a subtle notification to user
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Portfolio disponible offline', {
        body: 'El portfolio de Juan Naveros ya está disponible sin conexión',
        icon: '/web/icon-192.png'
      });
    }
  },
  onUpdate: (registration) => {
    console.log('New version available! Please refresh.');
    // Show update notification
    const updateButton = document.createElement('div');
    updateButton.innerHTML = `
      <div style="position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, #ffd700 0%, #f4c430 50%, #daa520 100%); color: #000; padding: 15px 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10000; font-family: system-ui; font-weight: 600;">
        <div>Nueva versión disponible</div>
        <button onclick="window.location.reload()" style="background: #000; color: #ffd700; border: none; padding: 8px 16px; border-radius: 4px; margin-top: 8px; cursor: pointer; font-weight: 600;">
          Actualizar
        </button>
        <button onclick="this.parentElement.parentElement.remove()" style="background: transparent; color: #000; border: 1px solid #000; padding: 8px 16px; border-radius: 4px; margin-top: 8px; margin-left: 8px; cursor: pointer;">
          Después
        </button>
      </div>
    `;
    document.body.appendChild(updateButton);
  }
});

// Request notification permission
if ('Notification' in window && Notification.permission === 'default') {
  Notification.requestPermission();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

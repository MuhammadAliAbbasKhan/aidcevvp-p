import React from 'react';
import { useToast } from '../context/ToastContext';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export function ToastNotification() {
  const { toasts, removeToast } = useToast();

  if (!toasts.length) return null;

  const getStyle = (type) => {
    switch (type) {
      case 'success':
        return { bg: '#064E3B', border: '#10B981', color: '#6EE7B7', icon: <CheckCircle2 size={20} /> };
      case 'error':
        return { bg: '#7F1D1D', border: '#EF4444', color: '#FCA5A5', icon: <AlertCircle size={20} /> };
      case 'warning':
        return { bg: '#78350F', border: '#F59E0B', color: '#FCD34D', icon: <AlertTriangle size={20} /> };
      default:
        return { bg: '#0C4A6E', border: '#0284C7', color: '#7DD3FC', icon: <Info size={20} /> };
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 100000,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      maxWidth: '400px',
      width: 'calc(100vw - 48px)'
    }}>
      {toasts.map((t) => {
        const style = getStyle(t.type);
        return (
          <div key={t.id} style={{
            background: style.bg,
            border: `1px solid ${style.border}`,
            color: style.color,
            borderRadius: '12px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            animation: 'fadeIn 0.3s ease-in-out'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', fontWeight: 600 }}>
              {style.icon}
              <span>{t.message}</span>
            </div>
            <button onClick={() => removeToast(t.id)} style={{
              background: 'transparent',
              border: 'none',
              color: style.color,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}>
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ToastNotification;


import React from 'react';
import { Link } from 'react-router-dom';

export function QuickAccessLimit() {
  // RENDER
  return (
    <div className="shadow rounded-paper p-3 mb-5">
      <p className="text-xs text-center uppercase">
        У ВАС ЕСТЬ <b>10 ДНЕЙ</b> ЧТОБЫ ПОСЕТИТЬ ИМОН ИНТЕРНЕШНЛ В Г. ДУШАНБЕ. СПИСОК ФИЛИАЛЬНОЙ СЕТИ ИМОН ДОСТУПЕН{' '}
        <Link to="/" className="text-primary">
          ЗДЕСЬ.
        </Link>{' '}
        В ФИЛИАЛЕ ВЫ ДОЛЖНЫ ПРЕДОСТАВИТСЯ КАК КЛИЕНТ AION И ПРЕДОСТАВИТЬ 6 - ЗНАЧНЫЙ КОД ДЛЯ ПОЛУЧЕНИЯ КРЕДИТА НАЛИЧНЫМИ
      </p>
    </div>
  );
}

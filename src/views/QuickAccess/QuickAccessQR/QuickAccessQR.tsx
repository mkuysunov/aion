import React from 'react';
import { numberGenerator } from '@utils';
import QRCode from 'react-qr-code';

export function QuickAccessQR() {
  const randomNumber = numberGenerator();
  // RENDER
  return (
    <div className="flex space-x-5 mb-5">
      <div className="p-3 rounded-paper shadow">
        <QRCode title="GeeksForGeeks" value={randomNumber.toString()} size={100} />
      </div>
      <div className="grow flex flex-col justify-center items-center p-3 rounded-paper shadow">
        <h2 className="text-4xl font-medium text-primary text-center">{randomNumber}</h2>
        <p className="text-lg text-center">Сохраните код</p>
      </div>
    </div>
  );
}

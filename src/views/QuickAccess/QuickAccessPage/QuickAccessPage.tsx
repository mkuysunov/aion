import React from 'react';
import { QuickAccessHeader } from '../QuickAccessHeader/QuickAccessHeader';
import { QuickAccessQR } from '../QuickAccessQR/QuickAccessQR';
import { QuickAccessLimit } from '../QuickAccessLimit/QuickAccessLimit';
import { QuickAccessFooter } from '../QuickAccessFooter/QuickAccessFooter';

export default function QuickAccessPage() {
  // RENDER
  return (
    <>
      <QuickAccessHeader />
      <QuickAccessQR />
      <QuickAccessLimit />
      <QuickAccessFooter />
    </>
  );
}

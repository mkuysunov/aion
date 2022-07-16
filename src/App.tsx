import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { WindowSpinner, Wrapper } from '@components';
import { routes } from '@utils';

const QuickAccessPage = lazy(() => import('@views/QuickAccess'));
const RegistrationPage = lazy(() => import('@views/Registration'));

export default function App() {
  return (
    <Suspense fallback={<WindowSpinner />}>
      <Wrapper>
        <Routes>
          <Route path={routes.quickAccess} element={<QuickAccessPage />} />
          <Route path={routes.registration} element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to={routes.quickAccess} replace />} />
        </Routes>
      </Wrapper>
    </Suspense>
  );
}

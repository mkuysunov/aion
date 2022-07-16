import React from 'react';

export function RegistrationHeader() {
  // RENDER
  return (
    <div className=" mb-5">
      <h2 className="text-4xl font-medium text-primary text-center mb-5">Регистрация</h2>
      <p className="text-xs text-center">
        Пополните ниже указание поля чтобы авторизоваться, <br /> <span className="text-rose-900 text-lg">*</span>{' '}
        обязательная
      </p>
    </div>
  );
}

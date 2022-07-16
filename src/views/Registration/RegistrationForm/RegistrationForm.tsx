import React from 'react';

export function RegistrationForm() {
  // RENDER
  return (
    <form>
      <div className="mb-5">
        <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Имя *
        </label>
        <input
          id="fullname"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Введите имя"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Фамилия *
        </label>
        <input
          id="surname"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Введите фамилию"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Телефон *
        </label>
        <input
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="+992 ХХ ХХХ ХХ ХХ"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Пароль *
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Придумайте пароль"
          required
        />
      </div>

      <div className="text-center">
        <button type="submit" className="text-white text-sm bg-primary rounded-paper py-2 px-8">
          Авторизоваться
        </button>
      </div>
    </form>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@utils';

export function QuickAccessFooter() {
  // RENDER
  return (
    <>
      <div className="flex items-center space-x-3 shadow rounded-paper p-3 mb-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[40px] h-[40px] text-primary fill-white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-xs">
          Тепер у Вас есть личный кабинет, в котором доступна вся информация по кредитной заявке.
        </p>
      </div>

      <div className="text-center">
        <Link to={routes.registration} type="button" className="text-white  text-sm bg-primary rounded-paper py-2 px-8">
          Войти в личный кабинет
        </Link>
      </div>
    </>
  );
}

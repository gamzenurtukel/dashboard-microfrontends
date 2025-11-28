import React from "react";

const UserCard: React.FC = () => {
  return (
    <div className="rounded-md bg-white dark:bg-gray-700 p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-slate-200" />
        <div>
          <div className="text-title-md font-semibold text-gray-900 dark:text-gray-modern-50">
            Jane Doe
          </div>
          <div className="text-title-sm text-gray-modern-500">
            jane.doe@example.com
          </div>
        </div>

        <button className="ml-auto flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 transition hover:bg-indigo-100">
          <span>Bildirimler</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-title-xs font-bold text-white">
            3
          </span>
        </button>
      </div>

      <p className="mt-4 text-xs text-gray-modern-500">
        Notification badge&apos;ine tıklayınca sağdaki Content Bar filtrelenecek
        ve mesaj gösterecek.
      </p>
    </div>
  );
};

export default UserCard;

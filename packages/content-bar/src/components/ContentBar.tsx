import React from "react";

type Item = {
  id: number;
  type: "notification" | "activity";
  title: string;
  description: string;
};

const MOCK_ITEMS: Item[] = [
  {
    id: 1,
    type: "notification",
    title: "Yeni bildirim",
    description: "İlanına yeni bir yorum yapıldı.",
  },
  {
    id: 2,
    type: "activity",
    title: "Son aktivite",
    description: "Profil sayfan 12 kez görüntülendi.",
  },
  {
    id: 3,
    type: "notification",
    title: "Mesaj",
    description: "Yeni bir mesajın var.",
  },
];

const ContentBar: React.FC = () => {
  const visibleItems = MOCK_ITEMS;

  const message = "Tüm bildirimler görüntülendi.";

  return (
    <div className="space-y-3">
      {message && (
        <div className="rounded-lg bg-shadow-blue px-3 py-2 text-xs text-default-blue">
          {message}
        </div>
      )}

      <div className="grid gap-3 md:grid-cols-2">
        {visibleItems.map((item) => (
          <article
            key={item.id}
            className="rounded-md bg-gray-modern-100 dark:bg-gray-modern-800 p-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-moder-900 dark:text-gray-modern-50">
              {item.title}
            </h3>
            <p className="mt-1 text-xs text-gray-modern-500">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ContentBar;

import React from "react";
import { useDashboardStore } from "shell/dashboard-store";

type Item = {
  id: number;
  type: "notification" | "activity";
  title: string;
  description: string;
};

type ItemFilter = "all" | "notification" | "activity";

function filterItems(items: Item[], filter: ItemFilter): Item[] {
  if (filter === "all") return items;
  return items.filter((item) => item.type === filter);
}

function ItemCard({ item }: { item: Item }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 hover:border-slate-500 transition-colors cursor-pointer flex justify-between items-center">
      <div>
        <h3 className="text-xs font-semibold mb-1 text-white">{item.title}</h3>
        <p className="text-[11px] text-slate-300">{item.description}</p>
      </div>
      <span className="mt-2 inline-flex text-[11px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-400">
        {item.type === "notification" ? "Bildirim" : "Aktivite"}
      </span>
    </div>
  );
}

const ContentBar: React.FC = () => {
  const { items, filter, setFilter } = useDashboardStore();

  const visibleItems = filterItems(items, filter);

  const message = "Tüm bildirimler görüntülendi.";

  const filterButtonClasses = (active: boolean) =>
    `px-3 py-1 rounded-full text-[11px] border transition-colors
     ${
       active
         ? "border-blue-400 bg-blue-500/10 text-blue-300"
         : "border-slate-700 text-slate-300 hover:border-slate-400"
     }`;

  return (
    <section className="border border-slate-800 bg-slate-950/60 rounded-2xl p-4 space-y-3">
      {/* header and filter buttons */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Content</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={filterButtonClasses(filter === "all")}
          >
            Tümü
          </button>
          <button
            type="button"
            onClick={() => setFilter("notification")}
            className={filterButtonClasses(filter === "notification")}
          >
            Bildirimler
          </button>
          <button
            type="button"
            onClick={() => setFilter("activity")}
            className={filterButtonClasses(filter === "activity")}
          >
            Aktiviteler
          </button>
        </div>
      </div>

      {/* list */}
      <div className="grid gap-2">
        {visibleItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
        {visibleItems.length === 0 && (
          <p className="text-sm text-slate-400">
            Bu filtre için sonuç bulunamadı.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContentBar;

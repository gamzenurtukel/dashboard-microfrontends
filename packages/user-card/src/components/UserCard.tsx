import { useMemo } from "react";
import { useDashboardStore } from "shell/dashboard-store";

type ItemFilter = "notification" | "activity";

export default function UserCard() {
  const { items, filter, setFilter } = useDashboardStore();
  const currentFilter = filter;

  const counts = useMemo(() => {
    const base: Record<ItemFilter, number> = {
      notification: 0,
      activity: 0,
    };
    return items.reduce((acc: any, item: any) => {
      acc[item.type] += 1;
      return acc;
    }, base);
  }, [items]);

  const handleNotificationClick = () => setFilter("notification");
  const handleActivityClick = () => setFilter("activity");

  const badgeClasses = (active: boolean) =>
    `inline-flex items-center justify-center rounded-full px-2 py-1 text-[11px] border transition-colors
     ${
       active
         ? "border-blue-400 bg-blue-500/10 text-blue-300"
         : "border-slate-700 text-slate-300 hover:border-slate-400"
     }`;

  const countPill =
    "ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full text-[11px] border border-slate-500";

  return (
    <div className="border border-slate-800 bg-slate-950/60 rounded-2xl p-4 space-y-3">
      {/* user info */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-semibold">
          JD
        </div>
        <div>
          <div className="text-sm font-semibold">Jane Doe</div>
          <div className="text-xs text-slate-400">jane.doe@example.com</div>
        </div>
      </div>

      {/* Badge’ler */}
      <div className="flex gap-2 mt-2">
        <button
          type="button"
          onClick={handleNotificationClick}
          className={badgeClasses(currentFilter === "notification")}
        >
          Bildirimler
          <span className={countPill}>{counts.notification}</span>
        </button>

        <button
          type="button"
          onClick={handleActivityClick}
          className={badgeClasses(currentFilter === "activity")}
        >
          Aktiviteler
          <span className={countPill}>{counts.activity}</span>
        </button>
      </div>
    </div>
  );
}

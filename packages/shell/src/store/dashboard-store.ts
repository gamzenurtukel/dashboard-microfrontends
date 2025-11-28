import { create } from "zustand";

export type ItemType = "notification" | "activity";

export interface Item {
  id: number;
  type: ItemType;
  title: string;
  description: string;
}

export type ItemFilter = "all" | ItemType;

export interface DashboardState {
  items: Item[];
  filter: ItemFilter;
  setFilter: (filter: ItemFilter) => void;
}

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
  {
    id: 4,
    type: "activity",
    title: "Favorilere eklendi",
    description: "Bir kullanıcı ilanını favorilerine ekledi.",
  },
  {
    id: 5,
    type: "notification",
    title: "Fiyat teklifi",
    description: "İlanın için yeni bir fiyat teklifi aldın.",
  },
  {
    id: 6,
    type: "activity",
    title: "Giriş aktivitesi",
    description: "Hesabına bugün 3 farklı cihazdan giriş yapıldı.",
  },
  {
    id: 7,
    type: "notification",
    title: "Hesap bildirimi",
    description: "E-posta adresin başarıyla doğrulandı.",
  },
  {
    id: 8,
    type: "activity",
    title: "Listeleme performansı",
    description: "En çok görüntülenen ilanların raporu hazır.",
  },
  {
    id: 9,
    type: "notification",
    title: "Güvenlik uyarısı",
    description: "Şifreni uzun süredir güncellemedin.",
  },
  {
    id: 10,
    type: "activity",
    title: "Arama trendi",
    description: "Bugün en çok aranan kategori: Elektronik.",
  },
  {
    id: 11,
    type: "notification",
    title: "Değerlendirme",
    description: "Satış sonrası için yeni bir değerlendirme aldın.",
  },
  {
    id: 12,
    type: "activity",
    title: "Takip artışı",
    description: "Profilini 4 yeni kullanıcı takip etmeye başladı.",
  },
  {
    id: 13,
    type: "notification",
    title: "Ödeme bildirimi",
    description: "Abonelik ödemen başarıyla alındı.",
  },
];

const initialState: Omit<DashboardState, "setFilter"> = {
  items: MOCK_ITEMS,
  filter: "all",
};

export const useDashboardStore = create<DashboardState>((set) => ({
  ...initialState,
  setFilter: (filter) => set({ filter }),
}));

import { Gift, Truck } from "lucide-react";

import type { PromoItem } from "../../types";

type PromoMessagesProps = {
  items: PromoItem[];
};

const promoIcons = {
  truck: Truck,
  gift: Gift,
};

export function PromoMessages({ items }: PromoMessagesProps) {
  return (
    <div className="flex items-center gap-6 text-white/80">
      {items.map((item) => {
        const Icon = promoIcons[item.icon];

        return (
          <div key={item.id} className="flex items-center gap-2">
            <Icon className="size-3.5 text-primary" />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
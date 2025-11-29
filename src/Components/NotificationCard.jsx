import React from "react";
import Badge from "./Badge";
import Icon from "./Icon";

export default function NotificationCard({ item, onMarkRead }) {
  return (
    <div className="glass-blue rounded-xl2 p-6 mt-5">
      <div className="flex items-start">
        <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-xl2 bg-white/85 shadow-insetSoft">
          <Icon
            name={
              item.icon === "award"
                ? "award"
                : item.icon === "announcement"
                ? "announcement"
                : "user-add"
            }
            className="h-6 w-6 text-brand-700"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-gray-700">
              {item.title}
            </h3>
            {item.isNew && <Badge variant="neutral">Nouveau</Badge>}
          </div>
          <p className="mt-2 text-sm text-gray-600">{item.description}</p>
          <p className="mt-3 text-xs text-gray-500">{item.date}</p>
        </div>

        {item.unread && (
          <button
            onClick={() => onMarkRead?.(item.id)}
            className="btn flex items-center gap-2"
          >
            <Icon name="check" />
            <span>Marquer comme lu</span>
          </button>
        )}
      </div>
    </div>
  );
}
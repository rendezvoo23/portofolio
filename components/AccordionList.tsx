"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  text: string;
};

export function AccordionList({ items }: { items: AccordionItem[] }) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div className="accordion-list">
      {items.map((item, index) => {
        const isOpen = openItem === index;

        return (
          <article className={`accordion-item ${isOpen ? "is-open" : ""}`} key={item.title}>
            <button
              aria-expanded={isOpen}
              className="accordion-trigger focus-ring"
              onClick={() => setOpenItem(isOpen ? null : index)}
              type="button"
            >
              <span>{item.title}</span>
              <span aria-hidden="true" className="accordion-symbol" />
            </button>
            <div className="accordion-content">
              <div>
                <p>{item.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

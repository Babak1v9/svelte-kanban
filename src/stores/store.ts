import { writable } from "svelte/store";

interface Card {
  id: string;
  title: string;
}

interface Column {
  id: string;
  title: string;
  cards: Card[];
}

let uid = () => `_${Math.random().toString(35).substr(2, 9)}`;

const defaultColumns: Column[] = [
  {
    id: uid(),
    title: "Backlog",
    cards: [],
  },
  {
    id: uid(),
    title: "Offen",
    cards: [],
  },
  {
    id: uid(),
    title: "In Bearbeitung",
    cards: [],
  },
  {
    id: uid(),
    title: "Erledigt",
    cards: [],
  },
];

function getNewColumn(): Column {
  return {
    id: uid(),
    title: "Titel",
    cards: [],
  };
}

export const store = writable<Column[]>(defaultColumns);

export function addColumn() {
  store.update((prev) => [getNewColumn(), ...prev]);
}
export function deleteColumn(id: string) {
  store.update((cols) => cols.filter((column) => column.id !== id));
}

export function updateColumn(id: string) {
  store.update((cols) => {
    return cols.map((col) => {
      if (col.id === id) {
        return {
          ...col,
        };
      } else return { ...col };
    });
  });
}

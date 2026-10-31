import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { seedProducts, seedEnquiries } from './seed';
const DemoContext = createContext();
const KEY = 'viron-paper-co-demo-v1';
const fresh = () => ({ products: seedProducts, enquiries: seedEnquiries });
export function DemoProvider({ children }) {
  const [data, setData] = useState(() => { try { return JSON.parse(localStorage.getItem(KEY)) || fresh(); } catch { return fresh(); } });
  useEffect(() => localStorage.setItem(KEY, JSON.stringify(data)), [data]);
  const api = useMemo(() => ({
    ...data,
    addProduct: (p) => setData(d => ({ ...d, products: [...d.products, { ...p, id: `p${Date.now()}`, stock: Number(p.stock), price: Number(p.price), icon: '◆', color: 'blue' }] })),
    updateProduct: (p) => setData(d => ({ ...d, products: d.products.map(x => x.id === p.id ? { ...x, ...p, price: Number(p.price), stock: Number(p.stock) } : x) })),
    deleteProduct: (id) => setData(d => ({ ...d, products: d.products.filter(p => p.id !== id) })),
    updateEnquiry: (id, status) => setData(d => ({ ...d, enquiries: d.enquiries.map(e => e.id === id ? { ...e, status } : e) })),
    submitEnquiry: (form, items) => setData(d => ({ ...d, enquiries: [{ id: `ENQ-${1043 + d.enquiries.length}`, ...form, items, status: 'Pending', date: new Date().toISOString().slice(0, 10) }, ...d.enquiries] })),
    reset: () => setData(fresh()),
  }), [data]);
  return <DemoContext.Provider value={api}>{children}</DemoContext.Provider>;
}
export const useDemo = () => useContext(DemoContext);

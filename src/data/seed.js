export const categories = ['School Supplies', 'College Essentials', 'Office Supplies', 'Notebooks & Journals', 'Pens & Writing Instruments', 'Art & Craft Supplies', 'Fancy Items', 'Gifts & Accessories'];
export const seedProducts = [
  { id: 'p1', name: 'Arc Grid Notebook', category: 'Notebooks & Journals', price: 189, stock: 18, icon: '▤', color: 'peach', description: 'A 160-page dot-grid notebook with a flexible cover for plans, sketches and notes.' },
  { id: 'p2', name: 'Studio Gel Pen Set', category: 'Pens & Writing Instruments', price: 249, stock: 8, icon: '✎', color: 'lilac', description: 'Six smooth-writing gel pens in a considered everyday colour palette.' },
  { id: 'p3', name: 'Canvas Pencil Pouch', category: 'School Supplies', price: 299, stock: 14, icon: '◒', color: 'mint', description: 'A sturdy zip pouch with room for the tools used every day.' },
  { id: 'p4', name: 'Desk Notes Block', category: 'Office Supplies', price: 159, stock: 27, icon: '▱', color: 'yellow', description: 'A bright, tear-off notes block to keep important work visible.' },
  { id: 'p5', name: 'Watercolour Pocket Set', category: 'Art & Craft Supplies', price: 549, stock: 5, icon: '◉', color: 'coral', description: 'Twelve lively watercolour pans in a compact, take-anywhere tin.' },
  { id: 'p6', name: 'Brass Bookmark', category: 'Gifts & Accessories', price: 219, stock: 11, icon: '⌁', color: 'blue', description: 'A slim brass bookmark made for marking a much-loved page.' },
  { id: 'p7', name: 'Campus Planner', category: 'College Essentials', price: 329, stock: 20, icon: '▦', color: 'pink', description: 'An undated weekly planner with generous space for deadlines and ideas.' },
  { id: 'p8', name: 'Mini Surprise Box', category: 'Fancy Items', price: 399, stock: 7, icon: '✦', color: 'orange', description: 'A cheerful box of small desk delights, ready to gift.' },
];
export const seedEnquiries = [
  { id: 'ENQ-1042', name: 'Meera Shah', business: '', email: 'meera@example.demo', message: 'Please confirm colour availability.', items: [{ productId: 'p2', quantity: 2 }, { productId: 'p1', quantity: 1 }], status: 'Pending', date: '2026-10-29' },
  { id: 'ENQ-1041', name: 'Arjun Rao', business: 'Bright Studio', email: 'arjun@example.demo', message: 'For an office team.', items: [{ productId: 'p4', quantity: 6 }], status: 'In progress', date: '2026-10-28' },
];

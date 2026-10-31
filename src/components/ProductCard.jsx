export default function ProductCard({ product, onSelect, onAdd }) {
 return <article className="product-card">
  <button className={`product-image ${product.color}`} onClick={() => onSelect(product)} aria-label={`View ${product.name}`}><span>{product.icon}</span></button>
  <div className="product-meta"><small>{product.category}</small><h3>{product.name}</h3><div><strong>₹{product.price}</strong><span className={product.stock < 9 ? 'low-stock' : ''}>{product.stock ? (product.stock < 9 ? 'Low stock' : 'Available') : 'Out of stock'}</span></div></div>
  <button className="add-small" disabled={!product.stock} onClick={() => onAdd(product)}>Add to enquiry</button>
 </article>;
}

import Link from './Link';
import { PaperMark } from './Brand';
export default function StoreHeader({ count, openList }) { return <header className="store-header"><PaperMark /><nav><a href="#catalogue">Shop</a><a href="#about">Our story</a><Link to="/">By Viron</Link></nav><button className="bag" onClick={openList}>Enquiry list <em>{count}</em></button></header>; }

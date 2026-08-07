import { Link, NavLink } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const links = [['/', 'Home'], ['/products', 'Shop'], ['/cart', 'Cart']];
  return <header className="sticky top-0 z-40 border-b border-slate-100 bg-[#fffdfb]/95 backdrop-blur"><div className="container-page flex h-18 items-center justify-between py-3"><Link to="/" className="text-2xl font-black tracking-tight text-ink">Global<span className="text-coral">Mart</span></Link><nav className="hidden items-center gap-7 md:flex">{links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => `font-semibold ${isActive ? 'text-coral' : 'text-slate-600 hover:text-ink'}`}>{label}</NavLink>)}</nav><div className="flex items-center gap-3"><Link aria-label="Cart" to="/cart" className="relative rounded-full p-2 text-ink hover:bg-orange-50"><ShoppingBag size={22}/>{count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-[11px] font-bold text-white">{count}</span>}</Link><button className="p-2 md:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></div>{open && <nav className="border-t bg-white px-5 py-4 md:hidden">{links.map(([to, label]) => <NavLink onClick={() => setOpen(false)} key={to} to={to} className="block py-3 font-semibold">{label}</NavLink>)}</nav>}</header>;
}

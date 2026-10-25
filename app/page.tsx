'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  Truck,
  UserRound,
  X,
} from 'lucide-react'

const products = [
  { name: 'iPhone 17 Pro', reference: 'ENOTIK-IPH17P-001', category: 'Smartphones', oldPrice: 'CHF 1’399.–', price: 'CHF 1’249.–', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85', tag: 'Nouveau' },
  { name: 'Sony WH-1000XM6', reference: 'ENOTIK-SNYXM6-002', category: 'Audio', oldPrice: 'CHF 449.–', price: 'CHF 399.–', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85', tag: 'Bestseller' },
  { name: 'MacBook Air M4', reference: 'ENOTIK-MBA-M4-003', category: 'Informatique', oldPrice: 'CHF 1’199.–', price: 'CHF 1’099.–', image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85', tag: 'Nouveau' },
  { name: 'Dyson Airwrap', reference: 'ENOTIK-DYS-AW-004', category: 'Maison', oldPrice: 'CHF 529.–', price: 'CHF 449.–', image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85', tag: '−15%' },
]

const categories = [
  { label: 'Smartphones', sub: 'Apple, Samsung, Google', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1100&q=85' },
  { label: 'Audio & TV', sub: 'Écouter. Regarder. Vibrer.', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1100&q=85' },
  { label: 'Informatique', sub: 'Le travail, en mieux.', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1100&q=85' },
  { label: 'Électroménager', sub: 'Le beau, au quotidien.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1100&q=85' },
]

export default function Page() {
  const [cart, setCart] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [liked, setLiked] = useState<number[]>([])
  const [language, setLanguage] = useState('FR')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())), [query])

  function addToCart() { setCart((count) => count + 1) }

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <div className="bg-[#151515] px-5 py-2 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-[#f7f6f2]">
        100% suisse · Livraison offerte dès CHF 80 · Expédition depuis la Suisse en 24 h
      </div>
      <header className="border-b border-[#151515]/15 bg-[#f7f6f2] px-5 lg:px-10">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6">
          <button aria-label="Ouvrir le menu" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <a href="#" className="font-serif text-[30px] font-semibold tracking-[-0.07em]">E-NOTIK</a>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[105px] z-10 flex-col gap-5 border-b border-[#151515]/10 bg-[#f7f6f2] p-6 text-sm lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0`}>
            <a href="#nouveautes" className="hover:opacity-60">Nouveautés</a><a href="#categories" className="hover:opacity-60">Catégories</a><a href="#reconditionne" className="hover:opacity-60">Reconditionné</a><a href="#service" className="hover:opacity-60">Notre service</a>
          </nav>
          <div className="flex items-center gap-3 text-sm">
            <button className="hidden items-center gap-1 sm:flex" onClick={() => setLanguage(language === 'FR' ? 'DE' : language === 'DE' ? 'IT' : 'FR')}>{language}<ChevronDown size={13} /></button>
            <button aria-label="Rechercher" onClick={() => setSearchOpen(!searchOpen)}><Search size={19} strokeWidth={1.5} /></button>
            <button aria-label="Compte" className="hidden sm:block"><UserRound size={19} strokeWidth={1.5} /></button>
            <button aria-label="Panier" className="relative" onClick={addToCart}><ShoppingBag size={19} strokeWidth={1.5} />{cart > 0 && <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-[#b9d7c2] text-[9px]">{cart}</span>}</button>
          </div>
        </div>
        {searchOpen && <div className="border-t border-[#151515]/10 py-4"><div className="mx-auto flex max-w-[1440px] items-center gap-3"><Search size={18} /><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher un produit, une marque..." className="w-full bg-transparent text-sm outline-none placeholder:text-[#151515]/45" /></div></div>}
      </header>

      <section className="mx-auto grid max-w-[1440px] gap-5 px-5 pb-20 pt-5 lg:grid-cols-[1.45fr_0.55fr] lg:px-10">
        <div className="relative min-h-[480px] overflow-hidden rounded-[2px] bg-[#d9e1de] p-8 sm:p-14 lg:min-h-[600px]">
          <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1600&q=90" alt="Smartphone posé sur une table claire" className="absolute inset-0 size-full object-cover mix-blend-multiply opacity-90" />
          <div className="relative flex h-full flex-col justify-between"><div><p className="mb-5 text-[10px] uppercase tracking-[0.25em]">Sélection suisse · Depuis Lausanne</p><h1 className="max-w-[570px] font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">La technologie<br /><em className="font-normal">à la suisse.</em></h1></div><div className="flex items-end justify-between"><p className="max-w-[240px] text-sm leading-relaxed">Des objets choisis pour leur fonction, leur longévité et la façon dont ils trouvent leur place.</p><a href="#nouveautes" className="flex items-center gap-2 border-b border-[#151515] pb-1 text-xs uppercase tracking-[0.15em]">Découvrir <ArrowRight size={15} /></a></div></div>
        </div>
        <div className="flex min-h-[480px] flex-col justify-between bg-[#e7ded3] p-8 sm:p-10 lg:min-h-[600px]"><div><p className="mb-20 text-[10px] uppercase tracking-[0.25em]">E-NOTIK / sélection 01</p><h2 className="max-w-[300px] font-serif text-4xl leading-[0.98] tracking-[-0.045em]">Moins, mais<br /><em className="font-normal">beaucoup mieux.</em></h2></div><div><div className="mb-8 h-px bg-[#151515]/20" /><p className="mb-5 text-sm leading-relaxed">Des produits choisis en Suisse, livrés partout en Suisse et faits pour durer.</p><a href="#categories" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em]">Explorer la boutique <ArrowRight size={15} /></a></div></div>
      </section>

      <section id="categories" className="mx-auto max-w-[1440px] px-5 pb-24 lg:px-10"><div className="mb-8 flex items-end justify-between"><div><p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#151515]/55">Tout commence ici</p><h2 className="font-serif text-4xl tracking-[-0.04em]">Choisir par univers</h2></div><a href="#nouveautes" className="hidden text-xs uppercase tracking-[0.15em] sm:flex sm:items-center sm:gap-2">Tout voir <ArrowRight size={15} /></a></div><div className="grid grid-cols-2 gap-2 lg:grid-cols-4">{categories.map((cat) => <a href="#nouveautes" key={cat.label} className="group relative aspect-[0.85] overflow-hidden bg-[#e4e2dc]"><img src={cat.image} alt={cat.label} className="size-full object-cover grayscale-[30%] transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /><div className="absolute bottom-0 p-4 text-white sm:p-5"><p className="text-sm font-medium sm:text-base">{cat.label}</p><p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-white/75">{cat.sub}</p></div></a>)}</div></section>

      <section id="nouveautes" className="bg-[#151515] px-5 py-20 text-[#f7f6f2] lg:px-10"><div className="mx-auto max-w-[1440px]"><div className="mb-9 flex items-end justify-between"><div><p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/55">La sélection du moment</p><h2 className="font-serif text-4xl tracking-[-0.04em]">Les essentiels</h2></div><div className="text-xs text-white/55">{filtered.length} produits</div></div><div className="grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4">{filtered.map((product, index) => <article key={product.name} className="group"><div className="relative mb-4 aspect-[0.82] overflow-hidden bg-[#252525]"><img src={product.image} alt={product.name} className="size-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-3 top-3 bg-[#f7f6f2] px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-[#151515]">{product.tag}</span><button aria-label={`Ajouter ${product.name} aux favoris`} onClick={() => setLiked(liked.includes(index) ? liked.filter((i) => i !== index) : [...liked, index])} className="absolute right-3 top-3 rounded-full bg-[#f7f6f2] p-2 text-[#151515]">{liked.includes(index) ? <Check size={15} /> : <Heart size={15} strokeWidth={1.5} />}</button><button onClick={addToCart} className="absolute bottom-3 left-3 right-3 translate-y-14 bg-[#b9d7c2] py-3 text-[10px] uppercase tracking-[0.14em] text-[#151515] transition group-hover:translate-y-0">Ajouter au panier</button></div><p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-white/50">{product.category}</p><h3 className="text-sm">{product.name}</h3><p className="mt-2 text-[10px] text-white/45">Réf. {product.reference}</p><div className="mt-1 flex items-baseline gap-2"><span className="text-xs text-white/45 line-through">{product.oldPrice}</span><span className="text-sm">{product.price}</span></div></article>)}</div></div></section>

      <section id="reconditionne" className="mx-auto grid max-w-[1440px] gap-8 px-5 py-24 lg:grid-cols-2 lg:px-10"><div className="relative min-h-[400px] overflow-hidden bg-[#b9d7c2] p-8 sm:p-12"><img src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1100&q=85" alt="Téléphone reconditionné" className="absolute inset-0 size-full object-cover mix-blend-multiply opacity-70" /><div className="relative flex h-full flex-col justify-between"><p className="text-[10px] uppercase tracking-[0.25em]">Donner une seconde vie</p><div><h2 className="max-w-[360px] font-serif text-5xl leading-[0.95] tracking-[-0.05em]">Le reconditionné,<br /><em className="font-normal">sans compromis.</em></h2><a href="#nouveautes" className="mt-8 inline-flex items-center gap-2 border-b border-[#151515] pb-1 text-xs uppercase tracking-[0.15em]">Voir la sélection <ArrowRight size={15} /></a></div></div></div><div id="service" className="flex flex-col justify-center"><p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#151515]/55">E-NOTIK, en confiance</p><h2 className="max-w-[450px] font-serif text-4xl leading-tight tracking-[-0.04em]">Un service pensé pour votre quotidien.</h2><div className="mt-10 grid gap-6 border-t border-[#151515]/15 pt-6 sm:grid-cols-3"><div><Truck size={20} strokeWidth={1.3} /><p className="mt-4 text-sm font-medium">Livraison en 24 h</p><p className="mt-2 text-xs leading-relaxed text-[#151515]/55">Expédition depuis la Suisse, suivi inclus.</p></div><div><Sparkles size={20} strokeWidth={1.3} /><p className="mt-4 text-sm font-medium">Garantie 2 ans</p><p className="mt-2 text-xs leading-relaxed text-[#151515]/55">Une tranquillité durable, locale.</p></div><div><Check size={20} strokeWidth={1.3} /><p className="mt-4 text-sm font-medium">Paiement sécurisé</p><p className="mt-2 text-xs leading-relaxed text-[#151515]/55">TWINT, cartes et PostFinance.</p></div></div></div></section>

      <footer className="bg-[#e7ded3] px-5 pb-8 pt-14 lg:px-10"><div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-12 border-b border-[#151515]/15 pb-14 md:flex-row"><div><div className="font-serif text-5xl tracking-[-0.07em]">E-NOTIK</div><p className="mt-4 max-w-[220px] text-xs leading-relaxed text-[#151515]/55">Une boutique suisse, pensée en Suisse, livrée depuis Lausanne.</p></div><div className="grid grid-cols-2 gap-x-16 gap-y-8 text-xs sm:grid-cols-3"><div><p className="mb-4 uppercase tracking-[0.14em] text-[#151515]/45">Boutique</p><div className="flex flex-col gap-3"><a href="#nouveautes">Nouveautés</a><a href="#categories">Catégories</a><a href="#reconditionne">Reconditionné</a></div></div><div><p className="mb-4 uppercase tracking-[0.14em] text-[#151515]/45">Aide</p><div className="flex flex-col gap-3"><a href="#service">Livraison</a><a href="#service">Retours</a><a href="#service">Contact</a></div></div><div className="col-span-2 sm:col-span-1"><p className="mb-4 uppercase tracking-[0.14em] text-[#151515]/45">Newsletter</p><div className="flex border-b border-[#151515] pb-2"><input placeholder="Votre adresse e-mail" className="w-full bg-transparent text-xs outline-none placeholder:text-[#151515]/50" /><ArrowRight size={15} /></div></div></div></div><div className="flex flex-col justify-between gap-3 pt-5 text-[10px] uppercase tracking-[0.12em] text-[#151515]/50 sm:flex-row"><span>© 2026 E-NOTIK Suisse</span><span>TVA incluse · Lausanne · Suisse</span><span>Mentions légales · Confidentialité</span></div></div></footer>
    </main>
  )
}

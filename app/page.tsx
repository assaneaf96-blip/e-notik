'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Trash2,
  Truck,
  UserRound,
  X,
} from 'lucide-react'

interface Product {
  id: number
  name: string
  reference: string
  category: string
  oldPrice: string
  price: string
  priceNum: number
  image: string
  tag: string
}

interface CartItem {
  product: Product
  quantity: number
}

const products: Product[] = [
  { id: 1, name: 'iPhone 17 Pro', reference: 'ENOTIK-IPH17P-001', category: 'Smartphones', oldPrice: 'CHF 1’399.–', price: 'CHF 1’249.–', priceNum: 1249, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85', tag: 'Nouveau' },
  { id: 2, name: 'Sony WH-1000XM6', reference: 'ENOTIK-SNYXM6-002', category: 'Audio & TV', oldPrice: 'CHF 449.–', price: 'CHF 399.–', priceNum: 399, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85', tag: 'Bestseller' },
  { id: 3, name: 'MacBook Air M4', reference: 'ENOTIK-MBA-M4-003', category: 'Informatique', oldPrice: 'CHF 1’199.–', price: 'CHF 1’099.–', priceNum: 1099, image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85', tag: 'Nouveau' },
  { id: 4, name: 'Dyson Airwrap', reference: 'ENOTIK-DYS-AW-004', category: 'Électroménager', oldPrice: 'CHF 529.–', price: 'CHF 449.–', priceNum: 449, image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85', tag: '−15%' },
]

const categories = [
  { label: 'Smartphones', sub: 'Apple, Samsung, Google', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1100&q=85' },
  { label: 'Audio & TV', sub: 'Écouter. Regarder. Vibrer.', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1100&q=85' },
  { label: 'Informatique', sub: 'Le travail, en mieux.', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1100&q=85' },
  { label: 'Électroménager', sub: 'Le beau, au quotidien.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1100&q=85' },
]

export default function Page() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [loginInput, setLoginInput] = useState('')
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [liked, setLiked] = useState<number[]>([])
  const [language, setLanguage] = useState<'FR' | 'DE' | 'IT'>('FR')
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const totalCartCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems])
  const cartSubtotal = useMemo(() => cartItems.reduce((acc, item) => acc + item.product.priceNum * item.quantity, 0), [cartItems])

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true
      return matchesQuery && matchesCategory
    })
  }, [query, selectedCategory])

  function showToast(msg: string) {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3000)
  }

  function addToCart(product: Product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { product, quantity: 1 }]
    })
    setCheckoutSuccess(false)
    showToast(`« ${product.name} » ajouté au panier`)
  }

  function updateQuantity(productId: number, delta: number) {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta
            return nextQty > 0 ? { ...item, quantity: nextQty } : null
          }
          return item
        })
        .filter((item): item is CartItem => item !== null)
    })
  }

  function removeFromCart(productId: number) {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  function handleCheckout() {
    setCheckoutSuccess(true)
    setTimeout(() => {
      setCartItems([])
    }, 2500)
  }

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true)
      setNewsletterEmail('')
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (loginInput.trim()) {
      setUserEmail(loginInput.trim())
      setLoginInput('')
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded bg-[#151515] px-4 py-3 text-xs text-[#f7f6f2] shadow-2xl border border-[#DA291C]/30">
          <span className="flex size-5 items-center justify-center rounded-full bg-[#DA291C] text-[11px] font-bold text-white shadow">✓</span>
          <span>{toastMessage}</span>
          <button onClick={() => { setCartOpen(true); setToastMessage(null) }} className="ml-2 font-semibold text-[#DA291C] underline hover:opacity-80">
            Voir le panier
          </button>
        </div>
      )}

      {/* Top Banner - Swiss Red */}
      <div className="bg-[#DA291C] px-5 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-sm flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <span className="flex items-center gap-1.5"><span className="text-base">🇨🇭</span> 100% SUISSE</span>
        <span>·</span>
        <span>LIVRAISON OFFERTE DÈS CHF 80</span>
        <span>·</span>
        <span>EXPÉDITION 24H DEPUIS LAUSANNE</span>
        <span className="hidden md:inline">·</span>
        <span className="hidden md:inline">GARANTIE SUISSE 2 ANS</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#151515]/10 bg-white/95 backdrop-blur-md px-5 lg:px-10">
        <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between gap-6">
          <button aria-label="Ouvrir le menu" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <a href="#" className="flex items-center gap-2.5 group">
            <span className="flex size-7 items-center justify-center rounded-[3px] bg-[#DA291C] text-white text-base font-black shadow-sm transition group-hover:scale-105">
              ✚
            </span>
            <span className="font-serif text-[28px] font-bold tracking-tight text-[#151515]">
              E-NOTIK<span className="text-[#DA291C] text-xs font-sans font-extrabold ml-1 tracking-widest align-top">CH</span>
            </span>
          </a>

          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[74px] z-20 flex-col gap-5 border-b border-[#151515]/10 bg-white p-6 text-sm font-medium lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0`}>
            <a href="#nouveautes" onClick={() => { setSelectedCategory(null); setMenuOpen(false) }} className="hover:text-[#DA291C] transition">Nouveautés</a>
            <a href="#categories" onClick={() => setMenuOpen(false)} className="hover:text-[#DA291C] transition">Catégories</a>
            <a href="#reconditionne" onClick={() => setMenuOpen(false)} className="hover:text-[#DA291C] transition">Reconditionné</a>
            <a href="#service" onClick={() => setMenuOpen(false)} className="hover:text-[#DA291C] transition">Qualité Suisse</a>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            {/* Langue */}
            <button
              className="hidden items-center gap-1 font-semibold text-xs rounded border border-[#151515]/15 px-2 py-1 sm:flex hover:border-[#DA291C] hover:text-[#DA291C] transition"
              onClick={() => setLanguage(language === 'FR' ? 'DE' : language === 'DE' ? 'IT' : 'FR')}
              title="Changer de langue"
            >
              🇨🇭 {language}<ChevronDown size={12} />
            </button>

            {/* Recherche */}
            <button
              aria-label="Rechercher"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 hover:text-[#DA291C] transition"
              title="Rechercher un produit"
            >
              <Search size={19} strokeWidth={1.8} />
            </button>

            {/* Compte */}
            <button
              aria-label="Compte"
              onClick={() => setAccountOpen(true)}
              className="relative p-1 hover:text-[#DA291C] transition"
              title={userEmail ? `Connecté : ${userEmail}` : 'Espace Client'}
            >
              <UserRound size={19} strokeWidth={1.8} />
              {userEmail && <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-[#DA291C] ring-2 ring-white" />}
            </button>

            {/* Panier */}
            <button
              aria-label="Panier"
              className="relative p-1 hover:text-[#DA291C] transition"
              onClick={() => setCartOpen(true)}
              title="Ouvrir mon panier"
            >
              <ShoppingBag size={19} strokeWidth={1.8} />
              {totalCartCount > 0 && (
                <span className="absolute -right-2 -top-1 flex size-4 items-center justify-center rounded-full bg-[#DA291C] text-[9px] font-bold text-white shadow-sm">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Live Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#151515]/10 py-4">
            <div className="mx-auto flex max-w-[1440px] items-center gap-3">
              <Search size={18} className="text-[#DA291C]" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un smartphone, écouteurs, ordinateur..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#151515]/45"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-xs text-[#DA291C] font-semibold hover:opacity-80">
                  Effacer
                </button>
              )}
              <button onClick={() => setSearchOpen(false)} className="text-xs uppercase tracking-wider text-[#151515]/60 hover:text-[#151515]">
                Fermer
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="mx-auto grid max-w-[1440px] gap-5 px-5 pb-20 pt-5 lg:grid-cols-[1.45fr_0.55fr] lg:px-10">
        <div className="relative min-h-[480px] overflow-hidden rounded-[4px] bg-[#0F172A] p-8 sm:p-14 lg:min-h-[600px] text-white">
          <img
            src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1600&q=90"
            alt="Smartphone haute technologie suisse"
            className="absolute inset-0 size-full object-cover mix-blend-overlay opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/45 to-transparent" />
          <div className="relative flex h-full flex-col justify-between z-10">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#DA291C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-md">
                <span>🇨🇭</span>
                <span>Sélection Officielle · Depuis Lausanne</span>
              </div>
              <h1 className="max-w-[580px] font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl text-white">
                La technologie<br /><span className="text-[#DA291C] italic font-normal">à la suisse.</span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-10">
              <p className="max-w-[280px] text-sm leading-relaxed text-white/85">
                Des objets sélectionnés avec la rigueur et la précision suisse : durabilité, élégance et performances garanties.
              </p>
              <a
                href="#nouveautes"
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 rounded-[3px] bg-[#DA291C] px-6 py-3 text-xs uppercase tracking-[0.15em] font-bold text-white transition hover:bg-[#b91c1c] shadow-lg"
              >
                Découvrir <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex min-h-[480px] flex-col justify-between rounded-[4px] border border-[#DA291C]/25 bg-gradient-to-b from-white to-[#FEF2F2] p-8 sm:p-10 lg:min-h-[600px] shadow-sm">
          <div>
            <div className="mb-8 flex items-center justify-between">
              <span className="flex size-7 items-center justify-center rounded-[3px] bg-[#DA291C] text-sm font-bold text-white shadow-sm">✚</span>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA291C]">Swiss Quality 01</p>
            </div>
            <h2 className="max-w-[300px] font-serif text-4xl leading-[0.98] tracking-[-0.045em] text-[#151515]">
              Moins, mais<br /><span className="text-[#DA291C] italic font-normal">infiniment mieux.</span>
            </h2>
          </div>
          <div>
            <div className="mb-8 h-px bg-[#DA291C]/25" />
            <p className="mb-6 text-sm leading-relaxed text-[#151515]/75">
              Certifié pour le réseau suisse : livraisons express en 24h, garantie locale 2 ans et support technique dédié à Lausanne.
            </p>
            <a href="#categories" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#DA291C] hover:text-[#b91c1c]">
              Explorer la boutique <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="mx-auto max-w-[1440px] px-5 pb-24 lg:px-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#DA291C] font-bold">Tout commence ici</p>
            <h2 className="font-serif text-4xl tracking-[-0.04em]">Choisir par univers</h2>
          </div>
          <button
            onClick={() => { setSelectedCategory(null); document.getElementById('nouveautes')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-xs uppercase tracking-[0.15em] font-semibold text-[#DA291C] hover:opacity-80 sm:flex sm:items-center sm:gap-2"
          >
            Tout voir <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => {
                setSelectedCategory(cat.label)
                document.getElementById('nouveautes')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative aspect-[0.85] overflow-hidden rounded-[3px] bg-[#151515] text-left shadow-sm"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="size-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-4 text-white sm:p-5">
                <p className="text-sm font-bold sm:text-base">{cat.label}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-white/75">{cat.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="nouveautes" className="bg-[#151515] px-5 py-20 text-[#f7f6f2] lg:px-10 border-t-2 border-[#DA291C]">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#DA291C] font-bold flex items-center gap-1.5">
                <span>🇨🇭</span> SÉLECTION SUISSE DU MOMENT
              </p>
              <h2 className="font-serif text-4xl tracking-[-0.04em]">Les essentiels</h2>
            </div>
            <div className="text-xs text-white/60 font-medium">{filtered.length} produit{filtered.length > 1 ? 's' : ''}</div>
          </div>

          {/* Category Filter Pills */}
          <div className="mb-10 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-1.5 text-xs transition font-semibold ${
                selectedCategory === null ? 'bg-[#DA291C] text-white shadow-md' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Tous
            </button>
            {categories.map((c) => (
              <button
                key={c.label}
                onClick={() => setSelectedCategory(selectedCategory === c.label ? null : c.label)}
                className={`rounded-full px-4 py-1.5 text-xs transition font-semibold ${
                  selectedCategory === c.label ? 'bg-[#DA291C] text-white shadow-md' : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {filtered.map((product) => {
              const isLiked = liked.includes(product.id)
              return (
                <article key={product.id} className="group">
                  <div className="relative mb-4 aspect-[0.82] overflow-hidden rounded-[3px] bg-[#222]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="size-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-[2px] bg-[#DA291C] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white shadow">
                      {product.tag}
                    </span>
                    <button
                      aria-label={`Ajouter ${product.name} aux favoris`}
                      onClick={() => setLiked((prev) => (prev.includes(product.id) ? prev.filter((i) => i !== product.id) : [...prev, product.id]))}
                      className={`absolute right-3 top-3 rounded-full p-2 transition hover:scale-110 shadow ${
                        isLiked ? 'bg-[#DA291C] text-white' : 'bg-white/90 text-[#151515] hover:bg-white'
                      }`}
                      title={isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                    >
                      {isLiked ? <Check size={15} /> : <Heart size={15} strokeWidth={1.8} />}
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="absolute bottom-3 left-3 right-3 translate-y-14 rounded-[2px] bg-[#DA291C] py-3 text-[11px] uppercase tracking-[0.14em] text-white font-bold transition duration-300 hover:bg-[#b91c1c] group-hover:translate-y-0 shadow-lg"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-white/50">{product.category}</p>
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                  <p className="mt-1 text-[10px] text-white/45">Réf. {product.reference}</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xs text-white/45 line-through">{product.oldPrice}</span>
                    <span className="text-sm font-bold text-white">{product.price}</span>
                  </div>
                </article>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-white/60">
              <p>Aucun produit ne correspond à votre recherche.</p>
              <button
                onClick={() => { setQuery(''); setSelectedCategory(null) }}
                className="mt-4 rounded bg-[#DA291C] px-5 py-2 text-xs uppercase tracking-wider text-white hover:bg-[#b91c1c] font-bold"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Reconditionné & Services Section */}
      <section id="reconditionne" className="mx-auto grid max-w-[1440px] gap-8 px-5 py-24 lg:grid-cols-2 lg:px-10">
        <div className="relative min-h-[420px] overflow-hidden rounded-[4px] bg-[#0F172A] p-8 sm:p-12 text-white shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1100&q=85"
            alt="Téléphone reconditionné certifié suisse"
            className="absolute inset-0 size-full object-cover mix-blend-overlay opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="relative flex h-full flex-col justify-between z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#DA291C] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white w-fit shadow">
              <span>✚</span>
              <span>Swiss Refurbished</span>
            </div>
            <div>
              <h2 className="max-w-[400px] font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-white">
                Le reconditionné,<br /><span className="text-[#DA291C] italic font-normal">sans compromis.</span>
              </h2>
              <p className="mt-4 max-w-[340px] text-xs text-white/80 leading-relaxed">
                Contrôlé sur plus de 45 points par nos techniciens qualifiés en Suisse. Batterie certifiée & garantie 2 ans.
              </p>
              <button
                onClick={() => { setSelectedCategory(null); document.getElementById('nouveautes')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="mt-6 inline-flex items-center gap-2 rounded-[3px] bg-[#DA291C] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-[#b91c1c] shadow"
              >
                Voir la sélection <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        <div id="service" className="flex flex-col justify-center">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-5 items-center justify-center rounded-sm bg-[#DA291C] text-[10px] font-bold text-white">✚</span>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DA291C]">E-NOTIK, Engagement Qualité Suisse</p>
          </div>
          <h2 className="max-w-[460px] font-serif text-4xl leading-tight tracking-[-0.04em]">
            La précision suisse au service de votre quotidien.
          </h2>
          <div className="mt-10 grid gap-6 border-t border-[#DA291C]/20 pt-6 sm:grid-cols-3">
            <div className="rounded-lg border border-[#DA291C]/15 bg-[#FEF2F2]/60 p-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#DA291C] text-white shadow-sm">
                <Truck size={18} strokeWidth={2} />
              </div>
              <p className="mt-4 text-sm font-bold text-[#151515]">Livraison 24 h</p>
              <p className="mt-2 text-xs leading-relaxed text-[#151515]/65">Expédition rapide depuis Lausanne avec La Poste Suisse.</p>
            </div>
            <div className="rounded-lg border border-[#DA291C]/15 bg-[#FEF2F2]/60 p-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#DA291C] text-white shadow-sm">
                <Sparkles size={18} strokeWidth={2} />
              </div>
              <p className="mt-4 text-sm font-bold text-[#151515]">Garantie 2 ans</p>
              <p className="mt-2 text-xs leading-relaxed text-[#151515]/65">Prise en charge locale et remplacement direct en Suisse.</p>
            </div>
            <div className="rounded-lg border border-[#DA291C]/15 bg-[#FEF2F2]/60 p-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#DA291C] text-white shadow-sm">
                <Check size={18} strokeWidth={2.5} />
              </div>
              <p className="mt-4 text-sm font-bold text-[#151515]">Paiement Suisse</p>
              <p className="mt-2 text-xs leading-relaxed text-[#151515]/65">TWINT, PostFinance Card, Visa et Mastercard sans frais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#FAF8F5] to-[#F3EFEA] px-5 pb-8 pt-14 lg:px-10 border-t-4 border-[#DA291C]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-12 border-b border-[#151515]/15 pb-14 md:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-[3px] bg-[#DA291C] text-white text-base font-bold shadow-sm">✚</span>
                <span className="font-serif text-5xl tracking-[-0.07em]">E-NOTIK</span>
              </div>
              <p className="mt-4 max-w-[260px] text-xs leading-relaxed text-[#151515]/65">
                Boutique d&apos;excellence suisse. Produits certifiés, livrés en 24h depuis notre centre logistique à Lausanne.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-xs sm:grid-cols-3">
              <div>
                <p className="mb-4 uppercase tracking-[0.14em] font-bold text-[#DA291C]">Boutique</p>
                <div className="flex flex-col gap-3 font-medium">
                  <a href="#nouveautes" onClick={() => setSelectedCategory(null)} className="hover:text-[#DA291C] transition">Nouveautés</a>
                  <a href="#categories" className="hover:text-[#DA291C] transition">Catégories</a>
                  <a href="#reconditionne" className="hover:text-[#DA291C] transition">Reconditionné</a>
                </div>
              </div>

              <div>
                <p className="mb-4 uppercase tracking-[0.14em] font-bold text-[#DA291C]">Aide & Contact</p>
                <div className="flex flex-col gap-3 font-medium">
                  <a href="#service" className="hover:text-[#DA291C] transition">Livraison 24h Suisse</a>
                  <a href="#service" className="hover:text-[#DA291C] transition">Garantie 2 ans</a>
                  <button onClick={() => setAccountOpen(true)} className="text-left hover:text-[#DA291C] transition">Support Client</button>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="mb-4 uppercase tracking-[0.14em] font-bold text-[#DA291C]">Newsletter Suisse</p>
                {newsletterSubscribed ? (
                  <p className="text-xs text-[#DA291C] font-semibold">✓ Merci pour votre inscription !</p>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex border-b-2 border-[#DA291C] pb-2">
                    <input
                      required
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Votre adresse e-mail"
                      className="w-full bg-transparent text-xs outline-none placeholder:text-[#151515]/50"
                    />
                    <button type="submit" aria-label="S'inscrire à la newsletter" className="text-[#DA291C] hover:opacity-70">
                      <ArrowRight size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-5 text-[10px] uppercase tracking-[0.12em] text-[#151515]/60 sm:flex-row">
            <span className="font-semibold">🇨🇭 © 2026 E-NOTIK Suisse · Tous droits réservés</span>
            <span>TVA Suisse incluse · Lausanne</span>
            <span>TWINT · PostFinance · Visa · Mastercard</span>
            <span><a href="/admin" className="underline hover:text-[#DA291C] font-semibold">Espace Admin & Pixels</a></span>
          </div>
        </div>
      </footer>

      {/* Cart Drawer / Slide-Over */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div onClick={() => setCartOpen(false)} className="absolute inset-0 bg-black/50 transition-opacity" />

          {/* Drawer Panel */}
          <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#f7f6f2] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#151515]/15 pb-4">
              <h2 className="font-serif text-2xl">Mon Panier ({totalCartCount})</h2>
              <button onClick={() => setCartOpen(false)} className="p-1 hover:opacity-60" aria-label="Fermer le panier">
                <X size={20} />
              </button>
            </div>

            {/* Cart Body */}
            <div className="flex-1 overflow-y-auto py-4">
              {checkoutSuccess ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-[#DA291C] text-white text-2xl shadow-lg">✓</div>
                  <h3 className="font-serif text-2xl font-bold">Commande validée !</h3>
                  <p className="mt-2 text-xs text-[#151515]/70">Merci pour votre confiance sur E-NOTIK Suisse.</p>
                  <p className="mt-1 text-xs text-[#151515]/70">Expédition sous 24 h avec La Poste Suisse.</p>
                  <button onClick={() => setCartOpen(false)} className="mt-6 rounded bg-[#DA291C] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b91c1c] shadow">
                    Continuer mes achats
                  </button>
                </div>
              ) : cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-[#151515]/60">
                  <ShoppingBag size={42} strokeWidth={1.2} className="mb-3 opacity-40" />
                  <p className="text-sm">Votre panier est actuellement vide.</p>
                  <button
                    onClick={() => { setCartOpen(false); document.getElementById('nouveautes')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="mt-4 rounded bg-[#DA291C] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b91c1c] shadow"
                  >
                    Découvrir les produits
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(({ product, quantity }) => (
                    <div key={product.id} className="flex gap-4 border-b border-[#151515]/10 pb-4">
                      <img src={product.image} alt={product.name} className="size-20 rounded bg-[#e4e2dc] object-cover" />
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-sm font-semibold">{product.name}</h4>
                            <p className="text-[10px] text-[#151515]/50">{product.reference}</p>
                          </div>
                          <button onClick={() => removeFromCart(product.id)} className="text-[#151515]/40 hover:text-[#DA291C]" aria-label="Supprimer">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-[#151515]/20 rounded bg-white">
                            <button onClick={() => updateQuantity(product.id, -1)} className="px-2 py-1 text-xs hover:bg-[#151515]/5">
                              <Minus size={12} />
                            </button>
                            <span className="px-2 text-xs font-semibold">{quantity}</span>
                            <button onClick={() => updateQuantity(product.id, 1)} className="px-2 py-1 text-xs hover:bg-[#151515]/5">
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-[#DA291C]">CHF {(product.priceNum * quantity).toLocaleString('fr-CH')}.–</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cartItems.length > 0 && !checkoutSuccess && (
              <div className="border-t border-[#151515]/15 pt-4">
                <div className="mb-2 flex justify-between text-xs text-[#151515]/70">
                  <span className="flex items-center gap-1">🇨🇭 Livraison en Suisse</span>
                  <span className="font-semibold text-emerald-800">Offerte (dès CHF 80)</span>
                </div>
                <div className="mb-4 flex justify-between text-base font-bold">
                  <span>Total (TVA Suisse incluse)</span>
                  <span className="text-[#DA291C]">CHF {cartSubtotal.toLocaleString('fr-CH')}.–</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full rounded bg-[#DA291C] py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#b91c1c] shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Commander avec TWINT / Carte</span>
                </button>
                <p className="mt-2 text-center text-[10px] text-[#151515]/55">Paiement 100% sécurisé · Expédié depuis Lausanne</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Account Modal */}
      {accountOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setAccountOpen(false)} className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 w-full max-w-sm rounded-lg bg-white p-6 shadow-2xl border-t-4 border-[#DA291C]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-sm bg-[#DA291C] text-[10px] font-bold text-white">✚</span>
                <h3 className="font-serif text-2xl font-bold">Espace Client</h3>
              </div>
              <button onClick={() => setAccountOpen(false)} className="hover:opacity-60" aria-label="Fermer">
                <X size={18} />
              </button>
            </div>

            {userEmail ? (
              <div className="text-center">
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#DA291C] text-white shadow">
                  <UserRound size={22} />
                </div>
                <p className="text-sm font-bold">Connecté avec succès</p>
                <p className="mt-1 text-xs text-[#151515]/60">{userEmail}</p>
                <div className="mt-6 space-y-2 text-left text-xs">
                  <div className="rounded border border-[#151515]/10 p-3 bg-neutral-50">
                    <p className="font-semibold">Historique de commandes</p>
                    <p className="text-[#151515]/50 mt-1">Aucune commande en cours.</p>
                  </div>
                  <div className="rounded border border-[#151515]/10 p-3 bg-neutral-50">
                    <p className="font-semibold">Adresse de livraison</p>
                    <p className="text-[#151515]/50 mt-1">Suisse (CH)</p>
                  </div>
                </div>
                <button
                  onClick={() => setUserEmail(null)}
                  className="mt-6 w-full rounded border border-[#DA291C] text-[#DA291C] py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#DA291C] hover:text-white transition"
                >
                  Se déconnecter
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <p className="text-xs text-[#151515]/65">Connectez-vous pour suivre vos commandes et garanties suisses.</p>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#151515]/70">Adresse e-mail</label>
                  <input
                    required
                    type="email"
                    value={loginInput}
                    onChange={(e) => setLoginInput(e.target.value)}
                    placeholder="nom@exemple.ch"
                    className="mt-1 w-full rounded border border-[#151515]/20 bg-neutral-50 p-2.5 text-xs outline-none focus:border-[#DA291C] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#151515]/70">Mot de passe</label>
                  <input
                    required
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 w-full rounded border border-[#151515]/20 bg-neutral-50 p-2.5 text-xs outline-none focus:border-[#DA291C] focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded bg-[#DA291C] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b91c1c] shadow transition"
                >
                  Se connecter
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

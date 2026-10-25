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
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded bg-[#151515] px-4 py-3 text-xs text-[#f7f6f2] shadow-xl">
          <span className="flex size-4 items-center justify-center rounded-full bg-[#b9d7c2] text-[10px] text-[#151515]">✓</span>
          <span>{toastMessage}</span>
          <button onClick={() => { setCartOpen(true); setToastMessage(null) }} className="ml-2 font-semibold underline hover:text-[#b9d7c2]">
            Voir le panier
          </button>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-[#151515] px-5 py-2 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-[#f7f6f2]">
        100% suisse · Livraison offerte dès CHF 80 · Expédition depuis la Suisse en 24 h
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#151515]/15 bg-[#f7f6f2] px-5 lg:px-10">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6">
          <button aria-label="Ouvrir le menu" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <a href="#" className="font-serif text-[30px] font-semibold tracking-[-0.07em]">
            E-NOTIK
          </a>

          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[72px] z-20 flex-col gap-5 border-b border-[#151515]/10 bg-[#f7f6f2] p-6 text-sm lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0`}>
            <a href="#nouveautes" onClick={() => { setSelectedCategory(null); setMenuOpen(false) }} className="hover:opacity-60">Nouveautés</a>
            <a href="#categories" onClick={() => setMenuOpen(false)} className="hover:opacity-60">Catégories</a>
            <a href="#reconditionne" onClick={() => setMenuOpen(false)} className="hover:opacity-60">Reconditionné</a>
            <a href="#service" onClick={() => setMenuOpen(false)} className="hover:opacity-60">Notre service</a>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            {/* Langue */}
            <button
              className="hidden items-center gap-1 font-medium sm:flex hover:opacity-70"
              onClick={() => setLanguage(language === 'FR' ? 'DE' : language === 'DE' ? 'IT' : 'FR')}
              title="Changer de langue"
            >
              {language}<ChevronDown size={13} />
            </button>

            {/* Recherche */}
            <button
              aria-label="Rechercher"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 hover:opacity-70"
              title="Rechercher un produit"
            >
              <Search size={19} strokeWidth={1.5} />
            </button>

            {/* Compte */}
            <button
              aria-label="Compte"
              onClick={() => setAccountOpen(true)}
              className="relative p-1 hover:opacity-70"
              title={userEmail ? `Connecté : ${userEmail}` : 'Espace Client'}
            >
              <UserRound size={19} strokeWidth={1.5} />
              {userEmail && <span className="absolute -right-1 -top-1 size-2 rounded-full bg-[#151515]" />}
            </button>

            {/* Panier */}
            <button
              aria-label="Panier"
              className="relative p-1 hover:opacity-70"
              onClick={() => setCartOpen(true)}
              title="Ouvrir mon panier"
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              {totalCartCount > 0 && (
                <span className="absolute -right-2 -top-1 flex size-4 items-center justify-center rounded-full bg-[#b9d7c2] text-[9px] font-bold text-[#151515]">
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
              <Search size={18} className="text-[#151515]/50" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un smartphone, écouteurs, ordinateur..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#151515]/45"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-xs text-[#151515]/50 hover:text-[#151515]">
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
        <div className="relative min-h-[480px] overflow-hidden rounded-[2px] bg-[#d9e1de] p-8 sm:p-14 lg:min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1600&q=90"
            alt="Smartphone posé sur une table claire"
            className="absolute inset-0 size-full object-cover mix-blend-multiply opacity-90"
          />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em]">Sélection suisse · Depuis Lausanne</p>
              <h1 className="max-w-[570px] font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
                La technologie<br /><em className="font-normal">à la suisse.</em>
              </h1>
            </div>
            <div className="flex items-end justify-between">
              <p className="max-w-[240px] text-sm leading-relaxed">
                Des objets choisis pour leur fonction, leur longévité et la façon dont ils trouvent leur place.
              </p>
              <a href="#nouveautes" onClick={() => setSelectedCategory(null)} className="flex items-center gap-2 border-b border-[#151515] pb-1 text-xs uppercase tracking-[0.15em] hover:opacity-70">
                Découvrir <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex min-h-[480px] flex-col justify-between bg-[#e7ded3] p-8 sm:p-10 lg:min-h-[600px]">
          <div>
            <p className="mb-20 text-[10px] uppercase tracking-[0.25em]">E-NOTIK / sélection 01</p>
            <h2 className="max-w-[300px] font-serif text-4xl leading-[0.98] tracking-[-0.045em]">
              Moins, mais<br /><em className="font-normal">beaucoup mieux.</em>
            </h2>
          </div>
          <div>
            <div className="mb-8 h-px bg-[#151515]/20" />
            <p className="mb-5 text-sm leading-relaxed">
              Des produits choisis en Suisse, livrés partout en Suisse et faits pour durer.
            </p>
            <a href="#categories" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] hover:opacity-70">
              Explorer la boutique <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="mx-auto max-w-[1440px] px-5 pb-24 lg:px-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#151515]/55">Tout commence ici</p>
            <h2 className="font-serif text-4xl tracking-[-0.04em]">Choisir par univers</h2>
          </div>
          <button
            onClick={() => { setSelectedCategory(null); document.getElementById('nouveautes')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-xs uppercase tracking-[0.15em] hover:opacity-70 sm:flex sm:items-center sm:gap-2"
          >
            Tout voir <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => {
                setSelectedCategory(cat.label)
                document.getElementById('nouveautes')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative aspect-[0.85] overflow-hidden bg-[#e4e2dc] text-left"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="size-full object-cover grayscale-[30%] transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-4 text-white sm:p-5">
                <p className="text-sm font-medium sm:text-base">{cat.label}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-white/75">{cat.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="nouveautes" className="bg-[#151515] px-5 py-20 text-[#f7f6f2] lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/55">La sélection du moment</p>
              <h2 className="font-serif text-4xl tracking-[-0.04em]">Les essentiels</h2>
            </div>
            <div className="text-xs text-white/55">{filtered.length} produit{filtered.length > 1 ? 's' : ''}</div>
          </div>

          {/* Category Filter Pills */}
          <div className="mb-10 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-1.5 text-xs transition ${
                selectedCategory === null ? 'bg-[#f7f6f2] text-[#151515] font-medium' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Tous
            </button>
            {categories.map((c) => (
              <button
                key={c.label}
                onClick={() => setSelectedCategory(selectedCategory === c.label ? null : c.label)}
                className={`rounded-full px-4 py-1.5 text-xs transition ${
                  selectedCategory === c.label ? 'bg-[#b9d7c2] text-[#151515] font-medium' : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4">
            {filtered.map((product) => {
              const isLiked = liked.includes(product.id)
              return (
                <article key={product.id} className="group">
                  <div className="relative mb-4 aspect-[0.82] overflow-hidden bg-[#252525]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="size-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 bg-[#f7f6f2] px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-[#151515]">
                      {product.tag}
                    </span>
                    <button
                      aria-label={`Ajouter ${product.name} aux favoris`}
                      onClick={() => setLiked((prev) => (prev.includes(product.id) ? prev.filter((i) => i !== product.id) : [...prev, product.id]))}
                      className="absolute right-3 top-3 rounded-full bg-[#f7f6f2] p-2 text-[#151515] transition hover:scale-110"
                      title={isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                    >
                      {isLiked ? <Check size={15} /> : <Heart size={15} strokeWidth={1.5} />}
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="absolute bottom-3 left-3 right-3 translate-y-14 bg-[#b9d7c2] py-3 text-[10px] uppercase tracking-[0.14em] text-[#151515] font-semibold transition duration-300 hover:bg-[#a6cbb1] group-hover:translate-y-0"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-white/50">{product.category}</p>
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="mt-1 text-[10px] text-white/45">Réf. {product.reference}</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xs text-white/45 line-through">{product.oldPrice}</span>
                    <span className="text-sm font-semibold">{product.price}</span>
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
                className="mt-4 rounded bg-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white hover:bg-white/20"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Reconditionné & Services Section */}
      <section id="reconditionne" className="mx-auto grid max-w-[1440px] gap-8 px-5 py-24 lg:grid-cols-2 lg:px-10">
        <div className="relative min-h-[400px] overflow-hidden bg-[#b9d7c2] p-8 sm:p-12">
          <img
            src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1100&q=85"
            alt="Téléphone reconditionné"
            className="absolute inset-0 size-full object-cover mix-blend-multiply opacity-70"
          />
          <div className="relative flex h-full flex-col justify-between">
            <p className="text-[10px] uppercase tracking-[0.25em]">Donner une seconde vie</p>
            <div>
              <h2 className="max-w-[360px] font-serif text-5xl leading-[0.95] tracking-[-0.05em]">
                Le reconditionné,<br /><em className="font-normal">sans compromis.</em>
              </h2>
              <button
                onClick={() => { setSelectedCategory(null); document.getElementById('nouveautes')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="mt-8 inline-flex items-center gap-2 border-b border-[#151515] pb-1 text-xs uppercase tracking-[0.15em] hover:opacity-70"
              >
                Voir la sélection <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        <div id="service" className="flex flex-col justify-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#151515]/55">E-NOTIK, en confiance</p>
          <h2 className="max-w-[450px] font-serif text-4xl leading-tight tracking-[-0.04em]">
            Un service pensé pour votre quotidien.
          </h2>
          <div className="mt-10 grid gap-6 border-t border-[#151515]/15 pt-6 sm:grid-cols-3">
            <div>
              <Truck size={20} strokeWidth={1.3} />
              <p className="mt-4 text-sm font-medium">Livraison en 24 h</p>
              <p className="mt-2 text-xs leading-relaxed text-[#151515]/55">Expédition depuis la Suisse, suivi inclus.</p>
            </div>
            <div>
              <Sparkles size={20} strokeWidth={1.3} />
              <p className="mt-4 text-sm font-medium">Garantie 2 ans</p>
              <p className="mt-2 text-xs leading-relaxed text-[#151515]/55">Une tranquillité durable, locale.</p>
            </div>
            <div>
              <Check size={20} strokeWidth={1.3} />
              <p className="mt-4 text-sm font-medium">Paiement sécurisé</p>
              <p className="mt-2 text-xs leading-relaxed text-[#151515]/55">TWINT, cartes et PostFinance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e7ded3] px-5 pb-8 pt-14 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-12 border-b border-[#151515]/15 pb-14 md:flex-row">
            <div>
              <div className="font-serif text-5xl tracking-[-0.07em]">E-NOTIK</div>
              <p className="mt-4 max-w-[220px] text-xs leading-relaxed text-[#151515]/55">
                Une boutique suisse, pensée en Suisse, livrée depuis Lausanne.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-xs sm:grid-cols-3">
              <div>
                <p className="mb-4 uppercase tracking-[0.14em] text-[#151515]/45">Boutique</p>
                <div className="flex flex-col gap-3">
                  <a href="#nouveautes" onClick={() => setSelectedCategory(null)} className="hover:opacity-70">Nouveautés</a>
                  <a href="#categories" className="hover:opacity-70">Catégories</a>
                  <a href="#reconditionne" className="hover:opacity-70">Reconditionné</a>
                </div>
              </div>

              <div>
                <p className="mb-4 uppercase tracking-[0.14em] text-[#151515]/45">Aide & Contact</p>
                <div className="flex flex-col gap-3">
                  <a href="#service" className="hover:opacity-70">Livraison 24h</a>
                  <a href="#service" className="hover:opacity-70">Retours & Garantie</a>
                  <button onClick={() => setAccountOpen(true)} className="text-left hover:opacity-70">Support Client</button>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="mb-4 uppercase tracking-[0.14em] text-[#151515]/45">Newsletter</p>
                {newsletterSubscribed ? (
                  <p className="text-xs text-emerald-800 font-medium">✓ Merci pour votre inscription !</p>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex border-b border-[#151515] pb-2">
                    <input
                      required
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Votre adresse e-mail"
                      className="w-full bg-transparent text-xs outline-none placeholder:text-[#151515]/50"
                    />
                    <button type="submit" aria-label="S'inscrire à la newsletter" className="hover:opacity-70">
                      <ArrowRight size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-5 text-[10px] uppercase tracking-[0.12em] text-[#151515]/50 sm:flex-row">
            <span>© 2026 E-NOTIK Suisse</span>
            <span>TVA incluse · Lausanne · Suisse</span>
            <span>TWINT · PostFinance · Visa · Mastercard</span>
            <span><a href="/admin" className="underline hover:text-[#151515] font-semibold">Espace Admin & Pixels</a></span>
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
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-[#b9d7c2] text-2xl">✓</div>
                  <h3 className="font-serif text-2xl font-medium">Commande validée !</h3>
                  <p className="mt-2 text-xs text-[#151515]/60">Merci pour votre confiance sur E-NOTIK.</p>
                  <p className="mt-1 text-xs text-[#151515]/60">Expédition sous 24 h avec numéro de suivi.</p>
                  <button onClick={() => setCartOpen(false)} className="mt-6 rounded bg-[#151515] px-6 py-2.5 text-xs uppercase tracking-wider text-white">
                    Continuer mes achats
                  </button>
                </div>
              ) : cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-[#151515]/60">
                  <ShoppingBag size={42} strokeWidth={1.2} className="mb-3 opacity-40" />
                  <p className="text-sm">Votre panier est actuellement vide.</p>
                  <button
                    onClick={() => { setCartOpen(false); document.getElementById('nouveautes')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="mt-4 rounded bg-[#151515] px-5 py-2 text-xs uppercase tracking-wider text-white"
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
                            <h4 className="text-sm font-medium">{product.name}</h4>
                            <p className="text-[10px] text-[#151515]/50">{product.reference}</p>
                          </div>
                          <button onClick={() => removeFromCart(product.id)} className="text-[#151515]/40 hover:text-red-600" aria-label="Supprimer">
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
                          <span className="text-sm font-semibold">CHF {(product.priceNum * quantity).toLocaleString('fr-CH')}.–</span>
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
                  <span>Livraison en Suisse</span>
                  <span className="font-medium text-emerald-800">Offerte (dès CHF 80)</span>
                </div>
                <div className="mb-4 flex justify-between text-base font-semibold">
                  <span>Total (TVA incluse)</span>
                  <span>CHF {cartSubtotal.toLocaleString('fr-CH')}.–</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full rounded bg-[#151515] py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#f7f6f2] transition hover:bg-black"
                >
                  Commander avec TWINT / Carte
                </button>
                <p className="mt-2 text-center text-[10px] text-[#151515]/50">Paiement sécurisé · Expédié depuis Lausanne</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Account Modal */}
      {accountOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setAccountOpen(false)} className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 w-full max-w-sm rounded-lg bg-[#f7f6f2] p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-2xl">Espace Client</h3>
              <button onClick={() => setAccountOpen(false)} className="hover:opacity-60" aria-label="Fermer">
                <X size={18} />
              </button>
            </div>

            {userEmail ? (
              <div className="text-center">
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#b9d7c2]">
                  <UserRound size={20} />
                </div>
                <p className="text-sm font-medium">Connecté avec succès</p>
                <p className="mt-1 text-xs text-[#151515]/60">{userEmail}</p>
                <div className="mt-6 space-y-2 text-left text-xs">
                  <div className="rounded border border-[#151515]/10 p-3 bg-white">
                    <p className="font-semibold">Historique de commandes</p>
                    <p className="text-[#151515]/50 mt-1">Aucune commande en cours.</p>
                  </div>
                  <div className="rounded border border-[#151515]/10 p-3 bg-white">
                    <p className="font-semibold">Adresse de livraison</p>
                    <p className="text-[#151515]/50 mt-1">Suisse (CH)</p>
                  </div>
                </div>
                <button
                  onClick={() => setUserEmail(null)}
                  className="mt-6 w-full rounded border border-[#151515] py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#151515] hover:text-white"
                >
                  Se déconnecter
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <p className="text-xs text-[#151515]/60">Connectez-vous pour suivre vos commandes et garanties.</p>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#151515]/60">Adresse e-mail</label>
                  <input
                    required
                    type="email"
                    value={loginInput}
                    onChange={(e) => setLoginInput(e.target.value)}
                    placeholder="nom@exemple.ch"
                    className="mt-1 w-full rounded border border-[#151515]/20 bg-white p-2.5 text-xs outline-none focus:border-[#151515]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#151515]/60">Mot de passe</label>
                  <input
                    required
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 w-full rounded border border-[#151515]/20 bg-white p-2.5 text-xs outline-none focus:border-[#151515]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded bg-[#151515] py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-black"
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

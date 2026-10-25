'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowLeft,
  BarChart3,
  Camera,
  Check,
  CheckCircle2,
  Copy,
  DollarSign,
  Edit3,
  Eye,
  Film,
  Globe,
  ImageIcon,
  Layers,
  Package,
  Play,
  Plus,
  RefreshCw,
  Save,
  Search,
  Settings,
  Shield,
  ShoppingBag,
  Sliders,
  Smartphone,
  Sparkles,
  Tag,
  ToggleLeft,
  ToggleRight,
  Trash2,
  TrendingUp,
  Truck,
  Upload,
  UploadCloud,
  Users,
  Video,
  X,
} from 'lucide-react'

interface ProductItem {
  id: number
  name: string
  reference: string
  category: string
  price: number
  oldPrice?: number
  stock: number
  image: string
  gallery?: string[]
  video?: string
  tag: string
  description: string
  specs?: string
  warranty?: string
  condition?: string
  active: boolean
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'pixels' | 'settings' | 'products' | 'orders'>('overview')
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [toastMsg, setToastMsg] = useState<string | null>(null)

  // Pixel settings state
  const [metaPixelId, setMetaPixelId] = useState('849201948201948')
  const [metaPixelEnabled, setMetaPixelEnabled] = useState(true)
  const [metaConversionApi, setMetaConversionApi] = useState(true)
  const [metaApiToken, setMetaApiToken] = useState('EAABwzL1...9Xk')

  const [googleTagId, setGoogleTagId] = useState('G-ENOTIK2026')
  const [googleAdsId, setGoogleAdsId] = useState('AW-119283746')
  const [googleTagEnabled, setGoogleTagEnabled] = useState(true)

  const [tiktokPixelId, setTiktokPixelId] = useState('C982JFKSL019')
  const [tiktokPixelEnabled, setTiktokPixelEnabled] = useState(false)

  const [pinterestTagId, setPinterestTagId] = useState('')
  const [pinterestEnabled, setPinterestEnabled] = useState(false)

  const [gtmContainerId, setGtmContainerId] = useState('GTM-NTK89X')
  const [gtmEnabled, setGtmEnabled] = useState(true)

  const [customHeaderScript, setCustomHeaderScript] = useState('<!-- Custom scripts: Google Tag Manager, Hotjar etc. -->')

  // General settings state
  const [storeName, setStoreName] = useState('E-NOTIK')
  const [storeCurrency, setStoreCurrency] = useState('CHF')
  const [freeShippingThreshold, setFreeShippingThreshold] = useState('80')
  const [notificationEmail, setNotificationEmail] = useState('contact@e-notik.ch')
  const [taxRate, setTaxRate] = useState('8.1') // TVA Suisse 8.1%
  const [twintEnabled, setTwintEnabled] = useState(true)
  const [cardsEnabled, setCardsEnabled] = useState(true)
  const [postFinanceEnabled, setPostFinanceEnabled] = useState(true)
  const [invoiceEnabled, setInvoiceEnabled] = useState(true)

  // Products Management
  const [productsList, setProductsList] = useState<ProductItem[]>([
    {
      id: 1,
      name: 'iPhone 18 Pro Max',
      reference: 'ENOTIK-IPH18PM-001',
      category: 'Smartphones',
      price: 1499,
      oldPrice: 1649,
      stock: 18,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=85',
      ],
      tag: 'Nouveauté 2026',
      description: 'Châssis en titane aérospatial poli miroir, nouvelle puce A20 Pro gravée en 2 nm, téléobjectif tétraprisme 10x et écran Super Retina XDR 6.9" 120Hz.',
      specs: 'Écran 6.9" ProMotion 120Hz · Puce A20 Pro 2nm · 48 Mpx Triple Caméra 10x · Titane Naturel, Sidéral, Blanc, Bleu Alpin, Rouge Suisse',
      warranty: 'Garantie suisse 2 ans Apple & E-NOTIK',
      condition: 'Neuf scellé',
      active: true,
    },
    {
      id: 2,
      name: 'iPhone 18 Pro',
      reference: 'ENOTIK-IPH18P-002',
      category: 'Smartphones',
      price: 1349,
      oldPrice: 1479,
      stock: 24,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=85',
      ],
      tag: 'Bestseller Suisse',
      description: 'Puce A20 Pro dans un format 6.3" ProMotion 120Hz. Capteur 48 MP avec stabilisation de pointe et châssis titane.',
      specs: 'Écran 6.3" ProMotion 120Hz · Puce A20 Pro · Titane Noir Sidéral, Naturel, Blanc, Or Désert',
      warranty: 'Garantie suisse 2 ans Apple & E-NOTIK',
      condition: 'Neuf scellé',
      active: true,
    },
    {
      id: 3,
      name: 'iPhone 18',
      reference: 'ENOTIK-IPH18-003',
      category: 'Smartphones',
      price: 999,
      oldPrice: 1099,
      stock: 35,
      image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=900&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=85',
      ],
      tag: 'Nouveau',
      description: 'Design en verre teinté dans la masse et aluminium. Puce A20 ultra-rapide avec bouton Action et double caméra Fusion 48 MP.',
      specs: 'Écran 6.1" OLED Super Retina XDR · Puce A20 · Bleu Brume, Vert Sauge, Rose Poudré, Blanc Stellaire, Noir Minuit',
      warranty: 'Garantie suisse 2 ans Apple & E-NOTIK',
      condition: 'Neuf scellé',
      active: true,
    },
    {
      id: 4,
      name: 'iPhone 18 Plus',
      reference: 'ENOTIK-IPH18PLS-004',
      category: 'Smartphones',
      price: 1099,
      oldPrice: 1229,
      stock: 20,
      image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=900&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85',
      ],
      tag: 'Autonomie 32h',
      description: 'Écran géant 6.7" et autonomie record de 32 heures avec Apple Intelligence.',
      specs: 'Écran 6.7" OLED · Puce A20 · Vert Sauge, Bleu Brume, Noir Minuit, Blanc Stellaire',
      warranty: 'Garantie suisse 2 ans Apple & E-NOTIK',
      condition: 'Neuf scellé',
      active: true,
    },
    {
      id: 5,
      name: 'Sony WH-1000XM6',
      reference: 'ENOTIK-SNYXM6-005',
      category: 'Audio & TV',
      price: 399,
      oldPrice: 449,
      stock: 28,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85',
      tag: 'Bestseller',
      description: 'Réduction de bruit active de référence, audio haute résolution LDAC, autonomie 35h.',
      specs: 'Bluetooth 5.4 · Multipoint · Microphones IA beamforming',
      warranty: 'Garantie suisse 2 ans Sony',
      condition: 'Neuf scellé',
      active: true,
    },
    {
      id: 6,
      name: 'MacBook Air M4',
      reference: 'ENOTIK-MBA-M4-006',
      category: 'Informatique',
      price: 1099,
      oldPrice: 1199,
      stock: 9,
      image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85',
      tag: 'Nouveau',
      description: 'Ultra-fin, silencieux sans ventilateur, autonomie record jusqu’à 20 heures.',
      specs: '16 Go RAM unifiée · SSD 512 Go · Clavier suisse QWERTZ',
      warranty: 'Garantie suisse 2 ans Apple',
      condition: 'Neuf scellé',
      active: true,
    },
    {
      id: 7,
      name: 'Dyson Airwrap',
      reference: 'ENOTIK-DYS-AW-007',
      category: 'Électroménager',
      price: 449,
      oldPrice: 529,
      stock: 12,
      image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85',
      tag: '−15%',
      description: 'Coiffage et bouclage sans chaleur extrême grâce à l’effet Coanda.',
      specs: 'Moteur numérique Dyson V9 · 6 embouts inclus · Boîte de rangement bleu nuit',
      warranty: 'Garantie suisse 2 ans Dyson',
      condition: 'Neuf scellé',
      active: true,
    },
  ])

  const [productSearch, setProductSearch] = useState('')

  // Modal Add / Edit Product State
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [editingProductId, setEditingProductId] = useState<number | null>(null)

  // Form Fields
  const [formName, setFormName] = useState('')
  const [formReference, setFormReference] = useState('')
  const [formCategory, setFormCategory] = useState('Smartphones')
  const [formPrice, setFormPrice] = useState('1199')
  const [formOldPrice, setFormOldPrice] = useState('1349')
  const [formStock, setFormStock] = useState('15')
  const [formImage, setFormImage] = useState('')
  const [formGallery, setFormGallery] = useState<string[]>([])
  const [formVideo, setFormVideo] = useState<string | null>(null)
  const [activeMediaView, setActiveMediaView] = useState<'photo' | 'video'>('photo')
  const [mediaUploadType, setMediaUploadType] = useState<'device' | 'url' | 'presets'>('device')

  const [formTag, setFormTag] = useState('Nouveau')
  const [formDescription, setFormDescription] = useState('')
  const [formSpecs, setFormSpecs] = useState('')
  const [formWarranty, setFormWarranty] = useState('Garantie suisse 2 ans')
  const [formCondition, setFormCondition] = useState('Neuf scellé')
  const [formActive, setFormActive] = useState(true)

  // Preset sample images for quick fallback selection
  const imagePresets = [
    { label: 'Smartphone', url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85' },
    { label: 'Casque Audio', url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85' },
    { label: 'Ordinateur', url: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85' },
    { label: 'Électroménager', url: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85' },
    { label: 'Montre connectée', url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=85' },
    { label: 'Tablette / iPad', url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85' },
  ]

  // Mock Orders
  const ordersList = [
    { id: 'CMD-8491', customer: 'Marc Dupond', city: 'Lausanne', canton: 'VD', total: 'CHF 1’249.–', items: 1, status: 'Livré', date: 'Aujourd’hui, 14:22' },
    { id: 'CMD-8490', customer: 'Sophie Meier', city: 'Zürich', canton: 'ZH', total: 'CHF 399.–', items: 1, status: 'En préparation', date: 'Aujourd’hui, 11:05' },
    { id: 'CMD-8489', customer: 'Luca Rossi', city: 'Lugano', canton: 'TI', total: 'CHF 1’548.–', items: 2, status: 'Expédié', date: 'Hier, 18:40' },
    { id: 'CMD-8488', customer: 'Claire Berger', city: 'Genève', canton: 'GE', total: 'CHF 449.–', items: 1, status: 'Livré', date: 'Hier, 09:15' },
  ]

  function notify(msg: string) {
    setToastMsg(msg)
    setTimeout(() => setToastMsg(null), 3000)
  }

  function handleSaveGlobal() {
    notify('Paramètres et Pixels sauvegardés avec succès !')
  }

  // File Upload Handlers (Photos & Videos from Computer & Phone)
  function handlePhotoFiles(files: FileList | null) {
    if (!files || files.length === 0) return
    const fileArray = Array.from(files)
    fileArray.forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const res = e.target?.result as string
          if (res) {
            setFormGallery((prev) => [...prev, res])
            setFormImage((current) => current || res)
          }
        }
        reader.readAsDataURL(file)
      } else if (file.type.startsWith('video/')) {
        handleVideoFile(file)
      }
    })
    setActiveMediaView('photo')
    notify(`${fileArray.length} fichier(s) importé(s) depuis votre appareil !`)
  }

  function handleVideoFile(file: File | null) {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => {
      const res = e.target?.result as string
      if (res) {
        setFormVideo(res)
        setActiveMediaView('video')
        notify('Vidéo importée avec succès !')
      }
    }
    reader.readAsDataURL(file)
  }

  function removeGalleryImage(idx: number) {
    const updated = formGallery.filter((_, i) => i !== idx)
    setFormGallery(updated)
    if (formImage === formGallery[idx]) {
      setFormImage(updated[0] || '')
    }
  }

  function removeVideo() {
    setFormVideo(null)
    setActiveMediaView('photo')
    notify('Vidéo retirée.')
  }

  function openAddModal() {
    setEditingProductId(null)
    setFormName('')
    setFormReference(`ENOTIK-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${String(productsList.length + 1).padStart(3, '0')}`)
    setFormCategory('Smartphones')
    setFormPrice('999')
    setFormOldPrice('1149')
    setFormStock('10')
    setFormImage('')
    setFormGallery([])
    setFormVideo(null)
    setActiveMediaView('photo')
    setMediaUploadType('device')
    setFormTag('Nouveau')
    setFormDescription('')
    setFormSpecs('')
    setFormWarranty('Garantie suisse 2 ans')
    setFormCondition('Neuf scellé')
    setFormActive(true)
    setIsProductModalOpen(true)
  }

  function openEditModal(prod: ProductItem) {
    setEditingProductId(prod.id)
    setFormName(prod.name)
    setFormReference(prod.reference)
    setFormCategory(prod.category)
    setFormPrice(String(prod.price))
    setFormOldPrice(prod.oldPrice ? String(prod.oldPrice) : '')
    setFormStock(String(prod.stock))
    setFormImage(prod.image)
    setFormGallery(prod.gallery && prod.gallery.length > 0 ? prod.gallery : [prod.image])
    setFormVideo(prod.video || null)
    setActiveMediaView(prod.video ? 'video' : 'photo')
    setMediaUploadType(prod.image.startsWith('data:') ? 'device' : 'url')
    setFormTag(prod.tag || 'Nouveau')
    setFormDescription(prod.description || '')
    setFormSpecs(prod.specs || '')
    setFormWarranty(prod.warranty || 'Garantie suisse 2 ans')
    setFormCondition(prod.condition || 'Neuf scellé')
    setFormActive(prod.active)
    setIsProductModalOpen(true)
  }

  function handleSaveProductSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formName.trim() || !formPrice.trim()) {
      alert('Veuillez renseigner au moins le nom du produit et son prix.')
      return
    }

    const priceNum = parseFloat(formPrice) || 0
    const oldPriceNum = formOldPrice ? parseFloat(formOldPrice) : undefined
    const stockNum = parseInt(formStock, 10) || 0
    const mainImg = formImage || (formGallery.length > 0 ? formGallery[0] : imagePresets[0].url)

    if (editingProductId) {
      setProductsList((prev) =>
        prev.map((item) =>
          item.id === editingProductId
            ? {
                ...item,
                name: formName.trim(),
                reference: formReference.trim(),
                category: formCategory,
                price: priceNum,
                oldPrice: oldPriceNum,
                stock: stockNum,
                image: mainImg,
                gallery: formGallery.length > 0 ? formGallery : [mainImg],
                video: formVideo || undefined,
                tag: formTag.trim(),
                description: formDescription.trim(),
                specs: formSpecs.trim(),
                warranty: formWarranty.trim(),
                condition: formCondition.trim(),
                active: formActive,
              }
            : item
        )
      )
      notify(`Produit « ${formName} » mis à jour !`)
    } else {
      const newId = Math.max(...productsList.map((p) => p.id), 0) + 1
      const newProduct: ProductItem = {
        id: newId,
        name: formName.trim(),
        reference: formReference.trim() || `ENOTIK-${newId}`,
        category: formCategory,
        price: priceNum,
        oldPrice: oldPriceNum,
        stock: stockNum,
        image: mainImg,
        gallery: formGallery.length > 0 ? formGallery : [mainImg],
        video: formVideo || undefined,
        tag: formTag.trim() || 'Nouveau',
        description: formDescription.trim(),
        specs: formSpecs.trim(),
        warranty: formWarranty.trim(),
        condition: formCondition.trim(),
        active: formActive,
      }
      setProductsList([newProduct, ...productsList])
      notify(`Nouveau produit « ${formName} » ajouté avec succès sur E-NOTIK !`)
    }

    setIsProductModalOpen(false)
  }

  function handleDeleteProduct(id: number) {
    const item = productsList.find((p) => p.id === id)
    if (confirm(`Êtes-vous sûr de vouloir supprimer définitivement le produit « ${item?.name} » ?`)) {
      setProductsList((prev) => prev.filter((p) => p.id !== id))
      notify(`Produit « ${item?.name} » supprimé.`)
    }
  }

  function toggleProduct(id: number) {
    setProductsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
    )
  }

  const filteredAdminProducts = productsList.filter(
    (p) =>
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.reference.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(productSearch.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#f3f2ee] text-[#151515] font-sans antialiased">
      {/* Toast de notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded bg-[#151515] px-5 py-3.5 text-xs text-[#f7f6f2] shadow-2xl">
          <CheckCircle2 size={18} className="text-[#b9d7c2]" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Barre supérieure Admin */}
      <header className="sticky top-0 z-30 border-b border-[#151515]/10 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded border border-[#151515]/20 bg-white px-3 py-1.5 text-xs font-medium text-[#151515] transition hover:bg-[#151515] hover:text-white"
            >
              <ArrowLeft size={14} /> Retour à la boutique
            </Link>
            <div className="h-4 w-px bg-[#151515]/20" />
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold tracking-tight">E-NOTIK</span>
              <span className="rounded bg-[#151515] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#b9d7c2]">
                Admin Studio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openAddModal}
              className="inline-flex items-center gap-1.5 rounded bg-[#b9d7c2] px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#151515] shadow-sm transition hover:bg-[#a6cbb1]"
            >
              <Plus size={15} /> Ajouter un produit
            </button>
            <button
              onClick={handleSaveGlobal}
              className="inline-flex items-center gap-2 rounded bg-[#151515] px-4 py-2 text-xs font-medium uppercase tracking-wider text-white shadow-sm transition hover:bg-black"
            >
              <Save size={14} />
              Enregistrer
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Onglets */}
      <div className="border-b border-[#151515]/10 bg-white px-6">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto py-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs font-medium transition ${
              activeTab === 'overview'
                ? 'border-[#151515] text-[#151515]'
                : 'border-transparent text-[#151515]/60 hover:text-[#151515]'
            }`}
          >
            <BarChart3 size={15} /> Vue d’ensemble
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs font-medium transition ${
              activeTab === 'products'
                ? 'border-[#151515] text-[#151515]'
                : 'border-transparent text-[#151515]/60 hover:text-[#151515]'
            }`}
          >
            <Package size={15} /> Produits & Catalogue ({productsList.length})
          </button>
          <button
            onClick={() => setActiveTab('pixels')}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs font-medium transition ${
              activeTab === 'pixels'
                ? 'border-[#151515] text-[#151515]'
                : 'border-transparent text-[#151515]/60 hover:text-[#151515]'
            }`}
          >
            <Sparkles size={15} /> Pixels & Publicité
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs font-medium transition ${
              activeTab === 'orders'
                ? 'border-[#151515] text-[#151515]'
                : 'border-transparent text-[#151515]/60 hover:text-[#151515]'
            }`}
          >
            <ShoppingBag size={15} /> Commandes ({ordersList.length})
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs font-medium transition ${
              activeTab === 'settings'
                ? 'border-[#151515] text-[#151515]'
                : 'border-transparent text-[#151515]/60 hover:text-[#151515]'
            }`}
          >
            <Settings size={15} /> Paramètres Boutique
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* ================= ONGLET : VUE D'ENSEMBLE ================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#151515]/55">Chiffre d’affaires</span>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#b9d7c2]/30 text-[#151515]">
                    <DollarSign size={18} />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold">CHF 38’450.–</span>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-700">
                  <TrendingUp size={14} /> +18.4% ce mois
                </div>
              </div>

              <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#151515]/55">Catalogue Produits</span>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#e7ded3] text-[#151515]">
                    <Package size={18} />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold">{productsList.length}</span>
                </div>
                <div className="mt-2 text-xs text-[#151515]/60">
                  {productsList.filter((p) => p.active).length} actifs en ligne
                </div>
              </div>

              <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#151515]/55">Commandes suisses</span>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                    <ShoppingBag size={18} />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold">142</span>
                </div>
                <div className="mt-2 text-xs text-emerald-700 font-medium">+12 nouvelles commandes</div>
              </div>

              <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#151515]/55">Visiteurs uniques</span>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                    <Users size={18} />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold">4’890</span>
                </div>
                <div className="mt-2 text-xs text-[#151515]/60">94% trafic suisse (VD, ZH, GE)</div>
              </div>
            </div>

            {/* Accès rapide */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col justify-between rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
                <div>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-[#b9d7c2]/40 text-[#151515] mb-3">
                    <Plus size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Ajouter des Produits, Photos & Vidéos</h3>
                  <p className="mt-1 text-xs text-[#151515]/60">
                    Importez des photos ou vidéos directement depuis votre ordinateur ou smartphone avec prévisualisation immédiate.
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={openAddModal}
                    className="inline-flex items-center gap-2 rounded bg-[#151515] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-black"
                  >
                    <Plus size={14} /> Ouvrir la fiche d’ajout
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
                <div>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-amber-100 text-amber-800 mb-3">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Pixels & Publicité</h3>
                  <p className="mt-1 text-xs text-[#151515]/60">
                    Gérez vos tags Meta Pixel (Facebook/Instagram), Google Ads, TikTok et Google Analytics 4.
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setActiveTab('pixels')}
                    className="inline-flex items-center gap-2 rounded border border-[#151515] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#151515] hover:bg-[#151515] hover:text-white"
                  >
                    Configurer les pixels →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= ONGLET : PRODUITS & CATALOGUE ================= */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-serif text-2xl font-semibold">Catalogue des Produits</h2>
                  <p className="mt-1 text-xs text-[#151515]/60">
                    Gérez vos articles, prix en CHF, stocks et ajoutez des photos/vidéos depuis votre ordinateur ou smartphone.
                  </p>
                </div>
                <button
                  onClick={openAddModal}
                  className="inline-flex items-center gap-2 rounded bg-[#151515] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-black"
                >
                  <Plus size={16} /> Ajouter un nouveau produit
                </button>
              </div>

              {/* Barre de recherche */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full max-w-sm">
                  <Search size={16} className="absolute left-3 top-3 text-[#151515]/40" />
                  <input
                    type="text"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Rechercher par nom, SKU ou catégorie..."
                    className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] py-2 pl-9 pr-3 text-xs outline-none focus:border-[#151515]"
                  />
                </div>
                <div className="text-xs text-[#151515]/60">
                  {filteredAdminProducts.length} produit{filteredAdminProducts.length > 1 ? 's' : ''} affiché{filteredAdminProducts.length > 1 ? 's' : ''}
                </div>
              </div>

              {/* Tableau des produits */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-[#151515]/10 bg-[#f7f6f2] text-[#151515]/60 uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Média</th>
                      <th className="p-3">Produit & Référence</th>
                      <th className="p-3">Catégorie</th>
                      <th className="p-3">Prix de vente</th>
                      <th className="p-3">Stock suisse</th>
                      <th className="p-3">Statut</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#151515]/5">
                    {filteredAdminProducts.map((prod) => (
                      <tr key={prod.id} className="hover:bg-[#f7f6f2]/60">
                        <td className="p-3">
                          <div className="relative size-12 rounded overflow-hidden border border-[#151515]/10 bg-white">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="size-full object-cover"
                            />
                            {prod.video && (
                              <span className="absolute bottom-0 right-0 bg-black/80 text-white p-0.5 rounded-tl text-[8px]" title="Contient une vidéo">
                                <Film size={10} />
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="font-semibold text-sm">{prod.name}</div>
                          <div className="font-mono text-[11px] text-[#151515]/60">{prod.reference}</div>
                          <div className="mt-1 flex items-center gap-1.5">
                            {prod.tag && (
                              <span className="rounded bg-[#151515]/5 px-2 py-0.5 text-[10px] font-medium">
                                {prod.tag}
                              </span>
                            )}
                            {prod.video && (
                              <span className="rounded bg-sky-100 text-sky-800 px-1.5 py-0.2 text-[9px] font-semibold flex items-center gap-0.5">
                                <Play size={8} /> Vidéo
                              </span>
                            )}
                            {prod.gallery && prod.gallery.length > 1 && (
                              <span className="text-[10px] text-[#151515]/50">
                                📷 {prod.gallery.length} photos
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-800">
                            {prod.category}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="font-semibold">CHF {prod.price.toLocaleString('fr-CH')}.–</div>
                          {prod.oldPrice && (
                            <div className="text-[11px] text-[#151515]/45 line-through">
                              CHF {prod.oldPrice.toLocaleString('fr-CH')}.–
                            </div>
                          )}
                        </td>
                        <td className="p-3">
                          <div className={`font-semibold ${prod.stock < 10 ? 'text-amber-700' : 'text-emerald-800'}`}>
                            {prod.stock} unités
                          </div>
                        </td>
                        <td className="p-3">
                          <button
                            onClick={() => toggleProduct(prod.id)}
                            className="flex items-center gap-1.5"
                          >
                            {prod.active ? (
                              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 flex items-center gap-1">
                                <span className="size-1.5 rounded-full bg-emerald-600" /> En ligne
                              </span>
                            ) : (
                              <span className="rounded-full bg-gray-200 px-2.5 py-0.5 text-[10px] font-bold text-gray-700 flex items-center gap-1">
                                <span className="size-1.5 rounded-full bg-gray-500" /> Masqué
                              </span>
                            )}
                          </button>
                        </td>
                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openEditModal(prod)}
                              className="inline-flex items-center gap-1 rounded border border-[#151515]/20 bg-white px-2.5 py-1 text-xs font-medium hover:bg-[#151515] hover:text-white"
                            >
                              <Edit3 size={12} /> Modifier
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(prod.id)}
                              className="rounded border border-red-200 p-1 text-red-600 hover:bg-red-50"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= ONGLET : PIXELS & PUBLICITÉ ================= */}
        {activeTab === 'pixels' && (
          <div className="space-y-8">
            <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold">Pixels & Suivi Publicitaire</h2>
              <p className="mt-1 text-xs text-[#151515]/60">
                Connectez vos campagnes publicitaires (Facebook, Instagram, Google Ads, TikTok) pour mesurer le ROI.
              </p>
            </div>

            {/* Meta Pixel */}
            <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#151515]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    f
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Meta Pixel (Facebook & Instagram)</h3>
                    <p className="text-xs text-[#151515]/60">Suivi des conversions pour les publicités Meta Ads.</p>
                  </div>
                </div>
                <button
                  onClick={() => setMetaPixelEnabled(!metaPixelEnabled)}
                  className="flex items-center gap-2 text-xs font-semibold"
                >
                  {metaPixelEnabled ? (
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <ToggleRight size={28} className="text-emerald-600" /> Activé
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <ToggleLeft size={28} className="text-gray-400" /> Désactivé
                    </span>
                  )}
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#151515]/70">
                    Pixel ID Meta (Facebook)
                  </label>
                  <input
                    type="text"
                    value={metaPixelId}
                    onChange={(e) => setMetaPixelId(e.target.value)}
                    placeholder="Ex: 849201948201948"
                    className="mt-1.5 w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs outline-none focus:border-[#151515]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#151515]/70">
                    API Conversions (CAPI) Token
                  </label>
                  <input
                    type="password"
                    value={metaApiToken}
                    onChange={(e) => setMetaApiToken(e.target.value)}
                    placeholder="EAABwzL1..."
                    className="mt-1.5 w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs outline-none focus:border-[#151515]"
                  />
                </div>
              </div>
            </div>

            {/* Google Tag & Google Ads */}
            <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#151515]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-amber-500 text-white font-bold">
                    G
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Google Tag & Google Ads</h3>
                    <p className="text-xs text-[#151515]/60">Mesure des ventes Google Search & Shopping.</p>
                  </div>
                </div>
                <button
                  onClick={() => setGoogleTagEnabled(!googleTagEnabled)}
                  className="flex items-center gap-2 text-xs font-semibold"
                >
                  {googleTagEnabled ? (
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <ToggleRight size={28} className="text-emerald-600" /> Activé
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <ToggleLeft size={28} className="text-gray-400" /> Désactivé
                    </span>
                  )}
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#151515]/70">
                    Google Analytics 4 ID
                  </label>
                  <input
                    type="text"
                    value={googleTagId}
                    onChange={(e) => setGoogleTagId(e.target.value)}
                    placeholder="G-XXXXXXXXXX"
                    className="mt-1.5 w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#151515]/70">
                    Google Ads Conversion ID
                  </label>
                  <input
                    type="text"
                    value={googleAdsId}
                    onChange={(e) => setGoogleAdsId(e.target.value)}
                    placeholder="AW-XXXXXXXXX"
                    className="mt-1.5 w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs outline-none"
                  />
                </div>
              </div>
            </div>

            {/* TikTok */}
            <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#151515]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                    TT
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs">TikTok Pixel</h4>
                    <p className="text-[11px] text-[#151515]/60">Campagnes TikTok Ads & Vidéos</p>
                  </div>
                </div>
                <button onClick={() => setTiktokPixelEnabled(!tiktokPixelEnabled)}>
                  {tiktokPixelEnabled ? (
                    <ToggleRight size={26} className="text-emerald-600" />
                  ) : (
                    <ToggleLeft size={26} className="text-gray-400" />
                  )}
                </button>
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-[#151515]/70">TikTok Pixel ID</label>
                <input
                  type="text"
                  value={tiktokPixelId}
                  onChange={(e) => setTiktokPixelId(e.target.value)}
                  placeholder="C9XXXXXXXXXXXX"
                  className="mt-1.5 w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2 text-xs outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= ONGLET : COMMANDES ================= */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold">Commandes Récentes (Suisse)</h2>
              <p className="mt-1 text-xs text-[#151515]/60">Suivi des expéditions par la Poste Suisse (PostPac Priority 24h).</p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-[#151515]/10 bg-[#f7f6f2] text-[#151515]/60 uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Commande</th>
                      <th className="p-3">Client</th>
                      <th className="p-3">Ville / Canton</th>
                      <th className="p-3">Articles</th>
                      <th className="p-3">Montant total</th>
                      <th className="p-3">Statut</th>
                      <th className="p-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#151515]/5">
                    {ordersList.map((ord) => (
                      <tr key={ord.id} className="hover:bg-[#f7f6f2]/60">
                        <td className="p-3 font-mono font-bold">{ord.id}</td>
                        <td className="p-3 font-medium">{ord.customer}</td>
                        <td className="p-3">{ord.city} ({ord.canton})</td>
                        <td className="p-3">{ord.items} article{ord.items > 1 ? 's' : ''}</td>
                        <td className="p-3 font-semibold">{ord.total}</td>
                        <td className="p-3">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                              ord.status === 'Livré'
                                ? 'bg-emerald-100 text-emerald-800'
                                : ord.status === 'Expédié'
                                ? 'bg-sky-100 text-sky-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {ord.status}
                          </span>
                        </td>
                        <td className="p-3 text-[#151515]/60">{ord.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= ONGLET : PARAMÈTRES GÉNÉRAUX ================= */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="rounded-xl border border-[#151515]/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold">Paramètres de la Boutique</h2>
              <p className="mt-1 text-xs text-[#151515]/60">Configuration générale de la plateforme e-commerce E-NOTIK.</p>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#151515]/70">
                    Nom de la boutique
                  </label>
                  <input
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#151515]/70">
                    Devise principale
                  </label>
                  <input
                    type="text"
                    value={storeCurrency}
                    onChange={(e) => setStoreCurrency(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#151515]/70">
                    Seuil de livraison offerte (CHF)
                  </label>
                  <input
                    type="number"
                    value={freeShippingThreshold}
                    onChange={(e) => setFreeShippingThreshold(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#151515]/70">
                    Taux de TVA Suisse (%)
                  </label>
                  <input
                    type="text"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#151515]/70">
                    E-mail des notifications
                  </label>
                  <input
                    type="email"
                    value={notificationEmail}
                    onChange={(e) => setNotificationEmail(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs outline-none"
                  />
                </div>
              </div>

              {/* Moyens de paiement */}
              <div className="mt-8 border-t border-[#151515]/10 pt-6">
                <h3 className="font-semibold text-sm">Moyens de Paiement Acceptés</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-center justify-between rounded-lg border border-[#151515]/10 bg-[#f7f6f2] p-3">
                    <span className="text-xs font-semibold">TWINT</span>
                    <button onClick={() => setTwintEnabled(!twintEnabled)}>
                      {twintEnabled ? <ToggleRight size={26} className="text-emerald-600" /> : <ToggleLeft size={26} className="text-gray-400" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-[#151515]/10 bg-[#f7f6f2] p-3">
                    <span className="text-xs font-semibold">Cartes (Visa / MC)</span>
                    <button onClick={() => setCardsEnabled(!cardsEnabled)}>
                      {cardsEnabled ? <ToggleRight size={26} className="text-emerald-600" /> : <ToggleLeft size={26} className="text-gray-400" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-[#151515]/10 bg-[#f7f6f2] p-3">
                    <span className="text-xs font-semibold">PostFinance Card</span>
                    <button onClick={() => setPostFinanceEnabled(!postFinanceEnabled)}>
                      {postFinanceEnabled ? <ToggleRight size={26} className="text-emerald-600" /> : <ToggleLeft size={26} className="text-gray-400" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-[#151515]/10 bg-[#f7f6f2] p-3">
                    <span className="text-xs font-semibold">Facture QR-Bill</span>
                    <button onClick={() => setInvoiceEnabled(!invoiceEnabled)}>
                      {invoiceEnabled ? <ToggleRight size={26} className="text-emerald-600" /> : <ToggleLeft size={26} className="text-gray-400" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ================= MODAL AJOUT / ÉDITION PRODUIT AVEC IMPORT PHOTOS & VIDÉOS ================= */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setIsProductModalOpen(false)} className="absolute inset-0 bg-black/60 transition-opacity" />

          <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#151515]/10 bg-[#f7f6f2] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#151515] text-[#b9d7c2]">
                  <Package size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">
                    {editingProductId ? 'Modifier le Produit' : 'Ajouter un Nouveau Produit'}
                  </h3>
                  <p className="text-xs text-[#151515]/60">Importez des photos & vidéos depuis votre ordinateur ou smartphone.</p>
                </div>
              </div>
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="rounded-full p-1.5 text-[#151515]/60 hover:bg-[#151515]/10 hover:text-[#151515]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleSaveProductSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                {/* ================= COLONNE GAUCHE : IMPORT PHOTOS & VIDÉOS (5 COLS) ================= */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#151515]/80">
                      Médias du produit
                    </label>
                    {/* Basculeur vue Photo / Vidéo */}
                    <div className="flex rounded-lg border border-[#151515]/15 bg-[#f7f6f2] p-0.5 text-[11px] font-semibold">
                      <button
                        type="button"
                        onClick={() => setActiveMediaView('photo')}
                        className={`rounded px-2.5 py-1 flex items-center gap-1 transition ${
                          activeMediaView === 'photo' ? 'bg-white shadow-sm text-[#151515]' : 'text-[#151515]/60 hover:text-[#151515]'
                        }`}
                      >
                        <ImageIcon size={12} /> Photos ({formGallery.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveMediaView('video')}
                        className={`rounded px-2.5 py-1 flex items-center gap-1 transition ${
                          activeMediaView === 'video' ? 'bg-white shadow-sm text-[#151515]' : 'text-[#151515]/60 hover:text-[#151515]'
                        }`}
                      >
                        <Video size={12} /> Vidéo {formVideo ? '✓' : ''}
                      </button>
                    </div>
                  </div>

                  {/* Zone de prévisualisation principale */}
                  <div className="relative aspect-[1] overflow-hidden rounded-xl border border-[#151515]/15 bg-[#151515] text-white flex items-center justify-center">
                    {activeMediaView === 'video' ? (
                      formVideo ? (
                        <div className="relative size-full bg-black">
                          <video
                            src={formVideo}
                            controls
                            className="size-full object-contain"
                          />
                          <button
                            type="button"
                            onClick={removeVideo}
                            className="absolute right-2 top-2 rounded-full bg-red-600/90 p-1.5 text-white hover:bg-red-700 shadow"
                            title="Supprimer la vidéo"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ) : (
                        <div className="p-6 text-center text-white/60">
                          <Film size={36} className="mx-auto mb-2 opacity-50" />
                          <p className="text-xs font-medium">Aucune vidéo ajoutée</p>
                          <p className="text-[10px] text-white/40 mt-1">
                            Ajoutez une vidéo de présentation pour vos clients.
                          </p>
                        </div>
                      )
                    ) : (
                      /* Vue Photo */
                      formImage || formGallery.length > 0 ? (
                        <div className="relative size-full bg-white">
                          <img
                            src={formImage || formGallery[0]}
                            alt="Aperçu principal"
                            className="size-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = imagePresets[0].url
                            }}
                          />
                          {formTag && (
                            <span className="absolute left-2.5 top-2.5 rounded bg-[#151515] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                              {formTag}
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="p-6 text-center text-white/60">
                          <UploadCloud size={38} className="mx-auto mb-2 opacity-50" />
                          <p className="text-xs font-medium">Aucune photo importée</p>
                          <p className="text-[10px] text-white/40 mt-1">
                            Glissez vos photos ou utilisez les boutons ci-dessous.
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  {/* Galerie de miniatures si plusieurs photos */}
                  {formGallery.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-semibold text-[#151515]/70">Galerie photo ({formGallery.length}) :</span>
                        <span className="text-[10px] text-[#151515]/45">Cliquez pour définir la couverture</span>
                      </div>
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {formGallery.map((imgUrl, idx) => (
                          <div
                            key={idx}
                            onClick={() => { setFormImage(imgUrl); setActiveMediaView('photo') }}
                            className={`group relative size-14 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 ${
                              formImage === imgUrl ? 'border-[#151515]' : 'border-transparent'
                            }`}
                          >
                            <img src={imgUrl} alt={`Vignette ${idx}`} className="size-full object-cover" />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                removeGalleryImage(idx)
                              }}
                              className="absolute right-0.5 top-0.5 rounded bg-black/70 p-0.5 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600"
                              title="Retirer"
                            >
                              <X size={12} />
                            </button>
                            {formImage === imgUrl && (
                              <span className="absolute bottom-0 inset-x-0 bg-[#151515]/80 text-[8px] text-center text-white py-0.2">
                                Principal
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Boutons d'import Ordinateur & Téléphone */}
                  <div className="rounded-xl border border-dashed border-[#151515]/25 bg-[#f7f6f2] p-4 text-center">
                    <p className="text-xs font-semibold text-[#151515]">
                      Importer depuis votre ordinateur ou téléphone
                    </p>
                    <p className="text-[11px] text-[#151515]/55 mt-0.5 mb-3">
                      Photos (JPG, PNG, WebP) et Vidéos (MP4, MOV, WebM).
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {/* Bouton Photos */}
                      <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-[#151515]/15 bg-white p-3 shadow-sm transition hover:border-[#151515] hover:bg-slate-50">
                        <Camera size={20} className="text-[#151515] mb-1" />
                        <span className="text-[11px] font-semibold text-[#151515]">Ajouter Photos</span>
                        <span className="text-[9px] text-[#151515]/50">PC ou Galerie mobile</span>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) => handlePhotoFiles(e.target.files)}
                          className="hidden"
                        />
                      </label>

                      {/* Bouton Vidéo */}
                      <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-[#151515]/15 bg-white p-3 shadow-sm transition hover:border-[#151515] hover:bg-slate-50">
                        <Video size={20} className="text-[#151515] mb-1" />
                        <span className="text-[11px] font-semibold text-[#151515]">Ajouter Vidéo</span>
                        <span className="text-[9px] text-[#151515]/50">MP4 / Caméra</span>
                        <input
                          type="file"
                          accept="video/*"
                          onChange={(e) => handleVideoFile(e.target.files?.[0] || null)}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Lien URL web ou Presets en option */}
                    <div className="mt-3 flex items-center justify-center gap-3 pt-3 border-t border-[#151515]/10 text-[11px]">
                      <button
                        type="button"
                        onClick={() => setMediaUploadType(mediaUploadType === 'url' ? 'device' : 'url')}
                        className="text-[#151515]/70 underline hover:text-black"
                      >
                        {mediaUploadType === 'url' ? 'Masquer URL web' : 'Ou coller une URL d’image web'}
                      </button>
                    </div>

                    {mediaUploadType === 'url' && (
                      <div className="mt-2 text-left">
                        <input
                          type="url"
                          value={formImage}
                          onChange={(e) => {
                            setFormImage(e.target.value)
                            if (!formGallery.includes(e.target.value)) {
                              setFormGallery([e.target.value, ...formGallery])
                            }
                          }}
                          placeholder="https://..."
                          className="w-full rounded border border-[#151515]/20 bg-white p-1.5 text-xs outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* ================= COLONNE DROITE : FORMULAIRE DÉTAILS (7 COLS) ================= */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Nom & Référence */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#151515]/80 mb-1">
                        Nom complet du produit *
                      </label>
                      <input
                        required
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Ex: Samsung Galaxy S25 Ultra, AirPods Max..."
                        className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs font-medium outline-none focus:border-[#151515]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#151515]/70 mb-1">
                        Référence SKU / Code article
                      </label>
                      <input
                        type="text"
                        value={formReference}
                        onChange={(e) => setFormReference(e.target.value)}
                        placeholder="ENOTIK-PROD-001"
                        className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2 text-xs font-mono outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#151515]/70 mb-1">
                        Catégorie / Univers *
                      </label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value)}
                        className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2 text-xs outline-none font-medium"
                      >
                        <option value="Smartphones">Smartphones</option>
                        <option value="Audio & TV">Audio & TV</option>
                        <option value="Informatique">Informatique</option>
                        <option value="Électroménager">Électroménager</option>
                        <option value="Accessoires">Accessoires</option>
                        <option value="Gaming">Gaming & Consoles</option>
                      </select>
                    </div>
                  </div>

                  {/* Prix & Promotion */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#151515]/80 mb-1">
                        Prix de vente (CHF) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-2.5 top-2.5 text-xs font-bold text-[#151515]/50">CHF</span>
                        <input
                          required
                          type="number"
                          step="0.05"
                          value={formPrice}
                          onChange={(e) => setFormPrice(e.target.value)}
                          placeholder="1249"
                          className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] py-2 pl-12 pr-2 text-xs font-semibold outline-none focus:border-[#151515]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#151515]/70 mb-1">
                        Ancien prix / Barré (CHF)
                      </label>
                      <div className="relative">
                        <span className="absolute left-2.5 top-2.5 text-xs text-[#151515]/50">CHF</span>
                        <input
                          type="number"
                          step="0.05"
                          value={formOldPrice}
                          onChange={(e) => setFormOldPrice(e.target.value)}
                          placeholder="1399"
                          className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] py-2 pl-12 pr-2 text-xs outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#151515]/70 mb-1">
                        Badge promo / Tag
                      </label>
                      <select
                        value={formTag}
                        onChange={(e) => setFormTag(e.target.value)}
                        className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2 text-xs outline-none"
                      >
                        <option value="Nouveau">Nouveau</option>
                        <option value="Bestseller">Bestseller</option>
                        <option value="−10%">−10%</option>
                        <option value="−15%">−15%</option>
                        <option value="−20%">−20%</option>
                        <option value="Reconditionné">Reconditionné</option>
                        <option value="Édition Limitée">Édition Limitée</option>
                        <option value="">Aucun badge</option>
                      </select>
                    </div>
                  </div>

                  {/* Stock & État & Garantie */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-xs font-medium text-[#151515]/70 mb-1">
                        Stock disponible (Suisse)
                      </label>
                      <input
                        type="number"
                        value={formStock}
                        onChange={(e) => setFormStock(e.target.value)}
                        placeholder="10"
                        className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2 text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#151515]/70 mb-1">
                        État du produit
                      </label>
                      <select
                        value={formCondition}
                        onChange={(e) => setFormCondition(e.target.value)}
                        className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2 text-xs outline-none"
                      >
                        <option value="Neuf scellé">Neuf scellé</option>
                        <option value="Reconditionné - Parfait état">Reconditionné - Parfait état (Grade A+)</option>
                        <option value="Reconditionné - Très bon état">Reconditionné - Très bon état</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#151515]/70 mb-1">
                        Garantie légale
                      </label>
                      <input
                        type="text"
                        value={formWarranty}
                        onChange={(e) => setFormWarranty(e.target.value)}
                        placeholder="Garantie suisse 2 ans"
                        className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2 text-xs outline-none"
                      />
                    </div>
                  </div>

                  {/* Description courte */}
                  <div>
                    <label className="block text-xs font-medium text-[#151515]/70 mb-1">
                      Description du produit (accroche client)
                    </label>
                    <textarea
                      rows={2}
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      placeholder="Décrivez les atouts majeurs, le design et l'utilité du produit..."
                      className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2.5 text-xs outline-none focus:border-[#151515]"
                    />
                  </div>

                  {/* Spécifications techniques */}
                  <div>
                    <label className="block text-xs font-medium text-[#151515]/70 mb-1">
                      Caractéristiques techniques & points clés
                    </label>
                    <input
                      type="text"
                      value={formSpecs}
                      onChange={(e) => setFormSpecs(e.target.value)}
                      placeholder="Ex: Écran OLED 120Hz · 256 Go stockage · Autonomie 24h · Clavier suisse QWERTZ"
                      className="w-full rounded-lg border border-[#151515]/20 bg-[#f7f6f2] p-2 text-xs outline-none"
                    />
                  </div>

                  {/* Visibilité en ligne */}
                  <div className="flex items-center justify-between rounded-lg border border-[#151515]/10 bg-[#f7f6f2] p-3">
                    <div>
                      <p className="text-xs font-semibold">Publier immédiatement en ligne</p>
                      <p className="text-[11px] text-[#151515]/60">Le produit apparaîtra immédiatement sur la boutique E-NOTIK.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormActive(!formActive)}
                      className="flex items-center gap-1.5"
                    >
                      {formActive ? (
                        <ToggleRight size={28} className="text-emerald-600" />
                      ) : (
                        <ToggleLeft size={28} className="text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Footer Buttons */}
              <div className="border-t border-[#151515]/10 pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="rounded-lg border border-[#151515]/20 px-4 py-2.5 text-xs font-medium text-[#151515] hover:bg-[#151515]/5"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#151515] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow transition hover:bg-black"
                >
                  <Save size={15} />
                  {editingProductId ? 'Mettre à jour le produit' : 'Publier le produit sur E-NOTIK'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

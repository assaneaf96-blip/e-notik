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
  "id": 1,
  "name": "Apple iPhone 17 Pro (Silver)",
  "reference": "ENOTIK-IPH17P-SLV-61962956",
  "category": "Smartphones",
  "price": 723,
  "oldPrice": 1033,
  "stock": 20,
  "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=940&hei=1112&fmt=png-alpha",
  "gallery": [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=940&hei=1112&fmt=png-alpha",
    "https://static.digitecgalaxus.ch/im/productimages/9/0/6/9/1/8/4/0/8/8/2/6/6/4/3/1/4/2/2/019932ab-34b6-7f88-beed-ed3c05518217",
    "https://static.digitecgalaxus.ch/im/productimages/1/1/4/4/6/0/6/9/8/0/3/0/3/1/5/4/6/0/0/019932ab-3513-7750-9b9a-6249756f59a2",
    "https://static.digitecgalaxus.ch/im/productimages/7/4/8/1/2/9/5/2/4/7/7/4/7/4/2/1/2/7/0/019932ab-356f-7d3d-9310-6fb3d5e8860d",
    "https://static.digitecgalaxus.ch/im/productimages/2/8/1/0/8/0/1/7/4/5/8/9/0/0/0/5/0/0/0/019932ab-35b7-78bb-b53c-a8e6b7b69a64",
    "https://static.digitecgalaxus.ch/im/productimages/3/8/1/0/4/3/8/6/4/9/4/2/5/7/2/6/2/2/6/01993298-776f-7554-8e50-fe5dbe12feec",
    "https://static.digitecgalaxus.ch/im/productimages/4/4/4/9/2/2/4/3/6/7/9/1/0/7/8/0/6/7/3/01993298-77ce-748e-b973-88fafbad2a84",
    "https://static.digitecgalaxus.ch/im/productimages/2/5/1/0/8/2/2/5/3/2/6/1/5/8/0/4/4/6/3/019932ab-420e-7615-9b85-ad8500574508"
  ],
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 Pro (256 Go, Silver / Argent, 6.30\", Double SIM, 5G). Modèle officiel répertorié sur Digitec Suisse (Réf. 61962956 / N° fabricant MG8G4QL/A). L'iPhone le plus puissant : écran brillant 6.3\" ProMotion 120Hz, design unibody en aluminium forgé, puce A19 Pro refroidie par chambre à vapeur, triple capteur photo Fusion 48 MP à zoom optique 8x et autonomie record.",
  "specs": "256 Go, Silver (Argent), 6.30\", Double SIM, 5G · Réf Digitec 61962956 · MG8G4QL/A · Puce A19 Pro · Écran 120Hz",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 2,
  "name": "Apple iPhone 17 Pro (Orange cosmique)",
  "reference": "ENOTIK-IPH17P-ORG-61962964",
  "category": "Smartphones",
  "price": 723,
  "oldPrice": 1033,
  "stock": 20,
  "image": "https://static01.galaxus.com/productimages/7/9/3/4/8/6/3/3/5/0/4/3/8/8/8/8/6/4/8/019932ab-5d9e-75f4-a9d2-0c31157c4830_720.jpeg",
  "gallery": [
    "https://static01.galaxus.com/productimages/7/9/3/4/8/6/3/3/5/0/4/3/8/8/8/8/6/4/8/019932ab-5d9e-75f4-a9d2-0c31157c4830_720.jpeg",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=940&hei=1112&fmt=png-alpha",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=940&hei=1112&fmt=png-alpha",
    "https://static.digitecgalaxus.ch/im/productimages/9/0/6/9/1/8/4/0/8/8/2/6/6/4/3/1/4/2/2/019932ab-34b6-7f88-beed-ed3c05518217",
    "https://static.digitecgalaxus.ch/im/productimages/1/1/4/4/6/0/6/9/8/0/3/0/3/1/5/4/6/0/0/019932ab-3513-7750-9b9a-6249756f59a2",
    "https://static.digitecgalaxus.ch/im/productimages/7/4/8/1/2/9/5/2/4/7/7/4/7/4/2/1/2/7/0/019932ab-356f-7d3d-9310-6fb3d5e8860d",
    "https://static.digitecgalaxus.ch/im/productimages/2/8/1/0/8/0/1/7/4/5/8/9/0/0/0/5/0/0/0/019932ab-35b7-78bb-b53c-a8e6b7b69a64"
  ],
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 Pro 256 Go Orange cosmique (Cosmic Orange). Référence Digitec 61962964 / N° fabricant MG8H4QL/A. Écran 6.30\" ProMotion 120Hz, finition titane Orange cosmique, puce A19 Pro refroidie par chambre à vapeur, triple capteur photo Fusion 48 MP à zoom optique 8x et autonomie record.",
  "specs": "256 Go, Orange cosmique, 6.30\", Double SIM, 5G · Réf Digitec 61962964 · MG8H4QL/A · Puce A19 Pro · Écran 120Hz",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 3,
  "name": "Apple iPhone 17 (Noir)",
  "reference": "ENOTIK-IPH17-BLK-61962931",
  "category": "Smartphones",
  "price": 597,
  "oldPrice": 853,
  "stock": 20,
  "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha",
  "gallery": [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha",
    "https://static.digitecgalaxus.ch/im/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/8/5/8/1/2/0/5/1/1/7/8/1/8/6/8/3/0/5/3/01993298-93c8-79e0-a4f5-ce6ca52fdb14",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/6/2/4/6/0/6/7/7/4/9/9/3/5/7/1/5/4/01993298-942b-75b3-be06-3091676bd8b3",
    "https://static.digitecgalaxus.ch/im/productimages/8/8/8/3/3/8/0/1/7/0/6/8/8/2/6/3/7/7/6/01993298-94fc-7548-99bc-4932427eb1a3"
  ],
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 256 Go Noir (Black / Schwarz). Référence Digitec 61962931 / N° fabricant MG6J4QL/A. Écran 6.30\" ProMotion 120Hz, Ceramic Shield 2, puce A19 et double caméra Fusion 48 MP.",
  "specs": "256 Go, Noir, 6.30\", Double SIM, 5G · Réf Digitec 61962931 · MG6J4QL/A · Puce A19",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 4,
  "name": "Apple iPhone 17 (Blanc)",
  "reference": "ENOTIK-IPH17-WHT-61962940",
  "category": "Smartphones",
  "price": 597,
  "oldPrice": 853,
  "stock": 20,
  "image": "https://static.digitecgalaxus.ch/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
  "gallery": [
    "https://static.digitecgalaxus.ch/im/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/8/5/8/1/2/0/5/1/1/7/8/1/8/6/8/3/0/5/3/01993298-93c8-79e0-a4f5-ce6ca52fdb14",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/6/2/4/6/0/6/7/7/4/9/9/3/5/7/1/5/4/01993298-942b-75b3-be06-3091676bd8b3",
    "https://static.digitecgalaxus.ch/im/productimages/8/8/8/3/3/8/0/1/7/0/6/8/8/2/6/3/7/7/6/01993298-94fc-7548-99bc-4932427eb1a3"
  ],
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 256 Go Blanc (White). Référence Digitec 61962940 / N° fabricant MG6K4QL/A. Écran 6.30\" ProMotion 120Hz, Ceramic Shield 2, puce A19 et double caméra Fusion 48 MP.",
  "specs": "256 Go, Blanc, 6.30\", Double SIM, 5G · Réf Digitec 61962940 · MG6K4QL/A · Puce A19",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 5,
  "name": "Apple iPhone 17 (Bleu brume)",
  "reference": "ENOTIK-IPH17-BLU-61962958",
  "category": "Smartphones",
  "price": 597,
  "oldPrice": 853,
  "stock": 20,
  "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha",
  "gallery": [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha",
    "https://static.digitecgalaxus.ch/im/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/8/5/8/1/2/0/5/1/1/7/8/1/8/6/8/3/0/5/3/01993298-93c8-79e0-a4f5-ce6ca52fdb14",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/6/2/4/6/0/6/7/7/4/9/9/3/5/7/1/5/4/01993298-942b-75b3-be06-3091676bd8b3",
    "https://static.digitecgalaxus.ch/im/productimages/8/8/8/3/3/8/0/1/7/0/6/8/8/2/6/3/7/7/6/01993298-94fc-7548-99bc-4932427eb1a3"
  ],
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 256 Go Bleu brume (Mist Blue). Référence Digitec 61962958 / N° fabricant MG6L4QL/A. Écran 6.30\" ProMotion 120Hz, Ceramic Shield 2, puce A19 et double caméra Fusion 48 MP.",
  "specs": "256 Go, Bleu brume, 6.30\", Double SIM, 5G · Réf Digitec 61962958 · MG6L4QL/A · Puce A19",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 6,
  "name": "Apple iPhone 17 (Lavande)",
  "reference": "ENOTIK-IPH17-LAV-61962939",
  "category": "Smartphones",
  "price": 597,
  "oldPrice": 853,
  "stock": 20,
  "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha",
  "gallery": [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha",
    "https://static.digitecgalaxus.ch/im/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/8/5/8/1/2/0/5/1/1/7/8/1/8/6/8/3/0/5/3/01993298-93c8-79e0-a4f5-ce6ca52fdb14",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/6/2/4/6/0/6/7/7/4/9/9/3/5/7/1/5/4/01993298-942b-75b3-be06-3091676bd8b3",
    "https://static.digitecgalaxus.ch/im/productimages/8/8/8/3/3/8/0/1/7/0/6/8/8/2/6/3/7/7/6/01993298-94fc-7548-99bc-4932427eb1a3"
  ],
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 256 Go Lavande (Lavender / Pink). Référence Digitec 61962939 / N° fabricant MG6M4QL/A. Écran 6.30\" ProMotion 120Hz, Ceramic Shield 2, puce A19 et double caméra Fusion 48 MP.",
  "specs": "256 Go, Lavande, 6.30\", Double SIM, 5G · Réf Digitec 61962939 · MG6M4QL/A · Puce A19",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 7,
  "name": "Apple iPhone 17 (Fable)",
  "reference": "ENOTIK-IPH17-FBL-61962909",
  "category": "Smartphones",
  "price": 597,
  "oldPrice": 853,
  "stock": 20,
  "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha",
  "gallery": [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha",
    "https://static.digitecgalaxus.ch/im/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/8/5/8/1/2/0/5/1/1/7/8/1/8/6/8/3/0/5/3/01993298-93c8-79e0-a4f5-ce6ca52fdb14",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/6/2/4/6/0/6/7/7/4/9/9/3/5/7/1/5/4/01993298-942b-75b3-be06-3091676bd8b3",
    "https://static.digitecgalaxus.ch/im/productimages/8/8/8/3/3/8/0/1/7/0/6/8/8/2/6/3/7/7/6/01993298-94fc-7548-99bc-4932427eb1a3"
  ],
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 256 Go Fable (Vert Sauge / Sage). Référence Digitec 61962909 / N° fabricant MG6N4QL/A. Écran 6.30\" ProMotion 120Hz, Ceramic Shield 2, puce A19 et double caméra Fusion 48 MP.",
  "specs": "256 Go, Fable, 6.30\", SIM + eSIM, 5G · Réf Digitec 61962909 · MG6N4QL/A · Puce A19",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 8,
  "name": "Apple iPhone 17e",
  "reference": "ENOTIK-IPHONE17E-DIG",
  "category": "Smartphones",
  "price": 489,
  "oldPrice": 699,
  "stock": 20,
  "image": "https://static.digitecgalaxus.ch/productimages/7/6/3/9/9/9/2/7/4/4/0/8/7/8/6/3/8/3/4/019cb2af-0149-7307-aee0-72cf96db7ed6",
  "gallery": [
    "https://static.digitecgalaxus.ch/im/productimages/7/6/3/9/9/9/2/7/4/4/0/8/7/8/6/3/8/3/4/019cb2af-0149-7307-aee0-72cf96db7ed6",
    "https://static.digitecgalaxus.ch/im/productimages/1/4/3/8/8/2/5/5/2/2/6/8/8/4/8/3/5/0/7/019cb2ae-b656-7bc7-b4c2-5eaaff528a10",
    "https://static.digitecgalaxus.ch/im/productimages/2/5/0/8/1/1/8/3/3/8/9/9/5/7/7/2/6/4/6/019cb2ae-b918-7077-9f14-f7224e4ada64",
    "https://static.digitecgalaxus.ch/im/productimages/8/4/7/4/5/5/7/1/5/0/2/4/7/0/9/0/2/6/0/019cb2ae-b932-7745-80be-8aa21f6b5331",
    "https://static.digitecgalaxus.ch/im/productimages/8/4/9/8/8/4/5/7/4/9/2/6/5/2/3/5/3/7/4/019cb2ae-b998-7b43-ab03-88601600de96",
    "https://static.digitecgalaxus.ch/im/productimages/2/9/9/5/4/3/6/4/3/8/8/9/4/3/8/1/9/4/9/019cb2ae-b9e1-761b-ad79-7e5a29ddf828",
    "https://static.digitecgalaxus.ch/im/productimages/5/9/6/1/7/9/3/8/3/6/4/7/2/2/8/0/4/4/1/019cb2ae-ba10-7759-acdf-399b238aa22d",
    "https://static.digitecgalaxus.ch/im/productimages/1/4/0/5/4/8/1/0/9/1/5/4/1/4/6/3/9/3/6/019cb2ae-adeb-7a98-810c-d95b9758d90c"
  ],
  "tag": "−30% Digitec",
  "description": "L'iPhone 17e est doté d'un impressionnant écran Super Retina XDR de 6,1 pouces, de la puce A19 rapide et puissante, d'une autonomie de batterie de toute une journée et de 256 Go de stockage dans la configuration de départ. - PLAISIR AU POURVOIR - L'iPhone 17e est doté de toutes les fonctionnalités de l'iPhone 17. Et à un prix vraiment intéressant. - Bouton d'action - Pour un accès rapide et personnalisable à vos applications et fonctionnalités les plus utilisées. Ou à l'intelligence visuelle pour en savoir plus sur l'environnement. - FAIT POUR RÉSISTER - La face avant de l'iPhone 17e est protégée par le Ceramic Shield 2, avec une résistance aux rayures 3x supérieure à celle de la génération précédente. - AFFICHAGE BRILLANT - L'écran Super Retina XDR de 6,1\" donne vie aux images et rend le texte facile à lire. Et le revêtement antireflet à sept couches réduit les reflets, même en plein soleil. - BATTERIE POUR TOUTE LA JOURNÉE - Écrivez des messages, surfez et regardez des heures de films et de séries. Chargez rapidement avec USB C et maintenant avec MagSafe. - CHARGE RAPIDE SANS FIL. TOUT EN UN CLIC AVEC MAGSAFE. - L'iPhone 17e permet une charge sans fil jusqu'à 15 W, contre 7,5 W pour l'iPhone 16e. Vous pouvez donc le charger facilement, confortablement et rapidement à tout moment. - A19 CHIP. DE LA PUISSANCE À REVENDRE. SANS FIN. - Avec la puce A19, tout ce que vous faites vous semble rapide et fluide, même les jeux AAA les plus exigeants, le streaming 4K et bien plus encore. - DEUX CAMÉRAS AVANCÉS EN UN - L'appareil photo Fusion 48 MP offre un zoom téléobjectif 2x de qualité optique. Et avec Portraits nouvelle génération, vous pouvez capturer un moment spécial en une seule photo et le transformer plus tard en un portrait impressionnant en floutant l'arrière-plan après la prise de vue. Prix de référence Digitec Suisse (CHF 699.–) remisé à −30%.",
  "specs": "256 Go, Noir, 6.10\", SIM + eSIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 9,
  "name": "Apple iPhone 18 Pro",
  "reference": "ENOTIK-IPHONE18PRO-DIG",
  "category": "Smartphones",
  "price": 1028,
  "oldPrice": 1469,
  "stock": 20,
  "image": "https://static.digitecgalaxus.ch/productimages/3/1/9/0/3/4/3/9/6/5/7/6/6/9/9/6/1/9/6/01a08a3f-a187-72f6-b171-11227edba7f2",
  "gallery": [
    "https://static.digitecgalaxus.ch/im/productimages/3/1/9/0/3/4/3/9/6/5/7/6/6/9/9/6/1/9/6/01a08a3f-a187-72f6-b171-11227edba7f2",
    "https://static.digitecgalaxus.ch/im/productimages/9/2/4/9/8/6/0/0/8/6/9/2/2/4/9/1/9/01a08a51-fcfd-7291-a1f0-f6a702d6cf86",
    "https://static.digitecgalaxus.ch/im/productimages/7/3/2/0/6/2/9/2/2/8/2/6/3/2/1/0/4/0/2/01a08a3f-a1a9-7814-9cf6-fa8f7e851af2",
    "https://static.digitecgalaxus.ch/im/productimages/9/4/3/4/2/8/8/0/1/8/8/8/9/7/9/6/3/2/01a08a3f-a1c1-782e-9fb1-813705080496",
    "https://static.digitecgalaxus.ch/im/productimages/2/1/3/0/8/3/6/8/0/1/0/5/5/9/3/1/9/6/8/01a08a3f-a1da-7f7a-b90f-0cae0db957c8",
    "https://static.digitecgalaxus.ch/im/productimages/1/9/4/3/3/9/4/6/4/7/0/7/7/5/4/0/7/1/01a08a3f-a1f1-7f09-8f0e-57e3e417815e",
    "https://static.digitecgalaxus.ch/im/productimages/1/0/7/2/9/3/7/3/4/9/1/1/7/2/2/5/6/9/8/01a08a3f-a213-7f00-828a-438329d8a096",
    "https://static.digitecgalaxus.ch/im/productimages/7/7/4/2/9/4/2/2/3/9/5/3/1/2/7/0/1/0/6/01a08a3f-a22f-77f2-bf85-2255b4451c77"
  ],
  "tag": "−30% Digitec",
  "description": "À la pointe de la technologie. L’iPhone Pro par excellence. Votre mise à niveau la plus performante à ce jour. iPhone 18 Pro. Écran de 6,3 pouces avec ProMotion¹, appareil photo principal Fusion de 48 Mpx à ouverture variable, autonomie de la batterie nettement améliorée et puce A20 Pro. •   Quatre couleurs éclatantes. Un design robuste – Conçu pour durer, avec une structure monocoque en aluminium et une face arrière en verre de la même couleur pour un look plus harmonieux. •   Écran Pro immersif – Un écran Super Retina XDR de 6,3 pouces. Plus lumineux. Moins d’éblouissements. Et avec ProMotion jusqu’à 120 Hz. •   Ceramic Shield robuste. À l’avant et à l’arrière – Conçu pour durer. Avec Ceramic Shield à l’arrière et Ceramic Shield 2 à l’avant, offrant une résistance aux rayures trois fois supérieure à celle de l’iPhone 16 Pro. •   Le système d’appareil photo Pro ultime – Appareil photo principal Fusion de 48 MP avec ouverture variable pour des photos et des vidéos encore meilleures en basse lumière et une profondeur de champ impressionnante. Commandes Pro personnalisables. Et zoom optique 8x. •   Caméra avant Center Stage de 18 MP − Pour des cadrages flexibles. Faites entrer davantage de personnes dans le cadre. Vidéos en double enregistrement avec les caméras avant et arrière. Et bien plus encore. •   Puce A20 Pro. Un véritable concentré de puissance en matière d’IA – Avec une chambre à vapeur de nouvelle génération et un Neural Engine double de 16 cœurs. Des performances GPU jusqu’à 40 % supérieures à celles de l’iPhone 17 Pro.2 Spécialement conçue pour l’IA. •    GRAND BOND EN AVANT en matière d’autonomie de la batterie – Jusqu’à 3 heures de lecture vidéo en plus par rapport à l’iPhone 17 Pro.² Jusqu’à 24 heures d’utilisation avec une seule charge. Recharge filaire plus rapide : jusqu’à 50 % en environ 15 minutes avec un chargeur compatible. •   APPLE INTELLIGENCE − Confidentiel. Sécurisé. Et très puissant. Écrivez, exprimez votre personnalité et accomplissez vos tâches sans effort. •   FONCTIONNALITÉS DE SÉCURITÉ ESSENTIELLES – Grâce à la détection d’accident, l’iPhone peut détecter un accident de voiture grave et appeler les secours si vous n’êtes pas en mesure de le faire. Prix de référence Digitec Suisse (CHF 1 469.–) remisé à −30%.",
  "specs": "512 Go, Noir, 6.30\", Double SIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 10,
  "name": "Apple iPhone 17 Pro Max",
  "reference": "ENOTIK-IPHONE17PROMAX-DIG",
  "category": "Smartphones",
  "price": 771,
  "oldPrice": 1102,
  "stock": 20,
  "image": "https://static.digitecgalaxus.ch/productimages/2/9/0/3/0/4/3/4/9/1/4/8/3/7/6/9/2/3/0/01993298-82bf-7b12-8a73-94bcea6ea130",
  "gallery": [
    "https://static.digitecgalaxus.ch/im/productimages/2/9/0/3/0/4/3/4/9/1/4/8/3/7/6/9/2/3/0/01993298-82bf-7b12-8a73-94bcea6ea130",
    "https://static.digitecgalaxus.ch/im/productimages/5/7/1/4/6/2/8/9/4/3/9/7/9/8/5/6/6/3/9/01993298-82bf-7ef0-804b-dbd44220c4c5",
    "https://static.digitecgalaxus.ch/im/productimages/5/2/3/7/6/0/0/2/6/2/0/0/5/1/1/8/3/1/5/01993297-fafa-7511-907e-c9f734c87af1",
    "https://static.digitecgalaxus.ch/im/productimages/4/8/2/6/9/3/5/0/8/8/5/2/9/5/0/7/2/2/8/01993298-022f-7c17-996b-96d7ae63d0a5",
    "https://static.digitecgalaxus.ch/im/productimages/3/8/1/0/4/3/8/6/4/9/4/2/5/7/2/6/2/2/6/01993298-776f-7554-8e50-fe5dbe12feec",
    "https://static.digitecgalaxus.ch/im/productimages/4/4/4/9/2/2/4/3/6/7/9/1/0/7/8/0/6/7/3/01993298-77ce-748e-b973-88fafbad2a84",
    "https://static.digitecgalaxus.ch/im/productimages/1/2/7/1/0/0/2/6/2/9/0/5/8/5/9/5/3/7/7/01993298-7819-7341-a061-a689c70755f3",
    "https://static.digitecgalaxus.ch/im/productimages/7/3/7/1/3/0/1/1/9/7/1/1/3/5/2/7/7/4/8/01993298-0264-7552-98c7-f304434bc5f1"
  ],
  "tag": "−30% Digitec",
  "description": "iPhone 17 Pro Max. L'iPhone le plus puissant jamais conçu. Un écran brillant de 6,9 pouces, un design unibody en aluminium, une puce A19 Pro, des caméras arrière de 48 MP et la meilleure autonomie de batterie à ce jour.  DESIGN UNIBODY. POUR DES PERFORMANCES UNIQUES. - Design unibody en aluminium forgé à chaud. Pour l'iPhone le plus puissant jamais conçu.  BOUCLIER EN CÉRAMIQUE ROBUSTE. À L'AVANT ET À L'ARRIÈRE. - Le Ceramic Shield protège l'arrière de l'iPhone 17 Pro Max pour une résistance à la casse 4x supérieure. Et le nouveau Ceramic Shield 2 à l'avant offre une résistance aux rayures 3x supérieure.  LE SYSTÈME DE CAMÉRAS PRO ULTIME - Avec des caméras arrière de 48 MP et un zoom 8x de qualité optique - la plus grande plage de zoom jamais vue sur un iPhone. C'est comme si vous aviez 8 objectifs Pro dans votre poche.  CAMÉRA FRONTALE CENTRALE DE 18MP - Cadrage flexible. Des selfies de groupe intelligents, des vidéos avec double enregistrement des caméras avant et arrière, et plus encore.  A19 PRO CHIP. REFROIDISSEMENT À LA VAPEUR. VIF COMME L'ÉCLAIR. - La puce A19 Pro est la plus puissante de l'iPhone, avec des performances constantes jusqu'à 40 pour cent supérieures.  LA MEILLEURE DUREE D'UTILISATION DE LA BATTERIE DANS UN IPHONE - La conception unibody améliore considérablement l'autonomie de la batterie, avec jusqu'à 37 heures de lecture vidéo. Chargez jusqu'à 50 % en 20 minutes.  iOS 26. NOUVEAU LOOK. TOUT À FAIT MAGIQUE. - Le nouveau design Liquid Glass. Magnifique. Clair. Et si familier. Avec un écran de verrouillage plus vivant, des arrière-plans personnalisables, des sondages dans les messages, un filtre d'appel et plus encore.  CONÇU POUR APPLE INTELLIGENCE - Privé. En toute sécurité. Et avec beaucoup de puissance. Écrivez quelque chose, montrez votre personnalité et faites les choses beaucoup plus facilement.  FÉATURES SATELLITAIRES - Si vous devez contacter un service d'urgence mais que vous n'avez pas de réseau ni de Wi-Fi, vous pouvez utiliser SOS par satellite. En cas d'accident de voiture grave, l'iPhone peut contacter les secours si vous ne pouvez pas le faire. Prix de référence Digitec Suisse (CHF 1 102.–) remisé à −30%.",
  "specs": "256 Go, Deep Blue, 6.90\", Double SIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 11,
  "name": "Apple iPhone Duo",
  "reference": "ENOTIK-IPHONEDUO-DIG",
  "category": "Smartphones",
  "price": 1399,
  "oldPrice": 1999,
  "stock": 20,
  "image": "https://static.digitecgalaxus.ch/productimages/8/6/8/3/9/7/3/9/7/9/8/1/4/8/6/8/1/7/8/01a08c0b-44a5-7101-b39f-805ea65bf80b",
  "gallery": [
    "https://static.digitecgalaxus.ch/im/productimages/8/6/8/3/9/7/3/9/7/9/8/1/4/8/6/8/1/7/8/01a08c0b-44a5-7101-b39f-805ea65bf80b",
    "https://static.digitecgalaxus.ch/im/productimages/1/5/7/1/1/6/3/6/3/9/7/8/5/4/4/5/8/3/9/01a08c0b-48dc-7cc2-a804-b2d04c73a6b5",
    "https://static.digitecgalaxus.ch/im/productimages/1/3/1/1/4/3/4/4/8/5/7/2/9/1/2/7/9/2/2/01a08c0b-4786-793b-8781-061f6ff54c28",
    "https://static.digitecgalaxus.ch/im/productimages/9/6/0/6/8/9/4/2/4/9/2/0/8/6/7/2/9/5/01a08c0b-4893-7ecb-82b1-8a6a5f705fd9",
    "https://static.digitecgalaxus.ch/im/productimages/8/7/4/6/9/2/6/4/1/4/8/0/2/1/7/5/1/8/4/01a08c0b-4648-746b-a970-3aadc61ed572",
    "https://static.digitecgalaxus.ch/im/productimages/2/8/0/1/2/7/0/2/7/7/2/9/5/3/9/1/7/1/9/01a08c0b-479e-7403-917d-411852b20ed2",
    "https://static.digitecgalaxus.ch/im/productimages/5/9/1/5/8/5/7/8/4/3/2/6/3/1/9/7/1/3/8/01a08c0b-43dd-7c8b-94f7-fcb11ffe234f",
    "https://static.digitecgalaxus.ch/im/productimages/2/6/7/9/9/3/3/1/1/4/7/8/8/2/0/3/2/0/3/01a08c0b-481c-7360-9101-a754f87a3c9a"
  ],
  "tag": "−30% Digitec",
  "description": "Une nouvelle façon de découvrir l’iPhone. Pliable. Orientable. Transformable. iPhone Duo. Le plus grand écran d’iPhone jamais conçu. Dans un design fin et pliable. Cadre robuste en titane. Des expériences iOS uniques. Système de caméra Dual Fusion de 48 MP. Puce A20 Pro. •   LE PLUS GRAND ÉCRAN. DANS UN DESIGN FIN ET PLIABLE – Le plus grand écran d’iPhone de tous les temps, doté d’un écran interne à nanostructure pour réduire les reflets. Un écran 50 % plus grand que celui de l’iPhone 18 Pro Max. •   PLIABLE. TRANSFORMABLE. ORIENTABLE – Des positions polyvalentes permettent de vivre des expériences iOS repensées pour plus de productivité, de multitâche et une expérience visuelle immersive. •   MAGNIFIQUE ET ROBUSTE – La gamme iPhone Duo est dotée d’un cadre et d’un cache de charnière en titane de classe 5, ainsi que d’un revêtement Ceramic Shield 2 à l’avant et Ceramic Shield à l’arrière. •   SYSTÈME DE CAMÉRA DUAL FUSION 48 MP – Caméra principale Fusion 48 MP et caméra ultra grand angle, offrant des possibilités de prise de vue totalement inédites, comme la fonction « Photo intelligente » qui prend automatiquement des photos. •   NOUVELLES FONCTIONNALITÉS DE L'APPAREIL PHOTO – Désormais équipé de la première caméra FaceTime intégrée sous l'écran et d'une caméra frontale Center Stage de 12 MP. •   REFROIDISSEMENT PAR VAPEUR. PERFORMANCES PRO – La puce A20 Pro est conçue pour les charges de travail IA : un processeur à 6 cœurs jusqu’à 50 % plus rapide et un processeur graphique à 7 cœurs jusqu’à 2,1 fois plus rapide que ceux de l’iPhone 15 Pro.  •  SYSTÈME À DOUBLE BATTERIE. DE L’AUTONOMIE POUR TOUTE LA JOURNÉE – Jusqu’à 8 heures de lecture vidéo en plus (à partir de 23 heures par rapport à l’iPhone 15 Pro) lors de l’utilisation de l’écran interne. Jusqu’à 21 heures de lecture en plus (soit 23 heures au total par rapport à l’iPhone 15 Pro) lorsque vous utilisez l’écran extérieur. •   APPLE INTELLIGENCE − Confidentiel, sécurisé et très performant. Écrivez ce que vous voulez, exprimez votre personnalité et accomplissez vos tâches beaucoup plus facilement. •   FONCTIONNALITÉS DE SÉCURITÉ ESSENTIELLES – Grâce à la détection des accidents, l’iPhone peut détecter un accident de voiture grave et appeler les secours si vous n’en êtes pas en mesure. Prix de référence Digitec Suisse (CHF 1 999.–) remisé à −30%.",
  "specs": "256 Go, Ciel nocturne, 7.60\", Double eSIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 12,
  "name": "Apple iPhone 15",
  "reference": "ENOTIK-IPHONE15-DIG",
  "category": "Smartphones",
  "price": 440,
  "oldPrice": 629,
  "stock": 20,
  "image": "https://static.digitecgalaxus.ch/productimages/8/6/2/0/2/3/8/7/0/4/8/7/1/0/7/7/7/2/8/fda455d3-4305-4808-82ad-14cf60d50e49.jpg",
  "gallery": [
    "https://static.digitecgalaxus.ch/im/productimages/8/6/2/0/2/3/8/7/0/4/8/7/1/0/7/7/7/2/8/fda455d3-4305-4808-82ad-14cf60d50e49.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/6/9/6/4/2/8/5/1/9/8/1/9/1/5/2/1/0/9/1/b0fc87b1-734d-495f-b6e7-bb6c042b19ed.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/2/5/4/3/5/6/4/1/4/2/7/7/0/9/9/0/6/1/3/01654deb-fec4-4ab8-b0cf-b5a41e60d375.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/6/1/4/0/5/9/8/0/3/6/4/3/5/3/5/9/6/6/6/81be43c9-0001-4fe9-a544-f6c978880990.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/3/4/9/9/4/2/6/3/7/5/7/5/4/5/3/7/2/9/9/dbfbe013-9ac0-4759-9d51-d3b4e5752a90.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/2/3/4/1/3/0/1/1/0/2/6/1/3/9/9/3/3/2296d3b2-4e04-4db6-83dd-fef09df043ea.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/5/2/0/3/4/4/3/4/2/0/4/8/7/5/7/6/4/3/5/119b9669-5106-41dc-b805-86e266ada98d.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/2/8/6/3/2/1/3/8/6/3/5/7/9/3/7/9/1/2/9/019860d1-6e88-761a-afb2-9f3c58d78b9e"
  ],
  "tag": "−30% Digitec",
  "description": "Chaque année, Apple présente les nouveaux modèles d'iPhone lors de la keynote de septembre, et avec l'iPhone 15, vous pouvez vous attendre à encore plus de puissance ainsi qu'une mise à jour esthétique. Le système de caméra avancé est amélioré avec une meilleure caméra, comprenant un capteur principal de 48 mégapixels, un capteur ultra grand-angle de 12 mégapixels, une caméra frontale de 12 mégapixels et un zoom optique 2x. Le processeur bénéficie également d'une mise à niveau par rapport au modèle précédent : l'iPhone 15 garantit des performances fluides pour vos tâches quotidiennes grâce à un matériel puissant, incluant le processeur A16 Bionic ultra-rapide et 6 Go de RAM, que ce soit pour naviguer, multitâcher ou diffuser du contenu. Le cadre de l'écran Super Retina XDR de 6,1 pouces (15,49 cm) est devenu plus fin avec l'iPhone 15, donnant à l'écran du smartphone Apple une apparence presque infinie. De plus, la série iPhone 15 introduit Dynamic Island pour tous les modèles – pas seulement pour les modèles Pro. Sous l'écran, l'iPhone 15 dispose d'une batterie plus grande. Grâce à la batterie intelligente de 3 877 mAh, qui s'adapte à vos habitudes d'utilisation, l'iPhone d'Apple devient votre compagnon fiable tout au long de la journée et peut même être chargé sans fil. Avec l'iPhone 15 arrive également le port USB-C, qui sera uniformément introduit pour tous les petits et moyens appareils électroniques dans l'UE à partir de 2024. Commandez maintenant l'iPhone 15 et choisissez entre les options de stockage de 128 Go, 256 Go et 512 Go, ainsi que les couleurs Rose, Jaune, Vert, Bleu et Noir. Contenu de la livraison : Apple iPhone 15, câble de chargement USB-C vers USB-C (1 m), documentation. Prix de référence Digitec Suisse (CHF 629.–) remisé à −30%.",
  "specs": "128 Go, Noir, 6.10\", SIM + eSIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 13,
  "name": "Apple iPhone 16",
  "reference": "ENOTIK-IPHONE16-DIG",
  "category": "Smartphones",
  "price": 515,
  "oldPrice": 736,
  "stock": 20,
  "image": "https://static.digitecgalaxus.ch/productimages/2/6/5/0/5/5/0/8/0/1/2/8/7/7/4/6/8/1/4/48c5d2b7-41c1-409c-8407-539ea8fa14f9_cropped.jpg",
  "gallery": [
    "https://static.digitecgalaxus.ch/im/productimages/2/6/5/0/5/5/0/8/0/1/2/8/7/7/4/6/8/1/4/48c5d2b7-41c1-409c-8407-539ea8fa14f9_cropped.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/3/5/3/2/9/2/0/2/3/0/7/5/4/7/9/6/5/9/1/eda5761f-dceb-4c35-832d-3b40b4114ad1_cropped.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/1/2/8/8/7/2/8/7/6/8/3/1/4/0/4/4/6/6/7/150aa651-1cc0-4a6c-89fb-d26e590a1cc4_cropped.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/1/9/4/7/3/4/8/2/1/7/7/6/9/9/4/9/8/7/9/daa7ef23-b17a-48ae-b3f6-4c0cd2035980_cropped.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/4/2/4/9/4/7/9/1/3/8/4/0/1/8/6/9/1/4/8/b9b739c4-f2ef-4900-869b-fcf12f335e7b_cropped.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/8/3/1/3/8/4/0/7/6/1/9/4/2/0/7/0/4/6/3/b85d1539-b303-4cee-95de-7b384da305e0_cropped.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/3/1/6/5/1/2/7/5/5/3/4/6/3/9/0/3/9/1/ee230e46-05f5-4dba-8bf3-5337a74f844b_cropped.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/8/9/5/1/6/4/4/7/3/2/5/8/6/1/4/8/4/2/5/cfa9b8a6-8588-4942-afd0-9cf6c7b12516_cropped.jpg"
  ],
  "tag": "−30% Digitec",
  "description": "Avec le contrôle de la caméra, vous pouvez accéder plus facilement et rapidement aux outils de caméra tels que le zoom ou la profondeur de champ, et prendre la photo parfaite en un temps record. Avec l'améliorée caméra ultra grand-angle à mise au point automatique, vous pouvez capturer des photos et vidéos macro incroyablement détaillées. Réalisez des images haute résolution impressionnantes avec la caméra Fusion de 48 MP ou effectuez un zoom optique 2x. Les styles photographiques de nouvelle génération vous offrent plus de flexibilité créative, vous permettant de personnaliser encore plus chaque photo. Et vous pouvez annuler tous les styles à tout moment. Le A18 représente un bond de deux générations par rapport à la puce A16 Bionic de l'iPhone 15. Il permet des fonctionnalités avancées de photo et de vidéo ainsi que des jeux de niveau console avec une efficacité énergétique exceptionnelle. L'iPhone 16 fonctionne avec la puce A18, offrant un véritable coup de pouce pour la batterie avec jusqu'à 22 heures de lecture vidéo. Chargez via USB-C ou connectez un chargeur MagSafe pour une charge sans fil plus rapide. L'iPhone 16 possède un design robuste en aluminium de qualité aérospatiale avec un écran Super Retina XDR de 6,1\". Il est extrêmement résistant grâce à la Ceramic Shield de dernière génération à l'avant, qui est deux fois plus dur que tout autre verre de smartphone. Le moyen le plus rapide d'accéder à votre fonctionnalité préférée : maintenez-la simplement enfoncée pour lancer la fonction souhaitée - comme la lampe de poche, un mémo vocal ou le mode silencieux. Avec iOS 18, vous pouvez colorer les icônes de votre écran d'accueil dans n'importe quelle teinte. Trouvez plus rapidement vos photos préférées dans l'application Photos révisée et ajoutez des effets animés ludiques à des mots, phrases ou emojis dans iMessage. Grâce à la détection d'accidents, l'iPhone peut détecter un grave accident de voiture et appeler de l'aide si vous ne pouvez pas le faire. Prix de référence Digitec Suisse (CHF 736.–) remisé à −30%.",
  "specs": "128 Go, Blanc, 6.10\", SIM + eSIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 14,
  "name": "Apple iPhone 16e",
  "reference": "ENOTIK-IPHONE16E-DIG",
  "category": "Smartphones",
  "price": 398,
  "oldPrice": 569,
  "stock": 20,
  "image": "https://static.digitecgalaxus.ch/productimages/9/1/6/7/1/5/2/2/0/8/9/4/0/8/3/5/7/6/6/af515399-a36b-48fb-9ff1-856e593f0b57.jpg",
  "gallery": [
    "https://static.digitecgalaxus.ch/im/productimages/9/1/6/7/1/5/2/2/0/8/9/4/0/8/3/5/7/6/6/af515399-a36b-48fb-9ff1-856e593f0b57.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/5/7/7/2/8/2/2/4/5/7/7/7/2/1/7/6/8/3/3/524da5ab-7800-451d-a904-d59c426a87a4.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/3/2/2/2/9/0/3/6/2/8/3/5/7/6/2/0/9/7/7/dd035882-2446-4f74-8f28-e434464c5f4a.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/6/9/0/2/1/2/9/6/6/8/0/4/3/1/6/1/0/5/3/201921e2-8259-42f0-817b-e300e9ad0c54.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/6/8/8/1/4/0/4/0/1/5/6/7/0/4/9/5/8/6/3/d5cea6d2-75ab-4980-902a-c4135f80a32e.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/9/6/1/7/9/4/6/4/3/5/4/3/2/4/9/6/0/4/a4e7be2b-97ad-43f7-89c6-9799c049c965.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/5/2/4/3/2/9/0/9/8/9/7/4/8/4/9/6/bc364ff7-df42-49b0-8f19-c472f56f4ab4_cropped.jpg",
    "https://static.digitecgalaxus.ch/im/productimages/9/1/4/9/1/0/8/5/9/8/1/7/9/5/4/1/7/2/6/543e61a4-015d-488b-b89a-41858578a860.jpg"
  ],
  "tag": "−30% Digitec",
  "description": "L'iPhone 16e a été conçu pour l'intelligence d'Apple. Il est équipé de la puissance de la puce A181, d'un appareil photo Fusion 48 MP qui prend des photos en super-haute résolution et d'une autonomie de batterie gigantesque - pour avoir plus de temps pour écrire des messages, surfer sur le web et plus encore. Prix de référence Digitec Suisse (CHF 569.–) remisé à −30%.",
  "specs": "128 Go, Noir, 6.10\", SIM + eSIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 15,
  "name": "Apple iPhone Air",
  "reference": "ENOTIK-IPHONEAIR-DIG",
  "category": "Smartphones",
  "price": 621,
  "oldPrice": 887,
  "stock": 20,
  "image": "https://static.digitecgalaxus.ch/productimages/4/3/4/4/5/3/9/1/7/3/0/9/5/8/6/1/7/9/019933ab-f894-78d0-b8ff-cb279f4623d4",
  "gallery": [
    "https://static.digitecgalaxus.ch/im/productimages/4/3/4/4/5/3/9/1/7/3/0/9/5/8/6/1/7/9/019933ab-f894-78d0-b8ff-cb279f4623d4",
    "https://static.digitecgalaxus.ch/im/productimages/2/9/0/4/3/7/3/9/3/4/4/3/6/5/7/1/1/4/9/019933ab-ff27-7394-818f-b999260b44bc",
    "https://static.digitecgalaxus.ch/im/productimages/6/8/0/4/4/3/2/9/0/3/3/2/4/8/9/6/7/6/019933ac-0086-7df5-8774-5bf05bc596aa",
    "https://static.digitecgalaxus.ch/im/productimages/5/3/8/1/8/5/8/0/9/6/3/5/5/0/0/9/0/8/3/019933ac-0063-7a76-9804-c7bc5a39e0c4",
    "https://static.digitecgalaxus.ch/im/productimages/2/0/6/2/9/8/1/3/0/5/3/8/0/4/5/7/2/5/9/019933ad-fe85-7cf2-9882-70bdc8c9e202",
    "https://static.digitecgalaxus.ch/im/productimages/1/0/8/1/6/3/3/5/2/2/4/9/4/8/3/0/0/3/7/019933ae-073c-7694-b7cf-8d5a85ec8f65",
    "https://static.digitecgalaxus.ch/im/productimages/4/6/5/1/8/5/5/7/4/0/4/4/5/6/5/2/9/4/4/019933ae-07bc-79eb-b4e5-2ef425c76ae9",
    "https://static.digitecgalaxus.ch/im/productimages/3/6/5/5/7/7/4/9/8/9/6/4/3/7/3/5/9/0/9/019933ac-01a6-7424-beb7-e8b4ce96e21e"
  ],
  "tag": "−30% Digitec",
  "description": "iPhone Air. L'iPhone le plus fin jamais conçu. Écran de 6,5 pouces, bouclier en céramique robuste à l'avant et à l'arrière, puce A19 Pro, système de caméra Fusion 48 MP et caméra frontale Center Stage. - SUPER FIN. SUPER LÉGÈRE. SUPER FORTE. - L'iPhone le plus fin jamais conçu avec la puissance d'une puce Pro. Avec ses 5,6 mm d'épaisseur, le nouvel iPhone Air est si fin et léger qu'il en devient insaisissable.  - PLUS ROBUSTE QUE N'IMPORTE QUEL APPAREIL AVANT - Cadre ultraléger en titane. Le Ceramic Shield protège l'arrière de l'iPhone Air, pour une résistance à la casse 4x supérieure. Et le nouveau Ceramic Shield 2 à l'avant offre une résistance aux rayures 3x supérieure. - DEUX CAMÉRAS AVANCÉS EN UN - Système de caméra Fusion 48 MP avec zoom 2x de qualité optique. Prenez simplement des photos parfaites - directement de là où vous êtes.  - CAMÉRA FRONTALE DE 18MP CENTER STAGE - Cadrage flexible. Des selfies de groupe intelligents, des vidéos avec double enregistrement des caméras avant et arrière et plus encore.  - PUCE A19 PRO. EXTRÊMEMENT RAPIDE. EXTRÊMEMENT EFFICACE. - L'A19 Pro est la puce iPhone la plus efficace jamais conçue. Elle offre des performances pro, le tout dans un design révolutionnaire fin et léger.  - BATTERIE POUR TOUTE LA JOURNÉE - Autonomie de la batterie pour toute la journée avec jusqu'à 27 heures de lecture vidéo. - iOS 26. NOUVEAU LOOK. TOUT À FAIT MAGIQUE. - Le nouveau design Liquid Glass. Magnifique. Et si familier. Avec un écran de verrouillage plus vivant, des arrière-plans personnalisables, des sondages dans les messages, un filtre d'appel et plus encore.  - CONÇU POUR APPLE INTELLIGENCE - Privé. En toute sécurité. Et avec beaucoup de puissance. Écrivez quelque chose, montrez votre personnalité et faites les choses beaucoup plus facilement.6  - FÉATURES SATELLITAIRES - Si vous devez contacter un service d'urgence mais que vous n'avez ni réseau ni Wi-Fi, vous pouvez utiliser SOS par satellite.7 Et en cas d'accident de voiture grave, l'iPhone peut contacter les secours si vous ne pouvez pas le faire. Prix de référence Digitec Suisse (CHF 887.–) remisé à −30%.",
  "specs": "256 Go, Bleu ciel, 6.50\", Double SIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 16,
  "name": "Sony WH-1000XM6",
  "reference": "ENOTIK-SNYXM6-011",
  "category": "Audio & TV",
  "price": 399,
  "oldPrice": 449,
  "stock": 20,
  "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
  "gallery": [
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85"
  ],
  "tag": "Bestseller",
  "description": "Référence mondiale en réduction de bruit active avec processeur IA.",
  "specs": "Autonomie 35h · Bluetooth 5.4 · Hi-Res Audio LDAC · Confort supérieur",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 17,
  "name": "MacBook Air M4",
  "reference": "ENOTIK-MBA-M4-012",
  "category": "Informatique",
  "price": 1099,
  "oldPrice": 1199,
  "stock": 20,
  "image": "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
  "gallery": [
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85"
  ],
  "tag": "Nouveau",
  "description": "Puce M4 ultra-performante dans un boîtier tout aluminium de 1.2 kg.",
  "specs": "16 Go RAM · SSD 512 Go · Écran Retina 13.6\" · Clavier suisse QWERTZ",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
},
  {
  "id": 18,
  "name": "Dyson Airwrap Multi-Styler",
  "reference": "ENOTIK-DYS-AW-013",
  "category": "Électroménager",
  "price": 449,
  "oldPrice": 529,
  "stock": 20,
  "image": "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85",
  "gallery": [
    "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85"
  ],
  "tag": "−15%",
  "description": "Coiffage professionnel sans chaleur extrême grâce à l’effet Coanda.",
  "specs": "Moteur V9 110 000 tr/min · Contrôle thermique intelligent",
  "warranty": "Garantie suisse 2 ans Apple & Digitec",
  "condition": "Neuf scellé Digitec CH",
  "active": true
}
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

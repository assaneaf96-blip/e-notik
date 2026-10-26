'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Eye,
  Heart,
  Menu,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Trash2,
  Truck,
  UserRound,
  X,
  Zap,
} from 'lucide-react'

export interface ProductColor {
  name: string
  hex: string
  image: string
}

export interface Product {
  id: number
  name: string
  reference: string
  category: string
  oldPrice: string
  price: string
  priceNum: number
  image: string
  tag: string
  description?: string
  specs?: string
  storages?: string[]
  colors?: ProductColor[]
  gallery?: string[]
}

export interface CartItem {
  itemKey: string
  product: Product
  quantity: number
  selectedColor?: string
  selectedColorImage?: string
  selectedStorage?: string
  unitPriceNum?: number
  unitPrice?: string
}

const products: Product[] = [
  {
    "id": 1,
    "name": "Apple iPhone 17 Pro",
    "reference": "ENOTIK-IPH17P-SLV-61962956",
    "category": "Smartphones",
    "oldPrice": "CHF 1 033.–",
    "price": "CHF 723.–",
    "priceNum": 723,
    "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=940&hei=1112&fmt=png-alpha",
    "tag": "−30% Digitec",
    "description": "Apple iPhone 17 Pro (256 Go, Silver / Argent, 6.30\", Double SIM, 5G). Modèle officiel répertorié sur Digitec Suisse (Réf. 61962956 / N° fabricant MG8G4QL/A). L'iPhone le plus puissant : écran brillant 6.3\" ProMotion 120Hz, design unibody en aluminium forgé, puce A19 Pro refroidie par chambre à vapeur, triple capteur photo Fusion 48 MP à zoom optique 8x et autonomie record.",
    "specs": "256 Go, Silver (Argent), 6.30\", Double SIM, 5G · Réf Digitec 61962956 · MG8G4QL/A · Puce A19 Pro · Écran 120Hz",
    "storages": [
      "128 Go",
      "256 Go",
      "512 Go",
      "1 To"
    ],
    "colors": [
      {
        "name": "Silver (Argent)",
        "hex": "#E3E4E5",
        "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=940&hei=1112&fmt=png-alpha"
      },
      {
        "name": "Deep Blue",
        "hex": "#1C2D42",
        "image": "https://static.digitecgalaxus.ch/productimages/9/0/6/9/1/8/4/0/8/8/2/6/6/4/3/1/4/2/2/019932ab-34b6-7f88-beed-ed3c05518217"
      }
    ],
    "gallery": [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=940&hei=1112&fmt=png-alpha",
      "https://static.digitecgalaxus.ch/im/productimages/9/0/6/9/1/8/4/0/8/8/2/6/6/4/3/1/4/2/2/019932ab-34b6-7f88-beed-ed3c05518217",
      "https://static.digitecgalaxus.ch/im/productimages/1/1/4/4/6/0/6/9/8/0/3/0/3/1/5/4/6/0/0/019932ab-3513-7750-9b9a-6249756f59a2",
      "https://static.digitecgalaxus.ch/im/productimages/7/4/8/1/2/9/5/2/4/7/7/4/7/4/2/1/2/7/0/019932ab-356f-7d3d-9310-6fb3d5e8860d",
      "https://static.digitecgalaxus.ch/im/productimages/2/8/1/0/8/0/1/7/4/5/8/9/0/0/0/5/0/0/0/019932ab-35b7-78bb-b53c-a8e6b7b69a64",
      "https://static.digitecgalaxus.ch/im/productimages/3/8/1/0/4/3/8/6/4/9/4/2/5/7/2/6/2/2/6/01993298-776f-7554-8e50-fe5dbe12feec",
      "https://static.digitecgalaxus.ch/im/productimages/4/4/4/9/2/2/4/3/6/7/9/1/0/7/8/0/6/7/3/01993298-77ce-748e-b973-88fafbad2a84",
      "https://static.digitecgalaxus.ch/im/productimages/2/5/1/0/8/2/2/5/3/2/6/1/5/8/0/4/4/6/3/019932ab-420e-7615-9b85-ad8500574508"
    ]
  },
  {
  "id": 2,
  "name": "Apple iPhone 17 (Noir)",
  "reference": "ENOTIK-IPH17-BLK-61962931",
  "category": "Smartphones",
  "oldPrice": "CHF 853.–",
  "price": "CHF 597.–",
  "priceNum": 597,
  "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha",
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 256 Go Noir (Black / Schwarz). Référence Digitec 61962931 / N° fabricant MG6J4QL/A. Écran 6.30\" ProMotion 120Hz, Ceramic Shield 2, puce A19 et double caméra Fusion 48 MP.",
  "specs": "256 Go, Noir, 6.30\", Double SIM, 5G · Réf Digitec 61962931 · MG6J4QL/A · Puce A19",
  "storages": [
    "256 Go",
    "512 Go"
  ],
  "colors": [
    {
      "name": "Noir",
      "hex": "#222325",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Blanc",
      "hex": "#F5F5F7",
      "image": "https://static.digitecgalaxus.ch/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2"
    },
    {
      "name": "Bleu brume",
      "hex": "#6B8EA8",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Lavande",
      "hex": "#D6C7E2",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Fable",
      "hex": "#9EB5A5",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha"
    }
  ],
  "gallery": [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha",
    "https://static.digitecgalaxus.ch/im/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/8/5/8/1/2/0/5/1/1/7/8/1/8/6/8/3/0/5/3/01993298-93c8-79e0-a4f5-ce6ca52fdb14",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/6/2/4/6/0/6/7/7/4/9/9/3/5/7/1/5/4/01993298-942b-75b3-be06-3091676bd8b3",
    "https://static.digitecgalaxus.ch/im/productimages/8/8/8/3/3/8/0/1/7/0/6/8/8/2/6/3/7/7/6/01993298-94fc-7548-99bc-4932427eb1a3"
  ]
},
  {
  "id": 3,
  "name": "Apple iPhone 17 (Blanc)",
  "reference": "ENOTIK-IPH17-WHT-61962940",
  "category": "Smartphones",
  "oldPrice": "CHF 853.–",
  "price": "CHF 597.–",
  "priceNum": 597,
  "image": "https://static.digitecgalaxus.ch/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 256 Go Blanc (White). Référence Digitec 61962940 / N° fabricant MG6K4QL/A. Écran 6.30\" ProMotion 120Hz, Ceramic Shield 2, puce A19 et double caméra Fusion 48 MP.",
  "specs": "256 Go, Blanc, 6.30\", Double SIM, 5G · Réf Digitec 61962940 · MG6K4QL/A · Puce A19",
  "storages": [
    "256 Go",
    "512 Go"
  ],
  "colors": [
    {
      "name": "Noir",
      "hex": "#222325",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Blanc",
      "hex": "#F5F5F7",
      "image": "https://static.digitecgalaxus.ch/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2"
    },
    {
      "name": "Bleu brume",
      "hex": "#6B8EA8",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Lavande",
      "hex": "#D6C7E2",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Fable",
      "hex": "#9EB5A5",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha"
    }
  ],
  "gallery": [
    "https://static.digitecgalaxus.ch/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/8/5/8/1/2/0/5/1/1/7/8/1/8/6/8/3/0/5/3/01993298-93c8-79e0-a4f5-ce6ca52fdb14",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/6/2/4/6/0/6/7/7/4/9/9/3/5/7/1/5/4/01993298-942b-75b3-be06-3091676bd8b3",
    "https://static.digitecgalaxus.ch/im/productimages/8/8/8/3/3/8/0/1/7/0/6/8/8/2/6/3/7/7/6/01993298-94fc-7548-99bc-4932427eb1a3"
  ]
},
  {
  "id": 4,
  "name": "Apple iPhone 17 (Bleu brume)",
  "reference": "ENOTIK-IPH17-BLU-61962958",
  "category": "Smartphones",
  "oldPrice": "CHF 853.–",
  "price": "CHF 597.–",
  "priceNum": 597,
  "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha",
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 256 Go Bleu brume (Mist Blue). Référence Digitec 61962958 / N° fabricant MG6L4QL/A. Écran 6.30\" ProMotion 120Hz, Ceramic Shield 2, puce A19 et double caméra Fusion 48 MP.",
  "specs": "256 Go, Bleu brume, 6.30\", Double SIM, 5G · Réf Digitec 61962958 · MG6L4QL/A · Puce A19",
  "storages": [
    "256 Go",
    "512 Go"
  ],
  "colors": [
    {
      "name": "Noir",
      "hex": "#222325",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Blanc",
      "hex": "#F5F5F7",
      "image": "https://static.digitecgalaxus.ch/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2"
    },
    {
      "name": "Bleu brume",
      "hex": "#6B8EA8",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Lavande",
      "hex": "#D6C7E2",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Fable",
      "hex": "#9EB5A5",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha"
    }
  ],
  "gallery": [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha",
    "https://static.digitecgalaxus.ch/im/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/8/5/8/1/2/0/5/1/1/7/8/1/8/6/8/3/0/5/3/01993298-93c8-79e0-a4f5-ce6ca52fdb14",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/6/2/4/6/0/6/7/7/4/9/9/3/5/7/1/5/4/01993298-942b-75b3-be06-3091676bd8b3",
    "https://static.digitecgalaxus.ch/im/productimages/8/8/8/3/3/8/0/1/7/0/6/8/8/2/6/3/7/7/6/01993298-94fc-7548-99bc-4932427eb1a3"
  ]
},
  {
  "id": 5,
  "name": "Apple iPhone 17 (Lavande)",
  "reference": "ENOTIK-IPH17-LAV-61962939",
  "category": "Smartphones",
  "oldPrice": "CHF 853.–",
  "price": "CHF 597.–",
  "priceNum": 597,
  "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha",
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 256 Go Lavande (Lavender / Pink). Référence Digitec 61962939 / N° fabricant MG6M4QL/A. Écran 6.30\" ProMotion 120Hz, Ceramic Shield 2, puce A19 et double caméra Fusion 48 MP.",
  "specs": "256 Go, Lavande, 6.30\", Double SIM, 5G · Réf Digitec 61962939 · MG6M4QL/A · Puce A19",
  "storages": [
    "256 Go",
    "512 Go"
  ],
  "colors": [
    {
      "name": "Noir",
      "hex": "#222325",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Blanc",
      "hex": "#F5F5F7",
      "image": "https://static.digitecgalaxus.ch/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2"
    },
    {
      "name": "Bleu brume",
      "hex": "#6B8EA8",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Lavande",
      "hex": "#D6C7E2",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Fable",
      "hex": "#9EB5A5",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha"
    }
  ],
  "gallery": [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha",
    "https://static.digitecgalaxus.ch/im/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/8/5/8/1/2/0/5/1/1/7/8/1/8/6/8/3/0/5/3/01993298-93c8-79e0-a4f5-ce6ca52fdb14",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/6/2/4/6/0/6/7/7/4/9/9/3/5/7/1/5/4/01993298-942b-75b3-be06-3091676bd8b3",
    "https://static.digitecgalaxus.ch/im/productimages/8/8/8/3/3/8/0/1/7/0/6/8/8/2/6/3/7/7/6/01993298-94fc-7548-99bc-4932427eb1a3"
  ]
},
  {
  "id": 6,
  "name": "Apple iPhone 17 (Fable)",
  "reference": "ENOTIK-IPH17-FBL-61962909",
  "category": "Smartphones",
  "oldPrice": "CHF 853.–",
  "price": "CHF 597.–",
  "priceNum": 597,
  "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha",
  "tag": "−30% Digitec",
  "description": "Apple iPhone 17 256 Go Fable (Vert Sauge / Sage). Référence Digitec 61962909 / N° fabricant MG6N4QL/A. Écran 6.30\" ProMotion 120Hz, Ceramic Shield 2, puce A19 et double caméra Fusion 48 MP.",
  "specs": "256 Go, Fable, 6.30\", SIM + eSIM, 5G · Réf Digitec 61962909 · MG6N4QL/A · Puce A19",
  "storages": [
    "256 Go",
    "512 Go"
  ],
  "colors": [
    {
      "name": "Noir",
      "hex": "#222325",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Blanc",
      "hex": "#F5F5F7",
      "image": "https://static.digitecgalaxus.ch/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2"
    },
    {
      "name": "Bleu brume",
      "hex": "#6B8EA8",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Lavande",
      "hex": "#D6C7E2",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha"
    },
    {
      "name": "Fable",
      "hex": "#9EB5A5",
      "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha"
    }
  ],
  "gallery": [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha",
    "https://static.digitecgalaxus.ch/im/productimages/7/7/3/5/0/9/4/9/0/2/7/8/8/0/5/7/8/6/2/01993298-9637-7ee0-9b1d-2ed62eab37e2",
    "https://static.digitecgalaxus.ch/im/productimages/8/5/8/1/2/0/5/1/1/7/8/1/8/6/8/3/0/5/3/01993298-93c8-79e0-a4f5-ce6ca52fdb14",
    "https://static.digitecgalaxus.ch/im/productimages/6/3/6/2/4/6/0/6/7/7/4/9/9/3/5/7/1/5/4/01993298-942b-75b3-be06-3091676bd8b3",
    "https://static.digitecgalaxus.ch/im/productimages/8/8/8/3/3/8/0/1/7/0/6/8/8/2/6/3/7/7/6/01993298-94fc-7548-99bc-4932427eb1a3"
  ]
},
  {
    "id": 7,
    "name": "Apple iPhone 17e",
    "reference": "ENOTIK-IPHONE17E-DIG",
    "category": "Smartphones",
    "oldPrice": "CHF 699.–",
    "price": "CHF 489.–",
    "priceNum": 489,
    "image": "https://static.digitecgalaxus.ch/productimages/7/6/3/9/9/9/2/7/4/4/0/8/7/8/6/3/8/3/4/019cb2af-0149-7307-aee0-72cf96db7ed6",
    "tag": "−30% Digitec",
    "description": "L'iPhone 17e est doté d'un impressionnant écran Super Retina XDR de 6,1 pouces, de la puce A19 rapide et puissante, d'une autonomie de batterie de toute une journée et de 256 Go de stockage dans la configuration de départ. - PLAISIR AU POURVOIR - L'iPhone 17e est doté de toutes les fonctionnalités de l'iPhone 17. Et à un prix vraiment intéressant. - Bouton d'action - Pour un accès rapide et personnalisable à vos applications et fonctionnalités les plus utilisées. Ou à l'intelligence visuelle pour en savoir plus sur l'environnement. - FAIT POUR RÉSISTER - La face avant de l'iPhone 17e est protégée par le Ceramic Shield 2, avec une résistance aux rayures 3x supérieure à celle de la génération précédente. - AFFICHAGE BRILLANT - L'écran Super Retina XDR de 6,1\" donne vie aux images et rend le texte facile à lire. Et le revêtement antireflet à sept couches réduit les reflets, même en plein soleil. - BATTERIE POUR TOUTE LA JOURNÉE - Écrivez des messages, surfez et regardez des heures de films et de séries. Chargez rapidement avec USB C et maintenant avec MagSafe. - CHARGE RAPIDE SANS FIL. TOUT EN UN CLIC AVEC MAGSAFE. - L'iPhone 17e permet une charge sans fil jusqu'à 15 W, contre 7,5 W pour l'iPhone 16e. Vous pouvez donc le charger facilement, confortablement et rapidement à tout moment. - A19 CHIP. DE LA PUISSANCE À REVENDRE. SANS FIN. - Avec la puce A19, tout ce que vous faites vous semble rapide et fluide, même les jeux AAA les plus exigeants, le streaming 4K et bien plus encore. - DEUX CAMÉRAS AVANCÉS EN UN - L'appareil photo Fusion 48 MP offre un zoom téléobjectif 2x de qualité optique. Et avec Portraits nouvelle génération, vous pouvez capturer un moment spécial en une seule photo et le transformer plus tard en un portrait impressionnant en floutant l'arrière-plan après la prise de vue. Prix de référence Digitec Suisse (CHF 699.–) remisé à −30%.",
    "specs": "256 Go, Noir, 6.10\", SIM + eSIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
    "storages": [
      "128 Go",
      "256 Go",
      "512 Go",
      "1 To"
    ],
    "colors": [
      {
        "name": "Noir",
        "hex": "#1C1C1E",
        "image": "https://static.digitecgalaxus.ch/productimages/7/6/3/9/9/9/2/7/4/4/0/8/7/8/6/3/8/3/4/019cb2af-0149-7307-aee0-72cf96db7ed6"
      }
    ],
    "gallery": [
      "https://static.digitecgalaxus.ch/im/productimages/7/6/3/9/9/9/2/7/4/4/0/8/7/8/6/3/8/3/4/019cb2af-0149-7307-aee0-72cf96db7ed6",
      "https://static.digitecgalaxus.ch/im/productimages/1/4/3/8/8/2/5/5/2/2/6/8/8/4/8/3/5/0/7/019cb2ae-b656-7bc7-b4c2-5eaaff528a10",
      "https://static.digitecgalaxus.ch/im/productimages/2/5/0/8/1/1/8/3/3/8/9/9/5/7/7/2/6/4/6/019cb2ae-b918-7077-9f14-f7224e4ada64",
      "https://static.digitecgalaxus.ch/im/productimages/8/4/7/4/5/5/7/1/5/0/2/4/7/0/9/0/2/6/0/019cb2ae-b932-7745-80be-8aa21f6b5331",
      "https://static.digitecgalaxus.ch/im/productimages/8/4/9/8/8/4/5/7/4/9/2/6/5/2/3/5/3/7/4/019cb2ae-b998-7b43-ab03-88601600de96",
      "https://static.digitecgalaxus.ch/im/productimages/2/9/9/5/4/3/6/4/3/8/8/9/4/3/8/1/9/4/9/019cb2ae-b9e1-761b-ad79-7e5a29ddf828",
      "https://static.digitecgalaxus.ch/im/productimages/5/9/6/1/7/9/3/8/3/6/4/7/2/2/8/0/4/4/1/019cb2ae-ba10-7759-acdf-399b238aa22d",
      "https://static.digitecgalaxus.ch/im/productimages/1/4/0/5/4/8/1/0/9/1/5/4/1/4/6/3/9/3/6/019cb2ae-adeb-7a98-810c-d95b9758d90c"
    ]
  },
  {
    "id": 8,
    "name": "Apple iPhone 18 Pro",
    "reference": "ENOTIK-IPHONE18PRO-DIG",
    "category": "Smartphones",
    "oldPrice": "CHF 1 469.–",
    "price": "CHF 1 028.–",
    "priceNum": 1028,
    "image": "https://static.digitecgalaxus.ch/productimages/3/1/9/0/3/4/3/9/6/5/7/6/6/9/9/6/1/9/6/01a08a3f-a187-72f6-b171-11227edba7f2",
    "tag": "−30% Digitec",
    "description": "À la pointe de la technologie. L’iPhone Pro par excellence. Votre mise à niveau la plus performante à ce jour. iPhone 18 Pro. Écran de 6,3 pouces avec ProMotion¹, appareil photo principal Fusion de 48 Mpx à ouverture variable, autonomie de la batterie nettement améliorée et puce A20 Pro. •   Quatre couleurs éclatantes. Un design robuste – Conçu pour durer, avec une structure monocoque en aluminium et une face arrière en verre de la même couleur pour un look plus harmonieux. •   Écran Pro immersif – Un écran Super Retina XDR de 6,3 pouces. Plus lumineux. Moins d’éblouissements. Et avec ProMotion jusqu’à 120 Hz. •   Ceramic Shield robuste. À l’avant et à l’arrière – Conçu pour durer. Avec Ceramic Shield à l’arrière et Ceramic Shield 2 à l’avant, offrant une résistance aux rayures trois fois supérieure à celle de l’iPhone 16 Pro. •   Le système d’appareil photo Pro ultime – Appareil photo principal Fusion de 48 MP avec ouverture variable pour des photos et des vidéos encore meilleures en basse lumière et une profondeur de champ impressionnante. Commandes Pro personnalisables. Et zoom optique 8x. •   Caméra avant Center Stage de 18 MP − Pour des cadrages flexibles. Faites entrer davantage de personnes dans le cadre. Vidéos en double enregistrement avec les caméras avant et arrière. Et bien plus encore. •   Puce A20 Pro. Un véritable concentré de puissance en matière d’IA – Avec une chambre à vapeur de nouvelle génération et un Neural Engine double de 16 cœurs. Des performances GPU jusqu’à 40 % supérieures à celles de l’iPhone 17 Pro.2 Spécialement conçue pour l’IA. •    GRAND BOND EN AVANT en matière d’autonomie de la batterie – Jusqu’à 3 heures de lecture vidéo en plus par rapport à l’iPhone 17 Pro.² Jusqu’à 24 heures d’utilisation avec une seule charge. Recharge filaire plus rapide : jusqu’à 50 % en environ 15 minutes avec un chargeur compatible. •   APPLE INTELLIGENCE − Confidentiel. Sécurisé. Et très puissant. Écrivez, exprimez votre personnalité et accomplissez vos tâches sans effort. •   FONCTIONNALITÉS DE SÉCURITÉ ESSENTIELLES – Grâce à la détection d’accident, l’iPhone peut détecter un accident de voiture grave et appeler les secours si vous n’êtes pas en mesure de le faire. Prix de référence Digitec Suisse (CHF 1 469.–) remisé à −30%.",
    "specs": "512 Go, Noir, 6.30\", Double SIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
    "storages": [
      "128 Go",
      "256 Go",
      "512 Go",
      "1 To"
    ],
    "colors": [
      {
        "name": "Noir",
        "hex": "#1C1C1E",
        "image": "https://static.digitecgalaxus.ch/productimages/3/1/9/0/3/4/3/9/6/5/7/6/6/9/9/6/1/9/6/01a08a3f-a187-72f6-b171-11227edba7f2"
      }
    ],
    "gallery": [
      "https://static.digitecgalaxus.ch/im/productimages/3/1/9/0/3/4/3/9/6/5/7/6/6/9/9/6/1/9/6/01a08a3f-a187-72f6-b171-11227edba7f2",
      "https://static.digitecgalaxus.ch/im/productimages/9/2/4/9/8/6/0/0/8/6/9/2/2/4/9/1/9/01a08a51-fcfd-7291-a1f0-f6a702d6cf86",
      "https://static.digitecgalaxus.ch/im/productimages/7/3/2/0/6/2/9/2/2/8/2/6/3/2/1/0/4/0/2/01a08a3f-a1a9-7814-9cf6-fa8f7e851af2",
      "https://static.digitecgalaxus.ch/im/productimages/9/4/3/4/2/8/8/0/1/8/8/8/9/7/9/6/3/2/01a08a3f-a1c1-782e-9fb1-813705080496",
      "https://static.digitecgalaxus.ch/im/productimages/2/1/3/0/8/3/6/8/0/1/0/5/5/9/3/1/9/6/8/01a08a3f-a1da-7f7a-b90f-0cae0db957c8",
      "https://static.digitecgalaxus.ch/im/productimages/1/9/4/3/3/9/4/6/4/7/0/7/7/5/4/0/7/1/01a08a3f-a1f1-7f09-8f0e-57e3e417815e",
      "https://static.digitecgalaxus.ch/im/productimages/1/0/7/2/9/3/7/3/4/9/1/1/7/2/2/5/6/9/8/01a08a3f-a213-7f00-828a-438329d8a096",
      "https://static.digitecgalaxus.ch/im/productimages/7/7/4/2/9/4/2/2/3/9/5/3/1/2/7/0/1/0/6/01a08a3f-a22f-77f2-bf85-2255b4451c77"
    ]
  },
  {
    "id": 9,
    "name": "Apple iPhone 17 Pro Max",
    "reference": "ENOTIK-IPHONE17PROMAX-DIG",
    "category": "Smartphones",
    "oldPrice": "CHF 1 102.–",
    "price": "CHF 771.–",
    "priceNum": 771,
    "image": "https://static.digitecgalaxus.ch/productimages/2/9/0/3/0/4/3/4/9/1/4/8/3/7/6/9/2/3/0/01993298-82bf-7b12-8a73-94bcea6ea130",
    "tag": "−30% Digitec",
    "description": "iPhone 17 Pro Max. L'iPhone le plus puissant jamais conçu. Un écran brillant de 6,9 pouces, un design unibody en aluminium, une puce A19 Pro, des caméras arrière de 48 MP et la meilleure autonomie de batterie à ce jour.  DESIGN UNIBODY. POUR DES PERFORMANCES UNIQUES. - Design unibody en aluminium forgé à chaud. Pour l'iPhone le plus puissant jamais conçu.  BOUCLIER EN CÉRAMIQUE ROBUSTE. À L'AVANT ET À L'ARRIÈRE. - Le Ceramic Shield protège l'arrière de l'iPhone 17 Pro Max pour une résistance à la casse 4x supérieure. Et le nouveau Ceramic Shield 2 à l'avant offre une résistance aux rayures 3x supérieure.  LE SYSTÈME DE CAMÉRAS PRO ULTIME - Avec des caméras arrière de 48 MP et un zoom 8x de qualité optique - la plus grande plage de zoom jamais vue sur un iPhone. C'est comme si vous aviez 8 objectifs Pro dans votre poche.  CAMÉRA FRONTALE CENTRALE DE 18MP - Cadrage flexible. Des selfies de groupe intelligents, des vidéos avec double enregistrement des caméras avant et arrière, et plus encore.  A19 PRO CHIP. REFROIDISSEMENT À LA VAPEUR. VIF COMME L'ÉCLAIR. - La puce A19 Pro est la plus puissante de l'iPhone, avec des performances constantes jusqu'à 40 pour cent supérieures.  LA MEILLEURE DUREE D'UTILISATION DE LA BATTERIE DANS UN IPHONE - La conception unibody améliore considérablement l'autonomie de la batterie, avec jusqu'à 37 heures de lecture vidéo. Chargez jusqu'à 50 % en 20 minutes.  iOS 26. NOUVEAU LOOK. TOUT À FAIT MAGIQUE. - Le nouveau design Liquid Glass. Magnifique. Clair. Et si familier. Avec un écran de verrouillage plus vivant, des arrière-plans personnalisables, des sondages dans les messages, un filtre d'appel et plus encore.  CONÇU POUR APPLE INTELLIGENCE - Privé. En toute sécurité. Et avec beaucoup de puissance. Écrivez quelque chose, montrez votre personnalité et faites les choses beaucoup plus facilement.  FÉATURES SATELLITAIRES - Si vous devez contacter un service d'urgence mais que vous n'avez pas de réseau ni de Wi-Fi, vous pouvez utiliser SOS par satellite. En cas d'accident de voiture grave, l'iPhone peut contacter les secours si vous ne pouvez pas le faire. Prix de référence Digitec Suisse (CHF 1 102.–) remisé à −30%.",
    "specs": "256 Go, Deep Blue, 6.90\", Double SIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
    "storages": [
      "128 Go",
      "256 Go",
      "512 Go",
      "1 To"
    ],
    "colors": [
      {
        "name": "Deep Blue",
        "hex": "#1C2D42",
        "image": "https://static.digitecgalaxus.ch/productimages/2/9/0/3/0/4/3/4/9/1/4/8/3/7/6/9/2/3/0/01993298-82bf-7b12-8a73-94bcea6ea130"
      }
    ],
    "gallery": [
      "https://static.digitecgalaxus.ch/im/productimages/2/9/0/3/0/4/3/4/9/1/4/8/3/7/6/9/2/3/0/01993298-82bf-7b12-8a73-94bcea6ea130",
      "https://static.digitecgalaxus.ch/im/productimages/5/7/1/4/6/2/8/9/4/3/9/7/9/8/5/6/6/3/9/01993298-82bf-7ef0-804b-dbd44220c4c5",
      "https://static.digitecgalaxus.ch/im/productimages/5/2/3/7/6/0/0/2/6/2/0/0/5/1/1/8/3/1/5/01993297-fafa-7511-907e-c9f734c87af1",
      "https://static.digitecgalaxus.ch/im/productimages/4/8/2/6/9/3/5/0/8/8/5/2/9/5/0/7/2/2/8/01993298-022f-7c17-996b-96d7ae63d0a5",
      "https://static.digitecgalaxus.ch/im/productimages/3/8/1/0/4/3/8/6/4/9/4/2/5/7/2/6/2/2/6/01993298-776f-7554-8e50-fe5dbe12feec",
      "https://static.digitecgalaxus.ch/im/productimages/4/4/4/9/2/2/4/3/6/7/9/1/0/7/8/0/6/7/3/01993298-77ce-748e-b973-88fafbad2a84",
      "https://static.digitecgalaxus.ch/im/productimages/1/2/7/1/0/0/2/6/2/9/0/5/8/5/9/5/3/7/7/01993298-7819-7341-a061-a689c70755f3",
      "https://static.digitecgalaxus.ch/im/productimages/7/3/7/1/3/0/1/1/9/7/1/1/3/5/2/7/7/4/8/01993298-0264-7552-98c7-f304434bc5f1"
    ]
  },
  {
    "id": 10,
    "name": "Apple iPhone Duo",
    "reference": "ENOTIK-IPHONEDUO-DIG",
    "category": "Smartphones",
    "oldPrice": "CHF 1 999.–",
    "price": "CHF 1 399.–",
    "priceNum": 1399,
    "image": "https://static.digitecgalaxus.ch/productimages/8/6/8/3/9/7/3/9/7/9/8/1/4/8/6/8/1/7/8/01a08c0b-44a5-7101-b39f-805ea65bf80b",
    "tag": "−30% Digitec",
    "description": "Une nouvelle façon de découvrir l’iPhone. Pliable. Orientable. Transformable. iPhone Duo. Le plus grand écran d’iPhone jamais conçu. Dans un design fin et pliable. Cadre robuste en titane. Des expériences iOS uniques. Système de caméra Dual Fusion de 48 MP. Puce A20 Pro. •   LE PLUS GRAND ÉCRAN. DANS UN DESIGN FIN ET PLIABLE – Le plus grand écran d’iPhone de tous les temps, doté d’un écran interne à nanostructure pour réduire les reflets. Un écran 50 % plus grand que celui de l’iPhone 18 Pro Max. •   PLIABLE. TRANSFORMABLE. ORIENTABLE – Des positions polyvalentes permettent de vivre des expériences iOS repensées pour plus de productivité, de multitâche et une expérience visuelle immersive. •   MAGNIFIQUE ET ROBUSTE – La gamme iPhone Duo est dotée d’un cadre et d’un cache de charnière en titane de classe 5, ainsi que d’un revêtement Ceramic Shield 2 à l’avant et Ceramic Shield à l’arrière. •   SYSTÈME DE CAMÉRA DUAL FUSION 48 MP – Caméra principale Fusion 48 MP et caméra ultra grand angle, offrant des possibilités de prise de vue totalement inédites, comme la fonction « Photo intelligente » qui prend automatiquement des photos. •   NOUVELLES FONCTIONNALITÉS DE L'APPAREIL PHOTO – Désormais équipé de la première caméra FaceTime intégrée sous l'écran et d'une caméra frontale Center Stage de 12 MP. •   REFROIDISSEMENT PAR VAPEUR. PERFORMANCES PRO – La puce A20 Pro est conçue pour les charges de travail IA : un processeur à 6 cœurs jusqu’à 50 % plus rapide et un processeur graphique à 7 cœurs jusqu’à 2,1 fois plus rapide que ceux de l’iPhone 15 Pro.  •  SYSTÈME À DOUBLE BATTERIE. DE L’AUTONOMIE POUR TOUTE LA JOURNÉE – Jusqu’à 8 heures de lecture vidéo en plus (à partir de 23 heures par rapport à l’iPhone 15 Pro) lors de l’utilisation de l’écran interne. Jusqu’à 21 heures de lecture en plus (soit 23 heures au total par rapport à l’iPhone 15 Pro) lorsque vous utilisez l’écran extérieur. •   APPLE INTELLIGENCE − Confidentiel, sécurisé et très performant. Écrivez ce que vous voulez, exprimez votre personnalité et accomplissez vos tâches beaucoup plus facilement. •   FONCTIONNALITÉS DE SÉCURITÉ ESSENTIELLES – Grâce à la détection des accidents, l’iPhone peut détecter un accident de voiture grave et appeler les secours si vous n’en êtes pas en mesure. Prix de référence Digitec Suisse (CHF 1 999.–) remisé à −30%.",
    "specs": "256 Go, Ciel nocturne, 7.60\", Double eSIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
    "storages": [
      "128 Go",
      "256 Go",
      "512 Go",
      "1 To"
    ],
    "colors": [
      {
        "name": "Ciel nocturne",
        "hex": "#161924",
        "image": "https://static.digitecgalaxus.ch/productimages/8/6/8/3/9/7/3/9/7/9/8/1/4/8/6/8/1/7/8/01a08c0b-44a5-7101-b39f-805ea65bf80b"
      }
    ],
    "gallery": [
      "https://static.digitecgalaxus.ch/im/productimages/8/6/8/3/9/7/3/9/7/9/8/1/4/8/6/8/1/7/8/01a08c0b-44a5-7101-b39f-805ea65bf80b",
      "https://static.digitecgalaxus.ch/im/productimages/1/5/7/1/1/6/3/6/3/9/7/8/5/4/4/5/8/3/9/01a08c0b-48dc-7cc2-a804-b2d04c73a6b5",
      "https://static.digitecgalaxus.ch/im/productimages/1/3/1/1/4/3/4/4/8/5/7/2/9/1/2/7/9/2/2/01a08c0b-4786-793b-8781-061f6ff54c28",
      "https://static.digitecgalaxus.ch/im/productimages/9/6/0/6/8/9/4/2/4/9/2/0/8/6/7/2/9/5/01a08c0b-4893-7ecb-82b1-8a6a5f705fd9",
      "https://static.digitecgalaxus.ch/im/productimages/8/7/4/6/9/2/6/4/1/4/8/0/2/1/7/5/1/8/4/01a08c0b-4648-746b-a970-3aadc61ed572",
      "https://static.digitecgalaxus.ch/im/productimages/2/8/0/1/2/7/0/2/7/7/2/9/5/3/9/1/7/1/9/01a08c0b-479e-7403-917d-411852b20ed2",
      "https://static.digitecgalaxus.ch/im/productimages/5/9/1/5/8/5/7/8/4/3/2/6/3/1/9/7/1/3/8/01a08c0b-43dd-7c8b-94f7-fcb11ffe234f",
      "https://static.digitecgalaxus.ch/im/productimages/2/6/7/9/9/3/3/1/1/4/7/8/8/2/0/3/2/0/3/01a08c0b-481c-7360-9101-a754f87a3c9a"
    ]
  },
  {
    "id": 11,
    "name": "Apple iPhone 15",
    "reference": "ENOTIK-IPHONE15-DIG",
    "category": "Smartphones",
    "oldPrice": "CHF 629.–",
    "price": "CHF 440.–",
    "priceNum": 440,
    "image": "https://static.digitecgalaxus.ch/productimages/8/6/2/0/2/3/8/7/0/4/8/7/1/0/7/7/7/2/8/fda455d3-4305-4808-82ad-14cf60d50e49.jpg",
    "tag": "−30% Digitec",
    "description": "Chaque année, Apple présente les nouveaux modèles d'iPhone lors de la keynote de septembre, et avec l'iPhone 15, vous pouvez vous attendre à encore plus de puissance ainsi qu'une mise à jour esthétique. Le système de caméra avancé est amélioré avec une meilleure caméra, comprenant un capteur principal de 48 mégapixels, un capteur ultra grand-angle de 12 mégapixels, une caméra frontale de 12 mégapixels et un zoom optique 2x. Le processeur bénéficie également d'une mise à niveau par rapport au modèle précédent : l'iPhone 15 garantit des performances fluides pour vos tâches quotidiennes grâce à un matériel puissant, incluant le processeur A16 Bionic ultra-rapide et 6 Go de RAM, que ce soit pour naviguer, multitâcher ou diffuser du contenu. Le cadre de l'écran Super Retina XDR de 6,1 pouces (15,49 cm) est devenu plus fin avec l'iPhone 15, donnant à l'écran du smartphone Apple une apparence presque infinie. De plus, la série iPhone 15 introduit Dynamic Island pour tous les modèles – pas seulement pour les modèles Pro. Sous l'écran, l'iPhone 15 dispose d'une batterie plus grande. Grâce à la batterie intelligente de 3 877 mAh, qui s'adapte à vos habitudes d'utilisation, l'iPhone d'Apple devient votre compagnon fiable tout au long de la journée et peut même être chargé sans fil. Avec l'iPhone 15 arrive également le port USB-C, qui sera uniformément introduit pour tous les petits et moyens appareils électroniques dans l'UE à partir de 2024. Commandez maintenant l'iPhone 15 et choisissez entre les options de stockage de 128 Go, 256 Go et 512 Go, ainsi que les couleurs Rose, Jaune, Vert, Bleu et Noir. Contenu de la livraison : Apple iPhone 15, câble de chargement USB-C vers USB-C (1 m), documentation. Prix de référence Digitec Suisse (CHF 629.–) remisé à −30%.",
    "specs": "128 Go, Noir, 6.10\", SIM + eSIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
    "storages": [
      "128 Go",
      "256 Go",
      "512 Go",
      "1 To"
    ],
    "colors": [
      {
        "name": "Noir",
        "hex": "#1C1C1E",
        "image": "https://static.digitecgalaxus.ch/productimages/8/6/2/0/2/3/8/7/0/4/8/7/1/0/7/7/7/2/8/fda455d3-4305-4808-82ad-14cf60d50e49.jpg"
      }
    ],
    "gallery": [
      "https://static.digitecgalaxus.ch/im/productimages/8/6/2/0/2/3/8/7/0/4/8/7/1/0/7/7/7/2/8/fda455d3-4305-4808-82ad-14cf60d50e49.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/6/9/6/4/2/8/5/1/9/8/1/9/1/5/2/1/0/9/1/b0fc87b1-734d-495f-b6e7-bb6c042b19ed.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/2/5/4/3/5/6/4/1/4/2/7/7/0/9/9/0/6/1/3/01654deb-fec4-4ab8-b0cf-b5a41e60d375.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/6/1/4/0/5/9/8/0/3/6/4/3/5/3/5/9/6/6/6/81be43c9-0001-4fe9-a544-f6c978880990.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/3/4/9/9/4/2/6/3/7/5/7/5/4/5/3/7/2/9/9/dbfbe013-9ac0-4759-9d51-d3b4e5752a90.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/6/3/2/3/4/1/3/0/1/1/0/2/6/1/3/9/9/3/3/2296d3b2-4e04-4db6-83dd-fef09df043ea.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/5/2/0/3/4/4/3/4/2/0/4/8/7/5/7/6/4/3/5/119b9669-5106-41dc-b805-86e266ada98d.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/2/8/6/3/2/1/3/8/6/3/5/7/9/3/7/9/1/2/9/019860d1-6e88-761a-afb2-9f3c58d78b9e"
    ]
  },
  {
    "id": 12,
    "name": "Apple iPhone 16",
    "reference": "ENOTIK-IPHONE16-DIG",
    "category": "Smartphones",
    "oldPrice": "CHF 736.–",
    "price": "CHF 515.–",
    "priceNum": 515,
    "image": "https://static.digitecgalaxus.ch/productimages/2/6/5/0/5/5/0/8/0/1/2/8/7/7/4/6/8/1/4/48c5d2b7-41c1-409c-8407-539ea8fa14f9_cropped.jpg",
    "tag": "−30% Digitec",
    "description": "Avec le contrôle de la caméra, vous pouvez accéder plus facilement et rapidement aux outils de caméra tels que le zoom ou la profondeur de champ, et prendre la photo parfaite en un temps record. Avec l'améliorée caméra ultra grand-angle à mise au point automatique, vous pouvez capturer des photos et vidéos macro incroyablement détaillées. Réalisez des images haute résolution impressionnantes avec la caméra Fusion de 48 MP ou effectuez un zoom optique 2x. Les styles photographiques de nouvelle génération vous offrent plus de flexibilité créative, vous permettant de personnaliser encore plus chaque photo. Et vous pouvez annuler tous les styles à tout moment. Le A18 représente un bond de deux générations par rapport à la puce A16 Bionic de l'iPhone 15. Il permet des fonctionnalités avancées de photo et de vidéo ainsi que des jeux de niveau console avec une efficacité énergétique exceptionnelle. L'iPhone 16 fonctionne avec la puce A18, offrant un véritable coup de pouce pour la batterie avec jusqu'à 22 heures de lecture vidéo. Chargez via USB-C ou connectez un chargeur MagSafe pour une charge sans fil plus rapide. L'iPhone 16 possède un design robuste en aluminium de qualité aérospatiale avec un écran Super Retina XDR de 6,1\". Il est extrêmement résistant grâce à la Ceramic Shield de dernière génération à l'avant, qui est deux fois plus dur que tout autre verre de smartphone. Le moyen le plus rapide d'accéder à votre fonctionnalité préférée : maintenez-la simplement enfoncée pour lancer la fonction souhaitée - comme la lampe de poche, un mémo vocal ou le mode silencieux. Avec iOS 18, vous pouvez colorer les icônes de votre écran d'accueil dans n'importe quelle teinte. Trouvez plus rapidement vos photos préférées dans l'application Photos révisée et ajoutez des effets animés ludiques à des mots, phrases ou emojis dans iMessage. Grâce à la détection d'accidents, l'iPhone peut détecter un grave accident de voiture et appeler de l'aide si vous ne pouvez pas le faire. Prix de référence Digitec Suisse (CHF 736.–) remisé à −30%.",
    "specs": "128 Go, Blanc, 6.10\", SIM + eSIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
    "storages": [
      "128 Go",
      "256 Go",
      "512 Go",
      "1 To"
    ],
    "colors": [
      {
        "name": "Blanc",
        "hex": "#F5F5F7",
        "image": "https://static.digitecgalaxus.ch/productimages/2/6/5/0/5/5/0/8/0/1/2/8/7/7/4/6/8/1/4/48c5d2b7-41c1-409c-8407-539ea8fa14f9_cropped.jpg"
      }
    ],
    "gallery": [
      "https://static.digitecgalaxus.ch/im/productimages/2/6/5/0/5/5/0/8/0/1/2/8/7/7/4/6/8/1/4/48c5d2b7-41c1-409c-8407-539ea8fa14f9_cropped.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/3/5/3/2/9/2/0/2/3/0/7/5/4/7/9/6/5/9/1/eda5761f-dceb-4c35-832d-3b40b4114ad1_cropped.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/1/2/8/8/7/2/8/7/6/8/3/1/4/0/4/4/6/6/7/150aa651-1cc0-4a6c-89fb-d26e590a1cc4_cropped.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/1/9/4/7/3/4/8/2/1/7/7/6/9/9/4/9/8/7/9/daa7ef23-b17a-48ae-b3f6-4c0cd2035980_cropped.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/4/2/4/9/4/7/9/1/3/8/4/0/1/8/6/9/1/4/8/b9b739c4-f2ef-4900-869b-fcf12f335e7b_cropped.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/8/3/1/3/8/4/0/7/6/1/9/4/2/0/7/0/4/6/3/b85d1539-b303-4cee-95de-7b384da305e0_cropped.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/3/1/6/5/1/2/7/5/5/3/4/6/3/9/0/3/9/1/ee230e46-05f5-4dba-8bf3-5337a74f844b_cropped.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/8/9/5/1/6/4/4/7/3/2/5/8/6/1/4/8/4/2/5/cfa9b8a6-8588-4942-afd0-9cf6c7b12516_cropped.jpg"
    ]
  },
  {
    "id": 13,
    "name": "Apple iPhone 16e",
    "reference": "ENOTIK-IPHONE16E-DIG",
    "category": "Smartphones",
    "oldPrice": "CHF 569.–",
    "price": "CHF 398.–",
    "priceNum": 398,
    "image": "https://static.digitecgalaxus.ch/productimages/9/1/6/7/1/5/2/2/0/8/9/4/0/8/3/5/7/6/6/af515399-a36b-48fb-9ff1-856e593f0b57.jpg",
    "tag": "−30% Digitec",
    "description": "L'iPhone 16e a été conçu pour l'intelligence d'Apple. Il est équipé de la puissance de la puce A181, d'un appareil photo Fusion 48 MP qui prend des photos en super-haute résolution et d'une autonomie de batterie gigantesque - pour avoir plus de temps pour écrire des messages, surfer sur le web et plus encore. Prix de référence Digitec Suisse (CHF 569.–) remisé à −30%.",
    "specs": "128 Go, Noir, 6.10\", SIM + eSIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
    "storages": [
      "128 Go",
      "256 Go",
      "512 Go",
      "1 To"
    ],
    "colors": [
      {
        "name": "Noir",
        "hex": "#1C1C1E",
        "image": "https://static.digitecgalaxus.ch/productimages/9/1/6/7/1/5/2/2/0/8/9/4/0/8/3/5/7/6/6/af515399-a36b-48fb-9ff1-856e593f0b57.jpg"
      }
    ],
    "gallery": [
      "https://static.digitecgalaxus.ch/im/productimages/9/1/6/7/1/5/2/2/0/8/9/4/0/8/3/5/7/6/6/af515399-a36b-48fb-9ff1-856e593f0b57.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/5/7/7/2/8/2/2/4/5/7/7/7/2/1/7/6/8/3/3/524da5ab-7800-451d-a904-d59c426a87a4.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/3/2/2/2/9/0/3/6/2/8/3/5/7/6/2/0/9/7/7/dd035882-2446-4f74-8f28-e434464c5f4a.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/6/9/0/2/1/2/9/6/6/8/0/4/3/1/6/1/0/5/3/201921e2-8259-42f0-817b-e300e9ad0c54.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/6/8/8/1/4/0/4/0/1/5/6/7/0/4/9/5/8/6/3/d5cea6d2-75ab-4980-902a-c4135f80a32e.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/9/6/1/7/9/4/6/4/3/5/4/3/2/4/9/6/0/4/a4e7be2b-97ad-43f7-89c6-9799c049c965.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/6/3/5/2/4/3/2/9/0/9/8/9/7/4/8/4/9/6/bc364ff7-df42-49b0-8f19-c472f56f4ab4_cropped.jpg",
      "https://static.digitecgalaxus.ch/im/productimages/9/1/4/9/1/0/8/5/9/8/1/7/9/5/4/1/7/2/6/543e61a4-015d-488b-b89a-41858578a860.jpg"
    ]
  },
  {
    "id": 14,
    "name": "Apple iPhone Air",
    "reference": "ENOTIK-IPHONEAIR-DIG",
    "category": "Smartphones",
    "oldPrice": "CHF 887.–",
    "price": "CHF 621.–",
    "priceNum": 621,
    "image": "https://static.digitecgalaxus.ch/productimages/4/3/4/4/5/3/9/1/7/3/0/9/5/8/6/1/7/9/019933ab-f894-78d0-b8ff-cb279f4623d4",
    "tag": "−30% Digitec",
    "description": "iPhone Air. L'iPhone le plus fin jamais conçu. Écran de 6,5 pouces, bouclier en céramique robuste à l'avant et à l'arrière, puce A19 Pro, système de caméra Fusion 48 MP et caméra frontale Center Stage. - SUPER FIN. SUPER LÉGÈRE. SUPER FORTE. - L'iPhone le plus fin jamais conçu avec la puissance d'une puce Pro. Avec ses 5,6 mm d'épaisseur, le nouvel iPhone Air est si fin et léger qu'il en devient insaisissable.  - PLUS ROBUSTE QUE N'IMPORTE QUEL APPAREIL AVANT - Cadre ultraléger en titane. Le Ceramic Shield protège l'arrière de l'iPhone Air, pour une résistance à la casse 4x supérieure. Et le nouveau Ceramic Shield 2 à l'avant offre une résistance aux rayures 3x supérieure. - DEUX CAMÉRAS AVANCÉS EN UN - Système de caméra Fusion 48 MP avec zoom 2x de qualité optique. Prenez simplement des photos parfaites - directement de là où vous êtes.  - CAMÉRA FRONTALE DE 18MP CENTER STAGE - Cadrage flexible. Des selfies de groupe intelligents, des vidéos avec double enregistrement des caméras avant et arrière et plus encore.  - PUCE A19 PRO. EXTRÊMEMENT RAPIDE. EXTRÊMEMENT EFFICACE. - L'A19 Pro est la puce iPhone la plus efficace jamais conçue. Elle offre des performances pro, le tout dans un design révolutionnaire fin et léger.  - BATTERIE POUR TOUTE LA JOURNÉE - Autonomie de la batterie pour toute la journée avec jusqu'à 27 heures de lecture vidéo. - iOS 26. NOUVEAU LOOK. TOUT À FAIT MAGIQUE. - Le nouveau design Liquid Glass. Magnifique. Et si familier. Avec un écran de verrouillage plus vivant, des arrière-plans personnalisables, des sondages dans les messages, un filtre d'appel et plus encore.  - CONÇU POUR APPLE INTELLIGENCE - Privé. En toute sécurité. Et avec beaucoup de puissance. Écrivez quelque chose, montrez votre personnalité et faites les choses beaucoup plus facilement.6  - FÉATURES SATELLITAIRES - Si vous devez contacter un service d'urgence mais que vous n'avez ni réseau ni Wi-Fi, vous pouvez utiliser SOS par satellite.7 Et en cas d'accident de voiture grave, l'iPhone peut contacter les secours si vous ne pouvez pas le faire. Prix de référence Digitec Suisse (CHF 887.–) remisé à −30%.",
    "specs": "256 Go, Bleu ciel, 6.50\", Double SIM, 5G · Puce Apple Bionic/Pro · Super Retina XDR",
    "storages": [
      "128 Go",
      "256 Go",
      "512 Go",
      "1 To"
    ],
    "colors": [
      {
        "name": "Bleu ciel",
        "hex": "#1C2D42",
        "image": "https://static.digitecgalaxus.ch/productimages/4/3/4/4/5/3/9/1/7/3/0/9/5/8/6/1/7/9/019933ab-f894-78d0-b8ff-cb279f4623d4"
      }
    ],
    "gallery": [
      "https://static.digitecgalaxus.ch/im/productimages/4/3/4/4/5/3/9/1/7/3/0/9/5/8/6/1/7/9/019933ab-f894-78d0-b8ff-cb279f4623d4",
      "https://static.digitecgalaxus.ch/im/productimages/2/9/0/4/3/7/3/9/3/4/4/3/6/5/7/1/1/4/9/019933ab-ff27-7394-818f-b999260b44bc",
      "https://static.digitecgalaxus.ch/im/productimages/6/8/0/4/4/3/2/9/0/3/3/2/4/8/9/6/7/6/019933ac-0086-7df5-8774-5bf05bc596aa",
      "https://static.digitecgalaxus.ch/im/productimages/5/3/8/1/8/5/8/0/9/6/3/5/5/0/0/9/0/8/3/019933ac-0063-7a76-9804-c7bc5a39e0c4",
      "https://static.digitecgalaxus.ch/im/productimages/2/0/6/2/9/8/1/3/0/5/3/8/0/4/5/7/2/5/9/019933ad-fe85-7cf2-9882-70bdc8c9e202",
      "https://static.digitecgalaxus.ch/im/productimages/1/0/8/1/6/3/3/5/2/2/4/9/4/8/3/0/0/3/7/019933ae-073c-7694-b7cf-8d5a85ec8f65",
      "https://static.digitecgalaxus.ch/im/productimages/4/6/5/1/8/5/5/7/4/0/4/4/5/6/5/2/9/4/4/019933ae-07bc-79eb-b4e5-2ef425c76ae9",
      "https://static.digitecgalaxus.ch/im/productimages/3/6/5/5/7/7/4/9/8/9/6/4/3/7/3/5/9/0/9/019933ac-01a6-7424-beb7-e8b4ce96e21e"
    ]
  },
  {
    "id": 15,
    "name": "Sony WH-1000XM6",
    "reference": "ENOTIK-SNYXM6-011",
    "category": "Audio & TV",
    "oldPrice": "CHF 449.–",
    "price": "CHF 399.–",
    "priceNum": 399,
    "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
    "tag": "Bestseller",
    "description": "Référence mondiale en réduction de bruit active avec processeur IA.",
    "specs": "Autonomie 35h · Bluetooth 5.4 · Hi-Res Audio LDAC · Confort supérieur",
    "colors": [
      {
        "name": "Noir Carbone",
        "hex": "#1A1A1A",
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85"
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85"
    ]
  },
  {
    "id": 16,
    "name": "MacBook Air M4",
    "reference": "ENOTIK-MBA-M4-012",
    "category": "Informatique",
    "oldPrice": "CHF 1’199.–",
    "price": "CHF 1’099.–",
    "priceNum": 1099,
    "image": "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
    "tag": "Nouveau",
    "description": "Puce M4 ultra-performante dans un boîtier tout aluminium de 1.2 kg.",
    "specs": "16 Go RAM · SSD 512 Go · Écran Retina 13.6\" · Clavier suisse QWERTZ",
    "colors": [
      {
        "name": "Minuit Sidéral",
        "hex": "#1F2430",
        "image": "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85"
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85"
    ]
  },
  {
    "id": 17,
    "name": "Dyson Airwrap Multi-Styler",
    "reference": "ENOTIK-DYS-AW-013",
    "category": "Électroménager",
    "oldPrice": "CHF 529.–",
    "price": "CHF 449.–",
    "priceNum": 449,
    "image": "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85",
    "tag": "−15%",
    "description": "Coiffage professionnel sans chaleur extrême grâce à l’effet Coanda.",
    "specs": "Moteur V9 110 000 tr/min · Contrôle thermique intelligent",
    "colors": [
      {
        "name": "Cuivre & Nickel",
        "hex": "#B87333",
        "image": "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85"
      }
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85"
    ]
  }
]

const categories = [
  { label: 'Smartphones', sub: 'iPhone 17 & 18 Pro, Air, Max (−30% Digitec)', image: 'https://static.digitecgalaxus.ch/productimages/9/0/6/9/1/8/4/0/8/8/2/6/6/4/3/1/4/2/2/019932ab-34b6-7f88-beed-ed3c05518217' },
  { label: 'Audio & TV', sub: 'Écouter. Regarder. Vibrer.', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1100&q=85' },
  { label: 'Informatique', sub: 'Le travail, en mieux.', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1100&q=85' },
  { label: 'Électroménager', sub: 'Le beau, au quotidien.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1100&q=85' },
]

export function getProductBaseStorage(p: Product): string {
  if (p.specs && (p.specs.includes('512 Go') || p.specs.includes('512\u00a0Go'))) return '512 Go'
  if (p.specs && (p.specs.includes('128 Go') || p.specs.includes('128\u00a0Go'))) return '128 Go'
  if (p.storages && p.storages.length > 0) {
    if (p.storages.includes('256 Go')) return '256 Go'
    return p.storages[0]
  }
  return '256 Go'
}

const STORAGE_OFFSETS: Record<string, { discounted: number; original: number }> = {
  '128 Go': { discounted: 0, original: 0 },
  '256 Go': { discounted: 84, original: 120 },
  '512 Go': { discounted: 252, original: 360 },
  '1 To': { discounted: 420, original: 600 },
  '2 To': { discounted: 756, original: 1080 },
}

export function getStoragePricing(p: Product, storage?: string) {
  if (!p.storages || p.storages.length === 0 || !storage) {
    return {
      priceNum: p.priceNum,
      price: p.price,
      oldPrice: p.oldPrice || '',
      diff: 0,
    }
  }

  const base = getProductBaseStorage(p)
  const baseOff = STORAGE_OFFSETS[base] || STORAGE_OFFSETS['256 Go']
  const selOff = STORAGE_OFFSETS[storage] || baseOff

  const diffDiscounted = selOff.discounted - baseOff.discounted
  const diffOriginal = selOff.original - baseOff.original

  const priceNum = Math.max(99, p.priceNum + diffDiscounted)
  const oldPriceNumBase = p.oldPrice
    ? parseInt(p.oldPrice.replace(/[^0-9]/g, ''), 10)
    : Math.round(p.priceNum * 1.4)
  const oldPriceNum = Math.max(priceNum + 50, oldPriceNumBase + diffOriginal)

  return {
    priceNum,
    price: `CHF ${priceNum.toLocaleString('fr-CH')}.–`,
    oldPrice: `CHF ${oldPriceNum.toLocaleString('fr-CH')}.–`,
    diff: diffDiscounted,
  }
}

export function getStorageUsageInfo(storage: string) {
  switch (storage) {
    case '128 Go':
      return {
        badge: 'Essentiel & Quotidien',
        usage: 'Idéal pour le streaming, ~30’000 photos standard ou 25h de vidéo HD.',
      }
    case '256 Go':
      return {
        badge: 'Recommandé Digitec',
        usage: 'Le choix idéal : ~65’000 photos, jeux AAA & fonctionnalités Apple Intelligence.',
      }
    case '512 Go':
      return {
        badge: 'Créateurs & Multimédia',
        usage: 'Spacieux pour ~130’000 photos, enregistrement 4K 60fps & projets vidéo lourds.',
      }
    case '1 To':
      return {
        badge: 'Pro & Tournage Studio',
        usage: 'Conçu pour la vidéo 4K ProRes sans compression & bibliothèques photos RAW.',
      }
    case '2 To':
      return {
        badge: 'Ultra Stockage Titan',
        usage: 'Capacité maximale absolue pour stocker l’intégralité de vos archives sans compromis.',
      }
    default:
      return {
        badge: 'Capacité optimisée',
        usage: `Capacité de ${storage} avec mémoire flash NVMe haute vitesse.`,
      }
  }
}

export function getDynamicSpecs(specs: string, storage?: string, colorName?: string) {
  if (!specs) return ''
  let result = specs
  if (storage) {
    result = result.replace(/\b(128|256|512)\s*(Go|GB)\b|\b(1|2)\s*(To|TB)\b/gi, storage)
  }
  if (colorName) {
    result = result.replace(/\b(Deep Blue|Silver \(Argent\)|Silver|Argent|Blanc|Noir Sidéral|Noir|Bleu ciel|Ciel nocturne)\b/gi, colorName)
  }
  return result
}

export default function Page() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [loginInput, setLoginInput] = useState('')
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)

  // Color selection state per product id
  const [selectedProductColors, setSelectedProductColors] = useState<Record<number, ProductColor>>({})

  // Quick View / Full Gallery Modal State
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const [quickViewSelectedColor, setQuickViewSelectedColor] = useState<ProductColor | null>(null)
  const [quickViewSelectedImage, setQuickViewSelectedImage] = useState<string>('')
  const [quickViewSelectedStorage, setQuickViewSelectedStorage] = useState<string>('256 Go')

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
  const cartSubtotal = useMemo(
    () => cartItems.reduce((acc, item) => acc + (item.unitPriceNum ?? item.product.priceNum) * item.quantity, 0),
    [cartItems]
  )

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
    }, 3200)
  }

  function openQuickView(product: Product) {
    const activeColor = selectedProductColors[product.id] || getDefaultProductColor(product)
    const initialStorage = product.storages?.[0] || getProductBaseStorage(product)
    setQuickViewProduct(product)
    setQuickViewSelectedColor(activeColor)
    setQuickViewSelectedImage(activeColor?.image || product.image)
    setQuickViewSelectedStorage(initialStorage)
  }

  function addToCart(product: Product, overrideColor?: ProductColor, overrideStorage?: string) {
    const colorToUse = overrideColor || selectedProductColors[product.id] || getDefaultProductColor(product)
    const storageToUse = overrideStorage || product.storages?.[0] || getProductBaseStorage(product)
    const pricing = getStoragePricing(product, storageToUse)
    const key = `${product.id}-${colorToUse?.name || 'default'}-${storageToUse}`

    setCartItems((prev) => {
      const existing = prev.find((item) => item.itemKey === key)
      if (existing) {
        return prev.map((item) => (item.itemKey === key ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [
        ...prev,
        {
          itemKey: key,
          product,
          quantity: 1,
          selectedColor: colorToUse?.name,
          selectedColorImage: colorToUse?.image,
          selectedStorage: storageToUse,
          unitPriceNum: pricing.priceNum,
          unitPrice: pricing.price,
        },
      ]
    })
    setCheckoutSuccess(false)
    const variantDesc = [colorToUse?.name, storageToUse].filter(Boolean).join(' · ')
    showToast(`« ${product.name}${variantDesc ? ` (${variantDesc})` : ''} » ajouté au panier`)
  }

  function updateQuantity(itemKey: string, delta: number) {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.itemKey === itemKey) {
            const nextQty = item.quantity + delta
            return nextQty > 0 ? { ...item, quantity: nextQty } : null
          }
          return item
        })
        .filter((item): item is CartItem => item !== null)
    })
  }

  function removeFromCart(itemKey: string) {
    setCartItems((prev) => prev.filter((item) => item.itemKey !== itemKey))
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
      <div className="bg-[#DA291C] px-5 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-sm flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <span className="flex items-center gap-1.5"><span className="text-base">🇨🇭</span> SÉLECTION DIGITEC SUISSE : −30% SUR TOUS LES IPHONE APPLE</span>
        <span>·</span>
        <span>GALERIE OFFICIELLE DIGITEC</span>
        <span>·</span>
        <span>LIVRAISON OFFERTE DÈS CHF 80</span>
        <span className="hidden md:inline">·</span>
        <span className="hidden md:inline">EXPÉDITION 24H LAUSANNE · GARANTIE SUISSE 2 ANS</span>
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4">
            {filtered.map((product) => {
              const isLiked = liked.includes(product.id)
              const activeColor = selectedProductColors[product.id] || getDefaultProductColor(product)
              const displayImage = activeColor?.image || product.image

              return (
                <article key={product.id} className="group flex flex-col justify-between">
                  <div>
                    <div className="relative mb-3 aspect-[0.82] overflow-hidden rounded-[4px] bg-gradient-to-b from-[#242426] to-[#141416] shadow-md border border-white/5 flex items-center justify-center p-4">
                      <img
                        src={displayImage}
                        alt={product.name}
                        onClick={() => openQuickView(product)}
                        className="size-full object-contain transition duration-500 group-hover:scale-105 cursor-pointer drop-shadow-2xl"
                      />

                      {/* Tag */}
                      <span className="absolute left-3 top-3 rounded-[2px] bg-[#DA291C] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white shadow-sm">
                        {product.tag}
                      </span>

                      {/* Like button */}
                      <button
                        aria-label={`Ajouter ${product.name} aux favoris`}
                        onClick={() => setLiked((prev) => (prev.includes(product.id) ? prev.filter((i) => i !== product.id) : [...prev, product.id]))}
                        className={`absolute right-3 top-3 rounded-full p-2 transition hover:scale-110 shadow ${
                          isLiked ? 'bg-[#DA291C] text-white' : 'bg-white/90 text-[#151515] hover:bg-white'
                        }`}
                        title={isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                      >
                        {isLiked ? <Check size={14} /> : <Heart size={14} strokeWidth={1.8} />}
                      </button>

                      {/* Quick View Button */}
                      <button
                        onClick={() => openQuickView(product)}
                        className="absolute left-3 bottom-14 flex items-center gap-1.5 rounded-[2px] bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white transition hover:bg-[#DA291C] opacity-0 group-hover:opacity-100 shadow-md"
                        title="Ouvrir la galerie et les spécifications"
                      >
                        <Eye size={12} strokeWidth={2.2} />
                        <span>Galerie & Couleurs</span>
                      </button>

                      {/* Direct Add to Cart Button */}
                      <button
                        onClick={() => addToCart(product, activeColor)}
                        className="absolute bottom-3 left-3 right-3 translate-y-14 rounded-[2px] bg-[#DA291C] py-3 text-[11px] uppercase tracking-[0.14em] text-white font-bold transition duration-300 hover:bg-[#b91c1c] group-hover:translate-y-0 shadow-lg flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag size={13} />
                        <span>Ajouter au panier</span>
                      </button>
                    </div>

                    <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-white/50">{product.category}</p>
                    <h3
                      onClick={() => openQuickView(product)}
                      className="text-sm font-bold text-white hover:text-[#DA291C] transition cursor-pointer"
                    >
                      {product.name.replace(/\s*\([^)]*\)/, '')}{activeColor ? ` (${activeColor.name})` : ''}
                    </h3>

                    {/* Color Swatches */}
                    {product.colors && product.colors.length > 0 && (
                      <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                        {product.colors.map((c) => {
                          const isSelected = activeColor?.name === c.name
                          return (
                            <button
                              key={c.name}
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProductColors((prev) => ({ ...prev, [product.id]: c }))
                              }}
                              title={c.name}
                              className={`size-4 rounded-full border transition-all ${
                                isSelected
                                  ? 'ring-2 ring-[#DA291C] ring-offset-1 ring-offset-[#151515] scale-110 border-white'
                                  : 'border-white/20 hover:scale-110 opacity-70 hover:opacity-100'
                              }`}
                              style={{ backgroundColor: c.hex }}
                            />
                          )
                        })}
                        <span className="text-[10px] text-white/50 ml-1 truncate">
                          {activeColor ? activeColor.name : ''}
                        </span>
                      </div>
                    )}

                    <p className="mt-1 text-[10px] text-white/45">Réf. {activeColor?.name && digitecColorRefMap[activeColor.name] ? digitecColorRefMap[activeColor.name] : product.reference}</p>
                  </div>

                  <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                    <span className="text-xs text-white/45 line-through">{product.oldPrice}</span>
                    <span className="text-sm font-bold text-white">{product.price}</span>
                    <span className="rounded bg-[#DA291C] px-1.5 py-0.5 text-[9px] font-black text-white shadow-sm">
                      {product.tag.includes('−') ? product.tag.split(' ')[0] : product.tag}
                    </span>
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
                  {cartItems.map((item) => {
                    const { product, quantity, itemKey, selectedColor, selectedColorImage, selectedStorage } = item
                    return (
                      <div key={itemKey} className="flex gap-4 border-b border-[#151515]/10 pb-4">
                        <img
                          src={selectedColorImage || product.image}
                          alt={product.name}
                          className="size-20 rounded bg-[#1c1c1e] object-cover border border-[#151515]/10"
                        />
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-sm font-bold text-[#151515]">{product.name}</h4>
                              {(selectedColor || selectedStorage) && (
                                <p className="text-[11px] font-semibold text-[#DA291C]">
                                  {[selectedColor, selectedStorage].filter(Boolean).join(' · ')}
                                </p>
                              )}
                              <p className="text-[10px] text-[#151515]/50">{product.reference}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(itemKey)}
                              className="text-[#151515]/40 hover:text-[#DA291C] p-1 transition"
                              aria-label="Supprimer"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-[#151515]/20 rounded bg-white">
                              <button onClick={() => updateQuantity(itemKey, -1)} className="px-2 py-1 text-xs hover:bg-[#151515]/5">
                                <Minus size={12} />
                              </button>
                              <span className="px-2 text-xs font-bold">{quantity}</span>
                              <button onClick={() => updateQuantity(itemKey, 1)} className="px-2 py-1 text-xs hover:bg-[#151515]/5">
                                <Plus size={12} />
                              </button>
                            </div>
                            <span className="text-sm font-bold text-[#DA291C]">
                              CHF {(((item.unitPriceNum ?? product.priceNum)) * quantity).toLocaleString('fr-CH')}.–
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cartItems.length > 0 && !checkoutSuccess && (
              <div className="border-t border-[#151515]/15 pt-4">
                <div className="mb-2 flex justify-between text-xs text-[#151515]/70">
                  <span className="flex items-center gap-1 font-medium">🇨🇭 Livraison en Suisse</span>
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

      {/* Quick View & Full Gallery Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div onClick={() => setQuickViewProduct(null)} className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-4xl rounded-lg bg-white shadow-2xl border border-[#DA291C]/30 overflow-hidden my-auto max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 bg-neutral-50">
              <div className="flex items-center gap-2.5">
                <span className="flex size-6 items-center justify-center rounded-[3px] bg-[#DA291C] text-xs font-bold text-white shadow-sm">✚</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DA291C]">
                  🇨🇭 Galerie & Spécifications Officielles Suisse
                </span>
              </div>
              <button
                onClick={() => setQuickViewProduct(null)}
                className="rounded-full p-1.5 text-neutral-500 hover:bg-neutral-200 hover:text-black transition"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content Grid */}
            <div className="overflow-y-auto p-6 grid gap-8 lg:grid-cols-2">
              {/* Left: Gallery & Zoom */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[0.95] overflow-hidden rounded-lg bg-gradient-to-b from-neutral-50 to-neutral-150 border border-neutral-200 shadow-inner group flex items-center justify-center p-6">
                  <img
                    src={quickViewSelectedImage}
                    alt={quickViewProduct.name}
                    className="size-full object-contain transition duration-500 group-hover:scale-105 drop-shadow-xl"
                  />
                  {quickViewSelectedColor && (
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/80 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white shadow">
                      Finition : {quickViewSelectedColor.name}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 rounded bg-[#DA291C] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                    {quickViewProduct.tag}
                  </span>
                </div>

                {/* Thumbnails Gallery */}
                {quickViewProduct.gallery && quickViewProduct.gallery.length > 0 && (() => {
                  const currentGallery = quickViewSelectedColor?.image
                    ? [quickViewSelectedColor.image, ...quickViewProduct.gallery.filter((img) => img !== quickViewSelectedColor.image)]
                    : quickViewProduct.gallery
                  return (
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        Galerie officielle ({currentGallery.length} vues haute résolution) :
                      </p>
                      <div className="grid grid-cols-6 gap-2">
                        {currentGallery.map((imgUrl, idx) => {
                          const isActive = quickViewSelectedImage === imgUrl
                          return (
                            <button
                              key={idx}
                              onClick={() => setQuickViewSelectedImage(imgUrl)}
                              className={`relative aspect-square overflow-hidden rounded-md border-2 transition p-1 bg-neutral-50 flex items-center justify-center ${
                                isActive
                                  ? 'border-[#DA291C] ring-2 ring-[#DA291C]/30 scale-105 shadow-md bg-white'
                                  : 'border-neutral-200 hover:border-neutral-400 opacity-80 hover:opacity-100'
                              }`}
                            >
                              <img src={imgUrl} alt={`Vue ${idx + 1}`} className="size-full object-contain drop-shadow" />
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )
                })()}
              </div>

              {/* Right: Info, Colors, Storage, Price & Add */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                      {quickViewProduct.category}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      Réf. {quickViewSelectedColor?.name && digitecColorRefMap[quickViewSelectedColor.name] ? digitecColorRefMap[quickViewSelectedColor.name] : quickViewProduct.reference}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-[#151515] leading-tight">
                    {quickViewProduct.name.replace(/\s*\([^)]*\)/, '')}
                    {quickViewSelectedColor && (
                      <span className="text-neutral-500 font-normal"> · {quickViewSelectedColor.name}</span>
                    )}
                    {quickViewSelectedStorage && (
                      <span className="ml-2 text-2xl font-sans font-black text-[#DA291C]">
                        {quickViewSelectedStorage}
                      </span>
                    )}
                  </h3>
                  {quickViewSelectedColor && (
                    <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1.5">
                      Finition active :{' '}
                      <span className="font-bold text-[#151515] flex items-center gap-1">
                        <span
                          className="inline-block size-2.5 rounded-full border border-black/20"
                          style={{ backgroundColor: quickViewSelectedColor.hex }}
                        />
                        {quickViewSelectedColor.name}
                      </span>
                    </p>
                  )}

                  {/* Price section with reactive storage pricing */}
                  {(() => {
                    const currentPricing = getStoragePricing(quickViewProduct, quickViewSelectedStorage)
                    return (
                      <>
                        <div className="mt-3 flex items-baseline gap-3 flex-wrap">
                          <span className="text-3xl font-black text-[#DA291C] transition-all">
                            {currentPricing.price}
                          </span>
                          {currentPricing.oldPrice && (
                            <span className="text-sm text-neutral-400 line-through transition-all">
                              {currentPricing.oldPrice}
                            </span>
                          )}
                          <span className="rounded bg-[#DA291C] px-2 py-0.5 text-xs font-bold text-white shadow-sm">
                            {quickViewProduct.tag || '−30% Digitec'}
                          </span>
                          <span className="rounded bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                            TVA 8.1% incluse
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-emerald-700 font-semibold">
                          ✓ Tarif officiel Suisse garanti avec réduction immédiate de −30%
                        </p>
                      </>
                    )
                  })()}

                  <p className="mt-4 text-xs leading-relaxed text-neutral-600 border-t border-neutral-100 pt-4">
                    {quickViewProduct.description}
                  </p>

                  {/* Color Selector */}
                  {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                          Couleur sélectionnée : <span className="text-[#DA291C] font-bold">{quickViewSelectedColor?.name}</span>
                        </label>
                        <span className="text-[10px] text-neutral-400">{quickViewProduct.colors.length} finitions</span>
                      </div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        {quickViewProduct.colors.map((c) => {
                          const isSelected = quickViewSelectedColor?.name === c.name
                          return (
                            <button
                              key={c.name}
                              onClick={() => {
                                setQuickViewSelectedColor(c)
                                setQuickViewSelectedImage(c.image)
                                setSelectedProductColors((prev) => ({ ...prev, [quickViewProduct.id]: c }))
                              }}
                              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 transition cursor-pointer ${
                                isSelected
                                  ? 'border-[#DA291C] bg-[#FEF2F2] ring-2 ring-[#DA291C]/30 shadow-sm'
                                  : 'border-neutral-200 hover:border-neutral-400 bg-white'
                              }`}
                            >
                              <span
                                className="size-3.5 rounded-full border border-black/20 shadow-inner"
                                style={{ backgroundColor: c.hex }}
                              />
                              <span className={`text-xs ${isSelected ? 'font-bold text-[#DA291C]' : 'text-neutral-700'}`}>
                                {c.name}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Storage Selector with Dynamic Price per Option */}
                  {quickViewProduct.storages && quickViewProduct.storages.length > 0 && (
                    <div className="mt-5">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                          Capacité de stockage : <span className="text-[#DA291C] font-black">{quickViewSelectedStorage}</span>
                        </label>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {getStoragePricing(quickViewProduct, quickViewSelectedStorage).price}
                        </span>
                      </div>
                      <div className={`grid gap-2 ${
                        quickViewProduct.storages.length === 2 ? 'grid-cols-2' : quickViewProduct.storages.length === 3 ? 'grid-cols-3' : 'grid-cols-4'
                      }`}>
                        {quickViewProduct.storages.map((storage) => {
                          const isSelected = quickViewSelectedStorage === storage
                          const optPricing = getStoragePricing(quickViewProduct, storage)
                          return (
                            <button
                              key={storage}
                              onClick={() => setQuickViewSelectedStorage(storage)}
                              className={`rounded py-2.5 px-1.5 text-center transition border flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                                isSelected
                                  ? 'border-[#DA291C] bg-[#DA291C] text-white shadow-md ring-2 ring-[#DA291C]/30 scale-[1.02]'
                                  : 'border-neutral-200 text-neutral-700 hover:border-[#DA291C]/60 bg-white hover:bg-neutral-50'
                              }`}
                            >
                              <span className="text-xs font-bold">{storage}</span>
                              <span className={`text-[10px] font-semibold ${isSelected ? 'text-white/95' : 'text-neutral-500'}`}>
                                {optPricing.price}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Dynamic Technical Specs & Storage Usage Box */}
                  <div className="mt-5 rounded-lg border border-neutral-200 bg-neutral-50/80 p-4 shadow-sm">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5 mb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-[#DA291C] animate-pulse" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-800">
                          Configuration {quickViewSelectedStorage} · {quickViewSelectedColor?.name || 'Standard'}
                        </span>
                      </div>
                      <span className="rounded bg-[#DA291C]/10 px-2 py-0.5 text-[10px] font-bold text-[#DA291C]">
                        {getStorageUsageInfo(quickViewSelectedStorage).badge}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs text-neutral-700">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-neutral-500 font-medium shrink-0">Usage & capacité :</span>
                        <span className="font-semibold text-neutral-900 text-right">
                          {getStorageUsageInfo(quickViewSelectedStorage).usage}
                        </span>
                      </div>
                      {quickViewProduct.specs && (
                        <div className="flex items-start justify-between gap-3 pt-2 border-t border-neutral-200/60">
                          <span className="text-neutral-500 font-medium shrink-0">Fiche technique :</span>
                          <span className="font-medium text-neutral-800 text-right">
                            {getDynamicSpecs(quickViewProduct.specs, quickViewSelectedStorage, quickViewSelectedColor?.name)}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-200/60 text-[11px]">
                        <span className="text-neutral-500 font-medium">Référence modèle :</span>
                        <span className="font-mono font-bold text-neutral-700">
                          {quickViewProduct.reference.replace(/-\w+$/, '')}-{quickViewSelectedStorage.replace(/\s+/g, '')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Swiss Quality Checklist */}
                  <div className="mt-5 rounded-md bg-neutral-50 p-3.5 border border-neutral-200 space-y-2 text-[11px] text-neutral-600">
                    <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                      <Check size={14} strokeWidth={2.5} />
                      <span>En stock à Lausanne · Expédition 24h avec La Poste Suisse</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-[#DA291C]" />
                      <span>Garantie 2 ans en Suisse (Apple & E-NOTIK)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck size={14} className="text-[#DA291C]" />
                      <span>Livraison offerte & paiement sécurisé par TWINT</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 border-t border-neutral-200 pt-4">
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct, quickViewSelectedColor || undefined, quickViewSelectedStorage)
                      setQuickViewProduct(null)
                      setCartOpen(true)
                    }}
                    className="w-full rounded bg-[#DA291C] py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#b91c1c] shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag size={16} />
                    <span>
                      Ajouter au panier · {[quickViewSelectedColor?.name, quickViewSelectedStorage].filter(Boolean).join(' · ')} ({getStoragePricing(quickViewProduct, quickViewSelectedStorage).price})
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

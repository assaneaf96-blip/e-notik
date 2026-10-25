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
}

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 18 Pro Max',
    reference: 'ENOTIK-IPH18PM-001',
    category: 'Smartphones',
    oldPrice: 'CHF 1’649.–',
    price: 'CHF 1’499.–',
    priceNum: 1499,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha',
    tag: 'Nouveauté 2026',
    description: 'Le fleuron absolu de la gamme Apple. Châssis en titane aérospatial poli miroir, nouvelle puce A20 Pro gravée en 2 nm, téléobjectif tétraprisme 10x et écran Super Retina XDR 6.9" 120Hz avec Dynamic Island avancée.',
    specs: 'Écran 6.9" ProMotion 120Hz · Puce A20 Pro 2nm · 48 Mpx Triple Caméra 10x · USB-C Thunderbolt 4 · Châssis Titane Grade 5',
    storages: ['256 Go', '512 Go', '1 To', '2 To'],
    colors: [
      { name: 'Titane Naturel', hex: '#9C948B', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Noir Sidéral', hex: '#2E2E30', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-blacktitanium-select?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Blanc Pur', hex: '#E3E4E6', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-whitetitanium-select?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Or Désert', hex: '#C5B2A0', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-deserttitanium-select?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Bleu Alpin', hex: '#3B4E63', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=940&hei=1112&fmt=png-alpha' },
    ],
    gallery: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-blacktitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-whitetitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-deserttitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-1-202409?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409?wid=940&hei=1112&fmt=png-alpha',
    ],
  },
  {
    id: 2,
    name: 'iPhone 18 Pro',
    reference: 'ENOTIK-IPH18P-002',
    category: 'Smartphones',
    oldPrice: 'CHF 1’479.–',
    price: 'CHF 1’349.–',
    priceNum: 1349,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-blacktitanium-select?wid=940&hei=1112&fmt=png-alpha',
    tag: 'Bestseller Suisse',
    description: 'Une puissance technologique monumentale dans un format équilibré de 6.3 pouces. Capteur 48 MP nouvelle génération, puce A20 Pro et autonomie record.',
    specs: 'Écran 6.3" ProMotion 120Hz · Puce A20 Pro · Châssis Titane brossé · ProRes 4K 120fps · Autonomie 27h',
    storages: ['128 Go', '256 Go', '512 Go', '1 To'],
    colors: [
      { name: 'Titane Noir Sidéral', hex: '#2E2E30', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-blacktitanium-select?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Naturel', hex: '#9C948B', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Blanc Pur', hex: '#E3E4E6', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-whitetitanium-select?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Or Désert', hex: '#C5B2A0', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-deserttitanium-select?wid=940&hei=1112&fmt=png-alpha' },
    ],
    gallery: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-blacktitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-whitetitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-deserttitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-gallery-1?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-gallery-2?wid=940&hei=1112&fmt=png-alpha',
    ],
  },
  {
    id: 3,
    name: 'iPhone 18',
    reference: 'ENOTIK-IPH18-003',
    category: 'Smartphones',
    oldPrice: 'CHF 1’099.–',
    price: 'CHF 999.–',
    priceNum: 999,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha',
    tag: 'Nouveau',
    description: 'Une palette de couleurs raffinée avec un dos en verre teinté et un contour en aluminium aérospatial brossé. Puce A20 ultra-rapide avec bouton Action.',
    specs: 'Écran 6.1" OLED Super Retina XDR · Puce A20 Bionic · Double capteur Fusion 48 MP · Dynamic Island',
    storages: ['128 Go', '256 Go', '512 Go'],
    colors: [
      { name: 'Bleu Outremer', hex: '#4F6B94', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Vert Sarcelle', hex: '#6C9A8B', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Rose Poudré', hex: '#E19AA8', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Blanc Stellaire', hex: '#ECEAE7', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-white?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Noir Minuit', hex: '#2E3033', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha' },
    ],
    gallery: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-white?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-model-unselect-gallery-1-202409?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-model-unselect-gallery-2-202409?wid=940&hei=1112&fmt=png-alpha',
    ],
  },
  {
    id: 4,
    name: 'iPhone 18 Plus',
    reference: 'ENOTIK-IPH18PLS-004',
    category: 'Smartphones',
    oldPrice: 'CHF 1’229.–',
    price: 'CHF 1’099.–',
    priceNum: 1099,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-teal-select-202409?wid=940&hei=1112&fmt=png-alpha',
    tag: 'Autonomie 32h',
    description: 'Immense dalle 6.7" Super Retina et autonomie record de 32 heures. Conçu pour les utilisateurs nomades exigeants avec Apple Intelligence.',
    specs: 'Écran 6.7" Super Retina XDR · Puce A20 Bionic · Autonomie jusqu’à 32h · Étanchéité IP68 · Poids plume aluminium',
    storages: ['128 Go', '256 Go', '512 Go'],
    colors: [
      { name: 'Vert Sarcelle', hex: '#6C9A8B', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-teal-select-202409?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Bleu Outremer', hex: '#4F6B94', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-ultramarine-select-202409?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Rose Poudré', hex: '#E19AA8', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pink-select-202409?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Blanc Stellaire', hex: '#ECEAE7', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-white-select-202409?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Noir Minuit', hex: '#2E3033', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-black-select-202409?wid=940&hei=1112&fmt=png-alpha' },
    ],
    gallery: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-teal-select-202409?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-ultramarine-select-202409?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pink-select-202409?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-white-select-202409?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-black-select-202409?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-model-unselect-gallery-1-202409?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-model-unselect-gallery-2-202409?wid=940&hei=1112&fmt=png-alpha',
    ],
  },
  {
    id: 5,
    name: 'iPhone 17 Pro Max',
    reference: 'ENOTIK-IPH17PM-005',
    category: 'Smartphones',
    oldPrice: 'CHF 1’449.–',
    price: 'CHF 1’299.–',
    priceNum: 1299,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha',
    tag: 'Édition Pro',
    description: 'Châssis en titane aérospatial brossé, puce A19 Pro 3 nm, téléobjectif 5x et écran 6.7" Super Retina XDR ProMotion 120Hz.',
    specs: 'Écran 6.7" ProMotion 120Hz · Puce A19 Pro · 48 Mpx Triple Capteur 5x · Châssis Titane · USB-C 3.0',
    storages: ['256 Go', '512 Go', '1 To'],
    colors: [
      { name: 'Titane Naturel', hex: '#9C948B', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Bleu', hex: '#38485B', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-bluetitanium-select?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Blanc', hex: '#E3E4E6', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-whitetitanium-select?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Noir', hex: '#2E2E30', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-blacktitanium-select?wid=940&hei=1112&fmt=png-alpha' },
    ],
    gallery: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-bluetitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-whitetitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-blacktitanium-select?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=940&hei=1112&fmt=png-alpha',
    ],
  },
  {
    id: 6,
    name: 'iPhone 17 Pro',
    reference: 'ENOTIK-IPH17P-006',
    category: 'Smartphones',
    oldPrice: 'CHF 1’299.–',
    price: 'CHF 1’179.–',
    priceNum: 1179,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=940&hei=1112&fmt=png-alpha',
    tag: 'Choix Suisse',
    description: 'Format compact 6.1" avec châssis titane ultraléger. Puce A19 Pro, bouton Action personnalisable et triple capteur photo 48 Mpx.',
    specs: 'Écran 6.1" ProMotion 120Hz · Puce A19 Pro · Châssis Titane · Enregistrement Log ProRes · USB-C 3.0',
    storages: ['128 Go', '256 Go', '512 Go', '1 To'],
    colors: [
      { name: 'Titane Noir', hex: '#2E2E30', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Naturel', hex: '#9C948B', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Bleu', hex: '#38485B', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Titane Blanc', hex: '#E3E4E6', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=940&hei=1112&fmt=png-alpha' },
    ],
    gallery: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=940&hei=1112&fmt=png-alpha',
    ],
  },
  {
    id: 7,
    name: 'iPhone 17 Air',
    reference: 'ENOTIK-IPH17AIR-007',
    category: 'Smartphones',
    oldPrice: 'CHF 1’049.–',
    price: 'CHF 949.–',
    priceNum: 949,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=940&hei=1112&fmt=png-alpha',
    tag: 'Ultra-Fin',
    description: 'Nouveau profil ultra-fin et léger. Écran 6.5" OLED lumineux, puce A19 et verre dépoli aux teintes pastel.',
    specs: 'Écran 6.5" Super Retina XDR · Châssis ultra-fin 5.6 mm · Puce A19 · Finitions satinées',
    storages: ['128 Go', '256 Go', '512 Go'],
    colors: [
      { name: 'Bleu Ciel', hex: '#8EA8C3', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Vert Pastel', hex: '#A2C3A4', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Rose Satiné', hex: '#E6B8C2', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Jaune Aurore', hex: '#F3E396', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Noir Minuit', hex: '#2F3133', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=940&hei=1112&fmt=png-alpha' },
    ],
    gallery: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-model-unselect-gallery-1-202309?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-model-unselect-gallery-2-202309?wid=940&hei=1112&fmt=png-alpha',
    ],
  },
  {
    id: 8,
    name: 'iPhone 17',
    reference: 'ENOTIK-IPH17-008',
    category: 'Smartphones',
    oldPrice: 'CHF 949.–',
    price: 'CHF 849.–',
    priceNum: 849,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=940&hei=1112&fmt=png-alpha',
    tag: 'Populaire',
    description: 'Dynamic Island, appareil photo Fusion 48 Mpx et connecteur universel USB-C dans un boîtier résistant et élégant.',
    specs: 'Écran 6.1" OLED Super Retina XDR · Puce A19 · Double capteur 48 MP · Dynamic Island',
    storages: ['128 Go', '256 Go', '512 Go'],
    colors: [
      { name: 'Bleu Ciel', hex: '#8EA8C3', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Vert Pastel', hex: '#A2C3A4', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Rose Satiné', hex: '#E6B8C2', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Jaune Aurore', hex: '#F3E396', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=940&hei=1112&fmt=png-alpha' },
      { name: 'Noir Minuit', hex: '#2F3133', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=940&hei=1112&fmt=png-alpha' },
    ],
    gallery: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-model-unselect-gallery-1-202309?wid=940&hei=1112&fmt=png-alpha',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-model-unselect-gallery-2-202309?wid=940&hei=1112&fmt=png-alpha',
    ],
  },
  {
    id: 9,
    name: 'Sony WH-1000XM6',
    reference: 'ENOTIK-SNYXM6-009',
    category: 'Audio & TV',
    oldPrice: 'CHF 449.–',
    price: 'CHF 399.–',
    priceNum: 399,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85',
    tag: 'Bestseller',
    description: 'Référence mondiale en réduction de bruit active avec processeur IA.',
    specs: 'Autonomie 35h · Bluetooth 5.4 · Hi-Res Audio LDAC · Confort supérieur',
    colors: [
      { name: 'Noir Carbone', hex: '#1A1A1A', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85',
    ],
  },
  {
    id: 10,
    name: 'MacBook Air M4',
    reference: 'ENOTIK-MBA-M4-010',
    category: 'Informatique',
    oldPrice: 'CHF 1’199.–',
    price: 'CHF 1’099.–',
    priceNum: 1099,
    image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85',
    tag: 'Nouveau',
    description: 'Puce M4 ultra-performante dans un boîtier tout aluminium de 1.2 kg.',
    specs: '16 Go RAM · SSD 512 Go · Écran Retina 13.6" · Clavier suisse QWERTZ',
    colors: [
      { name: 'Minuit Sidéral', hex: '#1F2430', image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85',
    ],
  },
  {
    id: 11,
    name: 'Dyson Airwrap Multi-Styler',
    reference: 'ENOTIK-DYS-AW-011',
    category: 'Électroménager',
    oldPrice: 'CHF 529.–',
    price: 'CHF 449.–',
    priceNum: 449,
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85',
    tag: '−15%',
    description: 'Coiffage professionnel sans chaleur extrême grâce à l’effet Coanda.',
    specs: 'Moteur V9 110 000 tr/min · Contrôle thermique intelligent',
    colors: [
      { name: 'Cuivre & Nickel', hex: '#B87333', image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85',
    ],
  },
]

const categories = [
  { label: 'Smartphones', sub: 'iPhone 18 & 17 Pro, Air, Max', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha' },
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
    }, 3200)
  }

  function openQuickView(product: Product) {
    const activeColor = selectedProductColors[product.id] || product.colors?.[0] || null
    setQuickViewProduct(product)
    setQuickViewSelectedColor(activeColor)
    setQuickViewSelectedImage(activeColor?.image || product.image)
    setQuickViewSelectedStorage(product.storages?.[0] || '256 Go')
  }

  function addToCart(product: Product, overrideColor?: ProductColor, overrideStorage?: string) {
    const colorToUse = overrideColor || selectedProductColors[product.id] || product.colors?.[0]
    const storageToUse = overrideStorage || product.storages?.[0] || '256 Go'
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
        },
      ]
    })
    setCheckoutSuccess(false)
    showToast(`« ${product.name} (${colorToUse?.name || ''}) » ajouté au panier`)
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4">
            {filtered.map((product) => {
              const isLiked = liked.includes(product.id)
              const activeColor = selectedProductColors[product.id] || product.colors?.[0]
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
                      {product.name}
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

                    <p className="mt-1 text-[10px] text-white/45">Réf. {product.reference}</p>
                  </div>

                  <div className="mt-3 flex items-baseline gap-2">
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
                            <span className="text-sm font-bold text-[#DA291C]">CHF {(product.priceNum * quantity).toLocaleString('fr-CH')}.–</span>
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
                {quickViewProduct.gallery && quickViewProduct.gallery.length > 0 && (
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      Galerie officielle ({quickViewProduct.gallery.length} vues haute résolution) :
                    </p>
                    <div className="grid grid-cols-6 gap-2">
                      {quickViewProduct.gallery.map((imgUrl, idx) => {
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
                )}
              </div>

              {/* Right: Info, Colors, Storage, Price & Add */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                      {quickViewProduct.category}
                    </span>
                    <span className="text-[11px] text-neutral-400">Réf. {quickViewProduct.reference}</span>
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-[#151515] leading-tight">
                    {quickViewProduct.name}
                  </h3>

                  {/* Price section */}
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="text-2xl font-black text-[#DA291C]">
                      {quickViewProduct.price}
                    </span>
                    <span className="text-sm text-neutral-400 line-through">
                      {quickViewProduct.oldPrice}
                    </span>
                    <span className="rounded bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                      TVA Suisse 8.1% incluse
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-neutral-600 border-t border-neutral-100 pt-4">
                    {quickViewProduct.description}
                  </p>

                  {/* Color Selector */}
                  {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                          Couleur sélectionnée : <span className="text-[#DA291C]">{quickViewSelectedColor?.name}</span>
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
                              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 transition ${
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

                  {/* Storage Selector */}
                  {quickViewProduct.storages && quickViewProduct.storages.length > 0 && (
                    <div className="mt-5">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Capacité de stockage : <span className="text-[#DA291C]">{quickViewSelectedStorage}</span>
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {quickViewProduct.storages.map((storage) => {
                          const isSelected = quickViewSelectedStorage === storage
                          return (
                            <button
                              key={storage}
                              onClick={() => setQuickViewSelectedStorage(storage)}
                              className={`rounded py-2 text-xs text-center font-bold transition border ${
                                isSelected
                                  ? 'border-[#DA291C] bg-[#DA291C] text-white shadow-sm'
                                  : 'border-neutral-200 text-neutral-700 hover:border-neutral-400 bg-white'
                              }`}
                            >
                              {storage}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Technical Specs Summary */}
                  {quickViewProduct.specs && (
                    <div className="mt-5 rounded border border-neutral-200 p-3 bg-neutral-50/50">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">Fiche technique</p>
                      <p className="text-xs text-neutral-700 font-medium">{quickViewProduct.specs}</p>
                    </div>
                  )}

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
                    className="w-full rounded bg-[#DA291C] py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#b91c1c] shadow-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={16} />
                    <span>
                      Ajouter au panier · {quickViewSelectedColor?.name || ''} · {quickViewSelectedStorage}
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

"use client"; // Needs client-side context access

import Link from 'next/link';
import Image from 'next/image';

export default function CartIcon() {

  // Optionally, don't render or show 0 until cart is loaded from storage
  const displayCount = 0;

  return (
    <Link
      href="/cart"
      className="relative p-2 hover:scale-105 transition-transform"
      aria-label={`Shopping cart with ${displayCount} items`}
    >
      <Image alt="cart-icon" width={40} height={40} src="https://flurs.fly.storage.tigris.dev/web/cart.svg" />
      <span className="absolute -top-1 -right-1 bg-lime-950 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full pointer-events-none">
        {displayCount}
      </span>
    </Link>
  );
}

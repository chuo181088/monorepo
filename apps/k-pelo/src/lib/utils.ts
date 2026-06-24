import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const anim = {
  // ═══ ANIMACIONES ESTÁNDAR (700ms) ═══
  fadeInLeft: "transition-all duration-700 ease-out transform -translate-x-12 opacity-0 [&.is-visible]:translate-x-0 [&.is-visible]:opacity-100",
  fadeInRight: "transition-all duration-700 ease-out transform translate-x-12 opacity-0 [&.is-visible]:translate-x-0 [&.is-visible]:opacity-100",
  fadeInUp: "transition-all duration-700 ease-out transform translate-y-12 opacity-0 [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100",
  fadeInDown: "transition-all duration-700 ease-out transform -translate-y-12 opacity-0 [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100",
  zoomIn: "transition-all duration-700 ease-out transform scale-95 opacity-0 [&.is-visible]:scale-100 [&.is-visible]:opacity-100",

  // ═══ ANIMACIONES PREMIUM (800ms con curva Apple) ═══
  fadeInLeftPremium: "opacity-0 -translate-x-6 scale-[0.97] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0 [&.is-visible]:scale-100",
  fadeInRightPremium: "opacity-0 translate-x-6 scale-[0.97] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0 [&.is-visible]:scale-100",
  fadeInUpPremium: "opacity-0 translate-y-6 scale-[0.97] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:scale-100",
  fadeInDownPremium: "opacity-0 -translate-y-6 scale-[0.97] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:scale-100",
  zoomInPremium: "opacity-0 scale-[0.92] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:scale-100",
};
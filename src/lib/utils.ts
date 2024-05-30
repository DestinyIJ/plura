import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();


export function getStripeOAuthLink(
  accountType: 'agency' | 'subaccount',
  state: string
) {
  return `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID}&scope=read_write&redirect_uri=${process.env.NEXT_PUBLIC_URL}${accountType}&state=${state}`
}
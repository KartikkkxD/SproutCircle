"use client"

import Link from "next/link"
import { useAuth } from "../context/auth-context"
import { Button } from "@/components/ui/button"
import { Sprout, PhoneCall, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-green-600 shadow-md z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white flex items-center">
          <Sprout className="mr-2 h-6 w-6" />
          SproutCircle
        </Link>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-green-200 flex items-center">
              Why SproutCircle
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/why-sproutcircle" className="w-full">
                  Why SproutCircle
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/how-we-differ" className="w-full">
                  How We Differ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/our-curriculum" className="w-full">
                  Our Curriculum
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/our-programs" className="w-full">
                  Our Programs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/diversity-inclusion" className="w-full">
                  Diversity & Inclusion
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/about" className="text-white hover:text-green-200">
            About Us
          </Link>
          <Link href="/faqs" className="text-white hover:text-green-200">
            FAQs
          </Link>
          <Link href="/blog" className="text-white hover:text-green-200">
            Blog
          </Link>
          <Link href="/about#customer-care" className="text-white hover:text-green-200 flex items-center">
            <PhoneCall className="mr-1 h-4 w-4" />
            Customer Care
          </Link>
          {user ? (
            <>
              <span className="text-white">Welcome, {user.name}</span>
              <Button onClick={logout} variant="secondary">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/signin" className="text-white hover:text-green-200">
                Sign In
              </Link>
              <Link href="/signup" className="text-white hover:text-green-200">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}


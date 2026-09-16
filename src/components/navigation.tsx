"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import logo from "@/assets/logo.png";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { toast } from "sonner";

import {
  Rocket,
  PlayCircle,
  X,
} from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBottomNav, setShowBottomNav] = useState(true);

  const lastScroll = useRef(0);

  /* =====================================================
     FORM STATE
  ===================================================== */

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const e: Record<string, string> = {};

    if (!form.name.trim()) {
      e.name = "Name is required";
    }

    if (!form.company.trim()) {
      e.company = "Company is required";
    }

    if (!form.email.match(/^\S+@\S+\.\S+$/)) {
      e.email = "Valid email is required";
    }

    if (!form.phone.match(/^\d{10}$/)) {
      e.phone = "Valid 10-digit phone required";
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      toast.success("Demo request sent 🎉");

      setIsDemoModalOpen(false);

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
      });

      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  /* =====================================================
     SCROLL LOGIC
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setIsScrolled(current > 20);

      setShowBottomNav(
        !(current > lastScroll.current && current > 50)
      );

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     INTERNAL SECTION NAVIGATION
  ===================================================== */

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    setActiveSection(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /*
    Keep real href values for SEO/accessibility,
    while preserving your existing smooth scrolling.
  */
  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    scrollToSection(id);

    /*
      Update the browser URL fragment without
      causing a page reload.
    */
    window.history.replaceState(null, "", `#${id}`);
  };

  /* =====================================================
     NAVIGATION ITEMS
  ===================================================== */

  const navItems = [
    {
      label: "Home",
      id: "home",
    },
    {
      label: "About",
      id: "about",
    },
    {
      label: "Industries",
      id: "industries",
    },
    {
      label: "Features",
      id: "features",
    },
    {
      label: "Analytics",
      id: "analytics",
    },
    {
      label: "Roadmap",
      id: "roadmap",
    },
  ];

  /* =====================================================
     UI
  ===================================================== */

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav
        aria-label="Main navigation"
        className={`fixed top-1 left-4 right-4 z-[90] rounded-2xl backdrop-blur-md shadow-xl transition-all ${
          isScrolled
            ? "h-12 bg-background/85"
            : "h-16 bg-background/70"
        }`}
      >
        <div className="h-full flex items-center justify-between px-6">

          {/* =================================================
              LOGO / BRAND
          ================================================= */}

          <a
            href="#home"
            onClick={(event) =>
              handleSectionClick(event, "home")
            }
            className="flex gap-3"
            aria-label="OPTIMA home"
          >
            <Image
              src={logo}
              alt="OPTIMA"
              width={40}
              height={40}
            />

            <div>
              <div className="font-bold bg-gradient-hero bg-clip-text text-transparent">
                OPTIMA
              </div>

              <div className="text-xs text-muted-foreground">
                Ramki Technologies
              </div>
            </div>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden lg:flex gap-6">

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) =>
                  handleSectionClick(event, item.id)
                }
                aria-current={
                  activeSection === item.id
                    ? "page"
                    : undefined
                }
                className={`font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* =================================================
                DEMO VIDEO LINK
            ================================================= */}

            <a
              href="#demo-video"
              onClick={(event) =>
                handleSectionClick(event, "demo-video")
              }
              className="flex items-center gap-1 hover:text-primary font-medium transition-colors"
            >
              <PlayCircle className="h-4 w-4" />

              Demo Video
            </a>
          </div>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="hidden lg:flex gap-3">

            <ThemeToggle />

            <Button
              size="sm"
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500"
              aria-label="Book an OPTIMA demo"
            >
              <Rocket className="h-4 w-4 mr-2" />

              Book Demo
            </Button>

          </div>
        </div>
      </nav>

      {/* =================================================
          BOOK DEMO MODAL
      ================================================= */}

      <Dialog.Root
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
      >
        <Dialog.Portal>

          <Dialog.Overlay
            className="fixed inset-0 bg-black/60 z-[200]"
          />

          <Dialog.Content
            className="fixed z-[201] left-1/2 top-1/2 w-[95vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-background shadow-2xl p-6"
          >

            <VisuallyHidden>
              <Dialog.Title>
                Book OPTIMA Demo
              </Dialog.Title>
            </VisuallyHidden>

            {/* Modal Header */}

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-lg font-semibold">
                Request a Demo
              </h2>

              <button
                type="button"
                onClick={() =>
                  setIsDemoModalOpen(false)
                }
                aria-label="Close demo request dialog"
              >
                <X />
              </button>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <div className="space-y-3">

              {[
                {
                  key: "name",
                  placeholder: "Your Name",
                  type: "text",
                },
                {
                  key: "company",
                  placeholder: "Company Name",
                  type: "text",
                },
                {
                  key: "email",
                  placeholder: "Email Address",
                  type: "email",
                },
                {
                  key: "phone",
                  placeholder: "Phone Number",
                  type: "tel",
                },
              ].map((field) => (

                <div key={field.key}>

                  <input
                    type={field.type}
                    value={
                      form[
                        field.key as keyof typeof form
                      ]
                    }
                    onChange={(event) =>
                      setForm({
                        ...form,
                        [field.key]: event.target.value,
                      })
                    }
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border px-3 py-2"
                  />

                  {errors[field.key] && (
                    <p className="text-xs text-red-500">
                      {errors[field.key]}
                    </p>
                  )}

                </div>

              ))}

            </div>

            {/* =================================================
                SUBMIT BUTTON
            ================================================= */}

            <Button
              type="button"
              onClick={handleSubmit}
              className="w-full mt-5 bg-gradient-to-r from-blue-500 to-cyan-500"
            >
              Submit Demo Request
            </Button>

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
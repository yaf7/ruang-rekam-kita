"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ==================== FLOATING HEARTS ====================
export function FloatingHearts() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const hearts = ["·", "◦", "∘", "♡"];
    const interval = setInterval(() => {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${Math.random() * 20 + 10}px`;
      heart.style.animationDuration = `${Math.random() * 8 + 6}s`;
      heart.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 14000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="floating-hearts" />;
}

// ==================== PARTICLE CANVAS ====================
export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(80, Math.floor(window.innerWidth / 15));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.02;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulsedOpacity = p.opacity + Math.sin(p.pulse) * 0.2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 114, 182, ${Math.max(0, pulsedOpacity)})`;
        ctx.fill();

        // Connect nearby particles
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(244, 114, 182, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

// ==================== SCROLL ANIMATIONS ====================
export function ScrollAnimator({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = ref.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}

// ==================== NAV ====================
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          Ruang Rekam Kita
        </a>
        <ul className="nav-links">
          <li>
            <a href="#galeri" className="nav-link">
              Galeri
            </a>
          </li>
          <li>
            <a href="#perjalanan" className="nav-link">
              Perjalanan
            </a>
          </li>
          <li>
            <a href="#surat" className="nav-link">
              Surat
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// ==================== LIGHTBOX ====================
export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay active" onClick={onClose}>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={onClose}>
          ✕
        </button>
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}

// ==================== GALLERY CARD (CLIENT) ====================
export function GalleryCardClient({
  src,
  alt,
  title,
  caption,
  featured,
}: {
  src: string;
  alt: string;
  title: string;
  caption: string;
  featured?: boolean;
}) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div
        className={`gallery-card ${featured ? "gallery-card-featured" : ""}`}
        onClick={() => setLightbox(true)}
      >
        <div className="gallery-image-wrapper">
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </div>
        <div className="gallery-overlay">
          <div className="gallery-overlay-title">{title}</div>
          <div className="gallery-overlay-caption">{caption}</div>
        </div>
      </div>
      {lightbox && (
        <Lightbox src={src} alt={alt} onClose={() => setLightbox(false)} />
      )}
    </>
  );
}

// ==================== SCROLL GALLERY ====================
export function ScrollGallery({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="gallery-scroll" ref={scrollRef}>
      {children}
    </div>
  );
}

// ==================== COUNTER ANIMATION ====================
export function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

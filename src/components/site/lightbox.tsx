import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export function Lightbox({
  open,
  onClose,
  image,
}: {
  open: boolean;
  onClose: () => void;
  image?: { src: string; alt: string };
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && image ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-primary/70 px-4 py-10 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <motion.button
            type="button"
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-panel text-panel-foreground"
            onClick={onClose}
            aria-label="Close image preview"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <X className="h-5 w-5" />
          </motion.button>
          <motion.div
            className="max-h-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-panel p-3 shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={image.src} alt={image.alt} className="max-h-[82vh] w-full rounded-[1.5rem] object-cover" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

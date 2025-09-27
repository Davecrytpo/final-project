
import { X, Image, Smile } from 'lucide-react';
import { User } from '../../types';

interface PostModalProps {
  onClose: () => void;
  onPost: (content: string, images: string[]) => void;
  user: User | null;
}

import { useState, useRef, useEffect } from 'react';

export default function PostModal({ onClose, onPost, user }: PostModalProps) {
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Draft persistence
  useEffect(() => {
    const saved = localStorage.getItem('draft_content');
    const savedImages = localStorage.getItem('draft_images');
    if (saved) setContent(saved);
    if (savedImages) {
      try { setImages(JSON.parse(savedImages)); } catch {}
    }
    // Focus textarea on open
    setTimeout(() => textareaRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    localStorage.setItem('draft_content', content);
    localStorage.setItem('draft_images', JSON.stringify(images));
  }, [content, images]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const urls = Array.from(files).map((f) => URL.createObjectURL(f));
      setImages((prev) => [...prev, ...urls]);
    }
  };

  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const onDragStart = (idx: number) => setDragIndex(idx);
  const onDragOver = (e: React.DragEvent) => e.preventDefault();
  const onDrop = (idx: number) => {
    if (dragIndex === null || dragIndex === idx) return;
    setImages((prev) => {
      const next = [...prev];
      const [moved] = next.splice(dragIndex, 1);
      next.splice(idx, 0, moved);
      return next;
    });
    setDragIndex(null);
  };

  const canPost = content.trim().length > 0 || images.length > 0;

  // Focus trap in modal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Tab' && containerRef.current) {
        const focusables = containerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="compose-title">
      <div ref={containerRef} className="bg-black w-full max-w-lg rounded-2xl border border-gray-800">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-900 rounded-full"
            aria-label="Close compose"
          >
            <X className="h-5 w-5" />
          </button>
          <h2 id="compose-title" className="sr-only">Compose a post</h2>
          <div className="text-sm text-gray-500" aria-live="polite">{280 - content.length}</div>
          <button
            onClick={() => { onPost(content, images); localStorage.removeItem('draft_content'); localStorage.removeItem('draft_images'); }}
            disabled={!canPost}
            className="bg-blue-500 text-white rounded-full px-4 py-1.5 font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post
          </button>
        </div>
        <div className="p-4">
          <div className="flex space-x-4">
            {user && (
              <img
                src={user.avatar}
                alt={user.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full"
              />
            )}
            <div className="flex-1">
              <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What is happening?!"
                className="w-full bg-transparent text-xl outline-none resize-none placeholder-gray-600"
                rows={4}
                maxLength={280}
              />

              {images.length > 0 && (
                <div className={`grid gap-2 mt-2 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {images.map((url, i) => (
                    <div
                      key={i}
                      className={`${images.length === 1 ? 'aspect-[16/9]' : 'aspect-square'} overflow-hidden rounded-2xl relative group`}
                      draggable
                      onDragStart={() => onDragStart(i)}
                      onDragOver={onDragOver}
                      onDrop={() => onDrop(i)}
                    >
                      <img src={url} alt="" className="w-full h-full object-cover" />
                      <button
                        className="absolute top-2 right-2 bg-black/60 hover:bg-black text-white rounded-full px-2 py-1 text-xs opacity-0 group-hover:opacity-100"
                        onClick={() => removeImage(i)}
                        aria-label="Remove image"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  <label className="p-2 hover:bg-blue-500/10 rounded-full text-blue-500 cursor-pointer">
                    <Image className="h-5 w-5" />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                    />
                  </label>
                  <button className="p-2 hover:bg-blue-500/10 rounded-full text-blue-500">
                    <Smile className="h-5 w-5" />
                  </button>
                </div>
                <div className="text-sm text-gray-500">{content.length}/280</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

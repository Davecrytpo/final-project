export interface TrendItem {
  category: string;
  title: string;
  posts: string;
  image?: string;
}

const CATEGORIES = ['For you', 'Trending', 'News', 'Sports', 'Entertainment'] as const;
export type TrendCategory = typeof CATEGORIES[number];

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatPosts(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
}

function randImage() {
  const id = randInt(100, 999);
  return `https://images.unsplash.com/photo-16${id}42136019-21780ecad995?auto=format&fit=crop&q=80&w=300&h=300`;
}

export function generateTrends(category: TrendCategory, offset: number, limit: number): TrendItem[] {
  const base = {
    'For you': 'Technology · Trending',
    'Trending': 'Entertainment · Trending',
    'News': 'World News · Live',
    'Sports': 'Sports · Trending',
    'Entertainment': 'Movies · Trending',
  } as const;

  const titles = {
    'For you': ['Artificial Intelligence', 'Next.js 15', 'Vite 6', 'Edge AI', 'WebGPU'],
    'Trending': ['#NewMovie2024', 'Viral Dance', 'Indie Game', 'Award Night', 'New Season'],
    'News': ['Global Summit', 'Elections', 'Breakthrough', 'Market Rally', 'New Policy'],
    'Sports': ['Champions League', 'Grand Slam', 'Olympics', 'NBA Finals', 'World Cup'],
    'Entertainment': ['Oscar Noms', 'Chart Toppers', 'Fan Event', 'Premiere Night', 'Festival'],
  } as const;

  const arr: TrendItem[] = [];
  for (let i = 0; i < limit; i++) {
    const n = randInt(10_000, 2_000_000);
    const withImage = Math.random() < 0.8;
    arr.push({
      category: base[category],
      title: titles[category][(offset + i) % titles[category].length],
      posts: formatPosts(n),
      image: withImage ? randImage() : undefined,
    });
  }
  return arr;
}
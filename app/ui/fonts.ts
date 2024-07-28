// Interフォントをインポート
import { Inter, Lusitana } from 'next/font/google';

// Interフォントのlatinサブセットを読み込む
export const inter = Inter({ subsets: ['latin'] });

// Lusitanaフォントのlatinサブセットを読み込む
export const lusitana = Lusitana({
    weight: '400',
    subsets: ['latin'],
 });
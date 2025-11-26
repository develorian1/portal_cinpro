import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to director route by default
  redirect('/director');
}

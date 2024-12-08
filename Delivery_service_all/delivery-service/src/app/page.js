import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/service'); // Automatically redirects to /service
}

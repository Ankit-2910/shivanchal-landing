import './globals.css';

export const metadata = {
  title: 'Shivanchal — AI Automation Platform',
  description: 'AI Automation & Operations Transformation Specialist. Triage Engine, FinePrint, Bidsight, Dashboard — 5 AI apps for SMEs.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

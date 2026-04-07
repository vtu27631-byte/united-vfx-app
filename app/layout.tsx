export const metadata = {
  title: "UNITED VFX",
  description: "Cinematic Reel Shoots",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
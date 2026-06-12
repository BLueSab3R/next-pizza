export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <p>dashboard header</p>

        {children}
      </body>
    </html>
  );
}

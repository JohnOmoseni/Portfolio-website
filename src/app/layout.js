export const metadata = {
  title: "Johnny Omoseni || Front End Dev",
  description: "Johnny Omoseni Portfolio",
  themeColor: "#000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Johnny Omoseni || Frontend Developer",
  description: "Johnny Omoseni Portfolio",
  themeColor: "#181818",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

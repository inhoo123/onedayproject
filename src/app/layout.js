import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
      <head></head>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;

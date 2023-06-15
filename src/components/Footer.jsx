function Footer() {
  return (
    <footer className="absolute bottom-0 w-full p-2 text-center border-t-2 bg-secondaryBackground">
      &#169; 2023 |{" "}
      <a
        className="hover:opacity-70 hover:underline"
        href="https://dimterion.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @Dimterion
      </a>
    </footer>
  );
}

export default Footer;

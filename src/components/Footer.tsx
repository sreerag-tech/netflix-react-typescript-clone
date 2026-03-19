const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-white/60">
        <p className="mb-4">Questions? Call 000-800-919-1694</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <span className="hover:underline cursor-pointer">FAQ</span>
          <span className="hover:underline cursor-pointer">Help Center</span>
          <span className="hover:underline cursor-pointer">Terms of Use</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
        </div>

        <p className="mt-6 text-xs">Netflix Clone © 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
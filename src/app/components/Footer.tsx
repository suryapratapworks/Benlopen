export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="BENLOPEN" className="w-14 h-14 bg-white rounded-xl object-contain" />
              <div>
                <span className="text-xl">BENLOPEN</span>
                <p className="text-cyan-400 text-xs">QR-Trust</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Securing your brand and supply chain with cutting-edge authentication technology.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Anti-Counterfeit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Supply Chain</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track & Trace</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Pharmaceuticals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automotive</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agriculture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:operations@benlopen.com" className="hover:text-cyan-400 transition-colors">operations@benlopen.com</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Sales</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Schedule a Demo</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 BENLOPEN QR-Trust. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
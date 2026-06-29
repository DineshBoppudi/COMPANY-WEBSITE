export default function Footer() {
  return (
    <footer id="contact"className="bg-black text-white">
      

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          <div>

            <h2 className="text-3xl font-bold">
              DataVision
            </h2>

            <p className="text-gray-400 mt-6">
              Building AI solutions, modern web applications,
              and scalable digital products.
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-lg">
              Services
            </h3>

            <ul className="space-y-3 mt-6 text-gray-400">
              <li>AI Development</li>
              <li>Web Applications</li>
              <li>Data Engineering</li>
              <li>Cloud Solutions</li>
            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-lg">
              Company
            </h3>

            <ul className="space-y-3 mt-6 text-gray-400">
              <li>About</li>
              <li>Projects</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-lg">
              Contact
            </h3>

            <ul className="space-y-3 mt-6 text-gray-400">
              <li>hello@datavision.com</li>
              <li>+91 98765 43210</li>
              <li>India</li>
            </ul>

          </div>

        </div>

        <div
          className="
          border-t
          border-gray-800
          mt-16
          pt-8
          flex
          justify-between
          "
        >

          <p className="text-gray-500">
            © 2026 DataVision. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}
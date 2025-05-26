import React from "react";
import footerimage from "../assets/image/footerimage.png"



const Footer = () => {
  return (
    <footer className=" text-gray-700 py-12 px-4 sm:px-6 lg:px-8 "  style={{
              backgroundImage: `url(${footerimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">logo</div>
            <p className="text-sm">
              Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practiced by our operators worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Tour Guide</li>
              <li>Ticket Booking</li>
              <li>Tour Booking</li>
              <li>Rental Services</li>
              <li>Hotel Booking</li>
              <li>Travel plane</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact US</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Chandaika Industrial Estate,</p>
              <p>Prasanti Whar, Patia,</p>
              <p>Bhubaneswar, Odisha 751024</p>
              <p className="mt-4">travel@travila.com</p>
            </address>
          </div>

          {/* Follow Us and Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <p className="text-sm mb-6">
              Need help? Call us <span className="font-medium">934567890</span>
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Payments</h4>
              <p className="text-sm">Payroll    attend    Shift!!</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © 2025 Invoio. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Privacy policy</a>
              <a href="#" className="hover:underline">Legal notice</a>
              <a href="#" className="hover:underline">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
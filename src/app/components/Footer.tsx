import Link from "next/link"

export default function Footer() {
  return (
    <main className="w-full bg-white py-16">
      {/* Instagram Section */}
      <footer className="w-full py-2 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address Column */}
            <div className="text-sm text-[#9F9F9F] mt-12">
              <p>400 University Drive Suite 200 Coral <br/>Gables,</p>
              <p>FL 33134 USA</p>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="font-medium mb-4 text-[#9F9F9F]">Links</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link href="#" className="hover:underline">Home</Link>
                <Link href="#" className="hover:underline">Shop</Link>
                <Link href="#" className="hover:underline">About</Link>
                <Link href="#" className="hover:underline">Contact</Link>
              </nav>
            </div>

            {/* Help Column */}
            <div>
              <h3 className="font-medium mb-4 text-[#9F9F9F]">Help</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link href="#" className="hover:underline">Payment Options</Link>
                <Link href="#" className="hover:underline">Returns</Link>
                <Link href="#" className="hover:underline">Privacy Policies</Link>
              </nav>
            </div>

            {/* Newsletter Column */}
           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
             <h3 className="font-medium text-[#9F9F9F]">Newsletter</h3>
             <nav className="flex list-none mb-10 mt-4">
               <input type="email" placeholder="Enter Your Email Address" className="text-gray-900 hover:text-blue-800 border-b border-gray-900" />
               <li className='pl-2'>
                 <a className="text-black hover:text-blue-800 border-black border-b">SUBSCRIBE</a>
               </li>
             </nav>
           </div>

          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm">2022 Meubel House. All rights reserved</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

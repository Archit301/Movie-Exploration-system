import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
  
    <div className="text-xl font-semibold mb-4 md:mb-0">CineVoyage</div>

    <div class="flex space-x-6">
      <a href="#" className="hover:text-gray-300">About Us</a>
      <a href="#" className="hover:text-gray-300">Contact</a>
      <a href="#" className="hover:text-gray-300">Privacy Policy</a>
      <a href="#" className="hover:text-gray-300">Terms of Service</a>
    </div>

    <div class="flex space-x-4 mt-4 md:mt-0">
      <a href="#" className="hover:text-gray-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm4.88 11.23c-.14 1.01-.73 1.89-1.61 2.51s-1.85 1.01-3.05 1.01-2.21-.34-3.05-1.01-1.47-1.5-1.61-2.51c-.09-.65-.14-1.83-.14-3.41v-1.77c0-1.56.05-2.74.14-3.41.14-1.01.73-1.89 1.61-2.51s1.85-1.01 3.05-1.01 2.21.34 3.05 1.01 1.47 1.5 1.61 2.51c.09.65.14 1.83.14 3.41v1.77c0 1.56-.05 2.74-.14 3.41z"></path></svg></a>
      <a href="#" className="hover:text-gray-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 16h-7c-1.38 0-2.5-1.12-2.5-2.5V8c0-1.38 1.12-2.5 2.5-2.5h7c1.38 0 2.5 1.12 2.5 2.5v7c0 1.38-1.12 2.5-2.5 2.5zm-7-10c-.83 0-1.5.67-1.5 1.5S7.67 11 8.5 11s1.5-.67 1.5-1.5S9.33 8 8.5 8zm5.75 8h-1.5v-4c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v4zm-5.75-6c-.83 0-1.5.67-1.5 1.5S7.67 12 8.5 12 10 11.33 10 10.5 9.33 9 8.5 9z"></path></svg></a>
      <a href="#" className="hover:text-gray-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.83 15.5c-.07.47-.53.8-1 .73-3.53-.63-6.37-3.47-7-7-.07-.47.26-.93.73-1 .23-.04.45.03.63.2l1.54 1.54c.39-.09.79-.14 1.2-.14.62 0 1.22.16 1.74.45.24-.45.63-.83 1.08-1.08-.3-.52-.46-1.12-.46-1.74 0-.41.05-.81.14-1.2l-1.54-1.54c-.16-.16-.23-.38-.2-.63.07-.47.53-.8 1-.73 3.53.63 6.37 3.47 7 7 .07.47-.26.93-.73 1-.23.04-.45-.03-.63-.2l-1.5-1.5c-.39.09-.79.14-1.2.14-.62 0-1.22-.16-1.74-.45-.24.45-.63.83-1.08 1.08.3.52.46 1.12.46 1.74 0 .41-.05.81-.14 1.2l1.54 1.54c.16.16.23.38.2.63z"></path></svg></a>
    </div>
  </div>
</footer>

  )
}

export default Footer

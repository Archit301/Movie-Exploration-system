import React, { useState } from 'react'
import Categories from './Categories'

const TopPicks = () => {

    const [selectedIndustry, setSelectedIndustry] = useState('Hollywood');
    const [selectedIndustryId, setSelectedIndustryId] = useState('8'); // Default Hollywood ID

  const industries = {
    'Hollywood': '8',
    'Bollywood': '119',
    'Nollywood': '456',
    // Add more industries here
  };

  const handleChange = (event) => {
    const selectedIndustryName = event.target.value;
    setSelectedIndustry(selectedIndustryName);
    setSelectedIndustryId(industries[selectedIndustryName]);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <header className="text-center my-12">
        <h1 className="text-5xl font-bold mb-4">Top Picks</h1>
        <p className="text-xl text-gray-300">
          Discover the best movies across various genres curated just for you.
        </p>
      </header>
      <div className="mb-8 flex justify-center">
          <select className="text-white bg-gray-800 px-4 py-2 rounded-md" value={selectedIndustry} onChange={handleChange} >
            <option value="Hollywood">Hollywood</option>
            <option value="Bollywood">Bollywood</option>
            <option value="NOllywood">Nollywood</option>
            <option value="Tollywood">Tollywood</option>
            <option value="Lollywood">Lollywood</option>
            <option value="Chinese cinema">Chinese cinema</option>
            <option value="Korean cinema">Korean cinema</option>
            <option value="Japanese cinema">Japanese cinema</option>
            <option value="British cinema">British cinema</option>
            <option value="French cinema">French cinema</option>
            <option value="Italian cinema">Italian cinema</option>
            <option value="German cinema">German cinema</option>
            <option value="Spanish cinema">Spanish cinema</option>
            <option value="Iranian cinema">Iranian cinema</option>
            <option value="Egyptian cinema">Egyptian cinema</option>
            <option value="Turkish cinema">Turkish cinema</option>
            <option value="Russian cinema ">Russian cinema </option>
            <option value="Mexican cinema">Mexican cinema</option>
            <option value="Argentine cinema">Argentine cinema</option>
            <option value="Brazilian cinema">Brazilian cinema</option>

            {/* Add more industries here */}
          </select>
        </div>
      <Accordion title="Comedy">
        <div className="mb-12">
          <Categories genreId={35} genreName="Comedy" industryId={selectedIndustryId} industryName={selectedIndustry} />
        </div>
      </Accordion>
      <Accordion title="Horror">
        <div className="mb-12">
          <Categories genreId={27} genreName="Horror" industryId={selectedIndustryId} industryName={selectedIndustry} />
        </div>
      </Accordion>
      <Accordion title="Thriller">
        <div className="mb-12">
          <Categories genreId={53} genreName="Thriller" industryId={selectedIndustryId} industryName={selectedIndustry}/>
        </div>
      </Accordion>
      <Accordion title="Action">
        <div className="mb-12">
          <Categories genreId={28} genreName="Action" industryId={selectedIndustryId} industryName={selectedIndustry} />
        </div>
      </Accordion>
      <Accordion title="Adventure">
        <div className="mb-12">
          <Categories genreId={12} genreName="Adventure" industryId={selectedIndustryId} industryName={selectedIndustry}/>
        </div>
      </Accordion>
      <Accordion title="Animation">
        <div className="mb-12">
          <Categories genreId={16} genreName="Animation" industryId={selectedIndustryId} industryName={selectedIndustry} />
        </div>
      </Accordion>
      <Accordion title="Crime">
        <div className="mb-12">
          <Categories genreId={80} genreName="Crime" industryId={selectedIndustryId} industryName={selectedIndustry} />
        </div>
      </Accordion>
      <Accordion title="Documentry">
        <div className="mb-12">
          <Categories genreId={99} genreName="Documentry" industryId={selectedIndustryId} industryName={selectedIndustry} />
        </div>
      </Accordion>
      <Accordion title="Drama">
        <div className="mb-12">
          <Categories genreId={18} genreName="Drama" industryId={selectedIndustryId} industryName={selectedIndustry}/>
        </div>
      </Accordion>
      <Accordion title="Family">
        <div className="mb-12">
          <Categories genreId={10751} genreName="Family" industryId={selectedIndustryId} industryName={selectedIndustry} />
        </div>
      </Accordion>
      <Accordion title="Fantasy">
        <div className="mb-12">
          <Categories genreId={14} genreName="Fantasy" industryId={selectedIndustryId} industryName={selectedIndustry} />
        </div>
      </Accordion>
      <Accordion title="Hisotry">
        <div className="mb-12">
          <Categories genreId={36} genreName="History" industryId={selectedIndustryId} industryName={selectedIndustry} />
        </div>
      </Accordion>
    </div>
  </div>
);
};

const Accordion = ({ title, children }) => {
const [isOpen, setIsOpen] = React.useState(false);

const toggleAccordion = () => {
  setIsOpen(!isOpen);
};

return (
  <div className="mb-4">
    <button
      onClick={toggleAccordion}
      className="flex justify-between w-full py-2 px-4 bg-gray-800 text-white text-lg font-semibold rounded-md focus:outline-none"
    >
      <span>{title}</span>
      <span>{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && <div className="p-4 bg-gray-700">{children}</div>}
  </div>
);
};
    

export default TopPicks

import { useLayoutEffect  } from 'react';
import Navbar from '../components/Navbar';
import './ExploreServices.css';

const serviceDetails = {
  "Social Media Handling": [
    "Daily posting and scheduling",
    "Engagement with followers",
    "Social media strategy",
    "Analytics and reporting",
  ],
  "Advertising": [
    "Creative ad campaigns",
    "Budget planning",
    "Multi-platform targeting",
    "Performance tracking",
  ],
  "Instagram": [
    "Custom reel creation",
    "Hashtag strategy",
    "Instagram Story highlights",
    "Influencer collaboration",
  ],
  "Facebook": [
    "Page management",
    "Boosted posts and ads",
    "Community interaction",
    "Messenger chatbot setup",
  ],
  "Website Creation": [
    "Responsive design",
    "Custom domain & hosting",
    "SEO friendly structure",
    "Speed optimization",
  ],
  "SEO Optimization": [
    "Keyword research",
    "On-page SEO",
    "Backlink building",
    "Performance monitoring",
  ],
  "Google Ads": [
    "Search & Display ads",
    "AdWords campaign setup",
    "Conversion tracking",
    "Budget optimization",
  ],
  "YouTube Marketing": [
    "Channel branding",
    "Video SEO",
    "Content strategy",
    "YouTube Ads",
  ],
  "Logo Creation": [
    "Multiple design concepts",
    "Revisions as needed",
    "High-quality formats",
    "Brand identity alignment",
  ],
};

const ExploreServices = ({ setShowExplore }) => {
    useLayoutEffect(() => {
    // Scroll the actual scroll container (#root)
    const root = document.getElementById("root");
    if (root) {
        root.scrollTo({ top: 0, behavior: "auto" });
    }
    }, []);


  return (
    <>
      <Navbar isExplore={true} setShowExplore={setShowExplore} />
      <div style={{ padding: '4rem 2rem', backgroundColor: 'transparent', color: '#333' }}>
        <h2 style={{ color: '#1e90ff', textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>
          Our Services in Detail
        </h2>

        <div className="service-grid">
          {Object.entries(serviceDetails).map(([service, details]) => (
            <div key={service} className="service-card">
              <h3>{service}</h3>
              <ul>
                {details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreServices;

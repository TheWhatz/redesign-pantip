import Announce from '@/components/Announce';
import Box from '@/components/Box';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Highlight from '@/components/Highlight';

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: '#3C3963' }}>
        <div className="mx-auto grid max-w-7xl grid-rows-1">
          <div className="p-5 sm:px-4 lg:flex-1 lg:px-3">
            <Box title="Announce">
              <Announce />
            </Box>
          </div>
          <div className="px-5 pb-5 sm:px-4 lg:flex-1 lg:px-3">
            <Box title="Highlight">
              <Highlight />
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

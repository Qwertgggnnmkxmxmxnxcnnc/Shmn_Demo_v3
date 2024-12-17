
import MenuHeader from './MenuHeader';
import MenuContent from './MenuContent';
import MenuFooter from './MenuFooter';
import SearchBar from './SearchBar';

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlideMenu = ({ isOpen, onClose }: SlideMenuProps) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity z-50 
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div 
        className={`fixed top-0 left-0 w-full max-w-[85vw] sm:max-w-sm h-full bg-black z-50 
          transform transition-transform duration-300 ease-out safe-top safe-bottom
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full flex flex-col">
          <MenuHeader onClose={onClose} />
          <SearchBar />
          <MenuContent onClose={onClose} />
          <MenuFooter />
        </div>
      </div>
    </>
  );
};

export default SlideMenu;
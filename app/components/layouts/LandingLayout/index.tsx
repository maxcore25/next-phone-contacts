import MainHead from '@/components/elements/heads/MainHead';
import HomeSection from '@/components/modules/sections/HomeSection';
import AddContactModal from '@/components/elements/modals/AddContactModal';

const LandingLayout = () => {
  return (
    <>
      <MainHead />
      <HomeSection />
      <AddContactModal />
    </>
  );
};

export default LandingLayout;

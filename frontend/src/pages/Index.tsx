import PointsTable from "@/components/PointsTable";
import Teams from "@/components/Teams";
import Banner from "@/components/Banner";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent relative flex flex-col font-sans">
      {/* Hero Section */}
      <Banner />

      {/* Points Table Section */}
      <PointsTable />

      {/* Teams Section */}
      <Teams />
    </div>
  );
};

export default Index;

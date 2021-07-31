import DashboardContent from "../components/sections/DashboardContent";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { withRouter } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardContent />
    </DashboardLayout>
  );
};

export default withRouter(Dashboard);

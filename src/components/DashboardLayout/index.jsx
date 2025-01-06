import dynamic from "next/dynamic";

const DashboardLayout = dynamic(() => import("./DashboardLayout"), {
  ssr: false,
});

export default DashboardLayout;

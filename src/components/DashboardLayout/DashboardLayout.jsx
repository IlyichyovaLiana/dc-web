"use client";

import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { RouterPaths } from "@/utils";

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState(pathname);
  const router = useRouter();

  useEffect(() => {
    setSelectedKey(pathname);
  }, [pathname]);

  const menuItems = [
    {
      key: RouterPaths.ADMIN_HERO_BANNER,
      label: "Hero Banner",
    },
    {
      key: RouterPaths.ADMIN_FEATURES,
      label: "Features",
    },
    {
      key: RouterPaths.ADMIN_ABOUT,
      label: "About",
    },
    {
      key: RouterPaths.ADMIN_COUNTER,
      label: "Counter",
    },
    {
      key: RouterPaths.ADMIN_SERVICES,
      label: "Services",
    },
    {
      key: RouterPaths.ADMIN_TESTIMONIAL,
      label: "Testimonials",
    },
    {
      key: RouterPaths.ADMIN_POPULAR_QUESTIONS,
      label: "Popular Questions",
    },
    {
      key: RouterPaths.ADMIN_BMI,
      label: "BMI",
    },
    {
      key: RouterPaths.ADMIN_CONTACT_US,
      label: "Contact Us",
    },
  ];

  const handleMenuClick = ({ key }) => {
    router.push(key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light">
        <div
          style={{
            height: 64,
            margin: "16px",
            background: "transparent",
          }}
        />
        <Menu
          theme="light"
          selectedKeys={[selectedKey]}
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <h4 style={{ margin: "16px", textAlign: "center" }}>Admin Panel</h4>
        </Header>
        <Content
          style={{ margin: "16px", padding: "16px", background: "#fff" }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

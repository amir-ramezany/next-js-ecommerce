import About from "@/components/About";
import Contact from "@/components/contact/Contact";
import Features from "@/components/Features";
import ProductsTab from "@/components/products/ProductsTab";
import { getFetch } from "@/utils/fetch";

export default async function Home() {
  const porductsTab = await getFetch("/products/products-tabs");

  return (
    <>
      <Features />
      <ProductsTab
        tabList={porductsTab.tabList}
        tabPanel={porductsTab.tabPanel}
      />
      <About />
      <Contact />
    </>
  );
}

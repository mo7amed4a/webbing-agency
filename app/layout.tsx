import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import { HeaderApp } from "@/components/header/HeaderApp";
import Footer from "@/components/Footer/Footer";

const geistSans = Oxanium({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-oxanium' 
});

export const metadata: Metadata = {
  title: "Webbing Agency",
  description: "Transforming Ideas into Digital Solutions",
  keywords: ` تصميم مواقع إلكترونية, Website Design
تطوير مواقع ويب, Web Development
تصميم تطبيقات موبايل, Mobile App Design
تطوير تطبيقات الهاتف, Mobile App Development
تصميم واجهات المستخدم (UI/UX), UI/UX Design
برمجة مواقع احترافية, Professional Web Programming
إنشاء متاجر إلكترونية, E-commerce Development
تصميم مواقع ووردبريس, WordPress Website Design
حلول ويب متكاملة, Comprehensive Web Solutions
إدارة حملات إعلانية, Ad Campaign Management
تسويق رقمي, Digital Marketing
إدارة السوشيال ميديا, Social Media Management
تحسين محركات البحث (SEO), SEO Optimization
كتابة محتوى تسويقي, Marketing Content Writing
حملات إعلانية على فيسبوك وإنستجرام, Facebook & Instagram Ads
تسويق إلكتروني شامل, Comprehensive E-Marketing
تصميم هويات بصرية, Brand Identity Design
تطوير برمجيات مخصصة, Custom Software Development
حلول برمجية للشركات, Business Software Solutions
تطوير أنظمة ERP و CRM, ERP & CRM Development
تطبيقات ويب متكاملة, Full Web Applications
برمجة وتطوير مواقع وتطبيقات, Website & App Development
إدارة المحتوى الرقمي, Digital Content Management
حلول تقنية متكاملة, Integrated Tech Solutions
تطوير برمجيات سحابية, Cloud Software Development
حلول التجارة الإلكترونية, E-commerce Solutions
برمجة مواقع وتطبيقات حسب الطلب, Custom Website & App Development
`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <HeaderApp />
       <main className="lg:pt-24">
       {children}
       </main>
        <Footer></Footer>
      </body>

    </html>
  );
}

"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Shield, Users } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/11167645/pexels-photo-11167645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Dynamic portrait with swirling neon lights creating an ethereal and futuristic vibe."},
  {"id":"feature-1","url":"https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Flatlay of a business analytics report, keyboard, pen, and smartphone on a wooden desk."},
  {"id":"feature-2","url":"https://images.pexels.com/photos/2833363/pexels-photo-2833363.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Riot police in tactical gear facing a public protest at night with tear gas."},
  {"id":"feature-3","url":"https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation."},
  {"id":"team-1","url":"https://images.pexels.com/photos/7845147/pexels-photo-7845147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Middle-aged man in business attire sitting at an office desk with a blurred background."},
  {"id":"team-2","url":"https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"businesswoman portrait - Photo by Roman Biernacki"},
  {"id":"team-3","url":"https://images.pexels.com/photos/7652465/pexels-photo-7652465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two professional women collaborating with a laptop in a modern office setting."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/7144185/pexels-photo-7144185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling woman holding car key in dealership showroom next to new vehicle."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businessman in suit shaking hands at office desk, symbolizing successful partnership."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/6205542/pexels-photo-6205542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Happy coworkers showing appetizing puff on plate and glass of beer cocktail with garnish while looking at camera at counter"},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Focused woman writing on a whiteboard during a business planning session."},
  {"id":"company-logo","url":"https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Tesla factory with parked cars during sunset, showcasing modern automotive industry vibes."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarStyleMinimal
          logoSrc="/brand/logowhite.svg"
          logoAlt="Logo"
          brandName="SaaS Co."
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Empower Your Business"
            description="Revolutionize your operations with our cutting-edge SaaS solutions."
            imagePosition="right"
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url || '/public/images/placeholder.webp'}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We build software that powers innovation and growth."
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Explore Our Features"
            description="Discover capabilities that drive success"
            features={[
              { title: "Advanced Analytics", description: "Gain insights with our powerful analytics tools.", icon: Shield },
              { title: "Secure and Reliable", description: "Enhanced security features for peace of mind.", icon: Shield },
              { title: "Collaborative Tools", description: "Facilitate teamwork with integrated solutions.", icon: Users }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            title="Our Team"
            description="Meet the people who make innovation possible."
            members={[
              { id: "1", name: "Alex Johnson", role: "CEO", imageSrc: assetMap.find(a => a.id === 'team-1')?.url || '/public/images/placeholder.webp' },
              { id: "2", name: "Lisa Brown", role: "CTO", imageSrc: assetMap.find(a => a.id === 'team-2')?.url || '/public/images/placeholder.webp' },
              { id: "3", name: "Michael Smith", role: "Lead Developer", imageSrc: assetMap.find(a => a.id === 'team-3')?.url || '/public/images/placeholder.webp' }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Clients Say"
            description="See how our solutions have transformed businesses."
            testimonials={[
              { id: "1", name: "Chris Evans", role: "Product Manager", company: "Tech Solutions Inc.", rating: 5, imageSrc: assetMap.find(a => a.id === 'testimonial-1')?.url || '/public/images/placeholder.webp' },
              { id: "2", name: "Patricia Hughes", role: "Project Lead", company: "InnovateLab", rating: 5, imageSrc: assetMap.find(a => a.id === 'testimonial-2')?.url || '/public/images/placeholder.webp' },
              { id: "3", name: "Ryan Lee", role: "CEO", company: "GrowthTech", rating: 5, imageSrc: assetMap.find(a => a.id === 'testimonial-3')?.url || '/public/images/placeholder.webp' },
              { id: "4", name: "Emily Clark", role: "CTO", company: "Enterprise Hub", rating: 5, imageSrc: assetMap.find(a => a.id === 'testimonial-4')?.url || '/public/images/placeholder.webp' }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Get In Touch"
            description="We're here to answer all your questions."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Message", rows: 5, required: true }}
            buttonText="Send Message"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 SaaS Co."
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

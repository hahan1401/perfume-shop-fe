import Link from 'next/link';
import Container from '../ui/Container';
import Devider from '../ui/Devider';
import { Facebook } from '../ui/icons/components/Facebook';
import { Instagram } from '../ui/icons/components/Instagram';
import { Shopee } from '../ui/icons/components/Shopee';
import { Tiktok } from '../ui/icons/components/Tiktok';
import SectionTitle from './components/SectionTitle';

const Footer = () => {
  return (
    <footer className="bg-primary/10 mt-[3rem] md:mt-[6rem]">
      <Container className="py-3 md:py-4">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          <div className="col-span-3 md:col-span-2">
            <SectionTitle>About Our Shop</SectionTitle>
            <div className="flex flex-col gap-1 text-sm md:gap-3">
              <p>"Smell good - Feel good"| Mang đến những trải nghiệm hương thơm độc đáo nhất.</p>
              <Link href={'phoneto:012345678'}>0372928756</Link>
              <Link href={'mailto:012345678'}>hanvietha141@gmail.com</Link>
            </div>
          </div>
          <div className="col-span-1">
            <SectionTitle>Quick Links</SectionTitle>
            <div className="flex flex-col gap-1 text-sm md:gap-3">
              <Link
                href={'#'}
                className="underscore w-fit"
              >
                About us
              </Link>
              <Link
                href={'#'}
                className="underscore w-fit"
              >
                Collections
              </Link>
              <Link
                href={'#'}
                className="underscore w-fit"
              >
                Brans
              </Link>
              <Link
                href={'#'}
                className="underscore w-fit"
              >
                News
              </Link>
              <Link
                href={'#'}
                className="underscore w-fit"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <SectionTitle>Products</SectionTitle>
            <div className="flex flex-col gap-3 text-sm">
              <Link
                href={'#'}
                className="underscore w-fit"
              >
                Male
              </Link>
              <Link
                href={'#'}
                className="underscore w-fit"
              >
                Female
              </Link>
              <Link
                href={'#'}
                className="underscore w-fit"
              >
                Unisex
              </Link>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2">
            <SectionTitle>Adress</SectionTitle>
            <p className="text-sm">Hanoi, Vietnam</p>
          </div>
        </div>
        <Devider />
        <div className="flex flex-col justify-center gap-3">
          <div className="flex justify-center gap-4">
            <Facebook className="text-primary text-2xl" />
            <Tiktok className="text-primary text-2xl" />
            <Instagram className="text-primary text-2xl" />
            <Shopee className="text-primary text-2xl" />
          </div>

          <div className="flex justify-center gap-6 text-sm">
            <p>Private policy</p>
            <p>Payment policy</p>
            <p>Warranty policy</p>
          </div>

          <p className="text-center text-sm">
            Design by: <span className="font-bold">Hahan</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

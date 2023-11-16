import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className="flex justify-center space-x-10 dark:bg-gray-600 bg-teal-50 lg:text-lg p-4">
      <NavbarItem param="getTrending" title="Trending" />
      <NavbarItem param="getTopRated" title="Top Rated" />
    </div>
  );
}

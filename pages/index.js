import Container from '@/components/Container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl mb-4 text-black dark:text-white">
          Hello world!
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-16">
          Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra
          augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Donec id elit non mi porta gravida at eget
          metus. Donec id elit non mi porta gravida at eget metus. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas
          faucibus mollis interdum. Curabitur blandit tempus porttitor.
        </h2>
      </div>
    </Container>
  );
}

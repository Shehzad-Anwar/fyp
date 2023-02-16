import ContactForm from "../components/contact/ContactFrom";
import Newsletter from "../components/home/Newsletter";
import Faqs from "../components/home/Faqs";

const contact = () => {
  return (
    <>
      <div>
        <header className="relative mb-20 bg-sky-800 pb-24 sm:pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gradient-to-l from-sky-800 to-cyan-700 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>

          <div
            className="relative mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 pb-2 sm:px-6 lg:px-8"
            aria-label="Global"
          ></div>

          <div className="relative mx-auto mt-24 max-w-md px-4 sm:mt-32 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-cyan-100">
              Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
              lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
              consectetur. Sit justo viverra non adipisicing elit distinctio.
            </p>
          </div>
        </header>
      </div>

      <ContactForm />
      <Faqs />
      <Newsletter />
    </>
  );
};

export default contact;

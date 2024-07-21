import React from "react";
import dev1 from "../img/dev1.jpg";
import dev2 from "../img/dev2.jpg";
import space from "../img/space.jpg";

const AboutUs = () => {
  return (
    <div className="relative bg-gray-900 text-white pb-20 mb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="mb-8">
          We are passionate about space exploration and technology. Our mission
          is to bring the wonders of the universe closer to everyone through our
          innovative web application. We are passionate about space exploration
          and technology. Our mission is to bring the wonders of the universe
          closer to everyone through our innovative web application. We are
          passionate about space exploration and technology. Our mission is to
          bring the wonders of the universe closer to everyone through our
          innovative web application.
        </p>
        <p className="mb-8">
          Our team consists of space enthusiasts, developers, and designers who
          share a common vision of making space exploration accessible and
          engaging for people of all ages and backgrounds. Our team consists of
          space enthusiasts, developers, and designers who share a common vision
          of making space exploration accessible and engaging for people of all
          ages and backgrounds. Our team consists of space enthusiasts,
          developers, and designers who share a common vision of making space
          exploration accessible and engaging for people of all ages and
          backgrounds.
        </p>
        <p className="mb-8">
          With our expertise in both technology and space science, we strive to
          create an immersive experience that educates, entertains, and inspires
          curiosity about the cosmos. With our expertise in both technology and
          space science, we strive to create an immersive experience that
          educates, entertains, and inspires curiosity about the cosmos. With
          our expertise in both technology and space science, we strive to
          create an immersive experience that educates, entertains, and inspires
          curiosity about the cosmos.
        </p>
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-gray-500 p-6 rounded-lg"
            data-popover-target="popover-user-profile-1"
            data-popover-placement="right"
          >
            <img
              src={dev1}
              alt="John Doe"
              className="mb-4 w-40 h-40 rounded-full object-cover"
              style={{ aspectRatio: "1 / 1" }}
            />
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p>Lead Developer</p>
            <div
              data-popover
              id="popover-user-profile-1"
              role="tooltip"
              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
            >
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <a href="#">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={dev1}
                      alt="Jese Leos"
                    />
                  </a>
                  <div>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                  <a href="#">John Doe</a>
                </p>
                <p className="mb-3 text-sm font-normal">
                  <a href="#" className="hover:underline">
                    @johndoe
                  </a>
                </p>
                <p className="mb-4 text-sm">Lead Developer</p>
                <ul className="flex text-sm">
                  <li className="me-2">
                    <a href="#" className="hover:underline">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        150
                      </span>
                      <span>Following</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        1,520
                      </span>
                      <span>Followers</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>
          <div
            className="bg-gray-500 p-6 rounded-lg"
            data-popover-target="popover-user-profile-2"
            data-popover-placement="right"
          >
            <img
              src={dev2}
              alt="Jane Smith"
              className="mb-4 w-40 h-40 rounded-full object-cover"
              style={{ aspectRatio: "1 / 1" }}
            />
            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
            <p>UX Designer</p>
            <div
              data-popover
              id="popover-user-profile-2"
              role="tooltip"
              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
            >
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <a href="#">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={dev2}
                      alt="Jese Leos"
                    />
                  </a>
                  <div>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                  <a href="#">Jane Smith</a>
                </p>
                <p className="mb-3 text-sm font-normal">
                  <a href="#" className="hover:underline">
                    @janesmith
                  </a>
                </p>
                <p className="mb-4 text-sm">UX Designer</p>
                <ul className="flex text-sm">
                  <li className="me-2">
                    <a href="#" className="hover:underline">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        80
                      </span>
                      <span>Following</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        950
                      </span>
                      <span>Followers</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>

          <div
            className="bg-gray-500 p-6 rounded-lg"
            data-popover-target="popover-user-profile-3"
            data-popover-placement="right"
          >
            <img
              src={space}
              alt="Alex Johnson"
              className="mb-4 w-40 h-40 rounded-full object-cover"
              style={{ aspectRatio: "1 / 1" }}
            />
            <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
            <p>Space Enthusiast</p>
            <div
              data-popover
              id="popover-user-profile-3"
              role="tooltip"
              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
            >
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <a href="#">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={space}
                      alt="Jese Leos"
                    />
                  </a>
                  <div>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                  <a href="#">Alex Johnson</a>
                </p>
                <p className="mb-3 text-sm font-normal">
                  <a href="#" className="hover:underline">
                    @alexjohnson
                  </a>
                </p>
                <p className="mb-4 text-sm">Space Enthusiast</p>
                <ul className="flex text-sm">
                  <li className="me-2">
                    <a href="#" className="hover:underline">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        200
                      </span>
                      <span>Following</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        2,500
                      </span>
                      <span>Followers</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gray-900"></div>{" "}
      {/* Spacer */}
    </div>
  );
};

export default AboutUs;

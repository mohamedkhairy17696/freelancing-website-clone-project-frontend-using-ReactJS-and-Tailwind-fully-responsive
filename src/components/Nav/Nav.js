import React from "react";

const Nav = () => {
  return (
    <div>
      <nav class="bg-gray-100 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href={`/gigs?cat=Web Development`}
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href={`/gigs?cat=Graphic Design`}
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href={`/gigs?cat=Mobile Development`}
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href={`/gigs?cat=Video Editting`}
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Video Editing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="bg-emerald-900">
        <div className="max-w-screen-xl pl-1 pr-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href={`/gigs?cat=Web Development`}
                  className="text-slate-200 hover:underline"
                  aria-current="page"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href={`/gigs?cat=Graphic Design`}
                  className="text-slate-200 hover:underline"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href={`/gigs?cat=Mobile Development`}
                  className="text-slate-200 hover:underline"
                >
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href={`/gigs?cat=Video Editting`}
                  className="text-slate-200 hover:underline"
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

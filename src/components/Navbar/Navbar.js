import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();
  const logout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.removeItem("currentUser");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const navigation = [
    // { name: "Home", href: "/", current: false },
    // { name: "Explore Services", href: "/gigs", current: false },
    // { name: "English", href: "/", current: false },
    // { name: "SignIn", href: "/", current: false },
  ];

  return (
    <div>
      <Disclosure as="nav" className="bg-emerald-900">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex mx-8 px-8 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to={"/"}>
                      <h1 className="text-slate-100 text-2xl font-medium mr-12 ">
                        freelancer
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {!currentUser && (
                    <Link to="/register">
                      <button className="bg-transparent hover:bg-emerald-600 text-white font-md hover:text-white ml-6 py-2 ml-4 px-2 border border-white hover:border-transparent rounded">
                        SignUp
                      </button>
                    </Link>
                  )}
                  {i18n.language === "en" && currentUser && (
                    <button
                      onClick={() => {
                        i18n.changeLanguage("ar");
                      }}
                      type="button"
                      className="mt-2 text-center focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      AR
                    </button>
                  )}
                  {i18n.language === "ar" && currentUser && (
                    <button
                      onClick={() => {
                        i18n.changeLanguage("en");
                      }}
                      type="button"
                      className="mt-2 text-center focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      EN
                    </button>
                  )}
                  <p className="text-slate-100 mr-2">{currentUser?.username}</p>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-1">
                    <div>
                      {currentUser ? (
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={currentUser.img || "/img/noavatar.jpg"}
                            alt=""
                          />
                        </Menu.Button>
                      ) : (
                        <Link
                          to="/login"
                          className="bg-emerald-900 text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                          aria-current="page"
                        >
                          SignIn
                        </Link>
                      )}
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      {currentUser ? (
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {currentUser.isSeller && (
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/mygigs"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Gigs
                                </Link>
                              )}
                            </Menu.Item>
                          )}

                          {currentUser.isSeller && (
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/add"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Add New Gig
                                </Link>
                              )}
                            </Menu.Item>
                          )}
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/orders"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Orders
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/messages"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Messages
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                onClick={logout}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/login"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign in
                            </Link>
                          )}
                        </Menu.Item>
                      )}
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;

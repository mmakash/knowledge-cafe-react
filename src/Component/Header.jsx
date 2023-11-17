import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="/src/images/Ellipse 1 (1).png"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import clsx from "clsx";
import { Link, useLocation } from "remix";
import { useTheme } from "~/providers/ThemeProvider";

const NavLink: React.FC<
  Omit<Parameters<typeof Link>["0"], "to"> & { to: string }
> = ({ to, ...rest }) => {
  const location = useLocation();
  const { theme } = useTheme();

  const isSelected =
    to === location.pathname || location.pathname.startsWith(`/#${to}`);

  return (
    <li className="px-5 py-2">
      <Link
        prefetch="intent"
        className={clsx(
          "underlined focus:outline-none block whitespace-nowrap text-lg font-medium",
          {
            active: isSelected,
            "text-": !isSelected
          }
        )}
        to={to}
        {...rest}
      />
    </li>
  );
};

export default NavLink;

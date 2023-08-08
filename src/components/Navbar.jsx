import React from "react";
import { Link } from "react-router-dom";
import { AppBar, CssBaseline, IconButton, Toolbar } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import AppsIcon from "@material-ui/icons/Apps";
import { TrendingUp } from "@material-ui/icons";
import useStyles from "../style/styles";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setView } from "../features/slices/switchView/viewSlice";

const Navbar = () => {
  const { view } = useAppSelector((state) => state.view);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const handleViewToggle = () => {
    dispatch(setView(!view));
    console.log("dispatch passou aqui");
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar className={classes.navBar}>
          <TrendingUp data-testid="trending-up-icon" className={classes.icon} />
          {/* To achieve the same behavior using the <Link> from react-router-dom: 
          use a combination of the useHistory hook and the pathname prop of the location object to determine whether to render the link to p. 1 or not.
          The useHistory hook provides access to the history object, which allows you to programmatically navigate within the application. */}
          <a href="/" className={classes.navLinkStyles}>
            Junior FrontEnd Dev Test
          </a>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            onClick={handleViewToggle}
            aria-label={view ? "List View" : "Grid View"}>
            {view ? (
              <Link to="/list">
                <ListIcon
                  data-testid="list-icon"
                  className={classes.listView}
                />
              </Link>
            ) : (
              <Link to="/grid">
                <AppsIcon
                  data-testid="apps-icon"
                  className={classes.gridView}
                />
              </Link>
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

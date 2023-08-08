import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#F2F3F5",
    color: theme.palette.common.black,
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    position: "sticky",
    top: 0,
  },
  body: {
    fontSize: "15px",
    textAlign: "center",
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    // "&:nth-of-type(odd)": {
    //   backgroundColor: theme.palette.action.hover,
    // },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    marginTop: "8em",
  },

  box: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 0, 0),
    justifyContent: "center",
    textAlign: "center",
  },

  boxpagination: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: "15px",
    sx: {
      margin: "20px 0",
      paddingTop: "10px",
    },
  },

  card: {
    height: "92%",
    display: "flex",
    flexDirection: "column",
  },

  cardContent: {
    flexGrow: 1,
    marginLeft: "18px",
  },

  cardHeader: {
    background: "#F2F3F5",
  },

  chartButton: {
    padding: "0",
  },

  coinsLink: {
    textDecoration: "none",
    color: "black",
  },

  gridView: {
    color: "#FAF9F6",
    fontSize: "40px",
    fontWeight: "bolder",
  },

  icon: {
    fontSize: "34px",
  },

  navBar: {
    justifyContent: "space-between",
  },

  listView: {
    color: "#FAF9F6",
    fontSize: "40px",
    fontWeight: "bolder",
  },

  navLinkStyles: {
    fontSize: "20px",
    color: "#FAF9F6",
    fontWeight: "bold",
    textDecoration: "none",
  },

  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  viewButton: {
    display: "flex-box",
  },

  url: {
    justifyContent: "space-around",
  },
}));

export default useStyles;

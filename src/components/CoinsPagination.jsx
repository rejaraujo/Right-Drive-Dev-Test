import React from "react";
import useStyles from "../style/styles";
import { Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useAppDispatch } from "../app/hooks";
import { setPage } from "../features/slices/pagination/pageSlice";

export function CoinsPagination({ page, cryptosList, pageSize }) {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const handlePageChange = (e, value) => {
    // Scroll to the top of the page when the user changes the page
    window.scrollTo(0, 0);
    dispatch(setPage(value));
  };
  return (
    <Box className={classes.boxpagination}>
      <Pagination
        size="medium"
        className={classes.pagination}
        count={Math.ceil(cryptosList?.data?.stats.total / pageSize)}
        page={page}
        onChange={handlePageChange}
      />
    </Box>
  );
}

export default CoinsPagination;

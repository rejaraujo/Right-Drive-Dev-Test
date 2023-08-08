import React from "react";
import { Container, Avatar } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import useStyles from "../style/styles";
import { StyledTableCell, StyledTableRow } from "../style/styles";
import millify from "millify";

const CryptoList = ({ cryptosList }) => {
  const classes = useStyles();

  return (
    <>
      <div data-testid="crypto-list">
        <Container className={classes.container} maxWidth="md">
          <TableContainer>
            <Table enableStickyHeader aria-label="sticky table">
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <StyledTableCell>Logo</StyledTableCell>
                  <StyledTableCell>Rank</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                  <StyledTableCell>Volume</StyledTableCell>
                  <StyledTableCell>MarketCap</StyledTableCell>
                  <StyledTableCell>Daily Change</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cryptosList?.data?.coins.map((currency) => (
                  <StyledTableRow className={classes.table} key={currency.rank}>
                    <StyledTableCell className={classes.table}>
                      <Avatar
                        aria-label="cryptologo"
                        alt="Logo"
                        src={currency.iconUrl}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{currency.rank}</StyledTableCell>
                    <StyledTableCell>{currency.name}</StyledTableCell>
                    <StyledTableCell>
                      ${millify(currency.price)}
                    </StyledTableCell>
                    <StyledTableCell>
                      {millify(currency["24hVolume"])}
                    </StyledTableCell>
                    <StyledTableCell>
                      {millify(currency.marketCap)}
                    </StyledTableCell>
                    <StyledTableCell>
                      {millify(currency.change)}%
                    </StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
};

export default CryptoList;

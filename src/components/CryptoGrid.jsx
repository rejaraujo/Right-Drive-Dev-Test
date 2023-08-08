import React from "react";
import millify from "millify";
import useStyles from "../style/styles";
import {
  Typography,
  Card,
  Grid,
  Container,
  CardHeader,
  CardContent,
  Avatar,
} from "@material-ui/core";

const CryptoGrid = ({ cryptosList }) => {
  const classes = useStyles();

  return (
    <>
      <div data-testid="crypto-grid">
        <Container className={classes.container} maxWidth="md">
          <Grid container spacing={4}>
            {cryptosList?.data?.coins.map((currency) => (
              <Grid item key={currency.rank} xs={12} sm={6} md={3} lg={3}>
                <Card className={classes.card}>
                  <CardHeader
                    className={classes.cardHeader}
                    avatar={
                      <Avatar
                        aria-label="cryptologo"
                        alt="Logo"
                        src={currency.iconUrl}
                      />
                    }
                    titleTypographyProps={{ variant: "subtitle1" }}
                    title={`${currency.rank}. ${currency.name}`}
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.cardDetails}></Typography>
                    <Typography gutterBottom variant="body2">
                      Price: ${millify(currency.price)}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                      Volume: {millify(currency["24hVolume"])}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                      Market Cap: {millify(currency.marketCap)}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                      Daily Change: {millify(currency.change)}%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default CryptoGrid;

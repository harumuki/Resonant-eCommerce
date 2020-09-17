import React, { useState } from "react";
import "./SidebarCategory.css";
import { Divider, Paper, Button, Input, Slider } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "10px",
  },
  divider: {
    margin: "15px 0",
  },
  input: {
    margin: "0 15px",
    maxWidth: "40%",
  },
}));

export default function SidebarCategory(props) {
  const classes = useStyles();
  const [priceRange, setPriceRange] = useState([
    props.initialRange[0],
    props.initialRange[1],
  ]);
  const params = new URLSearchParams(window.location.search);

  return (
    <>
      <Paper elevation={5} className={classes.root}>
        <div className="d-flex justify-content-between">
          <h3>Filter by</h3>
          <a href={`?sortBy=${params.get("sortBy")}&filterBy=null&value=null`}>
            <Button variant="contained" color="secondary">
              Clear
            </Button>
          </a>
        </div>

        <Divider className={classes.divider} />

        <div>
          <h4 className="SidebarHeading">Rating</h4>
          <ul className="SidebarList">
            <li className="SidebarListItem">
              <a
                href={`?sortBy=${params.get(
                  "sortBy"
                )}&filterBy=Rating&value=${5}`}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </a>
            </li>
            <li className="SidebarListItem">
              <a
                href={`?sortBy=${params.get(
                  "sortBy"
                )}&filterBy=Rating&value=${4}`}>
                <Star />
                <Star />
                <Star />
                <Star />
              </a>
            </li>
            <li className="SidebarListItem">
              <a
                href={`?sortBy=${params.get(
                  "sortBy"
                )}&filterBy=Rating&value=${3}`}>
                <Star />
                <Star />
                <Star />
              </a>
            </li>
            <li className="SidebarListItem">
              <a
                href={`?sortBy=${params.get(
                  "sortBy"
                )}&filterBy=Rating&value=${2}`}>
                <Star />
                <Star />
              </a>
            </li>
            <li className="SidebarListItem">
              <a
                href={`?sortBy=${params.get(
                  "sortBy"
                )}&filterBy=Rating&value=${1}`}>
                <Star />
              </a>
            </li>
          </ul>
        </div>

        <Divider className={classes.divider} />

        <div>
          <div className="d-flex justify-content-between">
            <h4 className="SidebarHeading">Price</h4>
            <a
              href={`?sortBy=${params.get("sortBy")}&filterBy=price&value=${
                priceRange[0]
              },${priceRange[1]}`}>
              <Button variant="contained" color="secondary">
                Filter
              </Button>
            </a>
          </div>

          <div>
            <Slider
              value={priceRange}
              onChange={(event, newValue) => {
                setPriceRange(newValue);
              }}
              min={props.initialRange[0]}
              max={props.initialRange[1]}
            />
            <div className="d-flex justify-content-center">
              <Input
                className={classes.input}
                value={priceRange[0]}
                margin="dense"
                inputProps={{
                  readOnly: true,
                }}
              />

              <Input
                className={classes.input}
                value={priceRange[1]}
                margin="dense"
                inputProps={{
                  readOnly: true,
                }}
              />
            </div>
          </div>
        </div>
      </Paper>
      <br />
      <Paper elevation={5} className={classes.root}>
        <h3>Current Offers</h3>
        <Divider className={classes.divider} />
        <h3>Current Offers</h3>
      </Paper>
    </>
  );
}
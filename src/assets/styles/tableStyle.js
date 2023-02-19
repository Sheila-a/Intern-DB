import {
  TableCell,
  tableHeadClasses,
  TableHead,
  tableCellClasses,
  TableRow,
  tableRowClasses,
  styled,
} from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "Poppins",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:first-of-type td ": {
    backgroundColor: " rgb(90, 226, 90)",
  },
  // "&:nth-child(2) td": {
  //   backgroundColor: "green",
  // },
  // "&:nth-child(3) td": {
  //   backgroundColor: "yellow",
  // },

  "&:nth-of-type(odd)": {
    backgroundColor: "#23a6d51a",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  [`&.${tableRowClasses.body}`]: {
    // fontFamily: "Poppins",
  },
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  [`&.${tableHeadClasses.body}`]: {
    backgroundColor: "red",
    fontFamily: "Poppins",
  },
}));

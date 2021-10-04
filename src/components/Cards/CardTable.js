import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, role, notelp, address) {
  return { name, role, notelp, address};
}

const rows = [
  createData("Muamar", "Admin", "085156042841", "Bekasi"),
  createData("Fadhilah", "Bendahara", "085698343494", "Lampung"),
  createData("Bambang", "Pengurus 1", "085698343494", "Jakarta"),
  createData("Ahmad", "Pengurus 2", "085698343494", "Semarang"),
  createData("Arif", "Staff lain", "085698343494", "Medan"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="right">No. Telp</TableCell>
              <TableCell align="right">Alamat</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.role}</TableCell>
                <TableCell align="right">{row.notelp}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

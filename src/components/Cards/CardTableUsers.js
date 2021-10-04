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

function createData(name, notelp, address, balance) {
  return { name, notelp, address, balance};
}

const rows = [
  createData("Muamar", "085156042841", "Bekasi", `Rp. ${1000000}`),
  createData("Fadhilah", "085698343494", "Lampung", `Rp. ${1500000}`),
  createData("Bambang", "085698343494", "Jakarta", `Rp. ${800000}`),
  createData("Ahmad", "085698343494", "Semarang", `Rp. ${500000}`),
  createData("Arif", "085698343494", "Medan", `Rp. ${100000}`   ),
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
              <TableCell align="right">No. Telp</TableCell>
              <TableCell align="right">Alamat</TableCell>
              <TableCell align="right">Saldo Tabungan</TableCell>
              
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.notelp}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.balance}</TableCell>

                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


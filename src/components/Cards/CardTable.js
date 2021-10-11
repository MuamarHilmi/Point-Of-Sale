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

function createData(id, uuid, nama, email, username, alamat, nohape, role) {
  return { id, uuid, nama, email, username, alamat, nohape, role };
}

const rows = [
  createData(1, "1633278334", "Super Administrator", "admin@simp.com", "admin", "Pondok Programmer, Kretek Bantul.", "082128796431", "admin"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>uuid</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Alamat</TableCell>
              <TableCell align="left">no. Hp</TableCell>
              <TableCell align="left">Role</TableCell>
              {/* <TableCell align="left">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.uuid}</TableCell>
                <TableCell component="th" scope="row">
                  {row.nama}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.alamat}</TableCell>
                <TableCell align="left">{row.nohape}</TableCell>
                <TableCell align="left">{row.role}</TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

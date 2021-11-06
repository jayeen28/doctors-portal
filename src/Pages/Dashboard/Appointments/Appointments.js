import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

const Appointments = ({ date }) => {
    const { user } = useAuth();
    const [appointments, setappointments] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
        setisLoading(true);
        fetch(`http://localhost:5000/appointments?uid=${user.uid}&date=${date}`)
            .then(res => res.json())
            .then(data => {
                setappointments(data);
                setisLoading(false);
            });
    }, [date])

    return (
        <div className="appointments-section">
            <div className="appointments-head">
                <h3>Total appointments: {appointments.length}</h3>
            </div>
            <TableContainer component={Paper}>
                {
                    isLoading ? <CircularProgress />
                        :
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Appointments</TableCell>
                                    <TableCell align="right">Time</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {appointments.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.appointmentName}
                                        </TableCell>
                                        <TableCell align="right">{row.time}</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                }
            </TableContainer>
        </div>
    );
};

export default Appointments;
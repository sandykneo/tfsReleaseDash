import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export class DEV extends Component  {
constructor(props) {
    super(props)

     this.filtered=this.props.dataDEV.filter(function(item){
    return item.env==="DEV"; 
           
    });
}


    render() {
        return (
            <React.Fragment>
{this.props.envDEV}
                <Table  size="small">
                    <TableHead style={{background:"#add6ff"}}>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody  >
                        {this.filtered.map((row, index) => (
                            <TableRow key={row.rank} style={index % 2 ? { background: "#f0f0f0" } : { background: "white" }}>
                                <TableCell component="th" scope="row">
                                    {row.name}  - {index}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </React.Fragment>
        )
    }
}

export default DEV

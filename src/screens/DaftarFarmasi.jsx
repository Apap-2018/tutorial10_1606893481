import React from 'react';
import { DaftarFarmasiRow } from '../components/DaftarFarmasiRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';


export class DaftarFarmasi extends React.Component{
    constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaff: []
		}

    }

    componentDidMount() {
		Appointment.getAllFarmasi().then(({ result }) => {
			this.setState({ 
				loading: false,
				listStaff: result })
		})
	}

    
    render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staf Farmasi" header={['Nama Staf']}>
                    <DaftarFarmasiRow listStaff={this.state.listStaff}/>
                </TableContainer>
            )
        }
	}
}
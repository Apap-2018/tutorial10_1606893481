import React from 'react';
import { Loading } from '../components/Loading';
import { FormHasilLab } from '../containers/FormHasilLab';
import { Appointment } from '../utils/Appointment';

export class CreateHasilLab extends React.Component {
	/** 
	 * TODO: Akses method getDetailPasien(idPasien) pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			pasien: {},
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	componentDidMount() {
		Appointment.getDetailPasien(this.props.match.params.id).then(response => {
			if (response.status === 200) {
				this.setState({
					loading: false,
					pasien: response.result
				})
			} else {
				alert('Data tidak ditemukan')
				this.props.history.push('/all-pasien')
			}
		})
	}

	handleFormSubmit(e) {
            e.preventDefault();
            const data = new FormData(e.target);
            this.setState({ loading: true }, () => {
              Appointment.addLabResult(
                data.get("jenis"),
                data.get("hasil"),
                data.get("tanggalPengajuan"),
                data.get("idPasien")
              )
                .then(({ result }) => {
                  if (result) {
                    this.setState({ pasien: result }, () => {
                      alert(`Sukses membuat lab result`);
                    });
                  }
                })
                .catch(e => {
                  alert(`Gagal membuat lab result: ${e.message}`);
                })
                .finally(() => {
                  this.setState({ loading: false });
                });
            });
          }
	

	render() {
		if (this.state.loading) {
			return (
				<Loading msg="Fetching Data..." />
			)
		} else {
			return (
				<FormHasilLab idPasien={this.state.pasien.idPasien} onSubmit={this.handleFormSubmit} />
			)
		}
	}
}
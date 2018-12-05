import React from 'react';

export const FormHasilLab = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Update Status Pasien</h2>
            <input type="hidden" name="idPasien" value={props.idPasien} />
            <div className="form-group">
                <label>Jenis<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jenis" required />
            </div>
            <div className="form-group">
                <label>Hasil<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="hasil" required />
            </div>
            <div className="form-group">
                <label>Tanggal Pengajuan</label>
                <input type="date" className="form-control" name="tanggalPengajuan" required />
            </div>
            <button className="btn btn-success" value="submit">Update</button>
        </form>
    )
}
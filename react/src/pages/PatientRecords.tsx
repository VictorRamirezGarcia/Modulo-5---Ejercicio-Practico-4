// pages/PatientRecords.tsx
export function PatientRecords() {
    return (
    <div>
        <h1>Registros de Pacientes</h1>
        <p>Esta página solo es accesible para administradores</p>
        <table>
        <thead>
            <tr>
            <th>Paciente</th>
            <th>Historial Médico</th>
            <th>Última Consulta</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Ana López</td>
            <td>Control anual</td>
            <td>15/03/2024</td>
            </tr>
        </tbody>
        </table>
    </div>
    );
}
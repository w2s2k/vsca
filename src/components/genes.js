import React from 'react'

const Genes = ({ genes }) => {
    return (
        <div>
            <table className="table table-striped table-bordered table-responsive">
                <thead>
                <tr style={{color:'#09948a'}}>
                    <th scope="col">Gene</th>
                    <th scope="col">Nucleotide Change</th>
                    <th scope="col">Protein Change</th>
                    <th scope="col">Alias</th>
                    <th scope="col">Region</th>
                    <th scope="col">Reported Classification</th>
                    <th scope="col">Last Evaluated</th>
                    <th scope="col">Last Updated</th>
                    <th scope="col">URL</th>
                </tr>
                </thead>
                <tbody>
                {genes.map((gene, index) => (
                    <tr key={index}>
                        <td>{gene['Gene']}</td>
                        <td>{gene['Nucleotide Change']}</td>
                        <td>{gene['Protein Change']}</td>
                        <td>{gene['Alias']}</td>
                        <td>{gene['Region']}</td>
                        <td>{gene['Reported Classification']}</td>
                        <td>{gene['Last Evaluated']}</td>
                        <td>{gene['Last Updated']}</td>
                        <td><a href={gene['URL']} target="_blank">{gene['Source']}</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default Genes
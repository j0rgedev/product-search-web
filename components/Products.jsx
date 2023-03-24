export default function Products() {
    return (
        <div className="w-11/12 max-w-3xl overflow-auto h-full">
        <table className="w-full border-collapse">
            <thead className="text-left text-lg uppercase border-b border-gray-500">
            <tr>
                <th className="p-3">Nombre</th>
                <th className="p-3">Precio</th>
            </tr>
            </thead>
            <tbody className="text-left text-lg">
            <tr className="bg-transparent border-b border-gray-500">
                <td className="p-3 font-bold" colSpan="2">Fragrancias</td>
            </tr>
            <tr className="bg-transparent border-b border-gray-500">
                <td className="p-3 break-words w-4/5">Lavanda aromática</td>
                <td className="p-3 w-1/5">S/120</td>
            </tr>
            <tr className="bg-transparent border-b border-gray-500">
                <td className="p-3 break-words">Lavanda fresh</td>
                <td className="p-3">S/100</td>
            </tr>
            <tr className="bg-transparent border-b border-gray-500">
                <td className="p-3 break-words">Lavanda dúo</td>
                <td className="p-3">S/90</td>
            </tr>
            </tbody>
        </table>
        </div>
    )

}
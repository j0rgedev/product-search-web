import { useState, useEffect, useMemo } from 'react';
import productData from '../public/products.json'

export default function Products({searchText}) {

    const [productList, setProductList] = useState({});
    const [firstLoad, setFirstLoad] = useState(true);

    const getProducts = () => {
        const filteredProducts = {};
        for (const category in productData) {
          for (const product of productData[category]) {
            if (product.nombre.toLowerCase().includes(searchText.toLowerCase())) {
              if (filteredProducts[category]) {
                filteredProducts[category].push({ 
                    nombre: product.nombre, 
                    precio: product.precio 
                });
              } else {
                filteredProducts[category] = [{ 
                    nombre: product.nombre, 
                    precio: product.precio 
                }];
              }
            }
          }
        }
        setProductList(filteredProducts);
    }

    useEffect(() => {
        if (searchText.length > 0) {
            getProducts();
            setFirstLoad(false);
        }
    }, [searchText]);


    return (
        <div className="w-11/12 max-w-3xl overflow-auto h-full">
            {
                firstLoad ? (
                    <>
                    <h1 className='text-center text-2xl'>Busca tu primer producto</h1>
                    <div className='w-100 h-[30%] flex justify-center mt-4'>
                        <img src="/happyface.webp" alt="sadface" className='h-full '/>
                    </div>
                    </>
                ) : (
                    searchText.length > 0 ? (
                        <table className="w-full border-collapse">
                            <thead className="text-left text-lg uppercase border-b border-gray-500">
                            <tr>
                                <th className="p-3">Nombre</th>
                                <th className="p-3">Precio</th>
                            </tr>
                            </thead>
                                {Object.keys(productList).map((category, index) => (
                                    <tbody className="text-left text-lg" key={index}>
                                    <tr className="bg-transparent border-b border-gray-500">
                                        <td className="p-3 font-bold" colSpan="2">{category}</td>
                                        <td className="p-3 w-1/5"></td>
                                    </tr>
                                    {productList[category].map((product, index) => (
                                        <tr className="bg-transparent border-b border-gray-500" key={index}>
                                            <td className="p-3 break-words w-4/5">{product.nombre}</td>
                                            <td className="p-3 w-1/5">S/{product.precio}</td>
                                            </tr>
                                    ))}
                                    </tbody>
                                ))}
                                        
                        </table>
                    ) : (
                        <>
                            <h1 className='text-center text-2xl'>No se encontraron resultados</h1>
                            <div className='w-100 h-[30%] flex justify-center mt-4'>
                                <img src="/sadface.png" alt="sadface" className='h-full '/>
                            </div>
                            
                        </>
                    )
                )
            }
        </div>
    )
}
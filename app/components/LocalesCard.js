

export function LocalCard({local}) {
    return(
    <>
    <div className="group relative">
        <img 
        src={local.photos ? local.photos[0] : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"}
        alt={local.name}
        className="aspect-square w-80 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" 
        />        
            <div className="mt-4 flex justify-between">
                 <div>
                     <h3 className="text-sm text-white">
                        <a href="#">
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {local.name}
                        </a>
                     </h3>
                    <p className="mt-1 text-sm text-white">{local.type}</p>
                </div>
                    <p className="text-sm font-medium text-white">{local.priceRange}</p>
                </div>
            </div>            
        {/* <div className="group relative">
        rango
        ciudad
                <h3 className="text-sm text-white">
                    {local.name}
                </h3>
        </div> */}
    </>
    );
} 
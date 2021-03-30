import React  from 'react';
import StallionStore from '../stores/stallion-store.component';
import './stallion-storeDirectory.styles.css'

class StallionStoreDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
              searchField:"",
          sections: [{
              title: 'Pink salmon ',
              imageUrl: 'https://fishmarket.com.ua/image/cache/cee66646df8655cbe8134539b5f5c0cc.jpg',
              price: 'N12,500',
              about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
              id: 1
          },
          {
                title: 'horse mackerel 500-900',
                imageUrl: 'https://fishmarket.com.ua/image/cache/01fff9d444a8343c2d3800ce1dd5fc40.jpg',
                price: 'N11,200',
                about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
                id: 2
          },
          {
                title: 'Pink salmon ',
                imageUrl: 'https://fishmarket.com.ua/image/cache/5351ed424efa9b96a80b2c2c0d72fdd9.jpg',
                price: 'N10,100',
                about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
                id: 3
          },
          {
                title: 'Mackerel 400-600(20kg)',
                imageUrl: 'https://fishmarket.com.ua/image/cache/f750f6334aa2af6f680e94c4d769ea11.jpg',
                price: 'N7,000',
                about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
                id: 4
          },
          {
            title: 'Pink salmon ',
            imageUrl: 'https://fishmarket.com.ua/image/cache/cee66646df8655cbe8134539b5f5c0cc.jpg',
            price: 'N14,000',
            about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
            id: 5
        },
        {
              title: 'horse mackerel 500-900',
              imageUrl: 'https://fishmarket.com.ua/image/cache/01fff9d444a8343c2d3800ce1dd5fc40.jpg',
              price:'N6,000',
              about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
              id: 6
        },
        {
              title: 'Pink salmon ',
              imageUrl: 'https://fishmarket.com.ua/image/cache/5351ed424efa9b96a80b2c2c0d72fdd9.jpg',
              price: 'N8,900',
              about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
              id: 7
        },
        {
              title: 'Mackerel 400-600(20kg)',
              imageUrl: 'https://fishmarket.com.ua/image/cache/f750f6334aa2af6f680e94c4d769ea11.jpg',
              price: 'N9,050',
              about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
              id: 8
        },
        {
            title: 'Pink salmon ',
            imageUrl: 'https://fishmarket.com.ua/image/cache/cee66646df8655cbe8134539b5f5c0cc.jpg',
            price: 'N8,350',
            about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
            id: 9
        },
        {
              title: 'horse mackerel 500-900',
              imageUrl: 'https://fishmarket.com.ua/image/cache/01fff9d444a8343c2d3800ce1dd5fc40.jpg',
              price: 'N5,600',
              about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
              id: 10
        },
        {
              title: 'Pink salmon ',
              imageUrl: 'https://fishmarket.com.ua/image/cache/5351ed424efa9b96a80b2c2c0d72fdd9.jpg',
              price: 'N11,100',
              about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
              id: 11
        },
        {
              title: 'Mackerel 400-600(20kg)',
              imageUrl: 'https://fishmarket.com.ua/image/cache/f750f6334aa2af6f680e94c4d769ea11.jpg',
              price:'N12,200',
              about:'Manufacturer: Brim Country IcelandLat. title: Scomber Scombrus Availability: In stock',
              id: 12        }]
    }
    }

    
    render() {

      const { sections, searchField } =this.state;
      const filteredSections = sections.filter(section =>
            section.title.toLowerCase().includes(searchField.toLowerCase()))

        return(
        <div className='drectory'>
              <input className='input' type="search" placeholder="search product" onChange = {e =>this.setState({searchField: e.target.value})}/>
            <div className='flex'>
                  {
                  filteredSections.map(({about, title, imageUrl, id, price}) => (
                        <StallionStore key={id} title={title} imageUrl={imageUrl} price = {price} about={about} />
                  ))}
                
            </div>
        </div>
        )
    }
}
export default StallionStoreDirectory
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {

    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://finnal-project-server.vercel.app/category')
            .then((response) => response.json())
            .then((data) => setCategory(data));


    }, [])




    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                categories.map(categorys => <CategoryCard


                    key={categorys._id}
                    categorys={categorys}
                ></CategoryCard>)



            }

        </div>
    );
};

export default Category;
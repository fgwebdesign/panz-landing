import React from 'react';
import FoodCartV4Data from '@/assets/jsonData/food/FoodCartV4Data.json'
import SingleFoodMenuTabV3 from './SingleFoodMenuTabV3';

// Mapeo de nombres de categorías
const categoryNames: { [key: number]: string } = {
    1: "Entradas",
    2: "Ensaladas",
    3: "Menú Infantil",
    4: "Guarniciones",
    5: "Chivitos",
    6: "Hamburguesas",
    7: "Sandwiches",
    8: "Milanesas",
    9: "Carne de Res",
    10: "Pollo",
    11: "Pescados & Mariscos",
    12: "Pastas Caseras",
    13: "Parrilla",
    14: "Pizzas",
    15: "Faina",
    16: "Frankfurters",
    17: "Huevos",
    18: "Papas Fritas",
    19: "Bebidas sin Alcohol",
    20: "Cervezas",
    21: "Cervezas sin Alcohol",
    22: "Whiskys",
    23: "Postres",
    24: "Helados",
    25: "Cafetería"
};

const FoodMenuV4 = () => {
    return (
        <>
            <div className="food-menus-area default-padding">
                <div className="container">
                    {FoodCartV4Data.map((food, index) => {
                        const categoryName = categoryNames[food.id] || `Categoría ${food.id}`;
                        const isEven = index % 2 === 0;
                        
                        return (
                            <div className="food-menus-item" key={food.id}>
                                <div className="row">
                                    <div 
                                        className={`col-lg-5 thumb food-menu-v4-thumb ${isEven ? '' : 'order-lg-last'}`}
                                        style={{ 
                                            backgroundImage: `url(/assets/img/productos/${food.tabThumb})`
                                        }}
                                    >
                                        <div className="discount-badge">
                                            <strong>Menú</strong> {categoryName}
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="info">
                                            <ul className="meal-type">
                                                <li>Precio</li>
                                            </ul>
                                            <ul className="meal-items">
                                                {food.tabContent.map(list =>
                                                    <React.Fragment key={list.id}>
                                                        {list.tabData.map(data =>
                                                            <SingleFoodMenuTabV3 data={data} key={data.id} />
                                                        )}
                                                    </React.Fragment>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default FoodMenuV4;
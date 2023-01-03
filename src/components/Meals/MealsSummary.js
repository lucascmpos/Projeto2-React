import React from "react";

import classes from './MealsSummary.module.css'

const MealsSummary = () => {
    return ( 
    <section className={classes.summary}>
        <h2>Comida boa, entregue pra você!</h2>
        <p>
        Escolha sua refeição favorita em nossa ampla seleção de refeições disponíveis
        e desfrute de um delicioso almoço ou jantar em casa.
      </p>
      <p>
        Todas as nossas refeições são preparadas com ingredientes de alta qualidade, frescos e
        claro, por chefs experientes!
      </p>
    </section>
    );   
};


export default MealsSummary;
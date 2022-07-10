/// <reference types="cypress"/>
import homePage from "./page-objects/home-page"

describe('My first access', ()=>{

    it('Access the home page',() =>{

        homePage.open();
       
        cy.get('h1').should("have.class", "logo image")
    })

})